const express = require('express');
const { signUp, signIn, findUserByUserName } = require('../controller/auth');

const router = express.Router();

router.post('/signUp', signUp);
router.post('/signIn', signIn);
router.post('/usrbyname', findUserByUserName);

module.exports = router;