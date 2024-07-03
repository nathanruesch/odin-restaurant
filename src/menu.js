const appetizers = [
    {
        name: "Asteroid Nachos",
        desc: "Tortilla chips topped with black beans, melted cheddar, jalepenos, guacamole, and cosmic salsa",
        price: "$8.95"
    },
    {
        name: "Galactic Gyoza",
        desc: "Pan-fried dumplings with a variety of fillings, served with a nebula dipping sauce",
        price: "$7.50"
    },
    {
        name: "Meteorite Meatballs",
        desc: "Meatballs made from a mix of beef, pork, and spices, served in a spicy marinara sauce with a side of space dust",
        price: "$9.25"
    }
];

const mainCourses = [
    {
        name: "Cosmic Burger",
        desc: "A burger with a black sesame seed bun, layered with a beef patty, lettuce, tomato, cheese, and a galaxy sauce",
        price: "$13.95"
    },
    {
        name: "Rocket Ribs",
        desc: "BBQ ribs with a smoky sauce, served with potato wedges and stardust slaw",
        price: "$18.50"
    },
    {
        name: "Space Station Stir-fry",
        desc: "A stir-fry with chicken, mixed vegetables, and a teriyaki asteroid sauce. Served over rice",
        price: "$14.75"
    },
    {
        name: "Intergalactic Pasta",
        desc: "Pasta with a creamy nebula sauce topped with your choice of grilled chicken or shrimp",
        price: "$16.00"
    }
];

const desserts = [
    {
        name: "Milky Way Milkshake",
        desc: "A thick and creamy milkshake made with vanilla ice cream, chocolate syrup, and whipped cream. Topped with edible glitter and a candy milky way bar",
        price: "$5.95"
    },
    {
        name: "Moon Rock Cookies",
        desc: "Cookies with a rocky texture. Made with oats, chocolate chips, and nuts",
        price: "$4.50"
    },
    {
        name: "Stardust Sundae",
        desc: "A sundae with scoops of ice cream, topped with space dust, a drizzle of chocolate, and a cherry on top",
        price: "$6.25"
    },
    {
        name: "Galaxy Cake",
        desc: "A cake with layers of colored sponge to resemble a galaxy, covered in cosmic frosting",
        price: "$7.00"
    },
];

const drinks = [
    {
        name: "Nebula Nectar",
        desc: "A colorful mocktail with layers of different fruit juices to create a nebula effect",
        price: "$4.50"
    },
    {
        name: "Martian Mojito",
        desc: "A refreshing mojito with mint, lime, and a splash of green food coloring to give it a martian twist",
        price: "$5.00"
    },
    {
        name: "Planet Punch",
        desc: "A punch made with a mix of tropical juices, soda, and a floating planet (a scoop of sorbet)",
        price: "$4.75"
    },
    {
        name: "Cosmic Cocoa",
        desc: "Hot cocoa with whipped cream, a sprinkle of edible glitter, and a marshmallow shaped like a star",
        price: "$3.95"
    },
];

const sides = [
    {
        name: "Saturn's Rings",
        desc: "Onion rings served with a spicy dipping sauce",
        price: "$3.95"
    },
    {
        name: "Comet Fries",
        desc: "Curly fries dusted with space seasoning",
        price: "$3.50"
    },
    {
        name: "Astro Salad",
        desc: "A salad with mixed greens, cherry tomatoes, star-shaped cheese, and a rocket viaigrette",
        price: "$5.75"
    },
    {
        name: "Stellar Soup",
        desc: "A soup made with colorful vegetables and meteorite croutons",
        price: "$4.95"
    },
];

const sections = [];

function createMenuItem(item) {
    const itemName = item.name;
    const itemDesc = item.desc;
    const itemPrice = item.price;

    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemNameHeader = document.createElement("h2");
    itemNameHeader.classList.add("menu-item-header")
    itemNameHeader.textContent = itemName;
    menuItem.appendChild(itemNameHeader);

    const itemDescParagraph = document.createElement("p");
    itemDescParagraph.classList.add("menu-item-paragraph");
    itemDescParagraph.textContent = itemDesc;
    menuItem.appendChild(itemDescParagraph);

    const itemPriceParagraph = document.createElement("p");
    itemPriceParagraph.classList.add("menu-item-paragraph");
    itemPriceParagraph.textContent = itemPrice;
    menuItem.appendChild(itemPriceParagraph);

    return menuItem;
}

function createMenuParent(name, arr) {
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("menu-section")

    const sectionTitle = document.createElement("h1");
    sectionTitle.classList.add("menu-section-header");
    sectionTitle.textContent = name + ":";
    parentDiv.appendChild(sectionTitle);

    arr.forEach(item => {
        addItem(createMenuItem(item));
    });

    function addItem(item) {
        parentDiv.appendChild(item);
    }

    sections.push(parentDiv);

    return parentDiv;
}

const appetizersElement = createMenuParent("Appetizers", appetizers);
const mainCoursesElement = createMenuParent("Main Courses", mainCourses);
const dessertsElement = createMenuParent("Desserts", desserts);
const drinksElement = createMenuParent("Drinks", drinks);
const sidesElement = createMenuParent("Sides and Extras", sides);

// The whole menu. This should return the parent div with all its children
const menu = () => {
    // Create the parent div
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("menu", "page", "menu-parent");

    sections.forEach(section => {
        console.log(section);
        parentDiv.appendChild(section);
    });

    return parentDiv.outerHTML;
};

export default menu;