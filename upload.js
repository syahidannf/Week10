const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/upload"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

router.post("/upload", multer({ storage: diskStorage }).single("image"), (req, res) => {
  const file = req.file.path;
  res.status(200).json({
    message: "Done",
  });
});

module.exports = router;
