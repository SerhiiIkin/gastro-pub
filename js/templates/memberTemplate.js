export default function memberTemplate({
    img,
    alt,
    name,
    position,
    description,
}) {
    return `
   <div class="member">
        <img class="member__img" src="${img}" alt="${alt}" />
        <div class="member__name">
        ${name}
        <p class="member__position">${position}</p>
        </div>
        
        <p class="member__description">${description}</p>
   </div>
    `;
}
