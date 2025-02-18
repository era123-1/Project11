const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); 
    });
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); 
    });
}
//Newsletter
document.getElementById('subscribe-btn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('response-message');
    
    if (email === '') {
        responseMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // Send data to PHP script using Fetch API
    fetch('subscribe.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${email}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            responseMessage.textContent = 'Thank you for subscribing!';
        } else {
            responseMessage.textContent = data.message || 'Something went wrong!';
        }
    })
    .catch(error => {
        responseMessage.textContent = 'Error: ' + error.message;
    });
});

//Whatsapp
document.addEventListener('DOMContentLoaded', function() {
    var whatsappButton = document.getElementById('whatsapp-button');

    function hideWhatsappButton() {
        whatsappButton.style.display = 'none';
    }
    document.addEventListener('click', function(event) {
        if (!whatsappButton.contains(event.target)) {
            hideWhatsappButton();
        }
    });

});
// choose language

var translations = {
        "en": {
            "home": "Home",
            "shop": "Shop",
            "blog": "Blog",
            "about": "About",
            "contact": "Contact",
            "boom_offers": "Boom of Offers",
            "beauty_nature": "Because Beauty Comes",
            "from_nature": "From Nature",
            "edis_bio_care": "At Edis Bio Care",
            "shop_now": "Shop Now",
            "free_shipping": "Free Shipping",
            "collection": "Collection",
            "our_products": "Our Products",
            "up_to_50_off": "Up to 50% off",
            "explore_more": "Explore more",
            "freeshipping": "Free Shipping",
            "onlineorder": "Online Order",
            "savemoney": "Save Money",
            "promotions": "Promotions",
            "support": "Support",
            "new-products": "New Products",
            "collection": "Collection",
            "buy-one-get-one-free": "buy 1 get 1 free",
            "sale-at-edis-bio-care": "Sale at Edis Bio Care",
            "learn-more": "Learn More",
            "collection": "Collection",
            "sale": "Sale",
            "products-50-off": "Products-50% off",
            "products-collection-50-off": "Products collection -50% off",
            "signup-newsletter": "Sign Up for Newsletter",
            "email-updates": "Get email updates on our latest shop and",
            "special-offers": "Special Offers",
            "signup": "Sign Up",
            "contact": "Contact",
            "address": "Address",
            "phone": "Phone",
            "hours": "Hours",
            "follow_us": "Follow us",
            "about": "About",
            "about_us": "About us",
            "delivery_information": "Delivery Information",
            "privacy_policy": "Privacy Policy",
            "term_condition": "Term & Condition",
            "contact_us": "Contact Us",
            "my_account": "My account",
            "sign_in": "Sign In",
            "view_cart": "View Cart",
            "my_wishlist": "My WishList",
            "track_order": "Track my Order",
            "help": "Help",
            "install_app": "Install App",
            "from_app_store": "From App Store or Google Play",
            "secured_payment_gateways": "Secured Payment Gateways",
            "copyright": "@2023, Edis Bio Care - Era Hidaj",
            "welcome": "Welcome",
            "english": "English",
            "albania": "Albania",
            "super value deals":"Super value deals",
            "save more with coupons & up to 80% off":"Save more with coupons & up to 80% off"
        },
        "al": {
            "home": "Faqja Kryesore",
            "shop": "Blej",
            "blog": "Blog",
            "about": "Rreth Nesh",
            "contact": "Kontakt",
            "boom_offers": "Ofertat e Shkëlqyera",
            "beauty_nature": "Sepse Bukuria Vjen",
            "from_nature": "Nga Natyra",
            "edis_bio_care": "Tek Edis Bio Care",
            "shop_now": "Blej Tani",
            "free_shipping": "Transport Falas",
            "collection": "Koleksion",
            "our_products": "Produktet Tona",
            "up_to_50_off": "Deri në 50% zbritje",
            "explore_more": "Eksploro më shumë",
            "freeshipping": "Transport Falas",
            "onlineorder": "Blej Online",
            "savemoney": "Kurse Parate",
            "promotions": "Promocion",
            "support": "Suport",
            "new-products": "Produkte të Reja",
            "collection": "Koleksion",
            "buy-one-get-one-free": "blej një merr një falas",
            "sale-at-edis-bio-care": "Shitje në Edis Bio Care",
            "learn-more": "Mëso më shumë",
            "collection": "Koleksion",
            "sale": "Ulje",
            "products-50-off": "Produkte-50% zbritje",
            "products-collection-50-off": "Koleksion produktesh -50% ",
            "signup-newsletter": "Regjistrohu për Buletinin",
            "email-updates": "Merrni njoftime me email në dyqanin tonë të fundit dhe",
            "special-offers": "Ofertat Speciale",
            "signup": "Regjistrohu",
            "contact": "Kontakt",
            "address": "Adresa",
            "phone": "Telefoni",
            "hours": "Orët",
            "follow_us": "Na ndiqni",
            "about": "Rreth",
            "about_us": "Rreth nesh",
            "delivery_information": "Informacioni i Dorëzimit",
            "privacy_policy": "Politika e Privatësisë",
            "term_condition": "Kushtet & Kushtet e Përdorimit",
            "contact_us": "Na kontaktoni",
            "my_account": "Llogaria ime",
            "sign_in": "Hyrje",
            "view_cart": "Shiko Shportën",
            "my_wishlist": "Dorëzimet e mia",
            "track_order": "Gjej urdhrin tim",
            "help": "Ndihmë",
            "install_app": "Instaloni Aplikacionin",
            "from_app_store": "Nga App Store ose Google Play",
            "secured_payment_gateways": "Portat e Sigurta të Pagesave",
            "copyright": "@2023, Edis Bio Care - Era Hidaj",
            "welcome": "Mirë se vini",
            "english": "Anglisht",
            "albania": "Shqipëri",
            "super value deals":"Dita e Uljeve",
            "save more with coupons & up to 80% off":"Kurse me shume deri ne 80%"
        }
    };

    function changeLanguage(lang) {
            var elements = document.querySelectorAll('[data-lang]');
            elements.forEach(function(element) {
                var key = element.dataset.lang;
                element.textContent = translations[lang][key];
            });
            document.getElementById('language-selector').style.display = 'none';
        
        }

        window.onload = function() {
            document.getElementById('language-selector').style.display = 'block';
            setTimeout(function() {
                document.getElementById('language-selector').style.display = 'none';
            }, 5000);
        }
        //search
        function searchProducts() {
            var searchInput = document.getElementById('search-input').value.trim().toLowerCase();
            var products = document.querySelectorAll('.pro');
            if (searchInput === "") {
                alert("Please enter a search term.");
                return;
            }
            var matchingProducts = [];
        
            products.forEach(function(product) {
                var productName = product.querySelector('.des span').textContent.toLowerCase();
                
                if (productName.includes(searchInput)) {
                    matchingProducts.push(product);
                } else {
                    product.style.display = 'none';
                }
            });
            matchingProducts.forEach(function(product) {
                product.style.display = 'block';
            });
            if (!matchingProducts.length) {
               alert('No Products Found');
            }
        }