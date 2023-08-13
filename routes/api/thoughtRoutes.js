const router = require("express").Router();
const { Types } = require("mongoose");
const { User, Thought } = require("../../models");

// GET to get all thoughts
router.get("/", async (req, res) => {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
});

// GET to get a single thought by its _id
router.get("/:thoughtId", async (req, res) => {
    const oneThought = await Thought.findById(req.params.thoughtId);
    res.status(200).json(oneThought);
});

// POST to create a new thought
router.post("/", async (req, res) => {
  const newThought = await Thought.create(req.body);

  const updateUser = await User.findByIdAndUpdate(
    req.body.userId,
    { $push: { thoughts: newThought } },
    );
    res.status(200).json(newThought);
});

// PUT to update a thought by its _id
router.put("/:thoughtId", async (req, res) => {
    const updateThought = await Thought.findByIdAndUpdate
    (req.params.thoughtId, req.body, {new: true});
    res.status(200).json(updateThought);
});

// DELETE to remove a thought by its _id
router.delete("/:thoughtId", async (req, res) => {
    const deleteThought = await Thought.findByIdAndDelete(req.params.thoughtId);
    res.status(200).json("Thought deleted");
});

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value
module.exports = router;
