const { Router } = require("express");
const { handlers } = require("../controllers/products/controller.products");

const router = Router();

router.route("/api/products")
  .get(handlers.get.getAllProductsHandler)
  .post(handlers.post.createProductHandler)
router.route("/api/products/:id")
  .get(handlers.get.getProductByIdHandler)
  .put(handlers.put.updateProductHandler)
  .delete(handlers.delete.deleteProductHandler)

module.exports = router;
