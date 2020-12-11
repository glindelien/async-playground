const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/queryHandlers.js');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/api/getAqiByZip', (req, res) => {
  console.log(req.body);
  res.send();
});

app.listen(port, () => {
  console.log(`Awaire listening at http://localhost:${port}`);
});
