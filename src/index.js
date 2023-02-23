const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Utilities Testing
require('./utils/geocode');
require('./utils/weather');

// Listening on all routers
const Weather = require('./routers/weather');
app.use(Weather);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
