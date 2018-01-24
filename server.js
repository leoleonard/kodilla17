var express = require('express');
var app = express();

app.get("/", function(req, res) {
  console.log("Żądanie GET!");
  res.send("Hello GET!");
});

app.get("/list_user", function (req, res) {
  console.log("żądanie GET do /list_user");
  res.send("Strona w listą użytkowników");
});

app.get("/ab*cd", function (req, res) {
  console.log("żądanie GET do /ab*cd");
  res.send("Wzór pasuje");
});

app.post("/", function (req, res) {
  console.log("Żądanie POST");
  res.send("Hello POST!");
});

app.delete("/del_user", function (req, res) {
  console.log("Żądanie DELETE");
  res.send("Hello DELETE!");
});


var server = app.listen(3000, function() {
  console.log("Nasłuch na 3000");
});
