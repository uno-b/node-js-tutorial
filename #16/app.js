const http = require("http");
const fs = require("fs");

const myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
const myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

/* Method 1 - Manual
myReadStream.on("data", (chunk) => {
  console.log("New chunk received");
  myWriteStream.write(chunk);
});
*/

// Method 2 - Using pipes
myReadStream.pipe(myWriteStream);
