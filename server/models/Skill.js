const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g. "Languages", "Frontend", "Backend", "AI / ML & Tools"
  icon: { type: String, default: "💻" },
  items: [{
    name: { type: String, required: true },
    level: { type: String, default: "Proficient" }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Skill', SkillSchema);
