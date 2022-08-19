const { UserModel } = require("../../models/user.models");

class MongoUserDAO { // Users CRUD with MongoDB
  constructor() {
    this.model = UserModel; // Mongoose model
  }
  async createUser(input) {
    return await this.model.create(input);
  }
  async getAllUsers() {
    const users = await this.model.find();
    return users; 
  }
  async getUser(id) {
    const user = await this.model.findById(id);
    return user;
  }
  async getUserByEmail(email) {
    return await this.model.findOne({ email })
  }
}

module.exports = MongoUserDAO;
