const { get } = require("lodash");
const MongoSessionDAO = require("../../services/auth/dao.auth");
const MongoUserDAO = require("../../services/users/dao.users");
const { verifyJwt } = require("../../utils/jwt.utils");
const { log } = require("../../utils/log4js.utils");

class SessionPostHandlers {
  async createSessionHandler (req, res) {
    const { email, password } = req.body;
    try {
      const newUser = new MongoUserDAO();
      const user = await newUser.getUserByEmail(email);
      if(!user) {
        return res.status(401).json({
          Error: {
            Message: "Invalid email",
            Code: 401
          },
        });
      };
      const isValid = await user.validatePassword(password);
      if(!isValid) {
        return res.status(401).json({
          Error: {
            Message: "Invalid password",
            Code: 401
          },
        });
      };
      const newSession = new MongoSessionDAO();
      const accessToken = await newSession.signAccessToken(user);
      const refreshToken = await newSession.signRefreshToken({userId: user._id});
      return res.status(200).json({
        Response: {
          Message: {
            accessToken,
            refreshToken,
          },
        },
      });
    } catch (error) {
      log.file.error(error.message)
      return res.status(500).json({
        Error: {
          Message: error.message,
        },
      });
    }
  }
  async refreshAccessTokenHandler (req, res) {
    try {
      const refreshToken = get(req, 'headers.x-refresh');
      const decoded = verifyJwt(String(refreshToken), "refreshTokenPublicKey");
      if (!decoded) {
        return res.status(401).json({
          Response: {
            Message: "Couldn't refresh token",
          },
        })
      }
      const newSession = new MongoSessionDAO();
      const session = await newSession.findSessionById(decoded.session);
      if (!session || !session.valid) {
        return res.status(401).json({
          Response: {
            Message: "Couldn't refresh token",
          },
        });
      }
      const user = await new MongoUserDAO().getUser(String(session.user));
      const accessToken = await newSession.signAccessToken(user);
      return res.status(200).json({
        Response: {
          Message: {
            accessToken,
          },
        },
      });
    } catch (error) {
      log.file.error(error.message)
      return res.status(500).json({
        Error: {
          Message: error.message,
        },
      });
    }
  }
}

module.exports = {
  handlers: {
    post: new SessionPostHandlers(),
  },
};
