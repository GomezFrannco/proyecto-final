const CartModel = require("../../models/cart.models");

class CartDAO {// Cart CRUD with mongoDB
  async createCart(id) {
    return await CartModel.create({ user: id });
  }
  async addProductToCart(id, input) {
    const cart = await this.getCartByUserId(id);
    if (!cart) {
      throw new Error("Unavailable cart");
    }
    return await cart.products.push(input);
  }
  async getCartByUserId(id) {
    return await CartModel.findOne({ user: id });
  }
  async getCartById(id) {
    return await CartModel.findById(id);
  }
  async removeProductFromCart(id) {
    return await CartModel.products.pull(id);
  }
}

module.exports = CartDAO;
