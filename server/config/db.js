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

    // Auto seed / synchronize latest data
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
    // Keep MongoDB updated with latest candidate profile, projects, and skills
    await Profile.deleteMany({});
    await Profile.create(seedData.profile);

    await Project.deleteMany({});
    await Project.insertMany(seedData.projects);

    await Skill.deleteMany({});
    await Skill.insertMany(seedData.skills);

    console.log('🌱 [MongoDB] Synchronized latest profile, 2 featured projects, and skills!');
  } catch (error) {
    console.error('Error during auto-seed:', error.message);
  }
};

module.exports = { connectDB, autoSeed, isConnected: () => isConnected };
