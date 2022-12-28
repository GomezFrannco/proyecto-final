const UserDAO = require("../../services/users/dao.users");
const { log } = require("../../utils/log4js.utils");

class PostUserHandler {
  static async CreateUserHandler(req, res) {
    const userData = req.body;
    try {
      const newUser = await UserDAO.CreateUser(userData);
      return res.status(201).json({
        Response: {
          Message: "User successfully created!",
          user: newUser,
        },
      });
    } catch (error) {
      if (error.code == 11000) {
        return res.status(400).json({
          Error: {
            Message: "Email is already in use!",
          },
        });
      }
      log.file.error(error?.message);
      log.console.error(error?.message);
      return res.status(500).send(error);
    }
  }
}

class GetUserHandler {
  static async GetCurrentUserHandler(_req, res) {
    return res.status(200).json({
      Response: res.locals.user
    })
  }
}

module.exports = {
  get: GetUserHandler,
  post: PostUserHandler,
};
