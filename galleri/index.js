import headerTemplate from "../js/templates/headerTemplate.js";
import footerTemplate from "../js/templates/footerTemplate.js";
import dialogBestilTemplate from "../js/templates/dialogBestilTemplate.js";
import dialogBestil from "../js/dialog-bestil.js";
import "../js/scrollTop.js";
import { fetchData } from "../js/fetchData.js";
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

const galleri = document.querySelector(".galleri");
const headerImg = document.querySelector(".top__img");
const img = document.createElement("img");
const galleriList = galleri.querySelector(".galleri__list");
const galleriSelectedImg = galleri.querySelector(".galleri__selected-img");
const galleriBtnRigth = galleri.querySelector(".galleri__btn--rigth");
const galleriBtnLeft = galleri.querySelector(".galleri__btn--left");
const zoomInBtn = galleri.querySelector(".galleri__zoom");
const galleriSlider = galleri.querySelector(".galleri__slider");
const galleriSliderBlackDrop = galleri.querySelector(
    ".galleri__slider-blackdrop"
);

let currentIndex = 0;

zoomInBtn.addEventListener("click", zoomImg);
galleriBtnRigth.addEventListener("click", onBtnNavigationCLick);
galleriBtnLeft.addEventListener("click", onBtnNavigationCLick);
galleriSliderBlackDrop.addEventListener("click", zoomImg);

const imagesData = await fetchData("images");
const galleriImages = imagesData.filter(
    (data) => data.id >= 15 && data.id <= 21
);
setImg({
    img: galleriSelectedImg,
    data: galleriImages[currentIndex],
});

galleriImages.forEach((imageData, i) => {
    const imgGalleri = img.cloneNode();
    imgGalleri.addEventListener("click", onImgClick);
    const data = {
        img: imgGalleri,
        data: imageData,
        i: `${i}`,
        classes: "galleri__img",
    };
    setImg(data);
    galleriList.insertAdjacentElement("beforeend", imgGalleri);
});

setImg({ img: headerImg, data: imagesData[13] });

function onImgClick(e) {
    const index = e.target.dataset.id;
    setImg({
        img: galleriSelectedImg,
        data: galleriImages[index],
    });
}

function onBtnNavigationCLick(e) {
    const isNextBtn = e.target.classList.contains("galleri__btn--rigth");

    if (isNextBtn) {
        if (galleriImages.length - 1 === currentIndex) {
            setImg({
                img: galleriSelectedImg,
                data: galleriImages[0],
            });
            currentIndex = 0;
        } else {
            setImg({
                img: galleriSelectedImg,
                data: galleriImages[currentIndex + 1],
            });
            currentIndex++;
        }
    } else {
        if (currentIndex === 0) {
            setImg({
                img: galleriSelectedImg,
                data: galleriImages[galleriImages.length - 1],
            });
            currentIndex = galleriImages.length - 1;
        } else {
            setImg({
                img: galleriSelectedImg,
                data: galleriImages[currentIndex - 1],
            });
            currentIndex--;
        }
    }
}

function zoomImg(e) {
    const isImgorBtn =
        e.target.classList.contains("galleri__selected-img") ||
        e.target.classList.contains("galleri__btn");
    e.stopPropagation();

    if (!isImgorBtn) {
        galleriSlider.classList.toggle("active");
        zoomInBtn.classList.toggle("active");
        zoomInBtn.firstElementChild.classList.toggle("notactive");
    }
}
