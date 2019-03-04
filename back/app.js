const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connection = require('./helpers/connect.js')
const Auth = require('./routes/auth/Login.js')
// const Register = require('./routes/auth/Signup.js')
const ShowProfiles = require('./routes/admin/Admin.js')
const SendForm = require('./routes/contactUs/Form.js')
const app = express();

const PORT = process.env.PORT || 3001

/////////////////////Middleware/////////////////
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



/////////////////////Routing////////////////////

app.use('/auth', Auth)
// app.use('/auth', Register)
app.use('/contact', SendForm)
app.use('/admin', ShowProfiles)


/////////////////////Routes/////////////////////
app.get('/', (req, res) => {
    res.send(`<h1>Projet Mlh Consulting</h1>`)
})

//////////////////////port server///////////////
app.listen(PORT, console.log(`j'ecoute sur le port ${PORT}`))