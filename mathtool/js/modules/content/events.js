var windowEvents = [];

class DivisionViewEvents {
    constructor() {
        // Dom Elements
        this.elementDividend = document.getElementById("input-dividend");
        this.elementDivider = document.getElementById("input-divider");
        this.elementbtnCalculate = document.querySelector(".division-form__btn-calculate");

        // Set necessary events.
        this.elementDividend.addEventListener("input", () => {
            this.elementDividend.value = this.removeInvalidCharacters(this.elementDividend.value);
        })
        this.elementDivider.addEventListener("input", () => {
            this.elementDivider.value = this.removeInvalidCharacters(this.elementDivider.value);
        })
        this.elementbtnCalculate.addEventListener("click", () => {
            this.checkAllFields();
        })
    }
    
    removeInvalidCharacters(text) {
        const invalidCharactersPattern = /^[^\d]|[^\d.,]/g;
        const invalidPattern = /(^\d+[.,]{2})|(^\d+[.,]{1}\d+[,.]{1})/g;

        if (invalidCharactersPattern.test(text)) {
            text = text.replaceAll(invalidCharactersPattern, "");
        } else if (invalidPattern.test(text)) {
            text = text.slice(0, -1);
        }
        return text;
    }

    checkAllFields() {
        const validPattern = /^\d+[,.]?\d+$/;

        if (!validPattern.test(this.elementDividend.value)) {
            this.elementDividend.style.color = "red"
        } else {
            this.elementDividend.style.color = "#080808";
        }

        if (!validPattern.test(this.elementDivider.value)) {
            this.elementDivider.style.color = "red";
        } else {
            this.elementDivider.style.color = "#080808";
        }
    }
}

export { DivisionViewEvents };
