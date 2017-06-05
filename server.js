var express = require('express');
var bodyParser = require('body-parser')
	


var Book = require('./Models/bookModel');
var app= express();

var port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRouters')(Book);


app.use('/api', bookRouter);

app.get('/' , function (req,res){
	res.send("Welcome to my API");
});

app.listen(port, function () {
	console.log("server is running on :" + port);

});