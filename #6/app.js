const counter = require("./count");

/*
=> const counter = require("./count");

=> module.exports = counter;

We're only able to use "require" instead of exports/imports when using node
outside a module.

*/

console.log(counter(["ryu"]));
