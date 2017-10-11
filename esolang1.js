// A function that interprets a simple esoteric program which uses
// a memory cell and two commands:
//
// '+' - Increments the memory cell by 1. Wraps to 0 when it reaches 256.
// '.' - Appends the ASCII character coresponding to the current memory cell value
//       to the result string.
function myFirstInterpreter (code) {
    // Our commands array.
    const chars = code.split('');

    // Keep track of the memory cell and result string.
    let cell = 0;
    let result = '';

    // Iterate through the characters in our array and look for our
    // commands. Execute as proper.
    chars.forEach(function (char) {
        if (char === '+') {
            cell++;
            if (cell === 256) { cell = 0; }
        }
        else if (char === '.') {
            result += String.fromCharCode(cell);
        }
    });

    // Return the result string.
    return result;
}

module.exports = myFirstInterpreter;