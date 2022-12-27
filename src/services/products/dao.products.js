const { ProductModel } = require("../../models/product.models");
const ProductDTO = require("./dto.products");

class ProductDAO { // Product CRUD
  static async CreateProduct(input) {
    const product = await ProductModel.create(input);
    const DTOProduct = new ProductDTO(product);
    return DTOProduct.toJSON();
  }
  static async GetAllProducts() {
    const products = await ProductModel.find();
    const DTOProducts = products.map(product => new ProductDTO(product));
    return DTOProducts.map(product => product.toJSON())
  }
  static async GetProductById(id) {
    const product = await ProductModel.findById(id);
    const DTOProduct = new ProductDTO(product);
    return DTOProduct.toJSON();
  }
  static async UpdateProduct(id, input) {
    return await ProductModel.findByIdAndUpdate(id, input, {
      returnDocument: "after",
    });
  }
  static async DeleteProduct(id) {
    return await ProductModel.findByIdAndDelete(id);
  }
}

module.exports = ProductDAO;
