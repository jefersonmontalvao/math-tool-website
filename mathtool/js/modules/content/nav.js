import { divisionRender } from "./renders.js";

let navMetaData = [
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
}

export { initNavHandler };
