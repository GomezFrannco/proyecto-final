const { UserModel } = require("../../models/user.models");
const UserDTO = require("./dto.users");

class UserDAO { // User CRUD
  static async CreateUser(input) {
    const user = await UserModel.create(input);
    const DTOUser = new UserDTO(user); 
    return DTOUser.toJSON();
  }
  static async GetAllUsers() {
    const users = await UserModel.find();
    const DTOUsers = users.map(user => new UserDTO(user));
    return DTOUsers.map(user => user.toJSON()); 
  }
  static async GetUserById(id) {
    const user = await UserModel.findById(id);
    const DTOUser = new UserDTO(user);
    return DTOUser.toJSON();
  }
  static async GetUserByEmail(email) {
    const user = await UserModel.findOne({ email });
    const DTOUser = new UserDTO(user);
    return DTOUser.toJSON();
  }
}

module.exports = UserDAO;
