const { Router } = require("express");
const cart = require("./cart.routes");
const products = require("./products.routes");
const user = require("./user.routes");

const routes = Router();

routes.use(cart);
routes.use(products);
routes.use(user);

module.exports = routes;
