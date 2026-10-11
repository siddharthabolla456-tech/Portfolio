const ChatLog = require('../models/ChatLog');
const seedData = require('../data/seedData');

// Master Profile Knowledge for Chatbot
const p = seedData.profile;

const intents = [
  {
    id: "projects",
    patterns: ["project", "projects", "work", "portfolio", "what has he built", "apps", "built", "show projects"],
    handler: () => ({
      text: "Siddhartha has engineered 2 major featured projects: Smart Feedback Management System (Node.js, Express, MongoDB) and KrishiLink AI (React, FastAPI, Scikit-Learn, Node.js).",
      actions: [
        { label: "View Feedback System", type: "scroll", target: "projects" },
        { label: "View KrishiLink AI", type: "scroll", target: "projects" },
        { label: "GitHub Profile", type: "link", url: p.github }
      ],
      html: `
        <p>Here are Siddhartha's featured engineering projects:</p>
        <div class="chat-card">
          <strong>📊 Smart Feedback Management System:</strong> College hackathon platform featuring NLP grievance categorization, duplicate issue clustering, and role-based REST APIs (Node.js, Express, MongoDB).<br><br>
          <strong>🌾 KrishiLink AI:</strong> Smart agri-commerce platform with ML crop yield forecasting and price analytics (React, FastAPI, Scikit-Learn, Node.js).
        </div>
      `
    })
  },
  {
    id: "krishilink",
    patterns: ["krishilink", "agriculture", "farmer", "crop yield", "market price", "agri"],
    handler: () => ({
      text: "KrishiLink AI is an intelligent agri-commerce platform connecting farmers, FPOs, and buyers with automated crop yield prediction, market rate analytics, and real-time trade matching. Built with React, FastAPI, Scikit-Learn, Node.js, and Leaflet.",
      actions: [
        { label: "GitHub Repo", type: "link", url: p.github },
        { label: "View in Projects", type: "scroll", target: "projects" }
      ],
      html: `
        <div class="chat-card">
          <strong>🌾 KrishiLink AI — Agri-Commerce & Predictive ML</strong><br>
          • Automated crop yield estimation using Scikit-Learn<br>
          • Market commodity price trends & predictions<br>
          • Interactive geolocation mapping for buyers & farmers<br>
          • <em>Stack:</em> React, FastAPI, Scikit-Learn, Node.js, Leaflet
        </div>
      `
    })
  },
  {
    id: "feedback_system",
    patterns: ["feedback", "feedback system", "smart feedback", "academic feedback"],
    handler: () => ({
      text: "Smart Feedback Management System is an enterprise academic feedback platform engineered for college hackathons using Node.js, Express, MongoDB, and RESTful APIs with NLP text analytics, duplicate clustering, and role-based access.",
      actions: [
        { label: "GitHub Repo", type: "link", url: "https://github.com/siddharthabolla456-tech/smart-feedback-management-system" },
        { label: "View in Projects", type: "scroll", target: "projects" }
      ],
      html: `
        <div class="chat-card">
          <strong>📊 Smart Feedback Management System</strong><br>
          • NLP text classification & safety hazard escalation<br>
          • Duplicate issue clustering with automatic priority boost<br>
          • Role-Based Access Control (RBAC) & Postman test collection<br>
          • <em>Stack:</em> Node.js, Express.js, MongoDB, JWT, REST APIs<br>
          • <em>Repo:</em> <a href="https://github.com/siddharthabolla456-tech/smart-feedback-management-system" target="_blank">github.com/siddharthabolla456-tech/smart-feedback-management-system</a>
        </div>
      `
    })
  },
  {
    id: "skills",
    patterns: ["skill", "skills", "tech", "technologies", "tech stack", "languages", "stack", "abilities"],
    handler: () => ({
      text: "Siddhartha's technical expertise spans Python, C++, C, Java, JavaScript, React.js, Node.js, Express.js, MongoDB, FastAPI, Scikit-Learn, Data Structures & Algorithms, and Git.",
      actions: [
        { label: "Explore Skills Section", type: "scroll", target: "skills" }
      ],
      html: `
        <div class="chat-card">
          <strong>💻 Technical Expertise:</strong><br>
          • <strong>Programming:</strong> Python, C++, C, Java, JavaScript (ES6+), SQL, HTML5, CSS3<br>
          • <strong>Core CS:</strong> Data Structures & Algorithms (DSA), OOP, DBMS, OS, Networks<br>
          • <strong>Frontend:</strong> React.js, Tailwind CSS, Vite, Responsive Web Design<br>
          • <strong>Backend:</strong> Node.js, Express.js, MongoDB, FastAPI, RESTful APIs, JWT<br>
          • <strong>AI/ML & Tools:</strong> Scikit-Learn, Pandas, NumPy, NLP, Postman, Git & GitHub<br>
          • <strong>Spoken Languages:</strong> Telugu (Native), Hindi (Fluent), English (Professional)
        </div>
      `
    })
  },
  {
    id: "languages",
    patterns: ["language", "languages spoken", "speak", "telugu", "hindi", "english", "mother tongue"],
    handler: () => ({
      text: "Siddhartha is multilingual and speaks Telugu (Native/Bilingual), Hindi (Fluent), and English (Professional Working Proficiency).",
      actions: [
        { label: "View About Section", type: "scroll", target: "about" }
      ],
      html: `
        <div class="chat-card">
          <strong>🗣️ Languages Spoken:</strong><br>
          • <strong>Telugu:</strong> Native / Bilingual Proficiency<br>
          • <strong>Hindi:</strong> Fluent / Professional Proficiency<br>
          • <strong>English:</strong> Professional Working Proficiency
        </div>
      `
    })
  },
  {
    id: "coding_profiles",
    patterns: ["coding profile", "coding profiles", "leetcode", "dsa", "hackerrank", "hive", "smart interviews", "rank", "problems solved"],
    handler: () => ({
      text: "Siddhartha is active on LeetCode (200+ solved problems), Smart Interviews Hive, and HackerRank (5-star problem solving badges).",
      actions: [
        { label: "🟡 LeetCode Profile", type: "link", url: "https://leetcode.com/u/Siddhartha_bolla" },
        { label: "🧠 Smart Interviews Hive", type: "link", url: "https://hive.smartinterviews.in/profile/siddhartha_bolla" },
        { label: "⭐ HackerRank Profile", type: "link", url: "https://www.hackerrank.com/profile/siddharthabolla1" },
        { label: "🐙 GitHub Profile", type: "link", url: p.github }
      ],
      html: `
        <div class="chat-card">
          <strong>🏆 Competitive Coding Profiles:</strong><br>
          • 🟡 <strong>LeetCode:</strong> 200+ Problems Solved (<a href="https://leetcode.com/u/Siddhartha_bolla" target="_blank">leetcode.com/u/Siddhartha_bolla</a>)<br>
          • 🧠 <strong>Smart Interviews Hive:</strong> <a href="https://hive.smartinterviews.in/profile/siddhartha_bolla" target="_blank">hive.smartinterviews.in/profile/siddhartha_bolla</a><br>
          • ⭐ <strong>HackerRank:</strong> <a href="https://www.hackerrank.com/profile/siddharthabolla1" target="_blank">hackerrank.com/profile/siddharthabolla1</a><br>
          • 🐙 <strong>GitHub:</strong> <a href="${p.github}" target="_blank">@siddharthabolla456-tech</a>
        </div>
      `
    })
  },
  {
    id: "resume",
    patterns: ["resume", "cv", "curriculum vitae", "show me his resume", "download resume", "bio data"],
    handler: () => ({
      text: "Here is Siddhartha's resume. You can view it in the interactive online modal or download the verified PDF.",
      actions: [
        { label: "👁️ View Resume Online", type: "modal", target: "resume" },
        { label: "⬇️ Download PDF", type: "download", url: "/resume.pdf" }
      ],
      html: `
        <div class="chat-card">
          <strong>📄 Siddhartha Bolla — Curriculum Vitae</strong><br>
          • B.Tech in CSE (AI & ML) at VNR VJIET (2025–2029)<br>
          • CGPA: <strong>9.45 / 10</strong><br>
          • 200+ LeetCode DSA Solutions<br>
          • Full-stack & ML project track record
        </div>
      `
    })
  },
  {
    id: "coding_profiles",
    patterns: ["coding profile", "coding profiles", "leetcode", "dsa", "hackerrank", "codechef", "rank", "problems solved"],
    handler: () => ({
      text: `Siddhartha has solved 200+ problems on LeetCode (Profile: https://leetcode.com/u/Siddhartha_bolla) and holds 5-star badges on HackerRank.`,
      actions: [
        { label: "🟡 Open LeetCode Profile", type: "link", url: "https://leetcode.com/u/Siddhartha_bolla" },
        { label: "🐙 GitHub Profile", type: "link", url: p.github }
      ],
      html: `
        <div class="chat-card">
          <strong>🏆 Competitive Coding Profiles:</strong><br>
          • 🟡 <strong>LeetCode:</strong> 200+ Problems Solved (<a href="https://leetcode.com/u/Siddhartha_bolla" target="_blank">leetcode.com/u/Siddhartha_bolla</a>)<br>
          • 🐙 <strong>GitHub:</strong> <a href="${p.github}" target="_blank">@siddharthabolla456-tech</a><br>
          • ⭐ <strong>HackerRank:</strong> 5-Star Badges in Problem Solving & Python
        </div>
      `
    })
  },
  {
    id: "education",
    patterns: ["education", "college", "degree", "university", "vnr", "vjiet", "cgpa", "gpa", "batch", "year"],
    handler: () => ({
      text: `Siddhartha is pursuing his B.Tech in Computer Science & Engineering (Artificial Intelligence and Machine Learning) at VNR VJIET, Hyderabad (Batch 2025–2029) and maintains a 9.45 CGPA.`,
      actions: [
        { label: "View Education", type: "scroll", target: "about" }
      ],
      html: `
        <div class="chat-card">
          <strong>🎓 Education & Academic Standing:</strong><br>
          • <strong>Institution:</strong> ${p.college}<br>
          • <strong>Degree:</strong> ${p.degree}<br>
          • <strong>CGPA:</strong> <span style="color:#10b981; font-weight:700;">9.45 / 10</span><br>
          • <strong>Batch:</strong> 2025 – 2029
        </div>
      `
    })
  },
  {
    id: "contact",
    patterns: ["contact", "email", "reach", "hire", "phone", "linkedin", "location"],
    handler: () => ({
      text: `You can reach Siddhartha at ${p.email} or connect on LinkedIn at ${p.linkedin}. He is located in Hyderabad, India.`,
      actions: [
        { label: "✉️ Send Email", type: "link", url: `mailto:${p.email}` },
        { label: "🔗 LinkedIn", type: "link", url: p.linkedin }
      ],
      html: `
        <div class="chat-card">
          <strong>📬 Contact Siddhartha:</strong><br>
          • 📧 <strong>Email:</strong> <a href="mailto:${p.email}">${p.email}</a><br>
          • 🔗 <strong>LinkedIn:</strong> <a href="${p.linkedin}" target="_blank">linkedin.com/in/bolla-siddhartha</a><br>
          • 📍 <strong>Location:</strong> ${p.location}
        </div>
      `
    })
  },
  {
    id: "why_hire",
    patterns: ["why hire", "why should we hire", "strengths", "what makes him special", "value"],
    handler: () => ({
      text: "Siddhartha combines top academic excellence (9.45 CGPA at VNR VJIET) with strong algorithmic foundations (200+ LeetCode problems solved) and hands-on MERN & ML product execution.",
      actions: [
        { label: "📄 Inspect Resume", type: "modal", target: "resume" },
        { label: "✉️ Contact Him", type: "scroll", target: "contact" }
      ],
      html: `
        <div class="chat-card">
          <strong>⭐ Why Hire Siddhartha Bolla?</strong><br>
          • <strong>Academic Excellence:</strong> 9.45 CGPA in B.Tech CSE (AI & ML) at VNR VJIET.<br>
          • <strong>Algorithmic Mastery:</strong> 200+ LeetCode DSA problems solved in Python & C++.<br>
          • <strong>Full-Stack & ML Delivery:</strong> Proven experience delivering MERN applications and ML microservices.<br>
          • <strong>Hackathon Proven:</strong> Built production-grade projects like KrishiLink AI and Smart Feedback System.
        </div>
      `
    })
  },
  {
    id: "greetings",
    patterns: ["hi", "hello", "hey", "greetings", "good morning", "good evening", "sup"],
    handler: () => ({
      text: "Hello! I am Siddhartha's Profile AI Assistant built with the MERN stack. How can I help you? Ask about projects, skills, 9.45 CGPA, LeetCode, or resume!",
      actions: [
        { label: "🚀 View Projects", type: "scroll", target: "projects" },
        { label: "📄 Show Resume", type: "modal", target: "resume" }
      ],
      html: `
        <p>Hello! 👋 I am <strong>Siddhartha's Profile AI Assistant</strong> powered by the MERN stack.</p>
        <p>I can instantly answer any question regarding:</p>
        <ul style="padding-left:18px; margin: 4px 0;">
          <li>🚀 Featured projects (KrishiLink AI, Feedback System)</li>
          <li>💻 Technical skills & toolkits</li>
          <li>🎓 Academic record (9.45 CGPA at VNR VJIET)</li>
          <li>🟡 LeetCode profile (200+ solved)</li>
          <li>📄 Resume viewing and downloads</li>
        </ul>
      `
    })
  }
];

