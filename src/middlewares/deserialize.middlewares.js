const { verifyJwt } = require("../utils/jwt.utils");

const deserializeUser = (req, res, next) => {
  const accessToken = (req.headers.authorization || "").replace(/^Bearer\s/, "");
  if(!accessToken) {
    return next();
  }
  const decoded = verifyJwt(accessToken, "accessTokenPublicKey");
  if (decoded) {
    res.locals.user = decoded;
  }
  return next();
}

module.exports = deserializeUser;
