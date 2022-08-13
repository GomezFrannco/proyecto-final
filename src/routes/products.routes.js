const { Router } = require("express");
const { handlers } = require("../controllers/products/controller.products");

const router = Router();

router.post('/api/products', handlers.post.createProductHandler);

router.get('/api/products', handlers.get.getAllProductsHandler);

module.exports = router;
