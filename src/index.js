const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
require('./database/mongoose');

app.use(cors());
app.use(express.json());

app.get('', (req, res) => {
  res.send(`Hello World!....
  I'm KIWI, a news project that was developed by VINAY KISHORE`);
});

// Listening on all routers
const Updates = require('./routers/updates');
const News = require('./routers/news');

app.use(Updates);
app.use(News);

app.get('*', (req, res) => {
  res.status(404).send({
    title: 'Error 404',
    name: 'Error Page detected',
    errorMessage: 'Article not found',
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
