const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');




router.post('/contact', (req, res)=>{
    console.log(req.body)
    const emailing = req.body.email

    // Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    const htmlEmail=`
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Name: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'gmail.com',
		port: 587,
        secure: false,
        auth: {
            user: process.env.emailTest, // generated ethereal user
			pass: process.env.emailPassword// generated ethereal password
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: emailing, // sender address
        to: process.env.emailTest, // list of receivers
        subject: 'New message', // Subject line
        text: req.body.message, // plain text body
        html: htmlEmail // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        
    });
});


})


module.exports = router; 

