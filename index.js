require('dotenv').config()

const express = require('express'),
	  mongoose = require('mongoose'),
	  app = express();

var url = process.env.DATABASEURL;
mongoose.connect(url, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => { 
	console.log("Connected to DB!");
}).catch(err => {
	console.log("ERROR:", err.message);
});

app.get('/', function(req, res){
	res.send("Hi The from Express!")
});



var port = process.env.PORT || 3000;
	app.listen(port, function () {
  	console.log("Server Has Started!");
});