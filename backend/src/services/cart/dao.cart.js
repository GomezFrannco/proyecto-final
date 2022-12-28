const CartModel = require("../../models/cart.models");

class CartDAO { // Cart CRUD
  static async CreateCart(id, product) {
    return await CartModel.create({ user: id, items: [product]});
  }
  static async AddProductToCart(id, input) {
    const cart = await this.GetCartByUserId(id);
    if (!cart) {
      throw new Error("Unavailable cart");
    }
    await cart.items.push(input)
    return cart.save();
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
