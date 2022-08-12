const { createUserSchema } = require("../../schemas/user.schemas");
const MongoUserDAO = require("../../services/users/dao.users");
const { log } = require("../../utils/log4js.utils");

class UserPostHandlers {
  async createUserHandler(req, res) {
    const body = req.body;
    try {
      await createUserSchema.validate(body, {
        abortEarly: true,
      });
      await new MongoUserDAO().createUser(body)
      return res.status(201).json({
        Response: {
          Message: "User successfully created!",
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
      if (error.errors.length > 0) {
        return res.status(400).json({
          Error: {
            Path: error?.path,
            Message: error?.message,
          },
        });
      }
      log.file.error(error?.message);
      return res.status(500).send(error);
    }
  }
  async verifyUserHandler(req, res) {
    try {
      
    } catch (error) {
      
    }
  }
}

module.exports = {
  handlers: {
    post: new UserPostHandlers(),
  },
};
