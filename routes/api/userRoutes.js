const router = require("express").Router();
const { Types } = require("mongoose");
const { User, Thought } = require("../../models");
const { request } = require("http");

// GET all users
router.get("/", async (req, res) => {
  const allUsers = await User.find();
  res.status(200).json(allUsers);
});

// GET a single user by its _id and populated thought and friend data
router.get("/:userId", async (req, res) => {
  const oneUser = await User.findById(req.params.userId);
  res.status(200).json(oneUser);
});

// POST a new user:

// PUT to update a user by its _id

// DELETE to remove user by its _id

module.exports = router;
