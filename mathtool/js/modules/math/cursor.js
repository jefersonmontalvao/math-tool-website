class AbstractCursor {
    /**
     * This class is used to simulate a cursor where
     * it see what it is beeing calculatated, what was calculated etc.
     *
     * @param {number} number - A string or a number, but, need to be a numeric value.
     *
     */
    constructor(number) {
        // Initialize few variables.
        this.initialValue; // The initial value.
        this.viewValue; // Value that can be read.
        this.isConcatView; // Boolean about if it is a concatenated with viewValue.
        this.concatValue; // The concatenated value.
        this.cursorIndex; // Cursor index.
        this.nowLen; // Length of cursor value, viewValue.
        this.absoluteLen; // Used to check if the cursor itered all cursor value.

        // Set cursor and initialize.
        this.cursor = number;
    }

    /**
     * Cursor attribute getter.
     * @returns {number} viewValue - Cursor value.
     */
    get cursor() {
        if (this.isConcatView) {
            return Number(
                this.concatValue.concat(
                    this.viewValue.substr(this.cursorIndex, this.nowLen)
                )
            );
        } else {
            return Number(this.viewValue.substr(this.cursorIndex, this.nowLen));
        }
    }

    /**
     * Cursor attribute setter.
     * @param {number} value - Cursor value
     */
    set cursor(value) {
        this.initialValue = value.toString();
        this.viewValue = value.toString();
        this.cursorIndex = 0;
        this.nowLen = 1;
        this.absoluteLen = 1;
        this.isConcatView = false;
    }

    /**
     * Increase the nowLen and absoluteLen of the cursor.
     * @returns {void} nothing
     */
    cursorIncreaseNowLen() {
        if (this.absoluteLen < this.initialValue.length) {
            this.nowLen++;
            this.absoluteLen++;
        } else {
            throw RangeError("over range reached.");
        }
    }

    /**
     * Set the cursorIndex to the same as absoluteLen
     * and increase + 1 on absoluteLen.
     * @returns {void} nothing
     */
    cursorToNext() {
        if (this.absoluteLen < this.initialValue.length) {
            this.cursorIndex = this.absoluteLen;
            this.nowLen = 1;
            this.absoluteLen++;
        } else {
            throw RangeError("over range reached.");
        }
    }

    /**
     * Concatenate some numeric value with viewValue.
     * @param {number} value - Numeric value to concatenate to viewValue
     */
    cursorSetConcat(value) {
        if (!isNaN(value) && value) {
            this.isConcatView = true;
            this.concatValue = value.toString();
        } else {
            throw TypeError(`type ${typeof value} is invalid.`);
        }
    }

    /**
     * Returns if cursor reached the max value length.
     * @returns {boolean}
     */
    cursorIsFinished() {
        return this.absoluteLen == this.initialValue.length;
    }

    /**
     * Make a custom behavior.
     * @param {function} func
     */
    cursorCustomBehavior(func) {
        args = {
            initial_value: this.initialValue,
            view_value: this.viewValue,
            is_concat_view: this.isConcatView,
            concat_value: this.concatValue,
            cursor_index: this.cursorIndex,
            now_len: this.nowLen,
            absolute_len: this.absoluteLen,
            cursor: this.cursor,
            self: this,
        };

        func(args);
    }

    cursorIgnoreNextValue() {
        if (this.absoluteLen + 1 < this.initialValue.length) {
            this.nowLen += 2;
            this.absoluteLen += 2;
        } else if (this.absoluteLen < this.initialValue.length) {
            this.nowLen++;
            this.absoluteLen++;
            throw RangeError("over range reached.");
        }
        else {
            throw RangeError("over range reached.");
        }
    }
}

export { AbstractCursor };
