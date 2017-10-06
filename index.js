var express = require('express');
var routes = require('./routes');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')
var http = require('http');
var calculate = require('./routes/calculate');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());	

app.get('/', routes.index);

app.post('/calculate',calculate.calci);

module.exports = app;

app.listen(3000);
console.log("Server running on port 3000");
