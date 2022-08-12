require('../src/utils/dotenv.utils.js');

module.exports = {
  server: {
    port: process.env.PORT
  },
  mongodb: {
    uri: process.env.MONGO_URI,
    db: process.env.DB_NAME
  },
  mailer: {
    port: process.env.MAILER_PORT,
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS
  },
}