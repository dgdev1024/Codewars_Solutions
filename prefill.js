// Prefills an array of the given length with the given value.
function prefill (length, value) {
    // First, parse the length argument as an integer.
    const lengthInt = parseInt(length);

    // Make sure that does not come out as NaN.
    if (Number.isNaN(lengthInt) || length % 1 !== 0 || lengthInt < 0) {
        throw new TypeError(`${length} is invalid`);
    }

    // Return an empty array if length is zero.
    if (lengthInt === 0) { return []; }

    // Now create the array with Javascript's explicit array constructor, giving
    // the length integer as a parameter. On that, call the 'fill' method to fill
    // our new array with this value. Return that array.
    return new Array(lengthInt).fill(value);
}

module.exports = prefill;