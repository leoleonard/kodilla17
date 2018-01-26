var express = require('express');
var app = express();
var stringifyFile;

app.use(express.static('assets'));

app.get("/store", function (req, res, next) {
  console.log("Jestem pośrednikiem przy żądaniu do /store");
  next();
})

app.get("/store", function (req, res) {
  res.send("To jest sklep");
});

app.listen(3000);

app.use(function (eq, res, next) {
  res.status(404).send("Błąd użytkownika");
});
