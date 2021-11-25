// This variable is used to save data about events that was
// added on window. And It can be removed by these data.
const windowGlobalEvents = [];

/**
 * This functins is used to add events in a global way.
 * Events that are added here alse can be removed.
 * @param {string} name - unique name used to identify
 * @param {string} type - event type
 * @param {function} action - function used to perform a action on event.
 */
function addGlobalWindowEvent(name, type, action) {
    windowGlobalEvents.push({
        name: name,
        type: type,
        action: action,
    });
    window.addEventListener(type, action);
}

/**
 * This function is used to remove global functions.
 * @param {string} name - name of identifier of event saved in windowGlobalEvents variable.
 */
function removeGlobalWindowEventsExcept(name) {
    for (const globalEvent of windowGlobalEvents) {
        if (!(globalEvent.name === name)) {
            window.removeEventListener(globalEvent.type, globalEvent.action);
        }
    }
}

class BaseViewEvents {
    constructor() {
        // Remove global events from another views.
        removeGlobalWindowEventsExcept(this.constructor.name);
    }
}

class DivisionViewEvents extends BaseViewEvents {
    constructor() {
        super();
        // Dom Elements
        this.elementDividend = document.getElementById("dividend");
        this.elementDivider = document.getElementById("divider");
        this.elementbtnCalculate = document.getElementById("btn-calculate");

        // Set necessary events.
        this.elementDividend.addEventListener("input", () => {
            if (this.elementDividend.value.length) {
                this.elementDividend.value = this.removeInvalidCharacters(
                    this.elementDividend.value
                );
            }
            this.removeErrorStyleIfEmpty();
        });

        this.elementDivider.addEventListener("input", () => {
            if (this.elementDivider.value.length) {
                this.elementDivider.value = this.removeInvalidCharacters(
                    this.elementDivider.value
                );
            }
            this.removeErrorStyleIfEmpty();
        });

        this.elementbtnCalculate.addEventListener("click", () => {
            this.checkAllFields();
        });

        addGlobalWindowEvent(this.constructor.name, "keydown", () => {
            if (window.event) {
                const pressedkey = window.event.key;
                if (pressedkey === "Enter") {
                    this.checkAllFields();
                    this.elementbtnCalculate.click();
                }
            } 
        });
    }

    removeInvalidCharacters(text) {
        const invalidCharactersPattern = /[^\d.,]/g;

        if (invalidCharactersPattern.test(text)) {
            text = text.replaceAll(invalidCharactersPattern, "");
        }
        return text;
    }

    checkAllFields() {
        const validPattern = /^\d+[,.]?\d+$/;

        if (!validPattern.test(this.elementDividend.value) && this.elementDividend.value.length) {
            this.elementDividend.style.color = "red";
        } else {
            this.elementDividend.removeAttribute("style");
        }

        if (!validPattern.test(this.elementDivider.value) && this.elementDivider.value.length) {
            this.elementDivider.style.color = "red";
        } else {
            this.elementDivider.removeAttribute("style");
        }
    }

    removeErrorStyleIfEmpty() {
        if (!this.elementDividend.value.length) {
            this.elementDividend.removeAttribute("style");
        }
        if (!this.elementDivider.value.length) {
            this.elementDivider.removeAttribute("style");
        }
    }
}

export { DivisionViewEvents };
