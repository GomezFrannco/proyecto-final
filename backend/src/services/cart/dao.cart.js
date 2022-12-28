const CartModel = require("../../models/cart.models");

class MongoCartDAO {// Cart CRUD with mongoDB
  constructor() {
    this.model = CartModel; // Mongoose model
  }
  async createCart(id) {
    return await this.model.create({ user: id });
  }
  async addProductToCart(id, input) {
    const cart = await this.getCartByUserId(id);
    if (!cart) {
      throw new Error("Unavailable cart");
    }
    return await cart.products.push(input);
  }
  async getCartByUserId(id) {
    return await this.model.findOne({ user: id });
  }
  async getCartById(id) {
    return await this.model.findById(id);
  }
  async removeProductFromCart(id) {
    return await this.model.products.pull(id);
  }
}

module.exports = MongoCartDAO;
