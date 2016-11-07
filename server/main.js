var express = require('express');

var app = new express();

var parser = require('body-parser');
require('./database.js');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../.tmp'));
app.get('/', function (request, response) {
    response.render('./../app/index', {});

}).listen(5001);
app.use(parser.json());
app.use(parser.urlencoded({
    extended: false
}));
require('./routes/items.js')(app);