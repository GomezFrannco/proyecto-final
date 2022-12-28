const { Schema, model, SchemaType} = require("mongoose");
const { userModel } = require("./user.models");

const sessionModel = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: () => userModel,
    },
    valid: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const SessionModel = new model("Session", sessionModel);

module.exports = SessionModel;
