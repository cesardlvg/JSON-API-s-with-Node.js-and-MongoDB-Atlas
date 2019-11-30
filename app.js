require('dotenv').config()

const express = require('express'),
	  mongoose = require('mongoose'),
	  bodyParser = require('body-parser'),
	  app = express();


let todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
	res.sendFile("index.html");
});


app.use('/api/todos', todoRoutes);


var port = process.env.PORT || 3000;
	app.listen(port, function () {
  	console.log("Server Has Started!");
});