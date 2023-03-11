const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const pool = require("./config/config");

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/upload"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

router.post("/upload/:id/image", multer({ storage: diskStorage }).single("image"), (req, res) => {
  const file = req.file.path;
  const { id } = req.params;
  if (!file) {
    res.status(400).json({
      messsage: "no FIle is selected",
    });
  } else {
    const updateMoviesUrl = `
        UPDATE movies 
        set photo = $1
        set id = $2
    `;
    pool.query(updateMoviesUrl, [file, id], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json({
          message: "File Upload",
        });
      }
    });
  }
});

router.use("/upload", express.static(path.join(__dirname, "upload")));

module.exports = router;
