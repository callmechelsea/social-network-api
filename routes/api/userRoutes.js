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
router.post("/", async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
});

// PUT to update a user by its _id
router.put("/:userId", async (req, res) => {
    const updateUser = await User.findByIdAndUpdate
    (req.params.userId, req.body, {new: true});
    res.status(200).json(updateUser);
});

// DELETE to remove user by its _id
router.delete("/:userId", async (req, res) => {
    const deleteUser = await User.findByIdAndDelete(req.params.userId);
    res.status(200).json("User deleted");
});

module.exports = router;
