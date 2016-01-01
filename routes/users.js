var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/authenticate', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	if (username == "batman" && password == "1234") {
		//Return the User
		var user = {
			id: 1,
			name: "Batman",
			username: username,
			password: "1234",
			email: "batman@superhero.com",
			isActive: true,
			insertDate: new Date()
		}
		res.status(200).send(user);

	} else {		
		res.status(400).send({errorMessage: "Username and/or Password do not exist"});	
	}
  	
});

module.exports = router;
