var express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log("here");
  next();
}, function(req, res, next) {
  console.log("second");
  next();
});

app.get('/', function (req, res, next) {
  
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

