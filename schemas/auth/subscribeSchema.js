const Joi = require("joi");
const subEnum = ["starter", "pro", "business"];

const subscribeSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subEnum)
    .required(),
});
module.exports = subscribeSchema;
