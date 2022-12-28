const { object, string } = require("yup");

const createSessionSchema = object({
  email: string().email("Email must be a valid email address").required("Email is required"),
  password: string().min(6, "Password must be at least 6 characters long").required("Password is required"),
})

module.exports = {
  createSessionSchema,
};
