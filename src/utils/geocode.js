const axios = require('axios');
const { response } = require('express');
const { get } = require('request');
const key = process.env.APIKEY;

async function getLocation(city, callback) {
  console.log(key, city);

  const url =
    'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + key;

  const location = await axios({
    method: 'get',
    url: url,
  });

  const response = {
    name: location['data'][0]['name'],
    lat: location['data'][0]['lat'],
    lon: location['data'][0]['lon'],
    country: location['data'][0]['country'],
    state: location['data'][0]['state'],
  };
  callback(undefined, response);
  return 0;
}

getLocation('Hyderabad', (error, data) => {
  console.log(data);
});

module.exports = getLocation;
