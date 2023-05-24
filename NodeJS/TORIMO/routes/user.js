const express = require("express");

const { isLoggedIn } = require("../middlewares");
const { follow } = require("../controllers/userController");

const router = express.Router();

module.exports = router;
