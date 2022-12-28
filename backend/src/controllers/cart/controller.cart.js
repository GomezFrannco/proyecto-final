const CartDAO = require("../../services/cart/dao.cart");
const { log } = require("../../utils/log4js.utils");

class GetCartHandler {
  static async GetCartByIdHandler(req, res) {
    const { id } = req.params;
    try {
      const cart = await CartDAO.GetCartByUserId(id);
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
  static async UpdateCartByIdHandler(req, res) {
    const { id } = req.params;
    const product = req.body;
    try {
      await CartDAO.AddProductToCart(id, product);
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

class PostCartHandler {
  static async CreateOrUpdateCartHandler(req, res) {
    try {
      const { id } = req.params;
      const product = req.body;
      log.console.debug(product);
      const exists = await CartDAO.GetCartByUserId(id);
      if (exists) {
        const addProduct = await CartDAO.AddProductToCart(id, product);
        return res.status(201).json({
          Response: {
            Message: "Product successfully added",
            product: addProduct,
          }
        })
      }
      await CartDAO.CreateCart(id);
      const addProduct = await CartDAO.AddProductToCart(id, product)
      return res.status(200).json({
        Response: {
          Message: "Product successfully added",
          product: addProduct,
        }
      })
      
    } catch (error) {
      log.file.error(error.message)
      log.console.error(error.message)
      res.status(500).send(error)
    }
  }
}

module.exports = {
  get: GetCartHandler,
  post: PostCartHandler,
  put: PutCartHandler,
};
