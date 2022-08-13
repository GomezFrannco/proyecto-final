const { createProductSchema } = require("../../schemas/product.schemas");
const MongoProductDAO = require("../../services/products/dao.products");
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

module.exports = {
  handlers: {
    post: new ProductPostHandlers(),
  },
};
