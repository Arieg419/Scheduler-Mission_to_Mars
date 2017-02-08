var express = require('express');
var bodyParser = require('body-parser');
var PythonShell = require('python-shell');
var app = express();
var PORT = 3000;


var middleware = require('./middleware.js');

app.use(middleware.logger);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

// Root of server
app.get('/', function(req,res) {
	console.log("Pinging server root...");
	res.send('Pinging server root...');
});

// Getting data to fill out calendar
app.get('/solve', function(req,res) {
	console.log("Solving problem...");
	PythonShell.run('../examples/demos/final.py', function (err, results) {
	  if (err) throw err;
	  console.log('Solving problem, results: %j', results);
	});
	res.send('Answer');
});


// Adding new soft constraints
app.post('/addConstraint', function(req, res) {
	console.log("req.body is ", req.body);

	if(req.body.constraintType !== "shiftProblem" && req.body.constraintType !== "shiftLove")
		var constraint = req.body.constraintType + " " + req.body.worker1 + " " + req.body.worker2 + "\n";
	else 
		var constraint = req.body.constraintType + " " + req.body.worker1 + " " + req.body.day + " " + req.body.shift + "\n";

	middleware.processInput(constraint);
	res.json({"foo": "bar"});  
});

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});