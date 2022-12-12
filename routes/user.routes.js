// represents the router class
const express = require("express");
const {
  register,
  login,
  getAllUsers,
} = require("../controller/usersController");

const router = express.Router();

router.post("/register", register);
router.get("/users", getAllUsers);
router.post("/login", login);


module.exports = {
  routes: router
};
