const express = require('express');
var bodyParser = require('body-parser');

var userRoutes = require('./routes/user');
var productsRoutes = require('./routes/products');
var db = require('./db');

const app = express();

const port = process.env.PORT || 8080;

/* http://localhost:8080/login 
http://localhost:8080/register */

/* http://localhost:8080/user/login
http://localhost:8080/user/register
http://localhost:8080/user/forgot */

app.use(bodyParser()); //every request needs to parsed
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

function isSessionValid(req, res, next) {
	if(req.session.isValid){
		next();
	}
	else {
		res.json({message: "user sessaion expired"});
	}
}

app.use('/user', userRoutes);

app.use('/products',  productsRoutes);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

app.listen(port, () => {
	console.log('App running on port %s', port);
});