const express = require('express')
const connection = require('../../helpers/connect.js')
const router = express.Router()

router.get('/candidats', (req, res) => {
  connection.query(`SELECT * FROM candidat`, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.send({ results })
    }
  })
})

router.get('/candidat/:id', (req, res) => {

  const id = req.params.id

  connection.query(`SELECT FROM candidat WHERE idcandidat = ? `, [id], (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.send({ results })
    }
  })
})

router.delete('/candidats/:id', (req, res) => {

  const id = req.params.id

  connection.query(` DELETE FROM candidat WHERE idcandidat = ? `, [id], (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.send({ results })
    }
  })
})

module.exports = router