import { sectionData } from "../data/sectionData.js";
import template from "./templates/mainSite-section-template.js";

const main = document.querySelector(".main");

sectionData.forEach((data) => {
    main.insertAdjacentHTML("beforeend", template(data));
});
