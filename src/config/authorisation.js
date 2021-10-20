const { Resp } = require("src/helpers")
const jwt = require('jsonwebtoken');



// Check if the token is valid or invalid
const authenticate = async (req, res, next) => {
	try{
		const token = req.headers.authorization.split("Bearer ")[1]; // pass the token in header authorization with Bearer
		const decoded = jwt.verify(token, process.env.JWT_SECRET); // decode and verify by entered token and jwt secreate key
		req.userData = decoded; // userdata requesting and decode the token
		next();
	}catch(error){
		return Resp.authFailed(res,"Authorization Failed");
	}

}

module.exports = {
	authenticate
  };










