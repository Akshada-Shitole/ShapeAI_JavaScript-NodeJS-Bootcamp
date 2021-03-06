const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var age = Number(req.body.n1) / 15;
  res.send("your age in dog years is" + age);
});

app.get("/about", function (req, res) {
  res.send("<p>This is about me</p><h1>about me</h1>");
});
app.get("/contact", function (req, res) {
  res.send("<p>This is contact me</p><h1>contact me</h1>");
});
app.get("/home", function (req, res) {
  res.send("<p>This is a home</p><h1>home</h1>");
});

app.listen(port);
