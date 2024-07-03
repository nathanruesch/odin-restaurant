// The whole homepage. This should return the parent div with all its children
const homepage = () => {
    // Create the parent div
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("homepage", "page");

    // Create the heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to the Space Bar!";
    heading.classList.add("page-content", "page-header")
    parentDiv.appendChild(heading);

    // Create the basic info blob
    const infoParent = document.createElement("div");
    const info = document.createElement("p");
    info.textContent = "This picturesque restaurant is situated in low earth orbit to provide the best views possible!\n" +
        "While you dine, you can experience a view like none other in the galaxy!";
    info.classList.add("pretty-border-ridge", "page-content", "page-info");
    infoParent.appendChild(info);
    parentDiv.appendChild(infoParent);

    const info2Parent = document.createElement("div");
    const info2 = document.createElement("p");
    info2.textContent = "Enjoy delicious space themed food such as Space Buns, pay extra for a dark side table!\n" +
                        "(Disclaimer: Sunside tables may cause health issues. Book at your own risk)";
    info2.classList.add("pretty-border-ridge", "page-content", "page-info");
    info2Parent.appendChild(info2);
    parentDiv.appendChild(info2Parent);

    const info3Parent = document.createElement("div");
    const info3 = document.createElement("p");
    info3.textContent = "If you're feeling adventureous, feel free to try out our space shuttle! It'll bring you to the moon and back";
    info3.classList.add("pretty-border-ridge", "page-content", "page-info");
    info3Parent.appendChild(info3);
    parentDiv.appendChild(info3Parent);

    return parentDiv.outerHTML;
};

export default homepage;