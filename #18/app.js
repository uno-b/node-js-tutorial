const http = require("http");
const fs = require("fs");

/*
We serve JSON data to the request after we specify that
the content type is JSON. 

The end function of the response takes only a string or a buffer.
*/

const server = http.createServer((req, res) => {
  console.log("Request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });

  let myObj = {
    name: "Ryu",
    job: "Ninja",
    age: 29,
  };

  res.end(JSON.stringify(myObj));
});

server.listen(3000, "127.0.0.1");
console.log("Now listening to the port 3000");
