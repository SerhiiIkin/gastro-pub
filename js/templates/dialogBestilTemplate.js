export default function dialogBestilTemplate() {
    return `<dialog class="dialog-bestil">
    <div class="dialog-bestil__wrapper">
        <button class="dialog-bestil__close"></button>
        <h2 class="dialog-bestil__title">Bestill bord</h2>
        <form class="dialog-bestil__form">
            <label class="label-svg" htmlFor="navn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                    />
                </svg>
                <input
                    type="text"
                    name="name"
                    id="navn"
                    placeholder="Navn *"
                />
            </label>
            <label class="label-svg" htmlFor="telefon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                </svg>
                <input
                    type="text"
                    name="phone"
                    id="telefon"
                    placeholder="Telefon *"
                />
            </label>
            <label class="label-svg" htmlFor="dato">
                <input type="date" name="dato" id="dato" />
            </label>
            <label class="label-svg label-svg--besked" for="besked ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
                    />
                </svg>
                <textarea
                    name="message"
                    id="besked"
                    rows="10"
                    placeholder="Besked"
                ></textarea>
            </label>
            <button type="submit" class="dialog-bestil__submit">
                Send
            </button>
        </form>
    </div>
</dialog>`
}