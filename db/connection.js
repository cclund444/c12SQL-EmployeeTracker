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