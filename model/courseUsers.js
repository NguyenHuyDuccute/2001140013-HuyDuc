// represents the  model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");
class CourseUser extends Model {}

CourseUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'courses',
        key: 'id',
      }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
        model: 'users',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    modelName: "course_users",
    timestamps: false
  }
);

module.exports = CourseUser;
