

function addVerifyDivisionInputsEvent() {
// Inputs.
    const dividend = document.getElementById("input-dividend");
    const divider = document.getElementById("input-divider");
    const btnCalculate = document.querySelector(".division-form__btn-calculate");

    // Functions.
    function removeInvalidCharacters(inputElement) {
        const element = inputElement;
        const invalidPattern = /[^\d.,]|^[^\d]/g;
        const invalidPattern2 = /^\d+[.,]{2}|^\d+[.,]{1}\d+[,.]{1}/g;
        if (invalidPattern.test(element.value)) {
            element.value = element.value.replaceAll(invalidPattern, "");
        } else if (invalidPattern2.test(element.value)) {
            element.value = element.value.slice(0, -1);
        }
    }

    dividend.addEventListener("input", () => {
        removeInvalidCharacters(dividend);
    });
    divider.addEventListener("input", () => {
        removeInvalidCharacters(divider);
    });
    btnCalculate.addEventListener("click", () => {
        const validPattern = /^\d+[,.]?\d+$/;

        if (!validPattern.test(dividend.value)) {
            dividend.style.color = "red"
        } else {
            dividend.style.color = "#080808";
        }

        if (!validPattern.test(divider.value)) {
            divider.style.color = "red";
        } else {
            divider.style.color = "#080808";
        }
    })
}

export { addVerifyDivisionInputsEvent };
