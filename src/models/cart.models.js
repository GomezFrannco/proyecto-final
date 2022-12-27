const { Schema, model } = require("mongoose");
const { productModel } = require("./product.models");
const { userModel } = require("./user.models");

const cartModel = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true
    },
    products: {
      type: [productModel],
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

const CartModel = new model("Cart", cartModel);

module.exports = CartModel;
