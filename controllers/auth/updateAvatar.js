const path = require("path");
const fs = require("fs/promises");
const User = require("../../models/users");
const Jimp = require("jimp");
const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.files;
  const { _id } = req.user;
  const avatarRenamed = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, avatarRenamed);
  Jimp.read(`${tempUpload}`, async (err, avatarRenamed) => {
    if (err) throw err;
    await avatarRenamed.resize(250, 250).write(`${tempUpload}`);
    await fs.rename(tempUpload, resultUpload);
  });
  const avatarUrl = path.join("avatars", avatarRenamed);
  await User.findByIdAndUpdate(_id, { avatarUrl });
  res.json({ avatarUrl });
};

module.exports = updateAvatar;
