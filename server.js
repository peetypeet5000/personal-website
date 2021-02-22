//import modules and
var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require('express');
var exphbs = require('express-handlebars');

//get project JSON
var projectData = require('./projects.json');

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
	next();
});

/**********************
 * MIDDLEWARE FUNCTIONS*
 **********************/

//serve the main page
app.get('/', function (req, res) {
	res.status(200).render('index', {
		title: "Peter LaMontagne",
		projects: projectData
	});
});


//404 page
app.get('*', function (req, res) {
	res.status(404).render('404', {
		url: req.url,
		title: '404 - Page not found'
	});
});


//start the server
app.listen(port, function () {
	console.log("== HTTP Server is listening on port", port);
});
