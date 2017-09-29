// GOAL: Find the sum of all multiples of 3 and 5 below the number passed in.
// If a number is a multiple of 3 AND 5, include it once.

(function (num) {
    let sum = 0;
    for (let i = 0; i < num; ++i) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    console.log(sum);
})(process.argv[2]);