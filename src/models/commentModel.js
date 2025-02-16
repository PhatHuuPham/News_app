const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./userModel");
const Article = require("./articleModel");

const Comment = sequelize.define(
  "Comment",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    content: { type: DataTypes.TEXT, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "comments", timestamps: false }
);

Comment.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
Comment.belongsTo(Article, { foreignKey: "article_id", onDelete: "CASCADE" });

module.exports = Comment;
