const express = require("express");
const router = express.Router();
const article = require("../controllers/articleController");

router.get("/articles", article.getAllArticles);
router.get("/articles/:id", article.getArticleById);
router.post("/articles", article.createArticle);
router.put("/articles/:id", article.updateArticle);
router.delete("/articles/:id", article.deleteArticle);
module.exports = router;