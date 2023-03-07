const axios = require('axios');
const key = process.env.NEWSKEY;

async function getNewsByQuery(query) {
  try {
    if (!query) return undefined;

    url =
      'https://gnews.io/api/v4/search?q=' +
      query +
      '&lang=en&max=10&apikey=' +
      key;

    data = await axios({
      method: 'get',
      url,
    });

    return data.data;
  } catch (e) {
    throw new Error(e);
  }
}

async function getNewsByCategory(category) {
  try {
    if (!category) return undefined;

    url =
      'https://gnews.io/api/v4/top-headlines?category=' +
      category +
      '&lang=en&max=10&apikey=' +
      key;

    data = await axios({
      method: 'get',
      url,
    });

    return data.data;
  } catch (e) {
    throw new Error(e);
  }
}

// getnews("Hyderabad")

module.exports = {
  getNewsByQuery,
  getNewsByCategory,
};
