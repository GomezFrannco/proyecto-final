const ProductModel = require("../../models/product.models");

class MongoProductDAO { // Product CRUD with mongoDB
  constructor() {
    this.model = ProductModel; // Mongoose model
  }
  async createProduct(input) {
    return await this.model.create(input);
  }
  async getAllProducts() {
    return await this.model.find().select({
      thumbnail: true,
      productName: true,
      price: true,
      description: true,
      category: true,
      stock: true,
    });
  }
  async getProductById(id) {
    return await this.model.findById(id);
  }
  async updateProduct(id, input) {
    return await this.model.findByIdAndUpdate(id, input, {
      returnDocument: "after",
    });
  }
  async deleteProduct(id) {
    return await findByIdAndDelete(id);
  }
}

module.exports = MongoProductDAO;
