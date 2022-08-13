const { Router } = require("express");
const { handlers } = require("../controllers/products/controller.products");

const router = Router();

router.post('/api/products', handlers.post.createProductHandler);

module.exports = router;
