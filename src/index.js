const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Listening on all routers
const Weather = require('./routers/weather');
app.use(Weather);
require('./utils/news');

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
