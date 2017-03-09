var express = require('express');	
var routes = require('./config/routes');
var bodyParcer = require('body-parser');

var app = express();

app.use(express.static('public'));
app.use(bodyParcer.urlencoded({extended : false}));
app.use(bodyParcer.json());

require('./app/routes')(app);

app.listen(8000, function(){
	console.log("Waiting on port 8000.");
});