const express = require('express');
const router = express.Router();
const { getNewsByCategory, getNewsByQuery } = require('../utils/news');

// Get news by query string
router.get('/news/query/:query', async (req, res) => {
  console.log('Got a new request on news query');
  try {
    query = req.params.query;
    if (!query) res.status(404).send('There is no query string');

    data = await getNewsByQuery(query);
    res.send(data);
  } catch (e) {
    throw new Error(e);
  }
});

router.get('/news/category/:category', async (req, res) => {
  try {
    //   general, world, nation, business, technology, entertainment, sports, science and health.
    category = req.params.category;
    if (!category) res.status(404).send('There is no query string');

    data = await getNewsByCategory(category);
    res.send(data);
  } catch (e) {
    throw new Error(e);
  }
});

module.exports = router;