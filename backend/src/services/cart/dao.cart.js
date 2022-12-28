const CartModel = require("../../models/cart.models");

class CartDAO { // Cart CRUD
  static async CreateCart(id, product) {
    return await CartModel.create({ user: id, items: [product]});
  }
  static async AddProductToCart(id, input) {
    const cart = await this.getCartByUserId(id);
    if (!cart) {
      throw new Error("Unavailable cart");
    }
    return await cart.products.push(input);
  }
  static async GetCartByUserId(id) {
    return await CartModel.findOne({ user: id });
  }
  static async GetCartById(id) {
    return await CartModel.findById(id);
  }
  static async RemoveProductFromCart(id) {
    return await CartModel.products.pull(id);
  }
}

module.exports = CartDAO;
