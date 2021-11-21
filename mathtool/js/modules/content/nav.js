import { homeRender, divisionRender } from "./renders.js";

let navLoadData = [
    {
        label: "Início",
        render: homeRender,
    },
    {
        label: "Divisão",
        render: divisionRender,
    },
];

function initNavHandler() {
    const navElement = document.querySelector(".site-nav");

    // Set to load home page.
    for (let data of navLoadData) {
        const navLabelElement = document.createElement("a");
        navLabelElement.setAttribute("class", "site-nav__anchor");
        navLabelElement.innerHTML = data.label;
        navLabelElement.addEventListener("click", data.render);

        navElement.appendChild(navLabelElement);
    }

    // Initialize the first view.
    // Add event on site logo.
    let logoElement = document.querySelector(".site-header__title");
    logoElement.addEventListener("click", homeRender);

    // Render the Home page.
    homeRender();
}

export { initNavHandler };
