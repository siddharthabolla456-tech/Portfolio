/**
 * ============================================================================
 * Siddhartha Bolla - Profile AI Chatbot Engine
 * 
 * Features:
 * - 100% Self-Contained: Runs on ANY PC with zero API keys or backend setup!
 * - Multi-Intent Natural Language Understanding (NLP) with fuzzy scoring
 * - Rich Interactive Action Cards (Resume Viewer, Project Previews, Profile Badges)
 * - Voice Input (Speech Recognition) & Voice Output (Speech Synthesis)
 * - Dynamic Quick Suggestion Chips
 * - Optional Google Gemini API toggle for live LLM mode
 * ============================================================================
 */

(function () {
  'use strict';

  // Master Knowledge Base about Siddhartha Bolla
  const PROFILE_DATA = {
    name: "Siddhartha Bolla",
    title: "AI/ML Developer & Full-Stack Software Engineer",
    location: "Hyderabad, Telangana, India",
    email: "siddharthabolla456@gmail.com",
    github: "https://github.com/siddharthabolla456-tech",
    linkedin: "https://linkedin.com/in/siddhartha-bolla",
    college: "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology (VNR VJIET)",
    degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
    cgpa: "8.8 / 10",
    gradYear: "2028 (Expected)",
    
    skills: {
      languages: ["Python", "JavaScript (ES6+)", "C++", "C", "SQL", "HTML5", "CSS3"],
      frontend: ["React.js", "Tailwind CSS", "Vite", "Responsive Design", "Modern DOM APIs"],
      backend: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "JWT Authentication"],
      aiml: ["Scikit-Learn", "Pandas", "NumPy", "Predictive Modeling", "Data Analysis", "Computer Vision basics"],
      databases: ["MongoDB", "MySQL"],
      tools: ["Git", "GitHub", "Postman", "Docker", "VS Code", "Linux / Bash"]
    },

    projects: [
      {
        id: "krishilink",
        name: "KrishiLink AI — Agri-Commerce & Predictive ML",
        category: "AI/ML & Full-Stack",
        tech: ["React", "FastAPI", "Scikit-Learn", "Node.js", "Leaflet"],
        desc: "An intelligent agri-commerce platform connecting farmers, FPOs, and buyers with automated crop yield prediction, market rate analytics, and real-time trade matching.",
        github: "https://github.com/siddharthabolla456-tech",
        features: ["Crop Yield Estimation ML Model", "Market Price Prediction", "Interactive Map for Buyers/Farmers"]
      },
      {
        id: "feedback",
        name: "Smart Feedback Management System",
        category: "Full-Stack Backend",
        tech: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT"],
        desc: "Enterprise academic feedback and sentiment tracking system built for college hackathons with role-based access for students, faculty, and administrators.",
        github: "https://github.com/siddharthabolla456-tech",
        features: ["Role-Based Access Control (RBAC)", "Sentiment & Rating Metrics", "Automated Feedback Aggregation"]
      },
      {
        id: "portfolio-bot",
        name: "AI Portfolio with Integrated Conversational Agent",
        category: "Interactive AI Web",
        tech: ["JavaScript", "NLP Intent Engine", "CSS Glassmorphism", "Responsive Web"],
        desc: "Interactive portfolio featuring a zero-dependency client-side AI chatbot with fuzzy intent matching, dynamic action triggers, voice synthesis, and multi-device portability.",
        github: "https://github.com/siddharthabolla456-tech",
        features: ["Zero-dependency offline NLP", "Interactive Resume & Project Triggers", "Voice Input & Output"]
      },
      {
        id: "medscan",
        name: "MedScan AI — Medical Diagnostic Classifier",
        category: "Machine Learning & Vision",
        tech: ["Python", "Scikit-Learn", "FastAPI", "Data Analysis"],
        desc: "Machine learning diagnostic pipeline for anomaly detection in medical imaging datasets with high accuracy and confidence metrics.",
        github: "https://github.com/siddharthabolla456-tech",
        features: ["Image Preprocessing Pipeline", "Anomaly Detection", "High-Precision Diagnostic Scoring"]
      }
    ],

    codingProfiles: {
      leetcode: {
        platform: "LeetCode",
        url: "https://leetcode.com/u/siddharthabolla/",
        stats: "200+ Problems Solved (Data Structures & Algorithms in Python/C++)"
      },
      github: {
        platform: "GitHub",
        url: "https://github.com/siddharthabolla456-tech",
        stats: "Active open-source developer with repositories in AI/ML & Web Apps"
      },
      codechef: {
        platform: "CodeChef",
        url: "https://www.codechef.com",
        stats: "Competitive coding problem solver"
      },
      hackerrank: {
        platform: "HackerRank",
        url: "https://www.hackerrank.com",
        stats: "5-Star badges in Problem Solving and Python"
      }
    },

    resumeUrl: "assets/resume.pdf"
  };

  // Sound Synthesizer via Web Audio API (Zero external mp3 files!)
  const SoundFX = {
    audioCtx: null,
    enabled: true,

    init() {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioCtx = new AudioContext();
        }
      } catch (e) {
        console.warn("AudioContext not supported", e);
      }
    },

    playPop() {
      if (!this.enabled || !this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
      
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.08); // A5
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    },

    playReceive() {
      if (!this.enabled || !this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, this.audioCtx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, this.audioCtx.currentTime + 0.12); // E5
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.12);
    }
  };

  // Voice Assistant (Speech Synthesis & Recognition)
  const VoiceAgent = {
    ttsEnabled: false,
    recognition: null,
    isRecording: false,

    init(onSpeechResult) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';

        this.recognition.onresult = (event) => {
          const text = event.results[0][0].transcript;
          if (onSpeechResult) onSpeechResult(text);
          this.stopRecording();
        };

        this.recognition.onerror = () => {
          this.stopRecording();
        };

        this.recognition.onend = () => {
          this.stopRecording();
        };
      }
    },

    speak(text) {
      if (!this.ttsEnabled || !window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      // Strip markdown/html tags for clean voice
      const cleanText = text.replace(/<[^>]*>?/gm, '').replace(/[*_#`]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    },

    toggleRecording(buttonEl, onSpeechResult) {
      if (!this.recognition) {
        alert("Speech recognition is not supported in this browser. Please type your query.");
        return;
      }
      if (this.isRecording) {
        this.stopRecording(buttonEl);
      } else {
        try {
          this.recognition.start();
          this.isRecording = true;
          if (buttonEl) buttonEl.classList.add('recording');
        } catch (e) {
          console.warn(e);
        }
      }
    },

    stopRecording(buttonEl) {
      if (this.recognition && this.isRecording) {
        this.recognition.stop();
      }
      this.isRecording = false;
      const el = buttonEl || document.getElementById('chat-mic-btn');
      if (el) el.classList.remove('recording');
    }
  };

  // Natural Language Understanding (NLU) & Intent Router
  const NLUEngine = {
    intents: [
      {
        id: "projects",
        patterns: ["project", "projects", "work", "portfolio", "krishilink", "feedback system", "apps", "built", "developments"],
        handler: (query) => {
          let html = `<p>Here are the key projects Siddhartha has engineered:</p>`;
          PROFILE_DATA.projects.forEach(p => {
            html += `
              <div class="chat-action-card">
                <div class="chat-action-title">🚀 ${p.name}</div>
                <div class="chat-action-desc">${p.desc}</div>
                <div style="font-size:0.75rem; color:#3b82f6; font-weight:600; margin-top:2px;">
                  Stack: ${p.tech.join(', ')}
                </div>
                <div class="chat-btn-group">
                  <a href="${p.github}" target="_blank" class="chat-btn">💻 GitHub Repo</a>
                  <button class="chat-btn chat-btn-primary" onclick="document.getElementById('projects').scrollIntoView({behavior:'smooth'})">🔍 View in Section</button>
                </div>
              </div>
            `;
          });
          return {
            text: "Siddhartha has worked on notable projects in AI/ML and Full-Stack development including KrishiLink AI and Smart Feedback Management System.",
            html: html
          };
        }
      },
      {
        id: "skills",
        patterns: ["skill", "skills", "tech", "technologies", "stack", "language", "languages", "python", "javascript", "react", "fastapi", "tools", "know", "abilities"],
        handler: () => {
          return {
            text: `Siddhartha's technical expertise spans across:
• Languages: ${PROFILE_DATA.skills.languages.join(", ")}
• Frontend: ${PROFILE_DATA.skills.frontend.join(", ")}
• Backend: ${PROFILE_DATA.skills.backend.join(", ")}
• AI/ML: ${PROFILE_DATA.skills.aiml.join(", ")}
• Databases & Tools: ${PROFILE_DATA.skills.databases.join(", ")}, ${PROFILE_DATA.skills.tools.join(", ")}`,
            html: `
              <p>Siddhartha's technical skills encompass:</p>
              <div class="chat-action-card">
                <div class="chat-action-title">💻 Technical Stack</div>
                <div style="font-size:0.8rem; margin-top:4px; line-height:1.5;">
                  <div><strong>Languages:</strong> ${PROFILE_DATA.skills.languages.join(", ")}</div>
                  <div style="margin-top:3px;"><strong>Web & Backend:</strong> ${PROFILE_DATA.skills.frontend.concat(PROFILE_DATA.skills.backend).join(", ")}</div>
                  <div style="margin-top:3px;"><strong>AI / ML:</strong> ${PROFILE_DATA.skills.aiml.join(", ")}</div>
                  <div style="margin-top:3px;"><strong>Databases & Tools:</strong> ${PROFILE_DATA.skills.databases.concat(PROFILE_DATA.skills.tools).join(", ")}</div>
                </div>
                <div class="chat-btn-group">
                  <button class="chat-btn chat-btn-primary" onclick="document.getElementById('skills').scrollIntoView({behavior:'smooth'})">📊 View All Skills</button>
                </div>
              </div>
            `
          };
        }
      },
      {
        id: "resume",
        patterns: ["resume", "cv", "curriculum vitae", "show me his resume", "download resume", "bio data", "profile sheet"],
        handler: () => {
          return {
            text: "Here is Siddhartha's official resume. You can preview it right here or download the verified PDF.",
            html: `
              <p>Here is Siddhartha Bolla's complete resume:</p>
              <div class="chat-action-card">
                <div class="chat-action-title">📄 Siddhartha Bolla - Resume (PDF)</div>
                <div class="chat-action-desc">Includes B.Tech AI/ML education at VNR VJIET, featured full-stack & ML projects, competitive coding stats, and technical skills.</div>
                <div class="chat-btn-group">
                  <button class="chat-btn chat-btn-primary" onclick="window.openResumeModal()">👁️ View Resume</button>
                  <a href="${PROFILE_DATA.resumeUrl}" download="Siddhartha_Bolla_Resume.pdf" class="chat-btn">⬇️ Download PDF</a>
                </div>
              </div>
            `
          };
        }
      },
      {
        id: "coding_profiles",
        patterns: ["coding profile", "coding profiles", "leetcode", "codechef", "hackerrank", "competitive programming", "dsa", "rank", "rating", "problems solved"],
        handler: () => {
          return {
            text: `Siddhartha is an active competitive coder on LeetCode with 200+ solved problems, as well as on GitHub, CodeChef, and HackerRank.`,
            html: `
              <p>Here are Siddhartha's competitive coding profiles:</p>
              <div class="chat-action-card">
                <div class="chat-action-title">🏆 Competitive Coding & Profiles</div>
                <div style="font-size:0.8rem; margin: 4px 0;">
                  <div>🟡 <strong>LeetCode:</strong> 200+ Problems Solved (Data Structures & Algorithms)</div>
                  <div>🐙 <strong>GitHub:</strong> ${PROFILE_DATA.github.replace('https://', '')}</div>
                  <div>⭐ <strong>HackerRank:</strong> 5-Star badges in Python & Problem Solving</div>
                </div>
                <div class="chat-btn-group">
                  <a href="${PROFILE_DATA.codingProfiles.leetcode.url}" target="_blank" class="chat-btn chat-btn-primary">LeetCode Profile</a>
                  <a href="${PROFILE_DATA.github}" target="_blank" class="chat-btn">GitHub Profile</a>
                </div>
              </div>
            `
          };
        }
      },
      {
        id: "education",
        patterns: ["education", "college", "degree", "university", "school", "vnr", "vjiet", "btech", "gpa", "cgpa", "study", "studying"],
        handler: () => {
          return {
            text: `Siddhartha is pursuing his Bachelor of Technology (B.Tech) in Computer Science & Engineering (Artificial Intelligence and Machine Learning) at VNR VJIET, Hyderabad with a CGPA of ${PROFILE_DATA.cgpa}.`,
            html: `
              <p>Here is Siddhartha's educational background:</p>
              <div class="chat-action-card">
                <div class="chat-action-title">🎓 ${PROFILE_DATA.college}</div>
                <div class="chat-action-desc">
                  <strong>${PROFILE_DATA.degree}</strong><br>
                  • CGPA: <strong>${PROFILE_DATA.cgpa}</strong><br>
                  • Expected Graduation: <strong>${PROFILE_DATA.gradYear}</strong><br>
                  • Location: Hyderabad, India
                </div>
                <div class="chat-btn-group">
                  <button class="chat-btn chat-btn-primary" onclick="document.getElementById('about').scrollIntoView({behavior:'smooth'})">🏛️ View Education Section</button>
                </div>
              </div>
            `
          };
        }
      },
      {
        id: "contact",
        patterns: ["contact", "email", "reach", "hire", "phone", "message", "call", "linkedin", "touch", "talk"],
        handler: () => {
          return {
            text: `You can reach Siddhartha Bolla at ${PROFILE_DATA.email} or connect via LinkedIn at ${PROFILE_DATA.linkedin}.`,
            html: `
              <p>You can connect with Siddhartha through the following channels:</p>
              <div class="chat-action-card">
                <div class="chat-action-title">📬 Get in Touch</div>
                <div style="font-size:0.8rem; margin: 4px 0;">
                  <div>📧 <strong>Email:</strong> <a href="mailto:${PROFILE_DATA.email}">${PROFILE_DATA.email}</a></div>
                  <div>🔗 <strong>LinkedIn:</strong> <a href="${PROFILE_DATA.linkedin}" target="_blank">linkedin.com/in/siddhartha-bolla</a></div>
                  <div>📍 <strong>Location:</strong> ${PROFILE_DATA.location}</div>
                </div>
                <div class="chat-btn-group">
                  <a href="mailto:${PROFILE_DATA.email}" class="chat-btn chat-btn-primary">✉️ Send Email</a>
                  <button class="chat-btn" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">📝 Contact Form</button>
                </div>
              </div>
            `
          };
        }
      },
      {
        id: "about",
        patterns: ["who are you", "who is siddhartha", "about him", "tell me about yourself", "introduction", "intro", "bio", "background"],
        handler: () => {
          return {
            text: `Siddhartha Bolla is an enthusiastic AI/ML Developer and Full-Stack Software Engineer pursuing B.Tech in CSE (AI & ML) at VNR VJIET. He loves building intelligent, scalable software solutions.`,
            html: `
              <p><strong>Siddhartha Bolla</strong> is an AI/ML Developer and Full-Stack Software Engineer based in Hyderabad. He specializes in bridging modern machine learning models with robust web applications (React, FastAPI, Node.js).</p>
              <div class="chat-action-card">
                <div class="chat-action-title">✨ Highlights</div>
                <div class="chat-action-desc">
                  • 4+ Featured End-to-End Projects<br>
                  • 200+ Algorithmic Problems Solved<br>
                  • Strong background in Python, Machine Learning, and Full-Stack Architecture
                </div>
                <div class="chat-btn-group">
                  <button class="chat-btn chat-btn-primary" onclick="document.getElementById('about').scrollIntoView({behavior:'smooth'})">Read More About Him</button>
                </div>
              </div>
            `
          };
        }
      },
      {
        id: "achievements",
        patterns: ["achievement", "achievements", "awards", "hackathon", "hackathons", "certifications", "competitions", "wins"],
        handler: () => {
          return {
            text: "Siddhartha has competed in prominent college hackathons including Smart India Hackathon internal rounds, developed end-to-end platforms like KrishiLink AI and Smart Feedback Management System, and achieved 5-star badges on HackerRank.",
            html: `
              <div class="chat-action-card">
                <div class="chat-action-title">🏆 Key Achievements</div>
                <div class="chat-action-desc">
                  • College Hackathons: Designed full-stack platforms for agricultural and institutional automation.<br>
                  • 200+ LeetCode DSA Solutions across Arrays, Trees, Dynamic Programming, and Graphs.<br>
                  • Consistent academic excellence with an 8.8 CGPA at VNR VJIET.
                </div>
                <div class="chat-btn-group">
                  <button class="chat-btn chat-btn-primary" onclick="document.getElementById('achievements').scrollIntoView({behavior:'smooth'})">View Achievements</button>
                </div>
              </div>
            `
          };
        }
      },
      {
        id: "greetings",
        patterns: ["hi", "hello", "hey", "greetings", "good morning", "good evening", "sup", "howdy"],
        handler: () => {
          return {
            text: `Hello! I'm Siddhartha's AI Profile Assistant. How can I assist you today? You can ask about his projects, technical skills, resume, coding profiles, or education.`,
            html: `
              <p>Hello! 👋 I'm <strong>Siddhartha's AI Profile Assistant</strong>.</p>
              <p>I can answer any questions regarding:</p>
              <ul style="padding-left:18px; margin: 4px 0; font-size:0.85rem;">
                <li>🚀 Projects he has built</li>
                <li>💻 Technologies & frameworks he knows</li>
                <li>📄 Viewing or downloading his resume</li>
                <li>🏆 Coding profiles & problem-solving stats</li>
                <li>📬 Contact details & collaborations</li>
              </ul>
            `
          };
        }
      },
      {
        id: "bot_identity",
        patterns: ["what are you", "who made you", "bot", "assistant", "ai"],
        handler: () => {
          return {
            text: `I am an AI assistant built specifically for Siddhartha Bolla's personal portfolio. I can operate completely offline using local client-side NLP or integrate with Google Gemini AI.`,
            html: `
              <div class="chat-action-card">
                <div class="chat-action-title">🤖 About This Assistant</div>
                <div class="chat-action-desc">
                  Engineered with client-side NLP for instant, zero-latency answers with zero API key dependencies. Runs on any computer directly from GitHub without configuration!
                </div>
              </div>
            `
          };
        }
      }
    ],

    // Match query against known intents
    processQuery(query) {
      const q = query.toLowerCase().trim();
      let bestIntent = null;
      let maxScore = 0;

      for (const intent of this.intents) {
        let score = 0;
        for (const pattern of intent.patterns) {
          if (q === pattern) {
            score += 10;
          } else if (q.includes(pattern)) {
            score += 5;
          }
        }
        if (score > maxScore) {
          maxScore = score;
          bestIntent = intent;
        }
      }

      if (bestIntent && maxScore >= 5) {
        return bestIntent.handler(query);
      }

      // Fallback response with helpful recommendations
      return {
        text: `I'm not fully sure about that specific detail, but I can tell you all about Siddhartha's projects, technical skills, resume, coding profiles, or how to contact him!`,
        html: `
          <p>I didn't quite catch that. Here are some popular things you can ask me:</p>
          <div class="chat-btn-group" style="flex-direction:column; gap:4px; margin-top:6px;">
            <button class="chat-btn" onclick="window.sendChatPrompt('What projects has Siddhartha worked on?')">🚀 What projects has he worked on?</button>
            <button class="chat-btn" onclick="window.sendChatPrompt('What technologies does he know?')">💻 What technologies does he know?</button>
            <button class="chat-btn" onclick="window.sendChatPrompt('Show me his resume')">📄 Show me his resume</button>
            <button class="chat-btn" onclick="window.sendChatPrompt('What are his coding profiles?')">🏆 What are his coding profiles?</button>
          </div>
        `
      };
    }
  };

  // Optional Gemini API integration
  const GeminiClient = {
    apiKey: localStorage.getItem('gemini_api_key') || '',

    setApiKey(key) {
      this.apiKey = key.trim();
      if (this.apiKey) {
        localStorage.setItem('gemini_api_key', this.apiKey);
      } else {
        localStorage.removeItem('gemini_api_key');
      }
    },

    hasApiKey() {
      return Boolean(this.apiKey);
    },

    async ask(query) {
      if (!this.apiKey) throw new Error("No API key configured");

      const systemPrompt = `You are the personal AI chatbot for Siddhartha Bolla's portfolio website. 
Here is Siddhartha's profile:
- Name: Siddhartha Bolla
- Role: AI/ML Developer & Full-Stack Engineer
- College: VNR VJIET, Hyderabad (B.Tech in CSE AI & ML, CGPA: 8.8)
- Projects: KrishiLink AI (Agri-Commerce with ML yield forecasting), Smart Feedback Management System (Node/Express/MongoDB), AI Portfolio Chatbot, MedScan AI.
- Skills: Python, JavaScript, C++, React, FastAPI, Node.js, Express, MongoDB, Scikit-learn, Git, Docker.
- LeetCode: 200+ problems solved.
- Contact: siddharthabolla456@gmail.com, GitHub: siddharthabolla456-tech.
Be polite, professional, concise, and enthusiastic about Siddhartha's qualifications. Answer the visitor's question accurately based on this information.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: `${systemPrompt}\n\nVisitor question: ${query}` }] }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
      return { text: text, html: `<p>${text.replace(/\n/g, '<br>')}</p>` };
    }
  };

  // Main UI Chat Controller
  class ChatbotUI {
    constructor() {
      this.launcher = document.getElementById('chatbot-launcher');
      this.window = document.getElementById('chatbot-window');
      this.messagesContainer = document.getElementById('chat-messages');
      this.input = document.getElementById('chat-input');
      this.sendBtn = document.getElementById('chat-send-btn');
      this.closeBtn = document.getElementById('chat-close-btn');
      this.maximizeBtn = document.getElementById('chat-maximize-btn');
      this.clearBtn = document.getElementById('chat-clear-btn');
      this.soundBtn = document.getElementById('chat-sound-btn');
      this.voiceBtn = document.getElementById('chat-voice-btn');
      this.micBtn = document.getElementById('chat-mic-btn');
      this.badge = document.getElementById('chatbot-badge');

      this.isOpen = false;
      this.isMaximized = false;
      this.isTyping = false;

      this.init();
    }

    init() {
      SoundFX.init();
      VoiceAgent.init((spokenText) => {
        this.input.value = spokenText;
        this.sendMessage();
      });

      this.bindEvents();
      this.showWelcomeMessage();

      // Expose globally for quick chips and button callbacks
      window.sendChatPrompt = (text) => {
        if (!this.isOpen) this.toggleChat();
        this.input.value = text;
        this.sendMessage();
      };
    }

    bindEvents() {
      this.launcher.addEventListener('click', () => this.toggleChat());
      this.closeBtn.addEventListener('click', () => this.toggleChat(false));
      
      this.maximizeBtn.addEventListener('click', () => {
        this.isMaximized = !this.isMaximized;
        this.window.classList.toggle('maximized', this.isMaximized);
        this.maximizeBtn.innerHTML = this.isMaximized ? '🗗' : '⛶';
      });

      this.clearBtn.addEventListener('click', () => {
        this.messagesContainer.innerHTML = '';
        this.showWelcomeMessage();
      });

      this.soundBtn.addEventListener('click', () => {
        SoundFX.enabled = !SoundFX.enabled;
        this.soundBtn.classList.toggle('active', SoundFX.enabled);
        this.soundBtn.title = SoundFX.enabled ? "Sound FX: On" : "Sound FX: Off";
        if (SoundFX.enabled) SoundFX.playPop();
      });

      this.voiceBtn.addEventListener('click', () => {
        VoiceAgent.ttsEnabled = !VoiceAgent.ttsEnabled;
        this.voiceBtn.classList.toggle('active', VoiceAgent.ttsEnabled);
        this.voiceBtn.title = VoiceAgent.ttsEnabled ? "Read Aloud: On" : "Read Aloud: Off";
        if (VoiceAgent.ttsEnabled) {
          VoiceAgent.speak("Voice output enabled.");
        }
      });

      this.micBtn.addEventListener('click', () => {
        VoiceAgent.toggleRecording(this.micBtn, (transcript) => {
          this.input.value = transcript;
          this.sendMessage();
        });
      });

      this.sendBtn.addEventListener('click', () => this.sendMessage());

      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendMessage();
        }
      });

      // Quick Suggestion Chips click listeners
      document.querySelectorAll('.suggestion-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const prompt = chip.getAttribute('data-prompt') || chip.innerText;
          this.input.value = prompt;
          this.sendMessage();
        });
      });
    }

    toggleChat(forceState) {
      this.isOpen = forceState !== undefined ? forceState : !this.isOpen;
      this.window.classList.toggle('open', this.isOpen);
      if (this.isOpen) {
        if (this.badge) this.badge.style.display = 'none';
        this.input.focus();
        SoundFX.playPop();
      }
    }

    showWelcomeMessage() {
      const welcome = `
        <p>👋 Hello! I am <strong>Siddhartha's Profile AI Assistant</strong>.</p>
        <p>I'm here to answer any questions about his skills, projects, resume, or coding achievements.</p>
        <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px;">💡 <em>Try asking one of the suggestions below!</em></p>
      `;
      this.appendMessage('bot', welcome);
    }

    appendMessage(sender, contentHtml) {
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const msgDiv = document.createElement('div');
      msgDiv.className = `message ${sender}`;

      const avatar = sender === 'bot' ? '🤖' : '👤';
      msgDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-bubble">
          <div class="message-content">${contentHtml}</div>
          <div class="message-time">${timeStr}</div>
        </div>
      `;

      this.messagesContainer.appendChild(msgDiv);
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

      if (sender === 'bot') {
        SoundFX.playReceive();
      } else {
        SoundFX.playPop();
      }
    }

    showTyping() {
      this.isTyping = true;
      const typingDiv = document.createElement('div');
      typingDiv.className = 'message bot';
      typingDiv.id = 'typing-indicator-node';
      typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="typing-indicator">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      `;
      this.messagesContainer.appendChild(typingDiv);
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    hideTyping() {
      this.isTyping = false;
      const node = document.getElementById('typing-indicator-node');
      if (node) node.remove();
    }

    async sendMessage() {
      const text = this.input.value.trim();
      if (!text || this.isTyping) return;

      this.input.value = '';
      this.appendMessage('user', text);
      this.showTyping();

      // Check if Gemini API is active or use Local NLP
      try {
        let reply;
        if (GeminiClient.hasApiKey()) {
          try {
            reply = await GeminiClient.ask(text);
          } catch (err) {
            console.warn("Gemini API error, falling back to local NLP", err);
            reply = NLUEngine.processQuery(text);
          }
        } else {
          // Realistic typing response delay (300ms)
          await new Promise(r => setTimeout(r, 350));
          reply = NLUEngine.processQuery(text);
        }

        this.hideTyping();
        this.appendMessage('bot', reply.html || reply.text);
        VoiceAgent.speak(reply.text);

      } catch (err) {
        this.hideTyping();
        this.appendMessage('bot', `<p style="color:var(--danger)">An error occurred while generating a response. Please try again.</p>`);
      }
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ChatbotUI());
  } else {
    new ChatbotUI();
  }

})();
