const express = require('express');
const router = express.Router();
const passport = require('passport');

const feedbacksController = require('../controllers/feedbacks_controller');

router.post(
  '/create',
  passport.checkAuthentication,
  feedbacksController.create
);
router.get(
  '/destory/:id',
  passport.checkAuthentication,
  feedbacksController.destroy
);

module.exports = router;
