import headerTemplate from "../js/templates/headerTemplate.js";
import footerTemplate from "../js/templates/footerTemplate.js";
import dialogBestilTemplate from "../js/templates/dialogBestilTemplate.js";
import dialogBestil from "../js/dialog-bestil.js";
import "../js/scrollTop.js";
import { fetchData } from "../js/fetchData.js";
import setImg from "../js/setImg.js";
import Form from "../js/Form.js";
import memberTemplate from "../js/templates/memberTemplate.js";

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

const chef = document.querySelector(".chef");
const chefWrapper = chef.querySelector(".chef__wrapper");
const headerImg = document.querySelector(".top__img");
const chefTitle = chef.querySelector(".chef__title");
const chefDescription = chef.querySelector(".chef__description");
const teamMembersWrapper = document.querySelector(".members__wrapper");

const img = document.createElement("img");
const chefImg = img.cloneNode();
chefWrapper.insertAdjacentElement("afterbegin", chefImg);

const dataImages = await fetchData("images");
const imagesTeam = dataImages.filter((data) => data.id >= 4 && data.id <= 9);
const imagesMembers = imagesTeam.filter((image) => image.id >= 6);
const dataTexts = await fetchData("texts");
const textsTeam = dataTexts.filter((data) => data.id >= 2 && data.id <= 7);
const members = [];

setImg({ img: headerImg, data: imagesTeam[0] });
setImg({ img: chefImg, data: imagesTeam[1], classes:"chef__img" });

chefTitle.insertAdjacentText("beforeend", textsTeam[0].description);
chefDescription.insertAdjacentText("beforeend", textsTeam[1].description);

imagesMembers.forEach((image, i) => {
    members.push(
        new Member(
            image.url,
            separateInfo(i + 2, 0),
            separateInfo(i + 2, 1),
            separateInfo(i + 2, 2)
        )
    );
});

members.forEach((member) => {
    teamMembersWrapper.insertAdjacentHTML("beforeend", memberTemplate(member));
});

function separateInfo(idText, id) {
    return textsTeam[idText].description.split("\r\n")[id];
}

function Member(img, name, position, description) {
    return {
        img,
        alt: name,
        name,
        position,
        description,
    };
}
