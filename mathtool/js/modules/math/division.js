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

                /**
                 * Increase cursor length/range according to some rules.
                 */
                function increaseCursorRule(divider) {
                    while (
                        dividendCursor.cursor < divider &&
                        calculations.slice(-1) == 0 &&
                        !dividendCursor.isConcatView
                    ) {
                        try {
                            dividendCursor.cursorIncreaseNowLen();
                        } catch (RangeError) {
                            break;
                        }
                    }
                }

                /**
                 * Make a simulation of a difference calculation
                 * and insert the calculation data on "calculations"
                 * array.
                 */
                function appendCalculationData(divider) {
                    // Set a concat value in cursor.
                    if (calculations.length) {
                        let lastDifference = calculations.slice(-1)[0].difference;

                        if (lastDifference > 0) {
                            dividendCursor.cursorSetConcat(lastDifference);
                        }
                    }

                    let minuendValue = dividendCursor.cursor;
                    let subtrahendValue =
                        Math.trunc(dividendCursor.cursor / divider) * divider;
                    let differenceValue = minuendValue - subtrahendValue;

                    let calculationData = {
                        minuend: minuendValue,
                        subtrahend: subtrahendValue,
                        difference: differenceValue,
                    };
                    calculations.push(calculationData);
                }

                function fractionateDivison() {}

                let finalLoop;
                do {
                    finalLoop = dividendCursor.cursorIsFinished()
                        ? true
                        : false;

                    increaseCursorRule(this.divider);
                    appendCalculationData(this.divider);

                    try {
                        // Increase the range of cursor if it has value to calculate.
                        dividendCursor.cursorToNext();
                    } catch (RangeError) {}
                } while (!finalLoop && !this.loopControl());


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
        if (this.maxLoop < 30) {
            this.maxLoop++;
            return false;
        } else {
            console.log("                          Stopped by loop control.");
            return true;
        }
    }
}

export { Division };
