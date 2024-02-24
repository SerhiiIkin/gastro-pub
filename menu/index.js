import headerTemplate from "../js/templates/headerTemplate.js";
import footerTemplate from "../js/templates/footerTemplate.js";
import dialogBestilTemplate from "../js/templates/dialogBestilTemplate.js";
import dialogBestil from "../js/dialog-bestil.js";
import "../js/scrollTop.js";
import { fetchData } from "../js/fetchData.js";
import setImg from "../js/setImg.js";
import menuTemplate from "../js/templates/menu-template.js";
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

const menu = document.querySelector(".menu");
const headerImg = document.querySelector(".top__img");
const img = document.createElement("img");
const menuWrapper = menu.querySelector(".menu__wrapper");
const menuCategorySupper = menu.querySelector(".menu__category--supper");
const menuCategorySalater = menu.querySelector(".menu__category--salater");
const menuCategoryHovedretter = menu.querySelector(
    ".menu__category--hovedretter"
);

const retterData = await fetchData("menus");
const supperRetter = retterData.filter((ret) => ret.id <= 4);
const salaterRetter = retterData.filter((ret) => ret.id >= 5 && ret.id <= 8);
const hovedretterRetter = retterData.filter((ret) => ret.id >= 9);

renderMenu(supperRetter, menuCategorySupper);
renderMenu(salaterRetter, menuCategorySalater);
renderMenu(hovedretterRetter, menuCategoryHovedretter);

function renderMenu(array, place) {
    array.forEach((item) => {
        place.insertAdjacentHTML("beforeend", menuTemplate(item));
    });
}

const imagesData = await fetchData("images");
const filteredData = imagesData.filter(
    (data) => data.id >= 10 && data.id <= 13
);
const supperImg = img.cloneNode(true);
const salaterImg = img.cloneNode(true);
const hovedretterImg = img.cloneNode(true);
setImg({ img: headerImg, data: filteredData[0] });
setImg({ img: supperImg, data: filteredData[1], classes: "menu__img" });
setImg({ img: salaterImg, data: filteredData[2], classes: "menu__img" });
setImg({ img: hovedretterImg, data: filteredData[3], classes: "menu__img" });

menuWrapper.insertAdjacentElement("afterbegin", supperImg);
menuWrapper.insertAdjacentElement("afterbegin", salaterImg);
menuWrapper.insertAdjacentElement("afterbegin", hovedretterImg);
