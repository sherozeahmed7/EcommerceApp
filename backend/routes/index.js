const express = require('express')
const router = express.Router();
const authController = require('../controller/authController')
const auth = require('../middleware/auth')

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout',auth,  authController.logout);

router.get('/refresh', authController.refresh);

module.exports = router;