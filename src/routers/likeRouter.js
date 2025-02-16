const express = require("express");
const router = express.Router();
const like = require("../controllers/likeController");

router.get("/likes", like.getAllLikes);
router.get("/likes/:id", like.getLikeById);
router.post("/likes", like.createLike);
router.put("/likes/:id", like.updateLike);
router.delete("/likes/:id", like.deleteLike);
module.exports = router;