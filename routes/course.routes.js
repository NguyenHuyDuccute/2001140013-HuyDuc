// represents the router class
const express = require("express");
const {
  getAllCourses,
} = require("../controller/coursesController");

const router = express.Router();

router.get("/all/courses", getAllCourses);


module.exports = {
  routes: router
};
