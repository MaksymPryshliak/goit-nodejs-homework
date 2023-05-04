const Joi = require("joi");
const emailRegex = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-z]+)$/;

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
});

module.exports = loginSchema;
