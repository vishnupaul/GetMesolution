const express = require('express');

const router = express.Router();

const projectApi = require('../../../controllers/api/v1/projectApi');

router.get('/', projectApi.index);
module.exports = router;
