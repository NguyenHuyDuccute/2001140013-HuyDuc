// represents the  model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    modelName: "users",
    timestamps: false
  }
);

module.exports = Users;
