const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./userModel");
const Article = require("./articleModel");

const Like = sequelize.define(
  "Like",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "likes", timestamps: false }
);

Like.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
Like.belongsTo(Article, { foreignKey: "article_id", onDelete: "CASCADE" });

module.exports = Like;
