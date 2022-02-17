const express = require('express');

const { createPost, getAllPost, getUserPost } = require('../controller/post');

const router = express.Router();

router.post('/createpost', createPost);
router.get('/getallpost', getAllPost);
router.post('/userpost', getUserPost);

module.exports = router;