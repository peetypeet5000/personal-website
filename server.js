//import modules and ata
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


//serve the main page
app.get('/', function (req, res) {
	res.status(200).render('index', {
		title: "Index - Peter LaMontagne"
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
const server = app.listen(port, function () {
	console.log("== Server is listening on port", port);
});

