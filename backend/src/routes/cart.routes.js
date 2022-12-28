const { Router } = require("express");
const { get, put } = require("../controllers/cart/controller.cart");

const router = Router();

// router.post("/api/carts")
//   .post(handlers.post.createCartHandler)

router.route("/api/carts/:id")
  .get(get.getCartByIdHandler)
  .put(put.updateCartByIdHandler)

module.exports = router;
