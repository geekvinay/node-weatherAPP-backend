const mongoose = require('mongoose');
const url = process.env.MONGO_URL;

const schema = mongoose.schema({
  userID: String,
  name: {
    first : String,
    last : String,
    },
  
});
