var express = require('express');
var app = express();


app.set("view engine", "pug");
app.set("views", "./views");

app.use("/store", function (req, res, next) {
  console.log("Pośrednik przy żądaniu do /store");
  next();
})

app.get("/", function (req, res) {
  res.send("Hello world!");
});
app.get("/store", function (req, res) {
  res.send("To jest sklep");
});

app.get('/content', function(req, res){
    res.render('content', {
      url: "http://www.google.com"
    });
      });

app.get("/first-template", function (req, res) {
  res.render("first-template");
});

app.listen(3000);

app.use(function (eq, res, next) {
  res.status(404).send("Błąd użytkownika");
});
