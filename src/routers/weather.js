const express = require('express');
const router = express.Router();
const getForecast = require('../utils/forcast');
const getLocation = require('../utils/geocode');
const getNews = require('../utils/news');

router.get('/weather/:city', async (req, res) => {
  city = req.params.city;
  try {
    let location = await getLocation(city);
    let weather = await getForecast([location['lat'], location['lon']]);
    let news = await getNews([location['name']]);

    console.log(location, weather, news);

    // Sending the response back to the request
    res.status(400).send({
      location,
      weather,
      news,
    });
  } catch (err) {
    // throw new Error(err);
  }
});

module.exports = router;
