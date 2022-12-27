const { Schema, model } = require("mongoose");

const cartModel = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    products: [{
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    }],
  },
  {
    timestamps: true,
  }
);

const CartModel = new model("Cart", cartModel);

module.exports = CartModel;
