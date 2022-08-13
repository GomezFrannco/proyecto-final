class ProductDTO {
  constructor() {
    this.thumbnail = undefined;
    this.productName = undefined;
    this.description = undefined;
    this.price = undefined;
    this.stock = undefined;
  }
  setPicture(input) {
    this.thumbnail = input;
  }
  getPicture() {
  return this.thumbnail;    
  }
  setName(input) {
    this.productName = input;
  }
  getName() {
    return this.productName;
  }
  setDescription(input) {
    this.description = input
  }
  getDescription() {
    return this.description;
  }
  setPrice(input) {
    this.price = input;
  }
  getPrice() {
    return this.price;
  }
  setStock(input) {
    this.stock = input;
  }
  getStock() {
    return this.stock;
  }
}

module.exports = ProductDTO;
