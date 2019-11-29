const mongoose = require('mongoose');
mongoose.set('debug', true);

const url = process.env.DATABASEURL;
mongoose.connect(url, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => { 
	console.log("Connected to DB!");
}).catch(err => {
	console.log("ERROR:", err.message);
});


module.exports.Todo = require("./todo");