const express = require('express');

const { getUserDetail } = require('../controller/user');

const router = express.Router();

router.post('/userdata', getUserDetail);

module.exports = router;