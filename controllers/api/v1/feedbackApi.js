const Feedback = require('../../../models/feedback');

module.exports.index = async function (req, res) {
  let feedbacks = await Feedback.find({}).sort('-createdAt').populate('user');

  // return res.render('home', {
  //   title: 'Home',
  //   feedbacks: feedbacks,
  // });

  return res.json(200, {
    message: ' LIst of feedback',
    feedbacks: feedbacks,
  });
};

module.exports.destroy = async function (req, res) {
  try {
    let feedback = await Feedback.findById(req.params.id);

    if (feedback.user == req.user.id) {
      feedback.remove();
      return res.json(200, {
        message: ' feedback is deleted ',
      });
    } else {
      return res.json(401, {
        message: ' you can not delete this feedback',
      });
    }
  } catch (err) {
    console.log('****', err);
    return res.json(500, {
      message: 'internal server Error',
    });
  }
};
