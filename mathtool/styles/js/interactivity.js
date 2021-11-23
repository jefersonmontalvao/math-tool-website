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

    // Increase element height to max-screen height.
    if (window.getComputedStyle(menu).height.split("px")[0] < window.innerHeight) {
        menu.style.height = (window.innerHeight - 51) + "px";
    }
    
    // Open and close menu using width increase and decrease animation.
    if (window.getComputedStyle(menu).width === "0px") {
        setTimeout(() => {
            // Animation
            let id = null;
            let width = 0;
            clearInterval(id);
            id = setInterval(frame, 0);
            function frame() {
                if (window.getComputedStyle(menu).width === "190px") {
                    clearInterval(id);
                } else {
                    width += 5;
                    menu.style.width = width + "px";
                    menu.style.minWidth = width + "px";
                }
            }
        }, 500);
    } else {
        setTimeout(() => {
            // Animation
            let id = null;
            let width = 190;
            clearInterval(id);
            id = setInterval(frame, 0);

            function frame() {
                if (window.getComputedStyle(menu).width === "0px") {
                    clearInterval(id);
                } else {
                    width -= 5;
                    menu.style.width = width + "px";
                    menu.style.minWidth = width + "px";
                }
            }
        }, 500);
    }
});

// Close menu if user click in some element outsite of hamburger.
document.addEventListener(
    "click",
    (e) => {
        e = e || window.event;
        let target = e.target;
        let targetClass = target.getAttribute("class");
        let isClickingOnHamburger =
            targetClass === "hamburger site-header__hamburger" ||
            targetClass === "hamburger__layer";

        if (
            window.getComputedStyle(menu).width === "190px" &&
            !isClickingOnHamburger
        ) {
            setTimeout(() => {
                menu.style.width = "0px";
                menu.style.minWidth = "0px";
            }, 200);
        }
    },
    true
);
