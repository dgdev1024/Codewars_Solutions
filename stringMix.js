function stringMix (stringOne, stringTwo) {
    // A helper function to determine if a letter is lowercase.
    const isLowerCase = (letter) => {
        return letter !== letter.toUpperCase() && letter === letter.toLowerCase();
    };

    // Objects to map out instances of lowercase letters in our strings.
    let mapOne = {}, mapTwo = {};

    // Also, store an array of the letters found in both strings.
    let letters = [];

    // Iterate through each character in each string. Find out how many of each
    // lowercase letter is in each string.
    stringOne.split('').forEach(val => {
        // Map it if the character is a lowercase letter.
        if (isLowerCase(val) === true) {
            mapOne[val] = (mapOne[val] || 0) + 1;

            // If the letter is new, then store it in the letters array.
            if (letters.indexOf(val) === -1) {
                letters.push(val);
            }
        }
    });

    // Do the same for the second string.
    stringTwo.split('').forEach(val => {
        if (isLowerCase(val) === true) {
            mapTwo[val] = (mapTwo[val] || 0) + 1;

            if (letters.indexOf(val) === -1) {
                letters.push(val);
            }
        }
    });

    // Store our final substrings here.
    let substrings = [];

    // Iterate through each unique letter in our strings.
    for (const letter of letters) {
        // Get the number of occurances in each string and the max of the two.
        const one = mapOne[letter] || 0;
        const two = mapTwo[letter] || 0;
        
        // If the number of occurances is less than one in both cases, then continue.
        if (one <= 1 && two <= 1) {
            continue;
        }

        if (one === two) {
            substrings.push(`=:${new Array(one + 1).join(letter)}`);
        }
        else if (one > two) {
            substrings.push(`1:${new Array(one + 1).join(letter)}`);
        }
        else if (two > one) {
            substrings.push(`2:${new Array(two + 1).join(letter)}`);
        }
    }

    return substrings.sort((a, b) => b.length - a.length).join('/');
}

console.log(stringMix('mmmmm m nnnnn y&friend&Paul has heavy hats! &', 'my frie n d Joh n has ma n y ma n y frie n ds n&'));