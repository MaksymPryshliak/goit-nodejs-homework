const { Schema } = require("mongoose");
const { handleMongooseError } = require("../../utils");
const emailRegex = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-z]+)$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegex,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    avatarURL: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: "",
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required "],
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleMongooseError);

module.exports = userSchema;
