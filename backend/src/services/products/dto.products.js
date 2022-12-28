class ProductDTO {
  constructor(Product) {
    this.id = Product.id
    this.name = Product.productName;
    this.category = Product.category;
    this.price = Product.price;
    this.description = Product.description;
    this.stock = Product.stock;
    this.code = Product.productCode;
    this.thumbnail = Product.thumbnail;
  }
  toJSON() { // POJO
    return {
      id: this.id,
      name: this.name,
      category: this.category,
      price: this.price,
      description: this.description,
      stock: this.stock,
      code: this.code,
      thumbnail: this.thumbnail,
    };
  }
}

module.exports = ProductDTO;
