const express = require('express')
const connection = require('../../helpers/connect.js')
const router = express.Router()



router.put('/signup/:id', (req, res) => {

    const id = req.params.id
    console.log('ID:',id)

    console.log(req.body.name)
    console.log(req.body.first_name)
    console.log(req.body.birth_date)
    console.log(req.body.phone_number)
    console.log(req.body.address)
    console.log(req.body.postal_code)
    console.log(req.body.town)
    console.log(req.body.message)

    connection.query(
        ` UPDATE candidat 
        SET name = ?, 
        first_name = ?, 
        birth_date = ?, 
        phone_number = ?,
        address = ?, 
        postal_code = ?,
        town = ?,
        message = ?
        WHERE 
        idcandidat = ? `, [
            req.body.name,
            req.body.first_name,
            req.body.birth_date,
            req.body.phone_number,
            req.body.address,
            req.body.postal_code,
            req.body.town,
            req.body.message,
            id
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
})

module.exports = router

