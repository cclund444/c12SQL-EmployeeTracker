// this is where I will copy and paste boiler plate code (find in module work) whatever is in connection.js
// add my sql info

const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'election'
});

conn.connect(err => {
    if(err) throw err
})

module.exports = conn;