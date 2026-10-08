/**
 * ============================================================================
 * Siddhartha Bolla - Advanced Profile AI Chatbot Engine
 * 
 * Features:
 * - 100% Self-Contained: Runs on ANY PC with zero API keys or backend setup!
 * - Advanced Multi-Intent & Entity Natural Language Understanding (NLP)
 * - Deep Semantic Question Answering (Skills, Projects, LeetCode, Education, CGPA,
 *   Why Hire, Contact, Algorithms, Tech Specifics)
 * - Rich Interactive Action Cards with live triggers (Resume Modal, LeetCode, LinkedIn, etc.)
 * - Voice Input (Speech Recognition) & Voice Output (Speech Synthesis)
 * - Synthesized Audio Effects via Web Audio API (zero external mp3 assets)
 * - Optional Google Gemini Live API toggle
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
    linkedin: "https://www.linkedin.com/in/bolla-siddhartha-189581375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    college: "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology (VNR VJIET)",
    degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
    cgpa: "9.45 / 10",
    batch: "2025 – 2029",
    gradYear: "2029",
    
    skills: {
      languages: ["Python", "JavaScript (ES6+)", "C++", "C", "SQL", "HTML5", "CSS3"],
      frontend: ["React.js", "Tailwind CSS", "Vite", "Responsive Design", "Modern DOM APIs"],
      backend: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "JWT Authentication"],
      aiml: ["Scikit-Learn", "Pandas", "NumPy", "Predictive Modeling", "Crop Yield Forecasting", "Data Analysis", "Computer Vision basics"],
      databases: ["MongoDB", "MySQL"],
      tools: ["Git", "GitHub", "Postman", "Docker", "VS Code", "Linux / Bash"]
    },

    projects: [
      {
        id: "krishilink",
        name: "KrishiLink AI — Agri-Commerce & Predictive ML",
        category: "AI/ML & Full-Stack",
        tech: ["React", "FastAPI", "Scikit-Learn", "Node.js", "Leaflet", "Tailwind CSS"],
        desc: "An intelligent agri-commerce platform connecting farmers, FPOs, and bulk agricultural buyers with automated crop yield prediction, commodity market rate forecasting, and real-time trade matching.",
        github: "https://github.com/siddharthabolla456-tech",
        features: ["Crop Yield Estimation ML Model", "Market Price Prediction Engine", "Interactive Geolocation Map for Buyers/Farmers", "Role-based Dashboards (Farmer, Buyer, FPO, Admin)"]
      },
      {
        id: "feedback",
        name: "Smart Feedback Management System",
        category: "Full-Stack Backend",
        tech: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "Postman"],
        desc: "Enterprise academic feedback and sentiment tracking system built for college hackathons with role-based access for students, faculty, and department administrators.",
        github: "https://github.com/siddharthabolla456-tech",
        features: ["Role-Based Access Control (RBAC)", "Automated Sentiment & Rating Metrics", "Scalable RESTful Backend Architecture", "Comprehensive Postman Test Collections"]
      },
      {
        id: "portfolio-bot",
        name: "AI Portfolio with Integrated Conversational Agent",
        category: "Interactive AI Web",
        tech: ["JavaScript", "Client-Side NLP Engine", "CSS Glassmorphism", "Web Audio API", "Web Speech API"],
        desc: "Interactive portfolio featuring a zero-dependency client-side AI chatbot with fuzzy intent matching, dynamic action triggers, voice synthesis, and multi-device portability.",
        github: "https://github.com/siddharthabolla456-tech",
        features: ["Zero-dependency offline NLP", "Interactive Resume & Project Action Triggers", "Voice Input & Output Integration", "Dark/Light Dynamic Theme Engine"]
      }
    ],

    codingProfiles: {
      leetcode: {
        platform: "LeetCode",
        url: "https://leetcode.com/u/Siddhartha_bolla",
        stats: "200+ Problems Solved (Data Structures & Algorithms in Python / C++)"
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
        stats: "5-Star Gold Badges in Problem Solving & Python"
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

  // Advanced Natural Language Understanding (NLU) & Intent Router
  const NLUEngine = {
    intents: [
      // 1. Projects - General
      {
        id: "projects",
        patterns: ["project", "projects", "work", "portfolio", "what has he built", "apps", "built", "developments", "show projects", "what did he create"],
        handler: () => {
          let html = `<p>Here are the key featured projects Siddhartha has built:</p>`;
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
                  <button class="chat-btn chat-btn-primary" onclick="document.getElementById('projects').scrollIntoView({behavior:'smooth'})">🔍 View Section</button>
                </div>
              </div>
            `;
          });
          return {
            text: "Siddhartha has engineered major projects including KrishiLink AI, Smart Feedback Management System, and this interactive AI Portfolio.",
            html: html
          };
        }
      },

      // 2. KrishiLink AI Specific
      {
        id: "krishilink_specific",
        patterns: ["krishilink", "krishi", "agriculture", "farmer", "crop yield", "market price", "agri"],
        handler: () => {
          const p = PROFILE_DATA.projects[0];
          return {
            text: `KrishiLink AI is an intelligent agri-commerce platform connecting farmers, FPOs, and buyers with automated crop yield prediction, market rate analytics, and real-time trade matching. Built with React, FastAPI, Scikit-Learn, Node.js, and Leaflet.`,
            html: `
              <div class="chat-action-card">
                <div class="chat-action-title">🌾 ${p.name}</div>
                <div class="chat-action-desc">${p.desc}</div>
                <div style="font-size:0.8rem; margin: 6px 0;">
                  <strong>Key Features:</strong>
                  <ul style="padding-left:16px; margin-top:3px;">
                    ${p.features.map(f => `<li>${f}</li>`).join('')}
                  </ul>
                </div>
                <div style="font-size:0.75rem; color:#3b82f6; font-weight:600;">Stack: ${p.tech.join(', ')}</div>
                <div class="chat-btn-group">
                  <a href="${p.github}" target="_blank" class="chat-btn chat-btn-primary">🐙 View on GitHub</a>
                  <button class="chat-btn" onclick="document.getElementById('projects').scrollIntoView({behavior:'smooth'})">Scroll to Project</button>
                </div>
              </div>
            `
          };
        }
      },

      // 3. Smart Feedback System Specific
      {
        id: "feedback_specific",
        patterns: ["feedback", "feedback system", "smart feedback", "academic feedback", "sentiment"],
        handler: () => {
          const p = PROFILE_DATA.projects[1];
          return {
            text: `Smart Feedback Management System is an enterprise academic feedback platform engineered for college hackathons. It uses Node.js, Express, MongoDB, and RESTful APIs with role-based access for students, faculty, and administrators.`,
            html: `
              <div class="chat-action-card">
                <div class="chat-action-title">📊 ${p.name}</div>
                <div class="chat-action-desc">${p.desc}</div>
                <div style="font-size:0.8rem; margin: 6px 0;">
                  <strong>Key Features:</strong>
                  <ul style="padding-left:16px; margin-top:3px;">
                    ${p.features.map(f => `<li>${f}</li>`).join('')}
                  </ul>
                </div>
                <div style="font-size:0.75rem; color:#3b82f6; font-weight:600;">Stack: ${p.tech.join(', ')}</div>
                <div class="chat-btn-group">
                  <a href="${p.github}" target="_blank" class="chat-btn chat-btn-primary">🐙 View on GitHub</a>
                  <button class="chat-btn" onclick="document.getElementById('projects').scrollIntoView({behavior:'smooth'})">Scroll to Project</button>
                </div>
              </div>
            `
          };
        }
      },

      // 4. Skills - General
      {
        id: "skills",
        patterns: ["skill", "skills", "tech", "technologies", "tech stack", "what technologies does he know", "what technologies do you know", "abilities", "expertise", "competencies"],
        handler: () => {
          return {
            text: `Siddhartha's technical expertise spans across:
• Languages: ${PROFILE_DATA.skills.languages.join(", ")}
• Frontend: ${PROFILE_DATA.skills.frontend.join(", ")}
• Backend: ${PROFILE_DATA.skills.backend.join(", ")}
• AI/ML: ${PROFILE_DATA.skills.aiml.join(", ")}
• Databases: ${PROFILE_DATA.skills.databases.join(", ")}
• Tools: ${PROFILE_DATA.skills.tools.join(", ")}`,
            html: `
              <p>Siddhartha has a versatile full-stack and AI engineering toolkit:</p>
              <div class="chat-action-card">
                <div class="chat-action-title">💻 Technical Stack Overview</div>
                <div style="font-size:0.82rem; margin-top:4px; line-height:1.55;">
                  <div><strong>🐍 Languages:</strong> ${PROFILE_DATA.skills.languages.join(", ")}</div>
                  <div style="margin-top:3px;"><strong>⚛️ Frontend:</strong> ${PROFILE_DATA.skills.frontend.join(", ")}</div>
                  <div style="margin-top:3px;"><strong>⚙️ Backend:</strong> ${PROFILE_DATA.skills.backend.join(", ")}</div>
                  <div style="margin-top:3px;"><strong>🤖 AI / ML:</strong> ${PROFILE_DATA.skills.aiml.join(", ")}</div>
                  <div style="margin-top:3px;"><strong>🗄️ Databases & Tools:</strong> ${PROFILE_DATA.skills.databases.concat(PROFILE_DATA.skills.tools).join(", ")}</div>
                </div>
                <div class="chat-btn-group">
                  <button class="chat-btn chat-btn-primary" onclick="document.getElementById('skills').scrollIntoView({behavior:'smooth'})">📊 View Full Skills Grid</button>
                </div>
              </div>
            `
          };
        }
      },

      // 5. Specific Tech Questions (Python, React, ML, FastAPI, etc.)
      {
        id: "python_specific",
        patterns: ["python", "does he know python", "python experience", "c++", "cpp", "javascript", "js"],
        handler: () => {
          return {
            text: `Yes! Siddhartha is highly proficient in Python (for Machine Learning, FastAPI, and Scikit-Learn), JavaScript/ES6+ (for modern web and React), as well as C++ for high-performance data structures and algorithms.`,
            html: `
              <div class="chat-action-card">
                <div class="chat-action-title">🐍 Programming Languages</div>
                <div class="chat-action-desc">
                  • <strong>Python:</strong> Core language for machine learning models, FastAPI services, and data manipulation.<br>
                  • <strong>JavaScript (ES6+):</strong> Powers full-stack applications with React, Node.js, and client-side systems.<br>
                  • <strong>C++:</strong> Used extensively for competitive programming and solving 200+ LeetCode problems.
                </div>
              </div>
            `
          };
        }
      },

      {
        id: "aiml_specific",
        patterns: ["machine learning", "ai", "artificial intelligence", "ml", "scikit", "pandas", "numpy", "deep learning", "model"],
        handler: () => {
          return {
            text: `Siddhartha specializes in AI & Machine Learning. He is pursuing his B.Tech in CSE (AI & ML) at VNR VJIET and has implemented predictive models using Scikit-Learn, Pandas, NumPy, and FastAPI for real-world applications like crop yield prediction.`,
            html: `
              <div class="chat-action-card">
                <div class="chat-action-title">🤖 AI & Machine Learning Expertise</div>
                <div class="chat-action-desc">
                  • <strong>Specialization:</strong> B.Tech in CSE (AI & ML) at VNR VJIET with a 9.45 CGPA.<br>
                  • <strong>Toolsets:</strong> Scikit-Learn, Pandas, NumPy, Predictive Modeling, Data Preprocessing.<br>
                  • <strong>Applied Work:</strong> Automated crop yield estimation & price trend forecasting in KrishiLink AI.
                </div>
                <div class="chat-btn-group">
                  <button class="chat-btn chat-btn-primary" onclick="window.sendChatPrompt('Tell me about KrishiLink AI project')">🌾 Explore KrishiLink AI</button>
                </div>
              </div>
            `
          };
        }
      },

      // 6. Resume
      {
        id: "resume",
        patterns: ["resume", "cv", "curriculum vitae", "show me his resume", "download resume", "bio data", "profile sheet", "get resume", "view resume"],
        handler: () => {
          return {
            text: "Here is Siddhartha's official resume. You can preview it directly in the interactive online modal or download the verified PDF copy.",
            html: `
              <p>Here is Siddhartha Bolla's complete resume:</p>
              <div class="chat-action-card">
                <div class="chat-action-title">📄 Siddhartha Bolla — Curriculum Vitae</div>
                <div class="chat-action-desc">
                  • <strong>Degree:</strong> B.Tech CSE (AI & ML) at VNR VJIET (2025–2029)<br>
                  • <strong>CGPA:</strong> 9.45 / 10<br>
                  • <strong>Key Projects:</strong> KrishiLink AI, Smart Feedback System, AI Portfolio<br>
                  • <strong>Competitive Stats:</strong> 200+ LeetCode Solved
                </div>
                <div class="chat-btn-group">
                  <button class="chat-btn chat-btn-primary" onclick="window.openResumeModal()">👁️ View Online Resume</button>
                  <a href="${PROFILE_DATA.resumeUrl}" download="Siddhartha_Bolla_Resume.pdf" class="chat-btn">⬇️ Download PDF</a>
                </div>
              </div>
            `
          };
        }
      },

      // 7. LeetCode & Coding Profiles
      {
        id: "coding_profiles",
        patterns: ["coding profile", "coding profiles", "leetcode", "what are his coding profiles", "codechef", "hackerrank", "competitive programming", "dsa", "rank", "rating", "problems solved", "algorithm", "algorithms"],
        handler: () => {
          return {
            text: `Siddhartha is an active competitive coder with 200+ solved problems on LeetCode (Profile: https://leetcode.com/u/Siddhartha_bolla) as well as 5-star badges on HackerRank.`,
            html: `
              <p>Here are Siddhartha's verified coding profiles:</p>
              <div class="chat-action-card">
                <div class="chat-action-title">🏆 Competitive Coding & Profiles</div>
                <div style="font-size:0.82rem; margin: 6px 0; line-height:1.5;">
                  <div>🟡 <strong>LeetCode:</strong> 200+ Problems Solved (Data Structures & Algorithms in Python & C++)</div>
                  <div>🔗 Profile: <a href="https://leetcode.com/u/Siddhartha_bolla" target="_blank">leetcode.com/u/Siddhartha_bolla</a></div>
                  <div style="margin-top:3px;">🐙 <strong>GitHub:</strong> <a href="${PROFILE_DATA.github}" target="_blank">github.com/siddharthabolla456-tech</a></div>
                  <div style="margin-top:3px;">⭐ <strong>HackerRank:</strong> 5-Star Badges in Problem Solving & Python</div>
                </div>
                <div class="chat-btn-group">
                  <a href="https://leetcode.com/u/Siddhartha_bolla" target="_blank" class="chat-btn chat-btn-primary">🟡 Open LeetCode Profile</a>
                  <a href="${PROFILE_DATA.github}" target="_blank" class="chat-btn">🐙 GitHub Profile</a>
                </div>
              </div>
            `
          };
        }
      },

      // 8. Education, College & CGPA
      {
        id: "education",
        patterns: ["education", "college", "degree", "university", "school", "vnr", "vjiet", "btech", "gpa", "cgpa", "grades", "pointer", "marks", "percentage", "batch", "year", "studying", "study"],
        handler: () => {
          return {
            text: `Siddhartha is pursuing his B.Tech in Computer Science & Engineering (Artificial Intelligence and Machine Learning) at VNR VJIET, Hyderabad (Batch 2025–2029) and maintains an outstanding CGPA of 9.45 / 10.`,
            html: `
              <div class="chat-action-card">
                <div class="chat-action-title">🎓 Education & Academic Excellence</div>
                <div class="chat-action-desc" style="line-height:1.6;">
                  • <strong>Institution:</strong> ${PROFILE_DATA.college}<br>
                  • <strong>Degree:</strong> ${PROFILE_DATA.degree}<br>
                  • <strong>Academic CGPA:</strong> <span style="color:#10b981; font-weight:700; font-size:1rem;">9.45 / 10</span><br>
                  • <strong>Academic Batch:</strong> 2025 – 2029<br>
                  • <strong>Location:</strong> Hyderabad, Telangana, India
                </div>
                <div class="chat-btn-group">
                  <button class="chat-btn chat-btn-primary" onclick="document.getElementById('about').scrollIntoView({behavior:'smooth'})">🏛️ View Education Section</button>
                  <button class="chat-btn" onclick="window.openResumeModal()">📄 Verify on Resume</button>
                </div>
              </div>
            `
          };
        }
      },

      // 9. LinkedIn & Socials
      {
        id: "linkedin",
        patterns: ["linkedin", "linkedin profile", "connect", "social", "network"],
        handler: () => {
          return {
            text: `You can connect with Siddhartha on LinkedIn at: ${PROFILE_DATA.linkedin}`,
            html: `
              <div class="chat-action-card">
                <div class="chat-action-title">🔗 LinkedIn Profile</div>
                <div class="chat-action-desc">
                  Connect with Siddhartha Bolla on LinkedIn to view recommendations, professional updates, and collaborations:
                </div>
                <div class="chat-btn-group">
                  <a href="${PROFILE_DATA.linkedin}" target="_blank" class="chat-btn chat-btn-primary">🔗 Open LinkedIn Profile</a>
                  <a href="mailto:${PROFILE_DATA.email}" class="chat-btn">✉️ Direct Email</a>
                </div>
              </div>
            `
          };
        }
      },

      // 10. GitHub
      {
        id: "github",
        patterns: ["github", "git", "repositories", "repo", "source code"],
        handler: () => {
          return {
            text: `Siddhartha's GitHub username is @siddharthabolla456-tech. URL: ${PROFILE_DATA.github}`,
            html: `
              <div class="chat-action-card">
                <div class="chat-action-title">🐙 GitHub Repositories</div>
                <div class="chat-action-desc">
                  Check out Siddhartha's open-source projects, machine learning models, and full-stack codebases at:
                </div>
                <div class="chat-btn-group">
                  <a href="${PROFILE_DATA.github}" target="_blank" class="chat-btn chat-btn-primary">🐙 Visit GitHub Profile</a>
                </div>
              </div>
            `
          };
        }
      },

      // 11. Contact & Email
      {
        id: "contact",
        patterns: ["contact", "email", "reach", "hire", "phone", "message", "call", "touch", "talk", "where is he located", "address", "location"],
        handler: () => {
          return {
            text: `You can reach Siddhartha Bolla at ${PROFILE_DATA.email} or connect via LinkedIn. He is based in Hyderabad, India.`,
            html: `
              <div class="chat-action-card">
                <div class="chat-action-title">📬 Get in Touch with Siddhartha</div>
                <div style="font-size:0.82rem; margin: 6px 0; line-height:1.5;">
                  <div>📧 <strong>Email:</strong> <a href="mailto:${PROFILE_DATA.email}">${PROFILE_DATA.email}</a></div>
                  <div>🔗 <strong>LinkedIn:</strong> <a href="${PROFILE_DATA.linkedin}" target="_blank">linkedin.com/in/bolla-siddhartha</a></div>
                  <div>📍 <strong>Location:</strong> ${PROFILE_DATA.location}</div>
                </div>
                <div class="chat-btn-group">
                  <a href="mailto:${PROFILE_DATA.email}" class="chat-btn chat-btn-primary">✉️ Send Email</a>
                  <button class="chat-btn" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">📝 Go to Contact Form</button>
                </div>
              </div>
            `
          };
        }
      },

      // 12. Why Hire Siddhartha / Strengths
      {
        id: "why_hire",
        patterns: ["why hire", "why should we hire", "strengths", "what makes him special", "value", "fit", "internship", "job offer", "qualities"],
        handler: () => {
          return {
            text: `Siddhartha combines top-tier academic rigor (9.45 CGPA at VNR VJIET) with strong algorithmic foundations (200+ LeetCode problems solved) and hands-on full-stack + ML product engineering experience (KrishiLink AI, Smart Feedback System).`,
            html: `
              <div class="chat-action-card">
                <div class="chat-action-title">⭐ Why Hire Siddhartha Bolla?</div>
                <div class="chat-action-desc" style="line-height:1.6;">
                  • <strong>Academic Excellence:</strong> 9.45 / 10 CGPA in B.Tech CSE (AI & ML) at VNR VJIET.<br>
                  • <strong>Strong Algorithmic Core:</strong> 200+ LeetCode DSA problems solved in Python & C++.<br>
                  • <strong>End-to-End Product Execution:</strong> Proven experience delivering full-stack platforms with ML microservices, React frontends, and REST APIs.<br>
                  • <strong>Quick Learner & Collaborator:</strong> Thrives in hackathon environments and technical teamwork.
                </div>
                <div class="chat-btn-group">
                  <button class="chat-btn chat-btn-primary" onclick="window.openResumeModal()">📄 Inspect Resume</button>
                  <a href="mailto:${PROFILE_DATA.email}" class="chat-btn">✉️ Schedule an Interview</a>
                </div>
              </div>
            `
          };
        }
      },

      // 13. General About / Bio
      {
        id: "about",
        patterns: ["who are you", "who is siddhartha", "about him", "tell me about yourself", "introduction", "intro", "bio", "background", "summary"],
        handler: () => {
          return {
            text: `Siddhartha Bolla is an AI/ML Developer and Full-Stack Software Engineer pursuing B.Tech in CSE (AI & ML) at VNR VJIET (CGPA: 9.45, Batch 2025-2029). He specializes in machine learning and scalable web platforms.`,
            html: `
              <p><strong>Siddhartha Bolla</strong> is an AI/ML Developer and Full-Stack Software Engineer from Hyderabad, India.</p>
              <div class="chat-action-card">
                <div class="chat-action-title">✨ Profile Snapshot</div>
                <div class="chat-action-desc" style="line-height:1.55;">
                  • <strong>Education:</strong> VNR VJIET — B.Tech CSE (AI & ML) [CGPA: <strong>9.45</strong>, Batch: 2025–2029]<br>
                  • <strong>Key Strengths:</strong> Python, React, FastAPI, Node.js, Scikit-Learn, MongoDB<br>
                  • <strong>Problem Solving:</strong> 200+ LeetCode DSA challenges solved
                </div>
                <div class="chat-btn-group">
                  <button class="chat-btn chat-btn-primary" onclick="document.getElementById('about').scrollIntoView({behavior:'smooth'})">Read More About Him</button>
                  <button class="chat-btn" onclick="window.sendChatPrompt('What projects has Siddhartha worked on?')">🚀 View Projects</button>
                </div>
              </div>
            `
          };
        }
      },

      // 14. Greetings
      {
        id: "greetings",
        patterns: ["hi", "hello", "hey", "greetings", "good morning", "good evening", "good afternoon", "sup", "howdy", "namaste"],
        handler: () => {
          return {
            text: `Hello! I'm Siddhartha's AI Profile Assistant. How can I help you today? Ask me about his projects, skills, 9.45 CGPA, LeetCode profile, or resume!`,
            html: `
              <p>Hello! 👋 I'm <strong>Siddhartha's AI Profile Assistant</strong>.</p>
              <p>I can instantly answer any question about him:</p>
              <ul style="padding-left:18px; margin: 5px 0; font-size:0.84rem; line-height:1.5;">
                <li>🚀 <strong>Projects:</strong> KrishiLink AI, Smart Feedback System, Portfolio Bot</li>
                <li>💻 <strong>Technologies:</strong> Python, React, FastAPI, Node.js, ML</li>
                <li>🎓 <strong>Education & CGPA:</strong> VNR VJIET (9.45 CGPA, Batch 2025–2029)</li>
                <li>🟡 <strong>Coding Profiles:</strong> LeetCode (200+ solved), GitHub</li>
                <li>📄 <strong>Resume:</strong> Instant online preview or PDF download</li>
              </ul>
            `
          };
        }
      },

      // 15. Humor / Small Talk
      {
        id: "humor",
        patterns: ["joke", "tell me a joke", "make me laugh", "funny"],
        handler: () => {
          const jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
            "There are 10 types of people in the world: those who understand binary, and those who don't. 💻",
            "Why did the Python developer need glasses? Because they couldn't C#! 🐍"
          ];
          const joke = jokes[Math.floor(Math.random() * jokes.length)];
          return {
            text: joke,
            html: `<p>😄 ${joke}</p>`
          };
        }
      },

      // 16. Bot Identity
      {
        id: "bot_identity",
        patterns: ["what are you", "who made you", "bot", "assistant", "ai", "how do you work", "architecture"],
        handler: () => {
          return {
            text: `I am an autonomous AI assistant built specifically for Siddhartha Bolla's portfolio. I run 100% client-side with zero external server dependencies, so anyone who opens this repository on their PC can chat with me immediately!`,
            html: `
              <div class="chat-action-card">
                <div class="chat-action-title">🤖 About This Assistant</div>
                <div class="chat-action-desc">
                  Engineered with client-side NLP intent recognition, zero-dependency Web Audio synthesis, and browser speech APIs. Designed to run portably on any PC directly from GitHub without configuration!
                </div>
              </div>
            `
          };
        }
      }
    ],

    // Match query against known intents with token-based semantic scoring
    processQuery(query) {
      const q = query.toLowerCase().trim();
      if (!q) return { text: "Please type or speak a question!", html: "<p>Please type or speak a question!</p>" };

      let bestIntent = null;
      let maxScore = 0;

      // Tokenize query words
      const queryTokens = q.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);

      for (const intent of this.intents) {
        let score = 0;
        for (const pattern of intent.patterns) {
          const pat = pattern.toLowerCase();
          if (q === pat) {
            score += 20; // Exact full match
          } else if (q.includes(pat)) {
            score += 10; // Substring match
          } else {
            // Check individual token overlap
            const patternTokens = pat.split(/\s+/);
            for (const pt of patternTokens) {
              if (queryTokens.includes(pt)) {
                score += 3;
              }
            }
          }
        }

        if (score > maxScore) {
          maxScore = score;
          bestIntent = intent;
        }
      }

      if (bestIntent && maxScore >= 6) {
        return bestIntent.handler(query);
      }

      // Contextual Smart Fallback with interactive prompt suggestions
      return {
        text: `I'd love to help you with that! You can ask about Siddhartha's projects (like KrishiLink AI), his 9.45 CGPA at VNR VJIET, his LeetCode profile (200+ solved), or his resume.`,
        html: `
          <p>I'd love to help you with that! Here are popular questions you can ask me with 1 click:</p>
          <div class="chat-btn-group" style="flex-direction:column; gap:4px; margin-top:6px;">
            <button class="chat-btn" onclick="window.sendChatPrompt('What projects has Siddhartha worked on?')">🚀 What projects has he worked on?</button>
            <button class="chat-btn" onclick="window.sendChatPrompt('Tell me about his CGPA and education')">🎓 What is his CGPA and college?</button>
            <button class="chat-btn" onclick="window.sendChatPrompt('What are his coding profiles?')">🟡 What is his LeetCode profile?</button>
            <button class="chat-btn" onclick="window.sendChatPrompt('Show me his resume')">📄 Show me his resume</button>
            <button class="chat-btn" onclick="window.sendChatPrompt('Why should we hire Siddhartha?')">⭐ Why hire Siddhartha?</button>
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
Here is Siddhartha's verified profile:
- Name: Siddhartha Bolla
- Role: AI/ML Developer & Full-Stack Engineer
- College: VNR VJIET, Hyderabad
- Degree: B.Tech in CSE (Artificial Intelligence & Machine Learning)
- Batch: 2025 - 2029
- CGPA: 9.45 / 10
- LeetCode: https://leetcode.com/u/Siddhartha_bolla (200+ problems solved)
- GitHub: https://github.com/siddharthabolla456-tech
- LinkedIn: https://www.linkedin.com/in/bolla-siddhartha-189581375?utm_source=share_via&utm_content=profile&utm_medium=member_android
- Projects: KrishiLink AI (Agri-Commerce with ML yield forecasting), Smart Feedback Management System (Node/Express/MongoDB), AI Portfolio Chatbot.
- Skills: Python, JavaScript, C++, React, FastAPI, Node.js, Express, MongoDB, Scikit-learn, Git, Docker.
- Contact: siddharthabolla456@gmail.com
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
        <p>👋 Hello! I am <strong>Siddhartha's Advanced Profile Assistant</strong>.</p>
        <p>Ask me about his projects, skills, 9.45 CGPA at VNR VJIET, 200+ solved LeetCode challenges, or resume!</p>
        <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px;">💡 <em>Try clicking any prompt chip below!</em></p>
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
          // Realistic typing response delay (280ms)
          await new Promise(r => setTimeout(r, 280));
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
