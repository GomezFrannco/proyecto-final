const { Schema, model } = require("mongoose");
const argon2 = require("argon2");
const { log } = require("../utils/log4js.utils");
const { nanoid } = require("nanoid");

const userModel = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
      sparse: true,
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
    verificationCode: {
      type: String,
      unique: true,
      default: () => nanoid(),
    },
    passwordResetCode:  {
      type: String | null,
    },
    verified: {
      type: Boolean,
      default: false,
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
    // Verificamos si la contraseña del
    // usuario coincide con la guardada anteriormente
    return await argon2.verify(this.password, candidatePassword);
  } catch (error) {
    log.console.warn(error.message, "Validation has been failed");
    return false
  }
})

// Definimos un indice
userModel.index({email: 1});

// Campos que no van a ser mostrados
const privateFields = [
  "password",
  "__v",
]

const UserModel = new model("Users", userModel);

module.exports = {
  userModel,
  UserModel,
  privateFields,
};
