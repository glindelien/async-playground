const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Config Files
const API_KEY = require('./airNowApiKey.js');
// const db = require('../database/mysql/queryHandlers.js');

const app = express();
const port = 80;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Endpoints
const airNowURL = 'https://airnowapi.org';
const currentAqi = '/aq/observation/zipCode/current';

app.post('/api/zipCode', (req, res) => {
  console.log('Fetching AQI data for ' + req.body.zipCode);
  // Extract user inputted zip code
  const zipCode = req.body.zipCode;
  const params = `?zipCode=${zipCode}&api_key=${API_KEY}&format=JSON`;
  // Fetch AQI data from AirNow API
  axios.get(airNowURL + currentAqi + params)
  .then((result) => {
    if (result.data.length === 0) throw 'No Data Found';
    console.log('Sending data to client...');
    res.status(200);
    res.send(result.data);
  })
  .catch((err) => {
    console.log('Error: No data could be found...');
    res.status(500);
    res.send(err);
  });
});

app.listen(port, () => {
  console.log(`Awaire is listening at http://localhost:${port}`);
});
