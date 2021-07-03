// ? external imports
const express = require('express');

// ? internal imports
const { getPosts, createPost } = require('../controllers/postsController');

const router = express.Router();

// TODO: post page
router.get('/', getPosts);
router.post('/', createPost);

module.exports = router;
