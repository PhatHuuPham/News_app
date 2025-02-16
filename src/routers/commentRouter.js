const express = require("express");
const router = express.Router();
const comment = require("../controllers/commentController");

router.get("/comments", comment.getAllComments);
router.get("/comments/:id", comment.getCommentById);
router.post("/comments", comment.createComment);
router.put("/comments/:id", comment.updateComment);
router.delete("/comments/:id", comment.deleteComment);
module.exports = router;