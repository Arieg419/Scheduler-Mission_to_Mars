// Use module exports to expose middleware
var fs = require('fs');

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	},
	processInput: function( text ) {     
	  fs.open('../examples/demos/data.txt', 'a', 666, function( e, id ) {
	   fs.write( id, text, null, 'ascii', function(){
	    fs.close(id, function(){
	     console.log('file is updated');
	    });
	   });
	  });
	}
};

module.exports = middleware;