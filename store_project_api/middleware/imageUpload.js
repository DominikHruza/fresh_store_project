const multer = require("multer");

//Config filename and storage
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const imageUpload = multer({
  storage: fileStorage,
}).single("image");

module.exports = imageUpload;
