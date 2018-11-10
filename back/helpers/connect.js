const mysql = require('mysql')
//////////////creat connection/////////////
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mlhconsulting',
    password:''
})
module.exports = connection