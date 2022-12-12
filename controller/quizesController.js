// represents the jpa layer to fetch data from db
const Quizzes = require("../model/quizes");

const create = async (req, res) => {
    try {
        await Quizzes.create({
            question: req.body.question,
            answer: req.body.answer,
            courseId: req.body.courseId,
        }).then(() => {
            res.sendStatus(201).json('Success');
    });
    } catch (err) {
        console.log(err);
    }
};
const getAllQuizzes = async (req, res) => {
    try {
    const allQuizzes = await Quizzes.findAll({
        where: {
            courseId: req.body.courseId,
        }
    });
    return res.json(allQuizzes);
  } catch (err) {
    console.log(err);
  }
  };
module.exports = {
    create,
    getAllQuizzes,
};
