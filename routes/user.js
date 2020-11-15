const express = require('express');
const router = express.Router(); //sub-routing
var User = require('../model/user');


router.post('/login', (req, res) => {
	res.end('Login success');
});

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
			res.json({status: 200, data: result});
		}
	});

	console.log('**** End of save ****');
});

router.post('/forgot', (req, res) => {

});

module.exports = router;

