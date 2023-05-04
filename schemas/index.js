const addSchema = require("./contacts/contactsAdd");
const updateSchema = require("./contacts/contactsUpdate");
const favoriteSchema = require("./contacts/contactsFavorite");
const contactSchema = require("./contacts/contactSchema");

module.exports = {
  addSchema,
  updateSchema,
  favoriteSchema,
  contactSchema,
};
