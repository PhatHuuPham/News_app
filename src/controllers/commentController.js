const comment = require('../models/commentModel');

const getAllComments = async (req, res) => {
    try {
        const comments = await comment.findAll();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const getCommentById = async (req, res) => {
    try {
        const comment = await comment.findByPk(req.params.id);
        if (comment) {
            res.json(comment);
        } else {
            res.status(404).json({ error: "Không tìm thấy comment" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const createComment = async (req, res) => {
    try {
        const comment = await comment.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const updateComment = async (req, res) => {
    try {
        const comment = await comment.findByPk(req.params.id);
        if (comment) {
            await comment.update(req.body);
            res.json(comment);
        } else {
            res.status(404).json({ error: "Không tìm thấy comment" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const deleteComment = async (req, res) => {
    try {
        const comment = await comment.findByPk(req.params.id);
        if (comment) {
            await comment.destroy();
            res.json({ success: "Xóa comment thành công" });
        } else {
            res.status(404).json({ error: "Không tìm thấy comment" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

module.exports = {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
};