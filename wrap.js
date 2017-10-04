// Extend the function object with a method to wrap an existing function.
//
// An important note: If we are extending objects with extra prototype functions - especially
// functions that use the this keyword to represent their parent object, we are not allowed
// to use ES6 arrow functions. We have to use ES5 'function' syntax.
Function.prototype.wrap = function (func) {
    // Wrapping is very simply done by calling the 'bind' method on the
    // function we pass in. In this context, the 'this' keyword coresponds to
    // the function on which we are calling the 'wrap' method. If we pass that into
    // the 'bind' method, we are essentially passing the host function into the function
    // that is being returned.
    return func.bind(null, this);
};

// A sample add function.
function add (a, b) {
    return a + b;
}

// Here, we use the 'wrap' method we just created in order to wrap
// our add function up into a function that takes the sum of two numbers
// and squares them.
//
// The 'old' parameter represents our original 'add' function, and the
// other parameters represent the parameters of the newly-created function.
const squareSum = add.wrap((old, a, b) => {
    const sum = old(a, b);
    return sum * sum;
});

// Test that out here with 'node wrap'.
console.log(add(5, 3));
console.log(squareSum(5, 3));