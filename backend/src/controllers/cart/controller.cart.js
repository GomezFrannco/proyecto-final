const MongoCartDAO = require("../../../../src/services/cart/dao.cart");
const { log } = require("../../utils/log4js.utils");

// class CartPostHandlers {
//   async createCartHandler(req, res) {
//     const { id } = req.params;
//     try {
//       const cart = await new MongoCartDAO().createCart(id);
//       res.send(cart);
//     } catch (error) {
//       log.file.error(error.message);
//     }
//   }
// }

class CartGetHandlers {
  async getCartByIdHandler(req, res) {
    const { id } = req.params;
    try {
      const cart = await new MongoCartDAO().getCartByUserId(id);
      log.console.debug(cart);
      res.status(200).json({
        Response: {
          cart
        },
      });
    } catch (error) {
      log.file.error(error.message)
      return res.status(500).json({
        Error: {
          Message: error.message,
        },
      });
    }
  }
}

class CartPutHandlers {
  async updateCartByIdHandler(req, res) {
    const { id } = req.params;
    const body = req.body;
    try {
      await new MongoCartDAO().addProductToCart(id, body);
      return res.status(200).json({
        Response: {
          Message: "Product successfully added to cart",
        },
      });
    } catch (error) {
      return res.status(500).json({
        Error: {
          Message: error.message,
        },
      });
    }
  }
}

module.exports = {
  handlers: {
    // post: new CartPostHandlers(),
    get: new CartGetHandlers(),
    put: new CartPutHandlers(),
  },
};
