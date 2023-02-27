const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('', (req, res) => {
  res.send(`Hello World!....
  I'm KIWI, a news API that was developed by VINAY KISHORE`);
});

// Listening on all routers
const Updates = require('./routers/updates');
app.use(Updates);

const News = require('./routers/news');
app.use(News);

// app.get('*', (req, res) => {
//   res.status(404).send({
//     title: 'Error 404',
//     name: 'Error Page detected',
//     errorMessage: 'Article not found',
//   });
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
