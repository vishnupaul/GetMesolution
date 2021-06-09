const Project = require('../models/projects');

module.exports.create = async function (req, res) {
  try {
    let project = await Project.create({
      subject: req.body.subject,
      MobileNumber: req.body.MobileNumber,
      description: req.body.description,
      user: req.user._id,
    });
    if (req.xhr) {
      return res.status(200).json({
        data: {
          project: project,
        },
        message: ' project is successful',
      });
    }
    return res.redirect('back');
  } catch (err) {
    return console.log('Error', err);
  }
};
