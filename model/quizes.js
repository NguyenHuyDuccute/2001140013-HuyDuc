// represents the  model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");

class Quizes extends Model {}

Quizes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    question: {
      type: DataTypes.STRING,
    },
     answer: {
       type: DataTypes.STRING,
     },
     courseId: {
       type: DataTypes.INTEGER,
   }
  },
  {
    sequelize,
    modelName: "quizzes",
    timestamps: false
  }
);

module.exports = Quizes;
