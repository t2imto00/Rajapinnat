const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'Eka',
  password: 'xxxx',
  database: 'rp_db'
});
module.exports = connection;