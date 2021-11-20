import { homeRender, divisionRender } from "./renders.js"

let navData = [
    {
        label: "Início",
        render: homeRender,
    },
    {
        label: "Divisão",
        render: divisionRender
    }
];

function navHandler() {
    const navElement = document.querySelector(".site-nav");

    // Set to load home page.

    for (let data of navData) {
        const navLabelElement = document.createElement("a");
        navLabelElement.setAttribute("class", "site-nav__anchor");
        navLabelElement.innerHTML = data.label;
        navLabelElement.addEventListener("click", data.render);
        
        navElement.appendChild(navLabelElement);
    }
}

export { navHandler };