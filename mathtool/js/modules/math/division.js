import { AbstractCursor } from "./cursor.js";

class Division {
    constructor() {
        // Initialize few variables.
        this.divider;
        this.quotient;
        this.dividend;
        this.divisionScrap;
    }

    /**
     * Method for calculate division math operation.
     * @param {number} divident
     * @param {number} divider
     * @param {boolean} fractioned - Set to returns fractional value if value is fractional
     * @returns {object} - Data about the simulatior.
     */
    calculate(dividend, divider, fractioned = false) {
        this.dividend = Number(dividend);
        this.divider = Number(divider);

        // Check if is a valid value.
        if (!isNaN(Number(dividend) + Number(divider)) && dividend && divider) {
            if (
                Number.isInteger(this.dividend) &&
                Number.isInteger(this.divider)
            ) {
                console.log("Números inteiros");
                // implement
            } else if (
                (Number.isInteger(this.dividend) &&
                    !Number.isInteger(this.divider)) ||
                (!Number.isInteger(this.dividend) &&
                    Number.isInteger(this.divider))
            ) {
                console.log("Algum número decimal.");
                // if value is fractioned
                // implement this.
            } else {
                console.log("Todos os números decimais.");
            }
        }
        // Error if invalid value.
        else {
            throw TypeError(
                `values ${this.dividend} and ${this.divider} needs to be numeric`
            );
        }
    }
}

export { Division };
