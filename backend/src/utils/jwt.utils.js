const jwt = require("jsonwebtoken");
const config = require("config");

function signJwt(payload, keyName, options) {
  // Creamos un buffer para usarlo como secret
  const signingKey = Buffer.from(config.get(keyName), "base64").toString("ascii");
  // Registramos o creamos el token
  return jwt.sign(payload, signingKey, {
    ...(options && options), // Las opciones de los parametros.
    algorithm: "RS256",
  });
}

function verifyJwt(token, keyName) {
  // Creamos un buffer para usarlo como secret.
  const publicKey = Buffer.from(config.get(keyName) , "base64").toString("ascii");
  try {
    // Verificamos que el token recibido sea correcto.
    const decoded = jwt.verify(token, publicKey);
    return decoded;
  } catch (error) {
    return null;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
}
