var express = require('express');

var app = new express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../.tmp'));
app.get('/', function (request, response) {
    response.render('./../app/index', {});

}).listen(5001);