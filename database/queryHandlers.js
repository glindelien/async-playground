const db = require('./index.js');

const getAllTasks = (callback) => {
  const queryStr = 'SELECT * FROM todos';
  db.query(queryStr, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Data: ', data);
      db.end(() => {
        console.log('MySQL Connection Closed');
      });
    }
  });
};

module.exports = {
  getAllTasks
};
