const User = require('../../../models/User');
const jwt = require('jsonwebtoken');

module.exports.createSession = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user || user.password != req.body.password) {
      return res.json(422, {
        message: ' invalid username or password',
      });
    }

    return res.json(200, {
      message: 'Sign in successful',
      data: {
        token: jwt.sign(user.toJSON(), 'codeial', { expiresIn: '100000' }),
      },
    });
  } catch (err) {
    console.log('********', err);
    return res.json(500, {
      message: ' Internal server Error',
    });
  }
};

module.exports.index = async function (req, res) {
  let users = await User.find({});

  return res.json(200, {
    message: 'List of project',
    users: users,
  });
};
