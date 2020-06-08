const express = require("express");

/*
Not only can we dynamically pass variables through render to the template,
we can also use EJS (Embedded javascript) to loop within the template.
In our case, we are looping through the hobbies array that we passed to
the template.
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
  let data = {
    age: 29,
    job: "Ninja",
    hobbies: ["eating", "fighting", "fishing"],
  };
  res.render("profile", { person: req.params.name, data });
});

app.listen(3000);
