const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  projectId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  category: { type: String, required: true }, // e.g. "aiml", "fullstack", "backend"
  categoryBadge: { type: String, default: "Full-Stack" },
  bannerClass: { type: String, default: "krishilink" },
  bannerIcon: { type: String, default: "🚀" },
  description: { type: String, required: true },
  techStack: [{ type: String }],
  githubUrl: { type: String, required: true },
  liveUrl: { type: String, default: "" },
  features: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
