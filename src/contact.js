const infoBoxes = [];

function createInfoBoxEasy(header) {
    createInfoBox(header, "(555)-555-5555<br>nobody@notanemail.com");
}

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

// The whole contact page. This should return the parent div with all its children
const contact = () => {
    // Create the parent div
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("contact", "page");

    // Create the various info boxes
    const ceoContact = createInfoBoxEasy("CEO (Nathan)");
    const chefContact = createInfoBoxEasy("Chef (Nathan)");
    const waiterContact = createInfoBoxEasy("Waiter (Nathan)");

    infoBoxes.forEach(box => {
        parentDiv.appendChild(box);
    });

    return parentDiv.outerHTML;
};

export default contact;