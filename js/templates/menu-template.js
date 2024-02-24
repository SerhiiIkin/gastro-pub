export default function menuTemplate(data) {
    const { name, ingredients, price } = data;
    return `
        <article class="menu__ret">
        <h3 class="menu__name">${name}</h3>
        <p class="menu__ingredients">${ingredients}</p>
        <p class="menu__price">${price}</p>
        </article>
    `;
}
