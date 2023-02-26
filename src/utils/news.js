const axios = require('axios');
const key = process.env.NEWSKEY;

async function getnews(city) {
  url =
    'https://gnews.io/api/v4/search?q=' +
    city +
    '&lang=en&max=10&apikey=' +
    key;

  data = await axios({
    method: 'get',
    url,
  });

  return data.data;
}

// getnews("Hyderabad")

module.exports = getnews;
