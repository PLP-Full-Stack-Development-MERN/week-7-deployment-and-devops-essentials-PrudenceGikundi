const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

// Route to get all posts
router.get("/", getAllPosts);

// Route to get a single post by ID
router.get("/:id", getPostById);

// Route to create a new post
router.post("/", createPost);

// Route to update a post by ID
router.put("/:id", updatePost);

// Route to delete a post by ID
router.delete("/:id", deletePost);

module.exports = router;