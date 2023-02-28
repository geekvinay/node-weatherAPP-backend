const url = process.env.MONGODB_URL;
const mongoose = require('mongoose');

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
