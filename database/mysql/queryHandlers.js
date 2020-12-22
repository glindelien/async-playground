const mysql = require('mysql');
const config = require('./config.js');

const mysqlConnection = (callback) => {
  // Open MySQL Connection before every query
  const connection = mysql.createConnection(config);
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
  });
  // Invoke Query Handler [returns a Promise]
  return callback(connection)
    // Close MySQL Connection after every query
    .then((data) => {
      connection.end(() => {
        console.log('Bye!');
      });
      return data;
    });
};

const getAllTasks = () => {
  // Open connection
  return mysqlConnection((con) => {
    // Return Promise w/ DB data
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM todos';
      con.query(sql, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  });
};

module.exports = {
  getAllTasks
};
