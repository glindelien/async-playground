const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Config Files
const API_KEY = require('./airNowApiKey.js');
const db = require('../database/queryHandlers.js');

const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Endpoints
const airNowURL = 'https://airnowapi.org';
const currentAqi = '/aq/observation/zipCode/current';

app.post('/api/getAqiByZip', (req, res) => {
  console.log('Fetching AQI data for ' + req.body.zipCode);
  // Extract user inputted zip code
  const zipCode = req.body.zipCode;
  const params = `?zipCode=${zipCode}&api_key=${API_KEY}&format=JSON`;
  // Fetch AQI data from AirNow API
  axios.get(airNowURL + currentAqi + params)
  .then((result) => {
    res.send(result.data);
  })
  .catch((err) => {
    console.log(err);
  });
});

app.listen(port, () => {
  console.log(`Awaire is listening at http://localhost:${port}`);
});
