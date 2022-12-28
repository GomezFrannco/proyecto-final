const { Router } = require("express");
const { get, post, put } = require("../controllers/cart/controller.cart");

const router = Router();

router.route("/api/carts/:id")
  .get(get.GetCartByIdHandler)
  .post(post.CreateOrUpdateCartHandler)
  .put(put.UpdateCartByIdHandler)

module.exports = router;
