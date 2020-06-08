const http = require("http");
const fs = require("fs");

/*
We're serving an html file to the response instead of a plain text.
To do this, we had to change the content type into text/html.
*/

const server = http.createServer((req, res) => {
  console.log("Request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/html" });

  const myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");

  myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("Now listening to the port 3000");
