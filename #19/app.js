const http = require("http");
const fs = require("fs");

/*
Here, we are manually checking the request URL, and depending
on the url, we are routing the user to different html pages or API.
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
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });

    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});

server.listen(3000, "127.0.0.1");
console.log("Now listening to the port 3000");
