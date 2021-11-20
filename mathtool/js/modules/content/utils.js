import { homeRender } from './renders.js'

function initialRender() {
    let logoElement = document.querySelector(".site-header__title");
    logoElement.addEventListener("click", homeRender);
    homeRender();
}

export { initialRender };