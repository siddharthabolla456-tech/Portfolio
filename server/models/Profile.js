const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  bio: { type: String, required: true },
  college: { type: String, required: true },
  degree: { type: String, required: true },
  batch: { type: String, required: true },
  cgpa: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true },
  github: { type: String, required: true },
  linkedin: { type: String, required: true },
  leetcode: { type: String, required: true },
  stats: {
    projectsCount: { type: String, default: "3+" },
    problemsSolved: { type: String, default: "200+" },
    cgpa: { type: String, default: "9.45" },
    portability: { type: String, default: "100%" }
  }
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
