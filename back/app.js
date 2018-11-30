const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
// const ShowHome = require('./routes/homePage/home.js');
// const ShowAboute = require('./routes/abouteUs/aboute.js');
// const ShowNeed = require('./routes/needs/need.js');
//const ShowSolution = require('./routes/solutions/resolv.js');
const SendForm = require('./routes/contactUs/Form.js');
const app = express(); 

const PORT = process.env.PORT | 3001

/////////////////////Middleware/////////////////
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



/////////////////////Routing////////////////////
// app.use('/page', ShowHome)
// app.use('/aboute', ShowAboute)
// app.use('/need', ShowNeed)
//app.use('/solution', ShowSolution)
app.use('/contact', SendForm)


/////////////////////Routes/////////////////////
app.get('/',(req, res)=>{
    res.send('Projet Mlh Consulting')
})

//////////////////////port server///////////////
app.listen(PORT, console.log(`j'ecoute sur le port ${PORT}`))