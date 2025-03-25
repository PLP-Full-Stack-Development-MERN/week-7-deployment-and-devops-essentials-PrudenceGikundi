const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Route to register a new user
router.post("/register", registerUser);

// Route to login a user
router.post("/login", loginUser);

// Route to get user details (protected)
router.get("/me", authMiddleware, getUser);

module.exports = router;