const express = require("express");
const ctrl = require("../../controllers/auth");
const { tryCatchWrapper } = require("../../utils");
const { validateBody, authentification } = require("../../middlewares");
const schema = require("../../schemas");
const router = express.Router();

router.post(
  "/register",
  validateBody(schema.registerSchema),
  tryCatchWrapper(ctrl.register)
);

router.post(
  "/login",
  validateBody(schema.loginSchema),
  tryCatchWrapper(ctrl.login)
);

router.get("/current", authentification, tryCatchWrapper(ctrl.getCurrent));

router.get("/logout", authentification, tryCatchWrapper(ctrl.logout));

router.patch(
  "/",
  validateBody(schema.subscribeSchema),
  tryCatchWrapper(ctrl.subscribe)
);

module.exports = router;
