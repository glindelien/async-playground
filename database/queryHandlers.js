const db = require('./index.js');

const getAllTasks = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM todos';
    db.query(sql, (err, data) => {
      if (err) {
        return reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = {
  getAllTasks
};
