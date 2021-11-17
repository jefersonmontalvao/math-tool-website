let elements = [
  {
    path: "/mathtool/js/modules/math/main.js",
    type: "module/javascript",
  },
];

// Load all scripts that is defined on "elements" variable;
function loadScripts(elements) {
  for (item of elements) {
    const elementHTML = document.createElement("script");
    elementHTML.setAttribute("src", item.path);
    elementHTML.setAttribute("type", item.type);
    document.body.appendChild(elementHTML);
  }
}

window.addEventListener("load", loadScripts(elements));
