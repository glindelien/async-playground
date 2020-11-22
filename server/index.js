const express = require('express');
const db = require('../database/queryHandlers.js');

const app = express();
const port = 3000;

app.get('/api/todos', (req, res) => {
  db.getAllTasks()
    .then((todos) => {
      console.log('Sending Tasks to Client!');
      res.status(200);
      res.send(todos);
    })
    .catch((err) => {
      res.status(500);
      res.send();
    })
});

app.listen(port, () => {
  console.log(`Async Playground listening at http://localhost:${port}`);
});