exports.handleChat = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ success: false, message: "A message string is required." });
    }

    const q = message.toLowerCase().trim();
    const queryTokens = q.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);

    let bestIntent = null;
    let maxScore = 0;

    for (const intent of intents) {
      let score = 0;
      for (const pattern of intent.patterns) {
        const pat = pattern.toLowerCase();
        if (q === pat) score += 20;
        else if (q.includes(pat)) score += 10;
        else {
          for (const token of pat.split(/\s+/)) {
            if (queryTokens.includes(token)) score += 3;
          }
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestIntent = intent;
      }
    }

    let result;
    let intentId = "fallback";

    if (bestIntent && maxScore >= 6) {
      intentId = bestIntent.id;
      result = bestIntent.handler();
    } else {
      result = {
        text: "I'd be glad to help! You can ask about Siddhartha's projects (like KrishiLink AI), his 9.45 CGPA at VNR VJIET, his LeetCode profile (200+ solved), or his resume.",
        actions: [
          { label: "🚀 Projects", type: "scroll", target: "projects" },
          { label: "📄 Resume", type: "modal", target: "resume" },
          { label: "🟡 LeetCode", type: "link", url: "https://leetcode.com/u/Siddhartha_bolla" }
        ],
        html: `
          <p>I didn't quite catch that. Here are some popular questions you can ask me:</p>
          <div class="chat-card">
            • <em>"What projects has he worked on?"</em><br>
            • <em>"What technologies does he know?"</em><br>
            • <em>"What is his CGPA and college?"</em><br>
            • <em>"Show me his resume"</em><br>
            • <em>"What is his LeetCode profile?"</em>
          </div>
        `
      };
    }

    // Log query in MongoDB if connected
    if (global.isMongoConnected) {
      try {
        await ChatLog.create({
          query: message,
          response: result.text,
          intent: intentId,
          source: "mern_nlp_engine"
        });
      } catch (logErr) {
        // non-blocking
      }
    }

    return res.json({
      success: true,
      data: {
        reply: result.text,
        html: result.html,
        actions: result.actions || [],
        intent: intentId
      }
    });

  } catch (err) {
    console.error('Chat error:', err);
    return res.status(500).json({ success: false, message: "Error processing chat query" });
  }
};
