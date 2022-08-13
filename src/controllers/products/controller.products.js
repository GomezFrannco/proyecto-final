const { createProductSchema, updateProductSchema } = require("../../schemas/product.schemas");
const MongoProductDAO = require("../../services/products/dao.products");
const ProductDTO = require("../../services/products/dto.products");
const { log } = require("../../utils/log4js.utils");

class ProductPostHandlers {
  async createProductHandler(req, res) {
    const body = req.body;
    try {
      await createProductSchema.validate(body, {
        strict: true,
        abortEarly: true,
      });
      if (req.file) {
        body.thumbnail = `uploads/${req.file.filename}`;
      }
      await new MongoProductDAO().createProduct(body);
      return res.status(201).json({
        Response: {
          Message: "Product successfully created",
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

class ProductGetHandlers {
  async getProductByIdHandler(req, res) {
    const { id } = req.params;
    try {
      const product  = await new MongoProductDAO().getProductById(id);
      const dto = new ProductDTO();
      dto.setPicture(product.tumbnail);
      dto.setName(product.productName);
      dto.setDescription(product.description);
      dto.setPrice(product.price);
      dto.setStock(product.stock);
      return res.status(200).json({
        Response: {
          Product: dto,
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
  async getAllProductsHandler(_req, res) {
    try {
      const products = await new MongoProductDAO().getAllProducts();
      // acá hay que retornar un DTO
      return res.status(200).json({
        Response: {
          Products: products,
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

module.exports = {
  handlers: {
    post: new ProductPostHandlers(),
    get: new ProductGetHandlers(),
  },
};
