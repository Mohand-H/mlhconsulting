const mysql = require('mysql')

//////////////creat connection/////////////

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_mlhconsulting',
    password:''
})

connection.connect(err =>{
    if(err)throw err
    console.log('DB connected !')
}) 
module.exports = connection