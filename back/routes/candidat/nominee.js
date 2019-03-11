const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const connection = require('../../helpers/connect.js')
const router = express.Router()
const VerifToken = require('../../middleware/verifToken.js')
const jwt = require('jsonwebtoken')


router.put('/candidat', VerifToken, (req, res) => {

  jwt.verify(req.token, process.env.SECRET_OR_KEY, (err, DATA) => {

    if (err) {
      res.sendStatus(403)
    } else {

      connection.query(`
            UPDATE candidat 
            SET name = ?, 
                first_name = ?, 
                birth_date = ?, 
                phone_number = ?,
                address = ?, 
                postal_code = ?,
                town = ?,
                message = ?,
                cv = ?
            WHERE 
                idcandidat= ?`, [
          req.body.name,
          req.body.first_name,
          req.body.birth_date,
          req.body.phone_number,
          req.body.address,
          req.body.postal_code,
          req.body.town,
          req.body.message,
          req.body.cv,
          DATA.idcandidat

        ], (err, results) => {
          if (err) {
            res.send(err);
          } else {
            return res.send({
              results
            })
          }
        }
      )
    }
  })
})

module.exports = router

