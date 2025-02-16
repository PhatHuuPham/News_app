const bookmark = require('../models/bookmarkModel');

const getAllBookmarks = async (req, res) => {
    try {
        const bookmarks = await bookmark.findAll();
        res.json(bookmarks);
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const getBookmarkById = async (req, res) => {
    try {
        const bookmark = await bookmark.findByPk(req.params.id);
        if (bookmark) {
            res.json(bookmark);
        } else {
            res.status(404).json({ error: "Không tìm thấy bookmark" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const createBookmark = async (req, res) => {
    try {
        const bookmark = await bookmark.create(req.body);
        res.status(201).json(bookmark);
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const updateBookmark = async (req, res) => {
    try {
        const bookmark = await bookmark.findByPk(req.params.id);
        if (bookmark) {
            await bookmark.update(req.body);
            res.json(bookmark);
        } else {
            res.status(404).json({ error: "Không tìm thấy bookmark" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

const deleteBookmark = async (req, res) => {
    try {
        const bookmark = await bookmark.findByPk(req.params.id);
        if (bookmark) {
            await bookmark.destroy();
            res.json({ success: "Xóa bookmark thành công" });
        } else {
            res.status(404).json({ error: "Không tìm thấy bookmark" });
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};

module.exports = {
    getAllBookmarks,
    getBookmarkById,
    createBookmark,
    updateBookmark,
    deleteBookmark
};