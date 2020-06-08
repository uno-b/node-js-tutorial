const http = require("http");
const fs = require("fs");

/*

*/

const server = http.createServer((req, res) => {
  console.log("Request was made on this url: " + req.url);

  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });

    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  } else if (req.url === "/api/ninjas") {
    let ninjas = [
      { name: "ryu", age: 29 },
      { name: "yoshi", age: 40 },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(ninjas));
  }
});

server.listen(3000, "127.0.0.1");
console.log("Now listening to the port 3000");
