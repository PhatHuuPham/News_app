const article = require('../models/articleModel');

const getAllArticles = async (req, res) => {
    try {
        const articles = await article.findAll();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const getArticleById = async (req, res) => {
    try {
        const article = await article.findByPk(req.params.id);
        if (article) {
            res.json(article);
        } else {
            res.status(404).json({ error: "Không tìm thấy article" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const createArticle = async (req, res) => {
    try {
        const article = await article.create(req.body);
        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const updateArticle = async (req, res) => {
    try {
        const article = await article.findByPk(req.params.id);
        if (article) {
            await article.update(req.body);
            res.json(article);
        } else {
            res.status(404).json({ error: "Không tìm thấy article" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const deleteArticle = async (req, res) => {
    try {
        const article = await article.findByPk(req.params.id);
        if (article) {
            await article.destroy();
            res.json({ success: "Xóa article thành công" });
        } else {
            res.status(404).json({ error: "Không tìm thấy article" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

module.exports = {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
};