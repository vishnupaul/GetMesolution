const User = require('../models/User');

module.exports.profile = function (req, res) {
  return res.render('user_profile', {
    title: 'Profile',
  });
};

module.exports.register = function (req, res) {
  return res.render('register', {
    title: ' Sign Up',
  });
};

module.exports.login = function (req, res) {
  return res.render('login', {
    title: ' login',
  });
};

// get the sign up data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect('back');
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log('error in finding the user in singing up ');
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log('error in creating user while signing up');
          return;
        }
        return res.redirect('/users/login');
      });
    } else {
      return res.redirect('back');
    }
  });
};

// login and create session
module.exports.createSession = function (req, res) {};
