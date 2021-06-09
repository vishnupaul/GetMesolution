const Project = require('../../../models/projects');
module.exports.index = async function (req, res) {
  let projects = await Project.find({}).sort('-createdAt').populate('user');

  return res.json(200, {
    message: 'List of project',
    projects: projects,
  });
};
