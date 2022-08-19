const { Router } = require("express");
const { handlers } = require("../controllers/products/controller.products");
const validateResource = require("../middlewares/validations.middlewares");
const { createProductSchema, updateProductSchema } = require("../schemas/product.schemas");

const router = Router();

router.route("/api/products")
  // visualizamos todos los productos disponibles en la base de datos
  .get(handlers.get.getAllProductsHandler)
  // agregamos productos a la base de datos
  .post(validateResource(createProductSchema) ,handlers.post.createProductHandler)
router.route("/api/products/:id")
  // visualizamos productos individualmente por su id
  .get(handlers.get.getProductByIdHandler)
  // actualizamos productos por su id
  .put(validateResource(updateProductSchema), handlers.put.updateProductHandler)
  // borramos productos por su id
  .delete(handlers.delete.deleteProductHandler)

module.exports = router;
