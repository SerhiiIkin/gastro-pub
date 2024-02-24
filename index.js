import headerTemplate from "./js/templates/headerTemplate.js";
import footerTemplate from "./js/templates/footerTemplate.js";
import dialogBestilTemplate from "./js/templates/dialogBestilTemplate.js";
import dialogBestil from "./js/dialog-bestil.js";
import "./js/renderSectionMain.js";
import "./js/scrollTop.js";
import Form from "./js/Form.js";

const links = {
    home: "/",
    omgastro: "/omgastro",
    nyheder: "/nyheder",
    menu: "/menu",
    galleri: "/galleri",
    team: "/team",
    kontakt: "/kontakt",
};
document.body.insertAdjacentHTML("afterbegin", headerTemplate(links));
document.body.insertAdjacentHTML("beforeend", footerTemplate());
document.body.insertAdjacentHTML("beforeend", dialogBestilTemplate());

dialogBestil();
Form({
    selector: ".dialog-bestil__form",
    urlPlace: "contacts",
});
