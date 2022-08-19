const { Router } = require("express");
const { handlers } = require("../controllers/cart/controller.cart");

const router = Router();

// router.post("/api/carts")
//   .post(handlers.post.createCartHandler)

router.route("/api/carts/:id")
  .get(handlers.get.getCartByIdHandler)
  .put(handlers.put.updateCartByIdHandler)

module.exports = router;
