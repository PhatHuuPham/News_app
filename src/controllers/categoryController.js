const category = require('../models/categoryModel');

const getAllCategories = async (req, res) => {
    try {
        const categories = await category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const category = await category.findByPk(req.params.id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ error: "Không tìm thấy category" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const createCategory = async (req, res) => {
    try {
        const category = await category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const updateCategory = async (req, res) => {
    try {
        const category = await category.findByPk(req.params.id);
        if (category) {
            await category.update(req.body);
            res.json(category);
        } else {
            res.status(404).json({ error: "Không tìm thấy category" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const category = await category.findByPk(req.params.id);
        if (category) {
            await category.destroy();
            res.json({ success: "Xóa category thành công" });
        } else {
            res.status(404).json({ error: "Không tìm thấy category" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};