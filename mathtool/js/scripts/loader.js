let elements = [
    {
        path: "/mathtool/js/modules/math/main.js",
        type: "module"
    },
];

// Load all scripts that is defined on "elements" variable;
function loadScripts(elements) {
    for (item of elements) {
        const elementHTML = document.createElement("script");
        elementHTML.src = item.path;
        elementHTML.type = item.type;
        document.body.appendChild(elementHTML);
    }
}

window.addEventListener("load", loadScripts(elements));