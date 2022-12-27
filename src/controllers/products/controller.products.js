const ProductDAO = require("../../services/products/dao.products");
const { log } = require("../../utils/log4js.utils");

class PostProductHandler {
  static async CreateProductHandler(req, res) {
    const newProduct = req.body;
    try {
      if (req.file) {
        body.thumbnail = `uploads/${req.file.filename}`;
      }
      await ProductDAO.CreateProduct(newProduct);
      return res.status(201).json({
        Response: {
          Message: "Product successfully created",
          product: newProduct,
        },
      });
    } catch (error) {
      log.file.error(error.message);
      log.console.debug(error.message);
      return res.status(500).json({
        Error: {
          Message: error.message,
        },
      });
    }
  }
}

class GetProductHandler {
  static async GetProductByIdHandler(req, res) {
    try {
      const { id } = req.params;
      const findProduct = await ProductDAO.GetProductById(id);
      if (findProduct) {
        return res.status(200).json({
          Response: {
            Product: findProduct
          }
        })
      }
      return res.status(404).json({
        Response: {
          Message: "Product not found",
        },
      })
    } catch (error) {
      log.file.error(error.message);
      log.console.debug(error.message);
      return res.status(500).json({
        Error: {
          Message: error.message,
        },
      });
    }
  }
  static async GetAllProductsHandler(_req, res) {
    try {
      const products = await ProductDAO.GetAllProducts();
      return res.status(200).json({
          products,
      });
    } catch (error) {
      log.file.error(error.message);
      log.console.debug(error.message);
      return res.status(500).json({
        Error: {
          Message: error.message,
        },
      });
    }
  }
}

class PutProductHandler {
  static async UpdateProductHandler(req, res) {
    const update = req.body;
    const { id } = req.params;
    try {
      if (req.file) {
        body.thumbnail = `uploads/${req.file.filename}`;
      }
      await ProductDAO.UpdateProduct(id, update);
      return res.status(201).json({
        Response: {
          Message: 'Product succesfully updated',
        },
      });
    } catch (error) {
      log.file.error(error.message);
      log.console.debug(error.message);
      return res.status(500).json({
        Error: {
          Message: error.message,
        },
      });
    }
  }
}

class DeleteProductHandler {
  static async DeleteProductHandler (req, res) {
    const { id } = req.params;
    try {
      await ProductDAO.DeleteProduct(id);
      return res.status(200).json({
        Response: {
          Message: "Product successfully deleted",
        },
      })
    } catch (error) {
      log.file.error(error.message);
      log.console.debug(error.message);
      return res.status(500).json({
        Error: {
          Message: error.message,
        },
      });
    }
  }
}

module.exports = {
  get: GetProductHandler,
  post: PostProductHandler,
  put: PutProductHandler,
  del: DeleteProductHandler,
};
