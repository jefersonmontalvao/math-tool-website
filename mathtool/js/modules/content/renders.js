import { divisionTemplate } from "./templates.js";
import { DivisionViewEvents } from "./events.js";

var pageView = document.querySelector(".site-main");

function homeRender() {
    pageView.innerHTML = homeTemplate;
}

function divisionRender() {
    pageView.innerHTML = divisionTemplate;
    new DivisionViewEvents();
}

export { homeRender, divisionRender };
