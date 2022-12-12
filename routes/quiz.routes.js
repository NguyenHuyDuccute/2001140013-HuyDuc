// represents the router class
const express = require("express");
const {
  getAllQuizzes,
  create,
} = require("../controller/quizesController");

const router = express.Router();

router.get("/all/quizzes", getAllQuizzes);
router.get("/quizz/create", create);

module.exports = {
  routes: router
};
