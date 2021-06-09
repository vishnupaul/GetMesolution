const express = require('express');

const router = express.Router();

const userApi = require('../../../controllers/api/v1/userApi');

router.get('/', userApi.index);
router.post('/create-session', userApi.createSession);
module.exports = router;
