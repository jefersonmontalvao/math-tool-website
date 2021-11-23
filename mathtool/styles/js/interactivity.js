const hamburger = document.querySelector(".site-header__hamburger");
const menu = document.querySelector(".site-flexbox__nav");

hamburger.addEventListener("click", () => {
    // Change hamburger background color on click.
    if (
        window.getComputedStyle(hamburger).backgroundColor === "rgb(22, 22, 26)"
    ) {
        hamburger.style.backgroundColor = "#72757e";
        setTimeout(() => {
            hamburger.style.backgroundColor = "rgb(22, 22, 26)";
        }, 300);
    }

    // Open and close menu.
    menu.style.height = window.innerHeight + "px";
    if (window.getComputedStyle(menu).display === "none") {
        setTimeout(() => {
            menu.style.display = "block";
        }, 500);
    } else {
        setTimeout(() => {
            menu.style.display = "none";
        }, 500);
    }
});

document.addEventListener(
    "click",
    (e) => {
        e = e || window.event;
        let target = e.target;

        if (window.getComputedStyle(menu).display === "block") {
            setTimeout(() => {
                menu.style.display = "none";
            }, 200);
        }
    },
    false
);
