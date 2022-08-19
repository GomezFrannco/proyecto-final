const { verifyJwt } = require("../utils/jwt.utils");

const deserializeUser = (req, res, next) => {
  // Recuperamos el token del header
  const accessToken = (req.headers.authorization || "").replace(/^Bearer\s/, "");
  if(!accessToken) {
    return next();
  }
  const decoded = verifyJwt(accessToken, "accessTokenPublicKey");
  if (decoded) {
    // Guardamos la verificación en una variable local
    // para que sea utilizada en otro middleware (scope: request/response)
    res.locals.user = decoded;
  }
  return next();
}

module.exports = deserializeUser;
