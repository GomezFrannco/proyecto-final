require('../src/utils/dotenv.utils.js');

module.exports = {
  server: {
    port: process.env.PORT,
    url: process.env.URL,
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
  accessTokenPrivateKey: process.env.ACCESS_PRIVATE_KEY,
  refreshTokenPrivateKey: process.env.REFRESH_PRIVATE_KEY,
  accessTokenPublicKey: process.env.ACCESS_PUBLIC_KEY,
  refreshTokenPublicKey: process.env.REFRESH_PUBLIC_KEY,
}