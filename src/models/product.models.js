const { Schema, model } = require("mongoose");
const { nanoid } = require("nanoid");

const productModel = new Schema(
  {
    productName: {
      type: String,
      trim: true,
      required: true,
    },
    productCode: {
      type: String,
      default: () => nanoid(6),
    },
    thumbnail: {
      type: [String],
      trim: true,
      required: true,
      default: "uploads/default-image.png",
    },
    category: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      default: ()=> "This product doesn't have any description",
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = new model("Products", productModel);

module.exports = {
  productModel,
  ProductModel
};
