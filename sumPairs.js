// Function to get the two numbers that appear earliest in the given array
// that add up to the sum given.
function sumOfPairs (ints, sum) {
    // Cache our last-recorded number here.
    let lastNumber;

    // Iterate through each array in our list.
    for (let i = 1; i < ints.length; ++i) {
        // If we have calculated this number before, then we know it doesn't add
        // up to our expected sum already. Don't go any further.
        if (lastNumber && lastNumber === ints[i]) { continue; }

        // Otherwise, cache this number for the next iteration, if needed.
        lastNumber = ints[i];

        // Slice our ints array from the start to our current index. Look in this
        // sliced array for a number that will add up with our current number to
        // our expected sum.
        const sliced = ints.slice(0, i);
        const sumIndex = sliced.indexOf(sum - ints[i]);

        // If that number is found, return our two adding numbers in an array.
        if (sumIndex !== -1) {
            return [ sliced[sumIndex], ints[i] ];
        }
    }
}

module.exports = sumOfPairs;