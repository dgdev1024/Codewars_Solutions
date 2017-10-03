function addCheckDigit (number) {
    // Let's get the string form of our number.
    const numberString = number.toString();

    // Let's track our multiplication factor, and the sum
    // of our products so far.
    let factor = 2;
    let sum = 0;

    // Let's iterate over our string, going from right-to-left.
    for (let i = numberString.length - 1; i >= 0; --i) {
        // Add the product of the character at this index times the
        // current multiplication factor to our current sum.
        sum += parseInt(numberString[i]) * factor;

        // Increment the multiplication factor for the next number.
        // If that factor is greater than seven as a result, then reset
        // it to two.
        factor = (factor === 7) ? 2 : factor + 1;
    }

    // Divide this sum by 11 and get the remainder.
    const remainder = sum % 11;

    // Use the remainder to determine our check digit.
    let checkDigit;
    if (remainder === 0) { checkDigit = 0; }
    else if (remainder === 1) { checkDigit = 'X'; }
    else { checkDigit = 11 - remainder; }

    // Return our product number with the check digit appended.
    return `${number}${checkDigit}`;
}

module.exports = addCheckDigit;