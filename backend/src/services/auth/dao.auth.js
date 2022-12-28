const { omit } = require("lodash");
const SessionModel = require("../../models/session.models");
const { privateFields } = require("../../models/user.models");
const { signJwt } = require("../../utils/jwt.utils");

class MongoSessionDAO {
  constructor() {
    this.model = SessionModel;
  }
  async createSession({ userId }) {
    return this.model.create({ user: userId });
  }
  async signRefreshToken({ userId }) {
    const session = await this.createSession({ userId });
    const refreshToken = signJwt({ session: session._id }, "refreshTokenPrivateKey", { expiresIn: "1y" });
    return refreshToken;
  }
  async signAccessToken(user) {
    const payload = omit(user.toJSON(), privateFields);
    const acessToken = signJwt(payload, "accessTokenPrivateKey", { expiresIn: "15m" });
    return acessToken;
  }
  findSessionById(id) {
    return this.model.findById(id);
  }
}

module.exports = MongoSessionDAO;
