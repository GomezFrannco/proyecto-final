const UserDAO = require("../../services/users/dao.users");
const { log } = require("../../utils/log4js.utils");

class UserPostHandlers {
  async createUserHandler(req, res) {
    const body = req.body;
    try {
      const user = await new MongoUserDAO().createUser(body);
      // Le asignamos un carrito al usuario.
      await new MongoCartDAO().createCart(user._id);
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
      log.file.error(error?.message);
      return res.status(500).send(error);
    }
  }
  async verifyUserHandler(req, res) {
    try {
    } catch (error) {}
  }
}

class GetUsersHandlers {
  async getCurrentUserHandler(_req, res) {
    return res.status(200).json({
      Response: res.locals.user
    })
  }
}

module.exports = {
  handlers: {
    post: new UserPostHandlers(),
    get: new GetUsersHandlers(),
  },
};
