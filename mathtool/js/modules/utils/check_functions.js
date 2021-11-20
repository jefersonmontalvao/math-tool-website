function isNumericValue(value) {
    if (typeof value === "number") {
        return true;
    } else if (typeof value === "string" && value !== "") {
        return !isNaN(value);
    } else {
        return false;
    }
}

function isInteger(number) {
    if (typeof number === "number") {
        return Number.isInteger(number);
    } else {
        throw TypeError('number needs to be from type "number"');
    }
}

function isFloat(number) {
    if (typeof number === "number") {
        return !Number.isInteger(number);
    } else {
        throw TypeError('number needs to be from type "number"');
    }
}

function arrayIsEmpty(array) {
    if (Array.isArray(array)) {
        if (array.length === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        throw TypeError("param array needs to an object \"array\" type");
    }
}

export { isInteger, isNumericValue, isFloat, arrayIsEmpty };
