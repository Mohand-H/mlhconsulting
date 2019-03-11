const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
require('dotenv').config()



router.post('/form', (req, res) => {
    console.log('req body:', req.body)
    const emailing = req.body.email
    const htmlEmail = `
        <h3>Details du contact:</h3>
        <ul>
            <li>Nom: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Sujet: ${req.body.subject}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.text}</p>
        `
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.emailTest, // generated ethereal user
            pass: process.env.emailPassword
        }
    })

    // setup email data with unicode symbols
    let mailOptions = {
        from: emailing,// sender address
        to: process.env.emailTest, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.text,// plain text body
        html: htmlEmail // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('Email envoyer')
        } 
    })
})

module.exports = router