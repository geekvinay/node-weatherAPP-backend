const apiKey = process.env.APIKEY;
const { default: axios } = require('axios');

async function getWeather(callback, [lat, lon]) {
  try {
    const url =
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
      lat +
      '&lon=' +
      lon +
      '&appid=' +
      apiKey;

    const weather = await axios({
      method: 'get',
      url,
    });

    callback(undefined, weather['data']);
  } catch (e) {
    throw new Error(e);
  }
  return;
}

// getWeather(
//   (err, data) => {
//     console.log(data);
//   },
//   [28.6517178, 77.2219388]
// );

module.exports = getWeather;
