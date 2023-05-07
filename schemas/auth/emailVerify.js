const Joi = require("joi");
const emailRegex = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-z]+)$/;

const emailVerify = Joi.object({
  email: Joi.string().pattern(emailRegex).required().messages({
    "string.empty": `"Email" cannot be an empty field`,
    "any.required": `"Email" is a required field`,
  }),
});

module.exports = emailVerify;
