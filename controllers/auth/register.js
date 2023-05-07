const User = require("../../models/users");
const bcrypt = require("bcrypt");
const { requestError, sendEmail } = require("../../utils");
require("dotenv").config();
const { nanoid } = require("nanoid");
const gravatar = require("gravatar");
const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const avatarUrl = gravatar.url(email);
  if (user) {
    requestError(409, "Email is already used");
  }
  const passwordHashed = await bcrypt.hash(password, 10);
  const verificationCode = nanoid();
  const result = await User.create({
    ...req.body,
    password: passwordHashed,
    avatarUrl,
    verificationCode,
  });

  const verifyEmail = {
    to: email,
    subject: "Verification email",
    html: `<a target='_blank' href='${BASE_URL}/api/auth/verify/${verificationCode}'>Click to verify your email</a>`,
  };

  await sendEmail(verifyEmail);
  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = register;
