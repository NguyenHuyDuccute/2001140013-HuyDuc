// represents the  model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");

class Announ extends Model {}

Announ.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    announcementContent: {
      type: DataTypes.STRING,
    },
    announcementTitle: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: "announcements",
    timestamps: false
  }
);

module.exports = Announ;
