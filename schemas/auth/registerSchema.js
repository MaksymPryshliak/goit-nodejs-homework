const Joi = require("joi");
const emailRegex = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-z]+)$/;

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required().messages({
    "string.empty": `"Email" cannot be an empty field`,
    "any.required": `"Email" is a required field`,
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": `"Password" cannot be an empty field`,
    "any.required": `"Password" is a required field`,
  }),
  subscription: Joi.string(),
});

module.exports = registerSchema;
