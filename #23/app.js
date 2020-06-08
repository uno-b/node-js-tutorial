const express = require("express");

/*
Responding to requests using express

GET - app.get("route", function);

POST - app.post("route", function);

DELETE - app.delete("route", function);

Here in express, we don't have to specify the response header.
The express framework is smart enough to figure that out.
*/

const app = express();

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

app.listen(3000);
