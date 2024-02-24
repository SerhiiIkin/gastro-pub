document.addEventListener("scroll", onScroll);
const btnScrollToTop = document.createElement("button");
btnScrollToTop.setAttribute("type", "button");
btnScrollToTop.classList.add("button-to-top");
document.body.appendChild(btnScrollToTop);
let isVisibleBtn = false;

// When the button is clicked, go to top of page
btnScrollToTop.addEventListener("click", function () {
    document.body.scrollIntoView({ behavior: "smooth" });
});

function onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= 100) {
        btnScrollToTop.classList.add("active");
    } else {
        btnScrollToTop.classList.remove("active");
    }
}
