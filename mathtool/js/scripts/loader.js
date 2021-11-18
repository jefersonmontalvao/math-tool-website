let elements = [
    {
        src: "\\mathtool\\js\\modules\\math\\main.js",
        type: "module",
    },
];

// Load all scripts that is defined on "elements" variable;
function loadScripts(elements) {
    for (item of elements) {
        const elementHTML = document.createElement("script");
        elementHTML.setAttribute("src", item.src);
        elementHTML.setAttribute("type", item.type);
        document.body.appendChild(elementHTML);
    }
}

window.addEventListener("load", loadScripts(elements));
