import { divisionTemplate } from "./templates.js";

var pageView = document.querySelector(".page-view");

function homeRender() {
    pageView.innerHTML = "<h1>Hello World!</h1>"
}

function divisionRender() {
    pageView.innerHTML = divisionTemplate;
}

export { homeRender, divisionRender };
