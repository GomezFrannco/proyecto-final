const { object, string, ref} = require("yup");

const createUserSchema = object({ 
  email: string().email("Must be a valid email").required("Email is required"),
  password: string().min(6, "Must be at least 6 characters").required("Password is required"),
  confirmPassword: string().oneOf([ref('password')], "Passwords don't match"),
  firstName: string().min(3).max(15).required("Name is required"),
  lastName: string().min(3).max(15).required("Surname is required"),
  });

module.exports = {
  createUserSchema
}
