const addSchema = require("./contacts/contactsAdd");
const updateSchema = require("./contacts/contactsUpdate");
const favoriteSchema = require("./contacts/contactsFavorite");
const contactSchema = require("./contacts/contactSchema");
const loginSchema = require("./auth/loginSchema");
const registerSchema = require("./auth/registerSchema");
const subscribeSchema = require("./auth/subscribeSchema");
const userSchema = require("./auth/userSchema");
const emailVerify = require('./auth/emailVerify');

module.exports = {
  addSchema,
  updateSchema,
  favoriteSchema,
  contactSchema,
  loginSchema,
  registerSchema,
  subscribeSchema,
  userSchema,
  emailVerify,
};
