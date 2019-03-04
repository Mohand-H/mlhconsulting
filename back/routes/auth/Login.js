const dotenv= require('dotenv')
dotenv.config()
const express = require ('express')
const router = express. Router()
const connection = require('../../helpers/connect.js')
const { check, validationResult } = require('express-validator/check')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')


/* POST Register. */

router.post('/signup', [
    // email must be an email
    check('email').isEmail(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 5 })

  ], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    email= req.body.email,
    password= req.body.password
    console.log(email, password)
    
    const sql = `INSERT INTO candidat (email, password) VALUES ( ?,? )` ///////INSERT VALUE MYSQL//////
    bcrypt.hash(password, 5,(err, bcryptedPassword) => {
		// Store hash in your password DB
		connection.query(sql,[ email, bcryptedPassword ]  , (err, result) => {
			if (err) {
				return res.status(500).json({
					flash: err.message
				})
			} else {
				
				res.status(200).json({
					flash: 'Votre profil a bien été enregistré'
				})
			}
		})
	})
})

/* POST login. */

//check email and password must be at least 5 chars long
router.post('/login', [ check('email').isEmail(), check('password').isLength({ min: 5 })], (req, res) => {

  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
  //////check into database if password and mail match //////////////
  const password = req.body.password
	const email = req.body.email
	connection.query('SELECT * FROM candidat WHERE email = ?', [ email ], function(selectError, results, fields) {
		if (selectError) {
			// console.log("error ocurred",error);
			res.send({
				code: 400,
				failed: 'error ocurred'
			})
		} else if (results.length < 1) {
			res.send({
				code: 204,
				failed: 'Email does not exits'
			})
		} else {
			bcrypt.compare(password, results[0].password, function(bcryptError, validPassword) {
				if (!validPassword || bcryptError) {
					res.send({
						code: 204,
						failed: 'Email and password does not match'
					})
				} else {
          /////////token /////////
          
					const myToken = jwt.sign(
						{
							email: results[0].email,
							userID: results[0].id
						},
						process.env.SECRET_OR_KEY || console.error('missing SECRET_TOKEN_KEY env variable!'),
						{
							expiresIn: '6h'
						}
          )
          
            // res.json(myToken)
            // res.status(200).send({
            // 	details: 'user connected'
            // })

					//////////////////////////

					res.header('Access-Control-Expose-Headers', 'x-access-token')
					res.set('x-access-token', myToken)
					res.status(200).send({
						details: 'user connected'
					})
				}
			})
		}
	})











    
    
   
})


module.exports = router 

