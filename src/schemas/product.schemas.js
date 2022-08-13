const { object, string, number } = require("yup");

const createProductSchema = object({
  productName: string().required("Product name is required"),
  category: string().required("Category is required"),
  description: string().min(10).max(180).default("This product doesn't have any description"),
  price: number().positive("It can't be a negative number").required("Price is required"),
  stock: number().positive("It can't be a negative number").required("Stock is required"),
});

const updateProductSchema = object({
  productName: string(),
  category: string(),
  description: string().min(10).max(180),
  price: number().positive("It can't be a negative number"),
  stock: number().positive("It can't be a negative number"),
})

module.exports = {
  createProductSchema,
  updateProductSchema,
};
