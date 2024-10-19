const multer = require("multer");
function uploadImage(filename) {
  const storage = multer.diskStorage({
    
    // destination: `../client/./public/images/${filename}`,
    destination: `./public/images/${filename}`,

    filename: function (req, file, callback) {
      callback(null, "Id-" + Date.now() + "-" + file.originalname);
    },
  });

  const upload = multer({ storage: storage }).single("file");

  return upload;
}

module.exports = uploadImage;