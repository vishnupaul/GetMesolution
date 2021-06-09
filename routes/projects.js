const express = require('express');
const router = express.Router();
const passport = require('passport');

const projectController = require('../controllers/projects_controller');

router.post('/create', passport.checkAuthentication, projectController.create);

module.exports = router;
