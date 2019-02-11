const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
	// Get auth header value
	const header = req.headers['authorization']
if (typeof header !== 'undefind'){
	const bearer = header.split(' ')
	const token = bearer[1]

	req.token = token

	next()
}else{
	res.sendStatus(403)
}
}
module.exports = verifyToken
