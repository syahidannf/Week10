const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userController.js");

router.get("/", usersController.findUsers);
router.get("/:id", usersController.findById);
router.post("/", usersController.createUsers);
router.put("/:id", usersController.updateUsers);
router.delete("/:id", usersController.deleteUsers);

module.exports - router;
