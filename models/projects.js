const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    MobileNumber: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
