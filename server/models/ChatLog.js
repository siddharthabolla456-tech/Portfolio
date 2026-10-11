const mongoose = require('mongoose');

const ChatLogSchema = new mongoose.Schema({
  query: { type: String, required: true },
  response: { type: String, required: true },
  intent: { type: String, default: "unknown" },
  source: { type: String, default: "local_nlp" }, // "local_nlp", "openai", "gemini"
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatLog', ChatLogSchema);
