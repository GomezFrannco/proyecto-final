const { Router } = require("express");
const { handlers } = require("../controllers/products/controller.products");
const validateResource = require("../middlewares/validations.middlewares");
const { createProductSchema, updateProductSchema } = require("../schemas/product.schemas");

const router = Router();

router.route("/api/products")
  .get(handlers.get.getAllProductsHandler)
  .post(validateResource(createProductSchema) ,handlers.post.createProductHandler)
router.route("/api/products/:id")
  .get(handlers.get.getProductByIdHandler)
  .put(validateResource(updateProductSchema), handlers.put.updateProductHandler)
  .delete(handlers.delete.deleteProductHandler)

module.exports = router;
