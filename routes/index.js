const express = require("express");
const router = express.Router();
const movies = require("./movies");
const users = require("./users");

router.use("/movies", movies);

router.use("/users", users);

module.exports = router;
