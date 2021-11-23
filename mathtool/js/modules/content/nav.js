import { homeRender, divisionRender } from "./renders.js";

let navMetaData = [
    {
        label: "Home",
        render: homeRender,
    },
    {
        label: "Division",
        render: divisionRender,
    },
];

function initNavHandler() {
    const navLabels = document.querySelectorAll(".site-nav__label");

    for (let data of navMetaData) {
        navLabels.forEach((value) => {
            if (value.innerText === data.label) {
                value.parentNode.addEventListener("click", data.render);
            }
        });
    }

    // Initialize the first view.
    // Add event on site logo.
    let logoElement = document.querySelector(".site-header__title");
    logoElement.addEventListener("click", homeRender);
    homeRender();
}

export { initNavHandler };
