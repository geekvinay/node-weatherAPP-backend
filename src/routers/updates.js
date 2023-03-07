const express = require('express');
const router = express.Router();
const getForecast = require('../utils/forcast');
const getLocation = require('../utils/geocode');
const { getNewsByQuery } = require('../utils/news');
const dummyResponse = require('../../dump/dummy.json');
const auth = require("../auth/admin")

router.get('/updates/:city',auth, async (req, res) => {
  console.log('Got a get Request on Updates!!!');
  city = req.params.city;
  try {
    // let location = await getLocation(city);
    // let weather = await getForecast([location['lat'], location['lon']]);
    // let news = await getNewsByQuery([location['name']]);

    // Sending the response back to the request
    res.send(dummyResponse);
    // res.send({
    //   location,
    //   weather,
    //   news,
    // });
  } catch (err) {
    // throw new Error(err);
  }
});

module.exports = router;
