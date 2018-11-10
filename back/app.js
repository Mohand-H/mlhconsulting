const express = require('express');
const bodyParser = require('body-parser');
const ShowHome = require('./routes/homePage/home.js');
const ShowAboute = require('./routes/abouteUs/aboute.js');
const ShowNeed = require('./routes/needs/need.js');
//const ShowSolution = require('./routes/solutions/resolv.js');
const ShowContact = require('./routes/contactUs/contact.js');
const app = express(); 
const PORT = 5050

/////////////////////Middleware/////////////////
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/////////////////////Routing////////////////////
app.use('/page', ShowHome)
app.use('/aboute', ShowAboute)
app.use('/need', ShowNeed)
//app.use('/solution', ShowSolution)
app.use('/contact', ShowContact)


/////////////////////Routes/////////////////////
app.get('/',(req, res)=>{
    res.send('Projet Mlh Consulting')
})

//////////////////////port server///////////////
app.listen(PORT, console.log(`j'ecoute sur le port ${PORT}`))