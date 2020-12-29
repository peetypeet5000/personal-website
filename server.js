//import modules and
var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require('express');
var exphbs = require('express-handlebars');

//setup express
var app = express();
var port = 3000;


//setup templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//stores received json in req.body
app.use(express.json());

//serves static files in /public
app.use(express.static('public'));

 //redirects http requests to https
 app.use (function (req, res, next) {
	//print req to console for tracking
	var currDate = new Date;
	console.log("== Request Received. IP:", req.ip, " Time:", currDate.toLocaleString(), " URL:", req.url);
});

/**********************
 * MIDDLEWARE FUNCTIONS*
 **********************/

//serve the main page
app.get('/', function (req, res) {
	res.status(200).render('index', {
		title: "Index - Peter LaMontagne",
	});
});


//serve the projects page
app.get('/projects', function (req, res) {
	res.status(200).render('projects', {
		title: "Projects - Peter LaMontagne",
	});
});


//404 page
app.get('*', function (req, res) {
	res.status(404).render('404', {
		url: req.url,
		title: '404 - Page not found'
	});
});

//create server
const httpServer = http.createServer(app);

//start the server
httpServer.listen(port, function () {
	console.log("== HTTP Server is listening on port", port);
});
