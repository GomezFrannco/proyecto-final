const { Schema, model } = require("mongoose");
const argon2 = require("argon2");
const { log } = require("../utils/log4js.utils");

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

// Metodo para validar la contraseña del
// usuario. El mismo será usado en un controlador
userModel.method("validatePassword", async function(candidatePassword) {
  try {
    return await argon2.verify(this.password, candidatePassword);
  } catch (error) {
    log.console.warn(error.message, "Validation has been failed");
    return false
  }
})

const UserModel = new model("Users", userModel);

module.exports = {
  userModel,
  UserModel,
};
