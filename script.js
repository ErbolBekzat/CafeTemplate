const MenuItemType = {
    BREAKFAST: 'Breakfast',
    MAIN_COURSE: 'Main Course',
    DESSERT: 'Dessert',
    DRINK: 'Drink',
    // Add more types as needed
};

class MenuItem {
    constructor(title, price, imagePath, type, description = "", ingredients = [], weight = "") {
        this.title = title;
        this.price = price;
        this.imagePath = imagePath;
        this.type = type;
        this.description = description;
        this.ingredients = ingredients;
        this.weight = weight;
    }

    // Method to generate HTML for the menu item
    toHTML() {
        let itemHTML = `<div class="menu-item">
                            <img class="food-image" src="${this.imagePath}" alt="Image">
                            <h3>${this.title}</h3>
                            <p>${this.ingredients.join(", ")}</p>
                            <br>
                            <hr>
                            <p>Цена: ${this.price} сом</p>
                            <p>Вес: ${this.weight} г</p>
                        </div>`;
        return itemHTML;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('.home-link');
    const menuLink = document.querySelector('.menu-link');
    const aboutUsLink = document.querySelector('.aboutus-link');

    const menuBtn = document.querySelector('.menu-btn');
    const homeSection = document.getElementById('home');
    const menuSection = document.getElementById('menu');
    const aboutUsSection = document.getElementById('aboutus');

    const menuNavlist = document.querySelector('.menu-navlist');

    function handleHomeNavigation(event) {
        if (homeLink.classList.contains('disabled')) {
            event.preventDefault();
            
            // Show the home section
            homeSection.classList.remove('hide');
            homeSection.classList.add('show');

            // Hide the menu and about us section
            menuSection.classList.remove('show');
            menuSection.classList.add('hide');
            aboutUsSection.classList.remove('show');
            aboutUsSection.classList.add('hide');
            
            // Adjust link classes for navigation
            homeLink.classList.remove('disabled');
            homeLink.classList.add('enabled');
            
            menuLink.classList.remove('enabled');
            menuLink.classList.add('disabled');
            aboutUsLink.classList.remove('enabled');
            aboutUsLink.classList.add('disabled');
        }
    }

    function handleMenuNavigation(event) {
        if (menuLink.classList.contains('disabled')) {
            event.preventDefault();

            // Show the menu section
            menuSection.classList.remove('hide');
            menuSection.classList.add('show');

            // Hide the home and about us section
            homeSection.classList.remove('show');
            homeSection.classList.add('hide');
            aboutUsSection.classList.remove('show');
            aboutUsSection.classList.add('hide');

            // Adjust link classes for navigation
            homeLink.classList.remove('enabled');
            homeLink.classList.add('disabled');
            aboutUsLink.classList.remove('enabled');
            aboutUsLink.classList.add('disabled');

            menuLink.classList.remove('disabled');
            menuLink.classList.add('enabled');
            
        }
    }

    function handleAboutUsNavigation(event) {
        if (aboutUsLink.classList.contains('disabled')) {
            event.preventDefault();

            // Show the menu section
            aboutUsSection.classList.remove('hide');
            aboutUsSection.classList.add('show');

            // Hide the home and menu section
            homeSection.classList.remove('show');
            homeSection.classList.add('hide');
            menuSection.classList.remove('show');
            menuSection.classList.add('hide');

            // Adjust link classes for navigation
            homeLink.classList.remove('enabled');
            homeLink.classList.add('disabled');
            menuLink.classList.remove('enabled');
            menuLink.classList.add('disabled');
            aboutUsLink.classList.remove('disabled');
            aboutUsLink.classList.add('enabled');
        }
    }

    homeLink.addEventListener('click', handleHomeNavigation);
    // Add event listener to the menu link
    menuLink.addEventListener('click', handleMenuNavigation);

    aboutUsLink.addEventListener('click', handleAboutUsNavigation);
    // Add event listener to the menu button
    menuBtn.addEventListener('click', handleMenuNavigation);

    
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownOptions = document.querySelector('.dropdown-options');
    const menuTabs = document.querySelectorAll('.menu-tab');

    dropdownToggle.addEventListener('click', function() {
        dropdownOptions.classList.toggle('show-options');
    });

    dropdownOptions.addEventListener('click', function(event) {
        const selectedOption = event.target.closest('.option');
        if (selectedOption) {
            const selectedValue = selectedOption.dataset.value;
            const selectedText = selectedOption.textContent;

            // Update button text with selected option
            dropdownToggle.textContent = selectedText;
            // Hide all menu tabs
            menuTabs.forEach(function(tab) {
                tab.id = 'menu-tab-hide';
            });

            // Show the targeted menu tab
            const targetTab = document.querySelector(`.menu-tab.${selectedValue}`);
            if (targetTab) {
                targetTab.id = '';
            }

            // Hide dropdown options
            dropdownOptions.classList.remove('show-options');
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var copyIcon = document.getElementById('copyIcon');
    var cafeAddress = document.getElementById('cafe-address');
    copyIcon.addEventListener('click', function() {
        navigator.clipboard.writeText(cafeAddress.textContent).then(() => {
            var alert = document.getElementById('autoDismissAlert');
            alert.style.display = 'block';

            setTimeout(function() {
                alert.style.display = 'none';
            }, 1000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
    
});


// Array of menu items
const menuItems = [
    new MenuItem("Самса", 50, 'images/food/samsa.jpg', MenuItemType.MAIN_COURSE, "Традиционное среднеазиатское пирожное, наполненное приправленной бараниной, луком и специями, запеченное до золотистой корочки", ["баранина", "лук", "специи", "тесто"], 200),
    new MenuItem("Плов", 300, 'images/food/ash.jpg', MenuItemType.MAIN_COURSE, "Традиционное среднеазиатское блюдо из риса, мяса (чаще всего баранины), моркови и специй, приготовленное в большом казане", ["рис", "баранина", "морковь", "специи"], 400),
    new MenuItem("Манты", 250, 'images/food/manti.jpeg', MenuItemType.MAIN_COURSE, "Традиционное центральноазиатское блюдо, представляющее собой кусочки теста, начиненные мясом (чаще всего бараниной) и луком, запеченные или вареные", ["тесто", "мясо (чаще всего баранина)", "лук", "специи"], 300),
    new MenuItem("Бешбармак", 450, 'images/food/beshbarmak.jpg', MenuItemType.MAIN_COURSE, "Традиционное кыргызское блюдо, состоящее из тонкого теста, обычно приготовленных из лошадиного", ["тесто", "конина", "лук"], 400),
    new MenuItem("Шашлык", 80, 'images/food/kebab.jpg', MenuItemType.MAIN_COURSE, "Популярное блюдо во многих культурах, состоящее из кусков маринованного мяса, обычно на шпажках, жаренных на гриле или на открытом огне", ["говядина", "маринад", "лук", "приправы"], 350),
    new MenuItem("Лагман", 300, 'images/food/lagman.jpeg', MenuItemType.MAIN_COURSE, "Традиционное блюдо узбекской и казахской кухни, представляющее собой суп с мясом (обычно бараниной), различными овощами и лапшой", ["мясо (чаще всего баранина)", "лапша", "лук", "морковь", "помидоры", "перец", "специи"], 400),
    new MenuItem("Омлет", 120, 'images/food/omlet.jpeg', MenuItemType.BREAKFAST, "Классический завтрак из яичного блюда, жареного на сковороде", ["яйца", "молоко", "зелень"], 200),
    new MenuItem("Цезарь с курицей", 200, 'images/food/salat-cezar-s-kuricey.jpg', MenuItemType.SALAD, "Классический салат с курицей, сухариками, пармезаном, анчоусами и соусом Цезарь", ["куриное филе", "латук", "помидоры", "сухарики", "пармезан", "анчоусы", "соус Цезарь"], 300),
    new MenuItem("Тирамису", 180, 'images/food/tiramisu.jpg', MenuItemType.DESSERT, "Итальянский десерт из слоев крема на основе маскарпоне, кофе, яичных желтков и сахара, между которыми располагаются савоярди", ["маскарпоне", "кофе", "сахар", "яичные желтки", "савоярди"], 250),
    new MenuItem("Фреш из апельсина", 80, 'images/food/orange-juice.jpg', MenuItemType.DRINK, "Свежевыжатый апельсиновый сок без добавления сахара и консервантов", ["апельсины"], 300),
    // Add more menu items as needed
];


// Function to display menu items in columns
function displayMenuItems() {
    const bgCoverDiv = document.querySelector('.menu .bg-cover');
    
    menuItems.forEach((menuItem) => {
        const menuItemHTML = menuItem.toHTML();
        
        // Determine the tab based on the type of menu item
        let tab;
        switch (menuItem.type) {
            case MenuItemType.BREAKFAST:
                tab = document.querySelector('.menu .bg-cover .breakfast');
                break;
            case MenuItemType.SALAD:
                tab = document.querySelector('.menu .bg-cover .salad');
                break;
            case MenuItemType.MAIN_COURSE:
                tab = document.querySelector('.menu .bg-cover .main-course');
                break;
            case MenuItemType.DESSERT:
                tab = document.querySelector('.menu .bg-cover .dessert');
                break;
            case MenuItemType.DRINK:
                tab = document.querySelector('.menu .bg-cover .drink');
                break;
            default:
                // Handle default case if needed
                break;
        }

        // Add the menu item HTML to the corresponding tab
        if (tab) {
            tab.innerHTML += menuItemHTML;
        }
    });
}


// Call the function to display menu items
displayMenuItems();
