const express = require("express");
const ctrl = require("../../controllers/auth");
const { tryCatchWrapper } = require("../../utils");
const { validateBody, authentification, upload } = require("../../middlewares");
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
  "/avatars",
  authentification,
  upload.single("avatar"),
  tryCatchWrapper(ctrl.updateAvatar)
);

router.post(
  "/verify",
  validateBody(schema.emailVerify),
  tryCatchWrapper(ctrl.resendEmail)
);

router.get("/verify/:verificationToken", tryCatchWrapper(ctrl.verifyEmail));

router.patch(
  "/",
  validateBody(schema.subscribeSchema),
  tryCatchWrapper(ctrl.subscribe)
);

module.exports = router;
