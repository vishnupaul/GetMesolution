const express = require('express');

const router = express.Router();

router.use('/feedbacks', require('./feedbacks'));
router.use('/projects', require('./projects'));
router.use('/users', require('./users'));

module.exports = router;
