const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./database/mongoose');
require('./auth/userAuth');

app.use(express.json());

app.get('', (req, res) => {
  res.send(`Hello World!....
  I'm KIWI, a news project that was developed by VINAY KISHORE`);
});

// Listening on all routers
const Updates = require('./routers/updates');
const News = require('./routers/news');
const userAuth = require('./routers/login');

app.use(Updates);
app.use(News);
app.use(userAuth);

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
