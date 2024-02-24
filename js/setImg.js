export default function setImg(props) {
    const { img, data, i, classes } = props;
    img.setAttribute("src", data.url);
    img.setAttribute("alt", data.name);
    i && img.setAttribute("data-id", i);
    classes && img.classList.add(classes);
}
