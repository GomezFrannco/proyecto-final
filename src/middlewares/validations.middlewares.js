// Middleware donde validamos un esquema de Yup 
const validateResource = (schema) => async (req, res, next) => {
  const resource = req.body;
  try {
    await schema.validate(resource, {
      strict: true,
      abortEarly: true,
    });
    next();
  } catch (error) {
    res.status(400).json({
      Error: {
        Path: error?.path,
        Message: error?.message, 
      }
    })
  }
};

module.exports = validateResource;