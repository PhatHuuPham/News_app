const like = require('../models/likeModel');

const getAllLikes = async (req, res) => {
    try {
        const likes = await like.findAll();
        res.json(likes);
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const getLikeById = async (req, res) => {
    try {
        const like = await like.findByPk(req.params.id);
        if (like) {
            res.json(like);
        } else {
            res.status(404).json({ error: "Không tìm thấy like" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const createLike = async (req, res) => {
    try {
        const like = await like.create(req.body);
        res.status(201).json(like);
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const updateLike = async (req, res) => {
    try {
        const like = await like.findByPk(req.params.id);
        if (like) {
            await like.update(req.body);
            res.json(like);
        } else {
            res.status(404).json({ error: "Không tìm thấy like" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const deleteLike = async (req, res) => {
    try {
        const like = await like.findByPk(req.params.id);
        if (like) {
            await like.destroy();
            res.json({ success: "Xóa like thành công" });
        } else {
            res.status(404).json({ error: "Không tìm thấy like" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

module.exports = {
    getAllLikes,
    getLikeById,
    createLike,
    updateLike,
    deleteLike,
};