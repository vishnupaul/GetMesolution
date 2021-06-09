const Feedback = require('../models/feedback');
const User = require('../models/User');
const Project = require('../models/projects');

module.exports.home = async function (req, res) {
  try {
    let feedbacks = await Feedback.find({}).sort('-createdAt').populate('user');
    let users = await User.find({});
    let projects = await Project.find({}).sort('-createAt').populate('user');
    return res.render('home', {
      title: 'Home',
      feedbacks: feedbacks,
      users: users,
      projects: projects,
    });
  } catch (err) {
    console.log('Error', err);
    return;
  }
};
