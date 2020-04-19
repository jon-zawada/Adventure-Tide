const express = require('express');
const app = express();
const unirest = require("unirest");
const path = require('path');
const port = 3000;
const config = require('../config.js');

app.use('/', express.static(path.join(__dirname, '/../client/dist')));

app.get('/tides', (req, res) => {
  // console.log(req.query);
	const lat = req.query.latitude;
	const long = req.query.longitude;
  const uniReq = unirest('GET', 'https://tides.p.rapidapi.com/tides');
  uniReq.query({
    latitude: lat,
    longitude: long
  });

  uniReq.headers({
    'x-rapidapi-host': 'tides.p.rapidapi.com',
    'x-rapidapi-key': config.token
  });

  uniReq.end((uniRes) => {
    if (uniRes.error) throw new Error(uniRes.error);

    res.send(uniRes.body);
  });
});


app.listen(port, () => console.log(`MVP listening at http://localhost:${port}`));
