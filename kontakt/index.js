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
Form({
    selector: ".kontakt__form",
    urlPlace: "contacts",
});

const kontakt = document.querySelector(".kontakt");
const headerImg = document.querySelector(".top__img");
const kontaktAdress = kontakt.querySelector(".kontakt__adress");
const kontaktTelefon = kontakt.querySelector(".kontakt__telefon");
const kontaktTid = kontakt.querySelector(".kontakt__tid")

const dataTexts = await fetchData("texts");
const infoTexts = dataTexts.filter((data) => data.id > 9 && data.id);

kontaktAdress.insertAdjacentText("beforeend", infoTexts[0].description);
kontaktTelefon.insertAdjacentText("beforeend", infoTexts[1].description);
kontaktTelefon.setAttribute("href", `tel:${infoTexts[1].description}`);
kontaktTid.insertAdjacentText("afterbegin", infoTexts[2].description)

const imagesData = await fetchDataById(2, "images");

setImg({ img: headerImg, data: imagesData });
