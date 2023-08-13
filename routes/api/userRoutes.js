const router = require('express').Router();
const { Types } = require('mongoose');
const { User, Thought } = require('../../models');

// GET all users
router.get('/', async (req, res) => {
    const allUsers = await User.find()
    res.status
});

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// PUT to update a user by its _id

// DELETE to remove user by its _id