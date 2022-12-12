// represents the router class
const express = require("express");
const {
  create,
  getAllCourses,
} = require("../controller/courseUsersController");

const router = express.Router();


router.post("/create", create);
router.get("/courses", getAllCourses);

module.exports = {
  routes: router
};
