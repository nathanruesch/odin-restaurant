import homepage from './homepage';
import menu from './menu';
import about from './about';
import contact from './contact';

import './style.css';

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");
const contactButton = document.getElementById("contact-button");

const content = document.getElementById("content");

function togglePage(evt) {
    let expectedContent = null;
    let expectedButton = null;

    removeActiveButtons();

    switch (evt.currentTarget.pagename) {
        case "home":
            expectedContent = homepage();
            expectedButton = homeButton;
            break;
        case "menu":
            expectedContent = menu();
            expectedButton = menuButton;
            break;
        case "about":
            expectedContent = about();
            expectedButton = aboutButton;
            break;
        case "contact":
            expectedContent = contact();
            expectedButton = contactButton;
    }

    content.innerHTML = expectedContent;
    expectedButton.classList.add("active-button");
}

function setupNavButtons() {
    homeButton.addEventListener("click", togglePage);
    menuButton.addEventListener("click", togglePage);
    aboutButton.addEventListener("click", togglePage);
    contactButton.addEventListener("click", togglePage);

    homeButton.pagename = "home";
    menuButton.pagename = "menu";
    aboutButton.pagename = "about";
    contactButton.pagename = "contact";
}

function removeActiveButtons() {
    homeButton.classList.remove("active-button");
    menuButton.classList.remove("active-button");
    aboutButton.classList.remove("active-button");
    contactButton.classList.remove("active-button");
}

setupNavButtons();

// Artificially click the home button to set that as the default
homeButton.click();