import { AbstractCursor } from "./cursor.js";

class Division {
    constructor() {
        // Initialize few variables.
        this.dividend;
        this.divider;
        this.results;

        this.maxLoop = 1;
    }

    /**
     * Method for calculate division math operation.
     * @param {number} divident
     * @param {number} divider
     * @param {boolean} fractioned - Set to returns fractional value if value is fractional
     * @returns {object} - Data about the simulatior.
     */
    simulate(dividend, divider, fractioned = true) {
        this.dividend = Number(dividend);
        this.divider = Number(divider);

        // Check if is a valid value.
        if (!isNaN(Number(dividend) + Number(divider)) && dividend && divider) {
            // If all interger.
            if (
                Number.isInteger(this.dividend) &&
                Number.isInteger(this.divider)
            ) {
                /* Set the initial results.
                   All values will be set before return. */
                this.results = {
                    dividend: this.dividend,
                    divider: this.divider,
                    calculations: null,
                    quotient: fractioned
                        ? this.dividend / this.divider
                        : Math.trunc(this.dividend / this.divider),
                    division_scrap: () => {
                        return (
                            this.dividend -
                            this.divider *
                                Math.trunc(this.dividend / this.divider)
                        );
                    },
                };

                // Simulation variables.
                let dividendCursor = new AbstractCursor(this.dividend);
                let calculations = [];

                do {
                    // Code
                } while (!dividendCursor.cursorIsFinished() && !this.loopControl());

                return this.results;
            } else if (
                (Number.isInteger(this.dividend) &&
                    !Number.isInteger(this.divider)) ||
                (!Number.isInteger(this.dividend) &&
                    Number.isInteger(this.divider))
            ) {
                console.log("Algum número decimal.");
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

    loopControl() {
        if (this.maxLoop < 100) {
            this.maxLoop ++;
            return false;
        } 
        else {
            console.log("Stopped by loop control.");
            return true;
        }
    }
}

export { Division };
