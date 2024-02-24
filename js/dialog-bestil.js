export default function dialogBestil() {
    const bestilBordBtn = document.querySelector(".header__bestil");
    const dialog = document.querySelector(".dialog-bestil");
    const closeDialogBtn = dialog.querySelector(".dialog-bestil__close");

    dialog.addEventListener("click", onDialogClick);
    bestilBordBtn.addEventListener("click", onbestilBordBtnClick);
    closeDialogBtn.addEventListener("click", onCloseDialogBtn);

    function onDialogClick(e) {
        if (e.target === dialog) {
            dialog.close();
        }
    }

    function onbestilBordBtnClick() {
        dialog.showModal();
    }

    function onCloseDialogBtn() {
        dialog.close();
    }
}
