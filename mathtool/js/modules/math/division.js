import { AbstractCursor } from "./cursor.js";
import {
    isInteger,
    isNumericValue,
    isFloat,
    arrayIsEmpty,
} from "../utils/check_functions.js";

class Division {
    constructor() {
        // Initialize few variables.
        this.dividend;
        this.divider;
        this.results;
    }

    #allIntergerSimulation(dividend, divider, fractioned) {
        // ! Important functions.
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
            if (!arrayIsEmpty(calculations)) {
                let lastCalculationDifference =
                    calculations.slice(-1)[0].difference;

                // If had some scrap at last calculation value, set a concat value on cursor.
                if (lastCalculationDifference > 0) {
                    dividendCursor.cursorSetConcat(lastCalculationDifference);
                }
            }

            // This data is used for insert on this.calculations variable.
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

        /**
         * Increase the range of cursor if it has value to calculate.
         */
        function toNextCursorRule() {
            try {
                dividendCursor.cursorToNext();
            } catch (RangeError) {}
        }

        function fractionateDivison() {}

        // It is used to get a cursor to control a dividend value string.
        let dividendCursor = new AbstractCursor(this.dividend);
        let calculations = [];
        let isFinalLoop;

        do {
            // This variable is used to make the loop execute one last time when
            // cursor get finished all numeric string.
            isFinalLoop = dividendCursor.cursorIsFinished() ? true : false;

            // ! Executing important functions.
            increaseCursorRule(this.divider);
            appendCalculationData(this.divider);
            toNextCursorRule();
        } while (!isFinalLoop);

        // Set all results before returning value.
        this.results = {
            dividend: this.dividend,
            divider: this.divider,
            calculations: calculations,
            quotient: fractioned
                ? this.dividend / this.divider
                : Math.trunc(this.dividend / this.divider),
            division_scrap: () => {
                return (
                    this.dividend -
                    this.divider * Math.trunc(this.dividend / this.divider)
                );
            },
        };
    }

    #hasJustOneFloatSimulation(dividend, divider, fractioned) {}

    #allFloatSimulation(dividend, divider, fractioned) {}

    /**
     * Method for calculate division math operation.
     * @param {number} divident
     * @param {number} divider
     * @param {boolean} fractioned - Set to returns fractional value if value is fractional
     * @returns {object} - Data about the simulatior.
     */
    simulate(dividend, divider, fractioned = true) {
        // Initialize few class attributes.
        this.dividend = Number(dividend);
        this.divider = Number(divider);

        // Check if function params is a valid value.
        if (isNumericValue(this.dividend + this.divider)) {
            if (isInteger(this.dividend) && isInteger(this.divider)) {
                /* Calculation method used to calculate a division where,
                all numbers are integers.*/
                this.#allIntergerSimulation(
                    this.dividend,
                    this.divider,
                    fractioned
                );
            } else if (
                (isInteger(this.dividend) && !isFloat(this.divider)) ||
                (!isFloat(this.dividend) && isInteger(this.divider))
            ) {
                // If has a float number and an integer.
                this.#hasJustOneFloatSimulation();
            } else {
                // If all numbers are float
                this.#allFloatSimulation();
            }
        } else {
            // Error if param has a invalid value.
            throw TypeError(
                `values ${this.dividend} and ${this.divider} needs to be numeric`
            );
        }
    }
}

export { Division };
