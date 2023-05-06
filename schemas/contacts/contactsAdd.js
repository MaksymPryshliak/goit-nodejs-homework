const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": `"Name" cannot be an empty field`,
    "any.required": `"Name" is a required field`,
  }),
  email: Joi.string().required().messages({
    "string.empty": `"Email" cannot be an empty field`,
    "any.required": `"Email" is a required field`,
  }),
  phone: Joi.string().required().messages({
    "string.empty": `"Phone" cannot be an empty field`,
    "any.required": `"Phone" is a required field`,
  }),
  favorite: Joi.boolean(),
});

module.exports = addSchema;
