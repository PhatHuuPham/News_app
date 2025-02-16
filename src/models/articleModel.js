const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./userModel");
const Category = require("./categoryModel");

const Article = sequelize.define(
  "Article",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING(255), allowNull: false },
    slug: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    content: { type: DataTypes.TEXT, allowNull: false },
    image_url: { type: DataTypes.STRING(255), allowNull: true },
    published_at: { type: DataTypes.DATE, allowNull: true },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "articles", timestamps: false }
);

// Thiết lập quan hệ
Article.belongsTo(User, { foreignKey: "author_id", onDelete: "SET NULL" });
Article.belongsTo(Category, { foreignKey: "category_id", onDelete: "SET NULL" });

module.exports = Article;
