const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const register = require("./register");
const subscribe = require("./subscribe");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendEmail = require("./resendEmail");

module.exports = {
  getCurrent,
  login,
  logout,
  register,
  subscribe,
  updateAvatar,
  resendEmail,
  verifyEmail,
};
