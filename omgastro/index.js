import headerTemplate from "../js/templates/headerTemplate.js";
import footerTemplate from "../js/templates/footerTemplate.js";
import dialogBestilTemplate from "../js/templates/dialogBestilTemplate.js";
import dialogBestil from "../js/dialog-bestil.js";
import "../js/scrollTop.js";
import { fetchData, fetchDataById } from "../js/fetchData.js";
import setImg from "../js/setImg.js";
import Form from "../js/Form.js";

const links = {
    home: "../",
    omgastro: "../omgastro",
    nyheder: "../nyheder",
    menu: "../menu",
    galleri: "../galleri",
    team: "../team",
    kontakt: "../kontakt",
};
document.body.insertAdjacentHTML("afterbegin", headerTemplate(links));
document.body.insertAdjacentHTML("beforeend", footerTemplate());
document.body.insertAdjacentHTML("beforeend", dialogBestilTemplate());

dialogBestil();

Form({
    selector: ".dialog-bestil__form",
    urlPlace: "contacts",
});

const about = document.querySelector(".about");
const headerImg = document.querySelector(".top__img");
const imgOmOne = about.querySelector(".about__img-1");
const imgOmTwo = about.querySelector(".about__img-2");
const descriptionAboutWrapper = about.querySelector(
    ".about__description-wraper"
);
const aboutQuote = about.querySelector(".about__quote");
const aboutEjer = about.querySelector(".about__ejer");

let descriptionData;

const imagesData = await fetchData("images");
const filteredData = imagesData.filter((data) => data.id <= 3);
descriptionData = await fetchDataById(1, "texts");

setImg({ img: headerImg, data: filteredData[0] });
setImg({ img: imgOmOne, data: filteredData[1] });
setImg({ img: imgOmTwo, data: filteredData[2] });

const p = document.createElement("p");
p.classList.add("about__description");

makeParagraph(0, 3);
makeParagraph(3, 6);
makeParagraph(6, 10);

const quote = `${descriptionData.description
    .split(".")
    .slice(10, 11)
    .toString()}.`;
aboutQuote.textContent = quote;

const ejer = descriptionData.description.split(".").slice(11).toString();
aboutEjer.textContent = ejer;

function makeParagraph(from, to) {
    const paragraph = `${descriptionData.description
        .split(".")
        .slice(from, to)
        .toString()}.`;
    const paragraphNode = p.cloneNode(true);
    paragraphNode.textContent = paragraph;
    descriptionAboutWrapper.insertAdjacentElement("beforeend", paragraphNode);
}
