export default function headerTemplate(proprs) {
    
    const { home, omgastro, nyheder, menu, galleri, team, kontakt } = proprs;

    return `<header class="header container">
    <a class="header__logo" href="${home}" >
        <?xml version="1.0" encoding="utf-8"?>
        <svg
            version="1.1"
            id="Layer_1"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 485 318"
            style="enable-background: new 0 0 485 318"
            xml:space="preserve"
        >
            <g>
                <path
                    d="M70.8,292.6c-21.3-13.1-37.5-30.9-48.4-53.6C11.5,216.3,6,190.6,6,161.8c0-33.1,6.3-61.2,18.8-84.4
                c12.5-23.2,30.5-40.7,53.8-52.6c23.3-11.9,51-17.8,83-17.8c18.4,0,36.7,1.3,54.8,4c18.1,2.7,33.5,5.5,46,8.4l-4.8,77.2h-48
                l-11.2-52.8c-2.4-2.7-6.7-5-13-7c-6.3-2-14.7-3-25.4-3c-23.7,0-42.1,10.5-55.2,31.4c-13.1,20.9-19.6,51.3-19.6,91
                c0,39.5,5.5,70.7,16.6,93.8c11.1,23.1,28.3,34.6,51.8,34.6c9.6,0,18.3-1.3,26.2-3.8c7.9-2.5,13.8-5.8,17.8-9.8v-83.6l-37.2-4v-29.2
                h124.8v29.2l-20,3.2v105.2c-4.5,0.3-15.1,2.4-31.6,6.4c-16.3,4.3-30.9,7.7-44,10.2c-13.1,2.5-27.1,3.8-42,3.8
                C117.7,312.2,92.1,305.7,70.8,292.6z"
                />
                <path
                    d="M308.6,77.6L285,73.7V48h52.2c3.4,0,10-0.2,19.8-0.6c12.4-0.9,23.6-1.3,33.6-1.3c23,0,41.2,2.8,54.4,8.3
                c13.2,5.5,22.6,13.5,28.2,23.8c5.5,10.4,8.3,23.4,8.3,39.2c0,27.3-8.3,48.5-25,63.7c-16.6,15.1-40.3,22.7-71,22.7
                c-9.6,0-17-0.3-22.1-1l-0.3,44.1l43.2,5.9l-0.6,30.2c-84.9-6.5-126.4,6.1-126.4,6.1v-31.9l29.4-9.9V77.6z M384.2,182.4
                c27.7,0,41.6-21.2,41.6-63.7c0-17.7-3.5-30.7-10.4-38.9c-6.9-8.2-17.3-12.3-31.2-12.3c-6,0-10.7,0.3-14.1,0.8
                c-3.4,0.5-5.8,0.9-7,1.1v111.4C367.3,181.9,374.3,182.4,384.2,182.4z"
                />
            </g>
        </svg>
    </a>
    <nav class="header__nav">
        <ul class="header__list">
            <li class="header__wrapper-link">
                <div class="header__om">
                    <button type="button" class="header__om-btn">
                        Om Os
                    </button>
                    <div class="header__om-content">
                        <a href="${omgastro}" class="header__link"
                            >Om Gastropub</a
                        >
                        <a href="${team}" class="header__link"
                            >Vores Team</a
                        >
                    </div>
                </div>
            </li>
            <li class="header__wrapper-link">
                <a href="${menu}" class="header__link">Menu</a>
            </li>
            <li class="header__wrapper-link">
                <a href="${galleri}" class="header__link">Galleri</a>
            </li>
            <li class="header__wrapper-link">
                <a href="${nyheder}" class="header__link">Nyheder</a>
            </li>
            <li class="header__wrapper-link">
                <a href="${kontakt}" class="header__link">Kontakt</a>
            </li>
            <li class="header__wrapper-link">
                <button
                    class="header__bestil btn btn--orange"
                    type="button"
                >
                    Bestil Bord
                </button>
            </li>
        </ul>
    </nav>
    <label class="header__wrapper-burger"
        ><input type="checkbox" class="header__burger"
    /></label>
</header>`;
}
