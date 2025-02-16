const express = require("express");
const router = express.Router();
const category = require("../controllers/categoryController");

router.get("/categories", category.getAllCategories);
router.get("/categories/:id", category.getCategoryById);
router.post("/categories", category.createCategory);
router.put("/categories/:id", category.updateCategory);
router.delete("/categories/:id", category.deleteCategory);
module.exports = router;