const express = require("express");

/*
Responding to requests using express

GET - app.get("route", function);

POST - app.post("route", function);

DELETE - app.delete("route", function);

Here in express, we don't have to specify the response header.
The express framework is smart enough to figure that out.

When we want to get the dynamic data from the URL,
we can specify that as follows:

app.get("/profile/:id", (req, res) => {
  res.send("You requested to see a profile with the id of: " + req.params.id);
});

In the case above, we are getting the id from the request's parameter.
*/

const app = express();

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

app.get("/profile/:id", (req, res) => {
  res.send("You requested to see a profile with the id of: " + req.params.id);
});

app.listen(3000);
