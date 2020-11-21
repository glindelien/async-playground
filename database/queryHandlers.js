const db = require('./index.js');

const getAllTasks = (callback) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM todos';
    db.query(sql, (err, data) => {
      if (err) {
        return reject(err);
      } else {
        resolve(data);
      }
      db.end(() => {
        console.log('MySQL Connection Closed');
      });
    });
  });

  // ERROR FIRST CALLBACK PATTERN

  // db.query(queryStr, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('Data: ', data);
  //     db.end(() => {
  //       console.log('MySQL Connection Closed');
  //     });
  //   }
  // });

};

module.exports = {
  getAllTasks
};
