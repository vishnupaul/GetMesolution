const express = require('express');

const router = express.Router();
const passport = require('passport');

const feedbackApi = require('../../../controllers/api/v1/feedbackApi');

router.get('/', feedbackApi.index);
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  feedbackApi.destroy
);
module.exports = router;
