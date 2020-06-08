const express = require("express");

/*
We can include partial views/templates into another template.
In our example, we're including the nav.ejs template into our
profile template. 
*/

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/profile/:name", (req, res) => {
  let data = {
    age: 29,
    job: "Ninja",
    hobbies: ["eating", "fighting", "fishing"],
  };
  res.render("profile", { person: req.params.name, data });
});

app.listen(3000);
