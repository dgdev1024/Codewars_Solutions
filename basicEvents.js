// Our event object.
function Event () {
    // Our array of subscribed functions.
    this.functions = [];

    // Our subscribe method.
    this.subscribe = function (func) {
        // Make sure the argument passed in is a function.
        if (func && typeof func === 'function') {
            this.functions.push(func);
        }
    };

    // Our unsubscribe method.
    this.unsubscribe = function (func) {
        // Make sure the argument passed in is a function.
        if (func && typeof func === 'function') {
            const functionIndex = this.functions.indexOf(func);
            if (functionIndex !== -1) {
                this.functions.splice(functionIndex, 1);
            }
        }
    }

    // Our emit method.
    this.emit = function () {
        // Convert the arguments passed in here into an array.
        const argsArray = Array.prototype.slice.call(arguments);

        // Iterate over our functions...
        this.functions.forEach(func => {
            // Call the 'apply' method on our function to call that function
            // passing in each argument in our array.
            func.apply(null, argsArray);
        });
    }
}

module.exports = new Event();