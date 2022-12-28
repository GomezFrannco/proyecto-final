const CartDAO = require("../../services/cart/dao.cart");
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

class GetCartHandler {
  static async getCartByIdHandler(req, res) {
    const { id } = req.params;
    try {
      const cart = await new CartDAO().getCartByUserId(id);
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

class PutCartHandler {
  static async updateCartByIdHandler(req, res) {
    const { id } = req.params;
    const body = req.body;
    try {
      await new CartDAO().addProductToCart(id, body);
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
  get: GetCartHandler,
  put: PutCartHandler,
};
