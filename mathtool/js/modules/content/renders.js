import { divisionTemplate } from "./templates.js";
import { DivisionViewEvents } from "./events.js";

var pageView = document.querySelector(".site-main");

function homeRender() {
    pageView.innerHTML = "<h1>Hello World!</h1>";
}

function divisionRender() {
    pageView.innerHTML = divisionTemplate;
    new DivisionViewEvents();
}

export { homeRender, divisionRender };
