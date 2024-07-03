const infoBoxes = [];

function createInfoBox(header, text) {
    const infoParent = document.createElement("div");
    const infoHeader = document.createElement("h2");
    const info = document.createElement("p");

    infoHeader.textContent = header;
    info.innerHTML = text;

    infoParent.classList.add("page-content", "pretty-border-ridge");
    infoHeader.classList.add("page-info-header");
    info.classList.add("page-info");

    infoParent.appendChild(infoHeader);
    infoParent.appendChild(info);

    infoBoxes.push(infoParent);

    return infoParent;
}

// The whole about page. This should return the parent div with all its children
const about = () => {
    // Create the parent div
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("about", "page");

    // Create the various info boxes
    const generalInfo = createInfoBox("About Us", "Welcome to Space Bar, where the culinary universe awaits you! Nestled in the heart of the cosmos, our restaurant offers a unique dining experience that transcends the ordinary. Inspired by the wonders of the galaxy, we craft dishes that are as delightful to the taste buds as they are to the imagination.<br><br>At Space Bar, we believe in blending the magic of space exploration with the joy of good food. Our menu is a constellation of flavors, from the savory Asteroid Nachos to the sweet and whimsical Galaxy Cake. Each dish is thoughtfully designed to take your senses on a journey through the stars, with creative twists that make every bite an adventure.<br><br>Our mission is to provide not just a meal, but an experience that sparks wonder and excitement. Whether you're here to explore new culinary frontiers or just to enjoy a fun meal with friends and family, we promise an out-of-this-world experience that’s sure to leave you starry-eyed.<br><br>Join us at Space Bar, and let your taste buds embark on a journey beyond the stratosphere. We can't wait to serve you a slice of the cosmos!")

    infoBoxes.forEach(box => {
        parentDiv.appendChild(box);
    });

    return parentDiv.outerHTML;
};

export default about;