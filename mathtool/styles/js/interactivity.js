const hamburger = document.querySelector(".site-header__hamburger");
const menu = document.querySelector(".site-nav");
const main = document.querySelector(".site-main");

/**
 * Make hamburger background blink.
 */
function blinkHamburger() {
    let defaultColor = "rgb(22, 22, 26)";
    let blinkColor = "#72757e";

    if (getComputedStyle(hamburger).backgroundColor === defaultColor) {
        hamburger.style.backgroundColor = blinkColor;
        setTimeout(() => {
            hamburger.style.backgroundColor = defaultColor;
        }, 300);
    }
}

/**
 * Make nav element increase height to the max view port.
 */
function setMaxHeightOnNav() {
    if (getComputedStyle(menu).height.split("px")[0] < window.innerHeight) {
        menu.style.height = window.innerHeight - 51 + "px";
    }
}

/**
 * Perform an animation while open menu.
 */
function menuOpenCloseAnimation(action, ms = 500) {
    setTimeout(() => {
        let id = null;
        let width = action === "open" ? 0 : 190;
        let marginValue = Number(
            getComputedStyle(main).marginLeft.split("px")[0]
        );

        clearInterval(id);

        id = setInterval(() => {
            let widthConditionValue = action === "open" ? "190px" : "0px";

            // This action is performed at the end of animation.
            if (getComputedStyle(menu).width === widthConditionValue) {
                if (action === "close") {
                    main.removeAttribute("style");
                }

                clearInterval(id);
            }
            // This action is performed when animation is running. 
            else {
                width += action === "open" ? 5 : -5;

                menu.style.width = width + "px";
                menu.style.minWidth = width + "px";

                if (window.innerWidth > 600) {
                    // Solve resposive on small devices.
                    marginValue =
                        action === "open" ? marginValue + 5 : marginValue - 5;

                    main.style.marginLeft = marginValue + "px";
                    main.style.width = "auto";
                } else {
                    // Make a "margin" using last margin value and setting it
                    // on "left" because fixed attribute does not accept
                    // margins.
                    // This action is performed for large devices.
                    console.log(marginValue);
                    main.style.position = "fixed";
                    if (marginValue > 0) {
                        main.style.left = marginValue + "px";
                    }
                }
            }
        }, 0);
    }, ms);
}

// Events:
hamburger.addEventListener("click", () => {
    blinkHamburger();
    setMaxHeightOnNav();

    if (window.getComputedStyle(menu).width === "0px") {
        menuOpenCloseAnimation("open");
    } else if (window.getComputedStyle(menu).width === "190px") {
        menuOpenCloseAnimation("close");
    }
});

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
            menuOpenCloseAnimation(close, 150);
        }
    },
    true
);
