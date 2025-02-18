<?php
header('Content-Type: application/json');
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "era";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error]);
        exit;
    }

    // Create table if it doesn't exist
    $tableCreationQuery = "CREATE TABLE IF NOT EXISTS subscribers (
        id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";

    if ($conn->query($tableCreationQuery) === FALSE) {
        echo json_encode(['status' => 'error', 'message' => 'Error creating table: ' . $conn->error]);
        exit;
    }
    if (isset($_POST['email'])) {
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Check if email already exists
            $stmt = $conn->prepare("SELECT id FROM subscribers WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->store_result();
    
            if ($stmt->num_rows > 0) {
                echo json_encode(['status' => 'error', 'message' => 'Email already subscribed']);
            } else {
                // Insert new email into the database
                $stmt = $conn->prepare("INSERT INTO subscribers (email) VALUES (?)");
                $stmt->bind_param("s", $email);
                $stmt->execute();
                
                if ($stmt->affected_rows > 0) {
                    echo json_encode(['status' => 'success']);
                } else {
                    echo json_encode(['status' => 'error', 'message' => 'Failed to subscribe']);
                }
            }
            $stmt->close();
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Email is required']);
    }
    
    // Close the connection
    $conn->close();
    ?>





