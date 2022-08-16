const jwt = require("jsonwebtoken");
const config = require("config");

function signJwt(payload, keyName) {
  const signingKey = Buffer.from(config.get(keyName), "base64").toString("ascii");
  return jwt.sign(payload, signingKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

function verifyJwt(token, keyName) {
  const publicKey = Buffer.from(config.get(keyName), "base64").toString("ascii");
  try {
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
