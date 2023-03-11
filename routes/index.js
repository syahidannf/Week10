const express = require("express");
const router = express.Router();
const movies = require("./movies");
const users = require("./users");

router.use("/movies", movies);

module.exports = router;
