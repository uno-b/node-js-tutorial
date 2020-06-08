const http = require("http");
const fs = require("fs");

/*
This time, we're reading from the readMe.txt and putting that data into
the response using streams of data.
*/

const server = http.createServer((req, res) => {
  console.log("Request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });

  const myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");

  myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("Now listening to the port 3000");
