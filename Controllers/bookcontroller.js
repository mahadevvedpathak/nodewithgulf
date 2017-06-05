var bookController = function(Book){

	var get = function(req,res){
		 var myjson = {name : "sameer"};
		 res.jsonp(myjson);		
	}

	var post = function(req,res){
		res.jsonp(req.finalobj);
	}

	return {
		get : get,
		post : post
	}
	
};

module.exports = bookController;