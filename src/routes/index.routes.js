const { Router } = require("express");
const auth = require("./auth.routes");
const cart = require("./cart.routes");
const products = require("./products.routes");
const user = require("./user.routes");

const routes = Router();

routes.use(auth);
routes.use(cart);
routes.use(products);
routes.use(user);

module.exports = routes;
