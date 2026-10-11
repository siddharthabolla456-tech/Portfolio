const Profile = require('../models/Profile');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const ContactMessage = require('../models/ContactMessage');
const seedData = require('../data/seedData');

// GET /api/profile
exports.getProfile = async (req, res) => {
  try {
    if (global.isMongoConnected) {
      const profile = await Profile.findOne().sort({ createdAt: -1 });
      if (profile) return res.json({ success: true, data: profile });
    }
    return res.json({ success: true, data: seedData.profile });
  } catch (err) {
    return res.json({ success: true, data: seedData.profile });
  }
};

// GET /api/projects
exports.getProjects = async (req, res) => {
  try {
    if (global.isMongoConnected) {
      const projects = await Project.find().sort({ createdAt: 1 });
      if (projects && projects.length > 0) return res.json({ success: true, data: projects });
    }
    return res.json({ success: true, data: seedData.projects });
  } catch (err) {
    return res.json({ success: true, data: seedData.projects });
  }
};

// GET /api/skills
exports.getSkills = async (req, res) => {
  try {
    if (global.isMongoConnected) {
      const skills = await Skill.find().sort({ createdAt: 1 });
      if (skills && skills.length > 0) return res.json({ success: true, data: skills });
    }
    return res.json({ success: true, data: seedData.skills });
  } catch (err) {
    return res.json({ success: true, data: seedData.skills });
  }
};

// GET /api/coding-profiles
exports.getCodingProfiles = async (req, res) => {
  return res.json({ success: true, data: seedData.codingProfiles });
};

// POST /api/contact
exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Name, email, and message are required." });
    }

    let saved = null;
    if (global.isMongoConnected) {
      saved = await ContactMessage.create({
        name,
        email,
        subject: subject || "",
        message,
        ip: req.ip || ""
      });
    }

    console.log(`📩 [Contact Message Received] From: ${name} (${email}) - Subject: ${subject}`);
    return res.json({
      success: true,
      message: `Thank you, ${name}! Your message has been received and saved to MongoDB.`,
      id: saved ? saved._id : 'memory-saved'
    });
  } catch (err) {
    console.error('Contact error:', err);
    return res.status(500).json({ success: false, message: "Error submitting message" });
  }
};
