const mongoose = require('mongoose');
const Profile = require('../models/Profile');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const seedData = require('../data/seedData');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/siddhartha_portfolio';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 4000
    });

    isConnected = true;
    global.isMongoConnected = true;
    console.log(`✅ [MongoDB] Connected successfully to: ${conn.connection.host}/${conn.connection.name}`);

    // Auto seed if empty
    await autoSeed();
  } catch (err) {
    isConnected = false;
    global.isMongoConnected = false;
    console.warn(`⚠️ [MongoDB] Local MongoDB connection failed (${err.message}).`);
    console.warn(`💡 [Notice] Running with built-in resilient data store so the application runs seamlessly on ANY PC!`);
  }
};

const autoSeed = async () => {
  try {
    const profileCount = await Profile.countDocuments();
    if (profileCount === 0) {
      console.log('🌱 [MongoDB] Seeding initial profile data...');
      await Profile.create(seedData.profile);
    }

    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      console.log('🌱 [MongoDB] Seeding initial project data...');
      await Project.insertMany(seedData.projects);
    }

    const skillCount = await Skill.countDocuments();
    if (skillCount === 0) {
      console.log('🌱 [MongoDB] Seeding initial skills data...');
      await Skill.insertMany(seedData.skills);
    }
  } catch (error) {
    console.error('Error during auto-seed:', error.message);
  }
};

module.exports = { connectDB, autoSeed, isConnected: () => isConnected };
