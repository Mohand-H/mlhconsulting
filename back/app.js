const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const SendForm = require('./routes/contact/form.js')
const Auth = require('./routes/auth/login.js')
const MySpace = require('./routes/candidat/nominee.js')
const ShowProfiles = require('./routes/admin/admin.js')

const app = express();

const PORT = process.env.PORT || 3001

/////////////////////Middleware/////////////////
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/////////////////////Routing////////////////////
app.use('/contact', SendForm)
app.use('/auth', Auth)
app.use('/espace', MySpace)
app.use('/admin', ShowProfiles)


/////////////////////Routes/////////////////////
app.get('/', (req, res, next) => {
    res.send(`<h1>Projet Mlh Consulting</h1>`)
})

//////////////////////port server///////////////
app.listen(PORT, console.log(`j'ecoute sur le port ${PORT}`))