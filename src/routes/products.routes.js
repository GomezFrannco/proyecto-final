const { Router } = require("express");
const { get, post, put, del } = require("../controllers/products/controller.products");
const validateResource = require("../middlewares/validations.middlewares");
const { createProductSchema, updateProductSchema } = require("../schemas/product.schemas");

const router = Router();

router.route("/api/products")
  // visualizamos todos los productos disponibles en la base de datos
  .get(get.GetAllProductsHandler)
  // agregamos productos a la base de datos
  .post(validateResource(createProductSchema), post.CreateProductHandler)
router.route("/api/products/:id")
  // visualizamos productos individualmente por su id
  .get(get.GetProductByIdHandler)
  // actualizamos productos por su id
  .put(validateResource(updateProductSchema), put.UpdateProductHandler)
  // borramos productos por su id
  .delete(del.DeleteProductHandler)

module.exports = router;
