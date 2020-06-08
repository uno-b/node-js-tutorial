const { counter, adder, pi } = require("./stuff");

/*
=> module.exports = { counter, adder, pi };

An easier method of exporting functions and variables. It puts the variables
inside an object and exports that object.

=> const { counter, adder, pi } = require("./stuff");

Here, we're using object destructuring to take the variables from the object.
*/

const testArr = ["ryu", "yoshi"];

console.log(counter(testArr));
console.log(adder(pi, 5));
