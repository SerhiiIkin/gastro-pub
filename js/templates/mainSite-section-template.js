export default function mainSiteSectionTemplate(data) {
    const { title, description, button, sectionClass, link } = data;

    return `
    <section class="gastro ${sectionClass}">
                <div class="gastro__wrapper container">
                    <h1 class="gastro__title">${title}</h1>
                    <p class="gastro__description">
                        ${description}
                    </p>
                    <a href="${link}" class="gastro__button btn btn--orange">${button}</a>
                </div>
            </section>
    `;
}
