const dotenv = require('dotenv');

dotenv.config({
  path: "./env/.env.local"
})

module.exports = dotenv;
