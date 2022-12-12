// represents the  model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");

class Course extends Model {}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    coursename: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "courses",
    timestamps: false
  }
);

module.exports = Course;
