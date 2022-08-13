const { Schema, model } = require("mongoose");
const argon2 = require("argon2");

const userModel = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
  },
  {
    timestamps: true,
  }
);

// Encriptando la contraseña del usuario
// cada vez que se guarda un documento.
userModel.pre("save", async function () {
  // Se verifica que la contraseña no se haya modificado.
  if (!this.isModified("password")) {
    return;
  }
  const hash = await argon2.hash(this.password);
  this.password = hash;
  return;
});

const UserModel = new model("Users", userModel);

module.exports = UserModel;
