const express = require("express");
const router = express.Router();
const bookmark = require("../controllers/bookmarkController");

router.get("/bookmarks", bookmark.getAllBookmarks);
router.get("/bookmarks/:id", bookmark.getBookmarkById);
router.post("/bookmarks", bookmark.createBookmark);
router.put("/bookmarks/:id", bookmark.updateBookmark);
router.delete("/bookmarks/:id", bookmark.deleteBookmark);
module.exports = router;