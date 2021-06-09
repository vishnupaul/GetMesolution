const Feedback = require('../models/feedback');

// module.exports.create = function (req, res) {
//   Feedback.create(
//     {
//       content: req.body.content,
//       user: req.user._id,
//     },
//     function (err, feedback) {
//       if (err) {
//         console.log('error in cerate a feedback');
//         return;
//       }

//       return res.redirect('back');
//     }
//   );
// };
module.exports.create = async function (req, res) {
  try {
    let feedback = await Feedback.create({
      content: req.body.content,
      user: req.user._id,
    });
    if (req.xhr) {
      return res.status(200).json({
        data: {
          feedback: feedback,
        },
        message: ' feedback is successful',
      });
    }
    return res.redirect('back');
  } catch (err) {
    return console.log('Error', err);
  }
};

module.exports.destroy = async function (req, res) {
  try {
    let feedback = await Feedback.findById(req.params.id);
    if (feedback.user == req.user.id) {
      feedback.remove();
    }
    if (req.xhr) {
      return res.status(200).json({
        data: {
          feedback_id: req.params.id,
        },
        message: 'feedback deleted',
      });
    }
    return res.redirect('back');
  } catch (err) {
    return console.log('Error', err);
  }
};
