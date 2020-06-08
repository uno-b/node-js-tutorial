const fs = require("fs");

/*
=> fs.readFileSync("readMe.txt", "utf8");

This method returns the string inside the specified file line-by-line.

=> fs.writeFileSync("writeMe.txt", readMe + " and some extra text");

This method overwrites the specified file (or a new file if it doesn't exist)
*/

// Synchronous
let readMe = fs.readFileSync("readMe.txt", "utf8");

// Synchronous
fs.writeFileSync("writeMe.txt", readMe + " and some extra text!");

// Asynchronous
fs.readFile("readMe.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("This text should come first.");
