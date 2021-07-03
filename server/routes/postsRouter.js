// ? external imports
const express = require('express');

// ? internal imports
const { getPosts } = require('../controllers/postsController');

const router = express.Router();

// TODO: post page
router.get('/', getPosts);

module.exports = router;
