const express = require("express");

/*
Instead of just sending a plain text, we can send an HTML template by
using the app.sendFile(file location) method.

We have specified the express to look for the folder named views by default.
app.set("view engine", "ejs");
*/

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/profile/:name", (req, res) => {
  let data = { age: 29, job: "Ninja" };
  res.render("profile", { person: req.params.name, data });
});

app.listen(3000);
