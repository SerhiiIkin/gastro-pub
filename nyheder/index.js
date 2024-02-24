import headerTemplate from "../js/templates/headerTemplate.js";
import footerTemplate from "../js/templates/footerTemplate.js";
import dialogBestilTemplate from "../js/templates/dialogBestilTemplate.js";
import dialogBestil from "../js/dialog-bestil.js";
import "../js/scrollTop.js";
import { fetchData } from "../js/fetchData.js";
import setImg from "../js/setImg.js";
import messageTemplate from "../js/templates/message.js";
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

const nyhederMenu = document.querySelector(".nyheder-menu");
const mening = document.querySelector(".mening");
const headerImg = document.querySelector(".top__img");
const nyhederMenuImg = nyhederMenu.querySelector(".nyheder-menu__img");
const nyhederMenuSubtitle = nyhederMenu.querySelector(
    ".nyheder-menu__subtitle"
);
const nyhederMenuText = nyhederMenu.querySelector(".nyheder-menu__text");
const meningMessages = mening.querySelector(".mening__messages");
const messagesData = await fetchData("surveys");

const imagesData = await fetchData("images");
const textData = await fetchData("texts");
const nyhederTextData = textData.filter((data) => data.id >= 8 && data.id <= 9);

Form({ selector: ".mening__form", urlPlace: "surveys" });

setImg({ img: headerImg, data: imagesData[21] });
setImg({ img: nyhederMenuImg, data: imagesData[22] });

nyhederMenuSubtitle.insertAdjacentText(
    "beforeend",
    nyhederTextData[0].description
);
nyhederMenuText.insertAdjacentText("beforeend", nyhederTextData[1].description);

messagesData.forEach((message) => {
    meningMessages.insertAdjacentHTML("beforeend", messageTemplate(message));
});
