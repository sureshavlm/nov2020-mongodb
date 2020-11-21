const express = require('express');
const router = express.Router(); //sub-routing
var User = require('../model/user'); //ORM
var sendGridModule = require('../util/sendgrid');


router.post('/login', (req, res) => {
	User.findOne({ "username": req.body.username }, (err, result) => {
		if(err){
			res.json({message: "Error while login", status: 500});
		}
		else if(result == null){
			res.json({message: "Error while login", status: 500});
		}
		else if(result.password != req.body.password){
			res.json({message: "Username or Password is wrong", status: 500});
		}
		else {
			res.json({status: 200, data: result});
		}
	});
});

/*http://localhost:8080/user/register */
router.post('/register', (req, res) => {
	var new_user = new User();//create an object
	new_user.username = req.body.username;
	new_user.password = req.body.password;
	new_user.email = req.body.email;

	console.log("******** ");

	new_user.save(function(err, result) {
		console.log('**** Entered into save ****');
		if(err || result == null){
			console.log('**** Entered into save if part ****');
			res.json({status: 500, message: 'Error while inserting data'});
		}
		else {
			console.log('**** Entered into save else part ****');
			sendGridModule.sendEmail(result.email, result.username);
			res.json({status: 200, data: result});
		}
	});

	console.log('**** End of save ****');
});

router.post('/forgot', (req, res) => {

});

module.exports = router;

