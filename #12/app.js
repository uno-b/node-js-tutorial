const http = require("http");

/*
Clients and servers communicate through requests and responses.
Request = Request + Request Headers
Response = Response + Response Headers

The request and response headers include meta data on content-type and status
*/

const server = http.createServer((req, res) => {
  console.log("Request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hey ninjas");
});

server.listen(3000, "127.0.0.1");
console.log("Yoooo, now listening to port 3000");
