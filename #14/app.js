const http = require("http");
const fs = require("fs");

/*
Buffers are a temporary storage for a chunk of code to be transferred
from one place to another.

The buffers are filled with data, then passed along

We use the read stream when we want to read a large chunk of data by splitting
the large chunk of data into smaller chunks. That way, we won't have to
wait for the whole chunk of data to be finished reading, and instead, we can
start consuming the smaller chunks of the data. 
*/

const myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");

// Everytime we receive a chunk of data, callback function will run
myReadStream.on("data", (chunk) => {
  console.log("New chunk received.");
  console.log(chunk);
});
