const express = require("express");
const ctrl = require("../../controllers/contacts");
const { tryCatchWrapper } = require("../../utils");
const {
  validateBody,
  authentification,
  validateId,
} = require("../../middlewares");
const schema = require("../../schemas");
const router = express.Router();

router.get("/", authentification, tryCatchWrapper(ctrl.listContacts));

router.get(
  "/:contactId",
  authentification,
  validateId,
  tryCatchWrapper(ctrl.getById)
);

router.post(
  "/",
  authentification,
  validateBody(schema.addSchema),
  tryCatchWrapper(ctrl.addContact)
);

router.delete(
  "/:contactId",
  authentification,
  tryCatchWrapper(ctrl.removeContact)
);

router.put(
  "/:contactId",
  authentification,
  validateId,
  validateBody(schema.updateSchema),
  tryCatchWrapper(ctrl.updateSchema)
);

router.patch(
  "/:contactId/favorite",
  authentification,
  validateId,
  validateBody(schema.favoriteSchema),
  tryCatchWrapper(ctrl.updateFavorite)
);

module.exports = router;
