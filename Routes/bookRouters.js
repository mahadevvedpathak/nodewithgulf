var express = require('express')
	Promise = require("bluebird");
const bookmodel = require('../Models/bookModel') 	


var routes = function (Book) {
	var bookRouter = express.Router();
	var bookController = require('../Controllers/bookcontroller')(Book);
	console.log(bookController.get);

	//book api's
	bookRouter.route('/books')
		.get(bookController.get)
		.post(bookController.post)
		return bookRouter;

	// books middleware
	bookRouter.use("/books", function(req,res,next){
		if (!req.body.name || req.body.name !== undefined) {
			var myjson = [];
			myjson.push({name : "sameer"});

			if(Array.isArray(req.body)){
				for (var i=0; i < req.body.length; i++) {
					myjson.push({name : req.body[i].name});
				}
			}
			else
			{
				myjson.push({name : req.body.name});		
			}
				req.finalobj = myjson; 

			next();
		} 
		else {

			res.status(500).send('please check parameter')
			
		}	
	})
}

module.exports = routes;