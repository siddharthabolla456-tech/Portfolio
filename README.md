# 🚀 Siddhartha Bolla — MERN Stack Portfolio & Autonomous AI Assistant

> **Round 2 Task: Technical Domain — Full-Stack Web Development & Conversational AI**  
> Built **100% exclusively with the MERN Stack** (MongoDB, Express.js, React.js, Node.js). Designed for **100% zero-configuration portability** across any evaluator's computer.

[![MERN Stack](https://img.shields.io/badge/Stack-MongoDB%20%7C%20Express%20%7C%20React%20%7C%20Node.js-green.svg)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-blue.svg)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-forestgreen.svg)](https://www.mongodb.com)
[![React](https://img.shields.io/badge/Frontend-React%2018%20%2B%20Vite-61dafb.svg)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Key Highlights & Candidate Profile

| Attribute | Details |
| :--- | :--- |
| **Full Name** | **Siddhartha Bolla** |
| **Role** | AI/ML Developer & Full-Stack Software Engineer |
| **Degree** | **B.Tech in Computer Science & Engineering (AI & ML)** |
| **Institution** | **VNR Vignana Jyothi Institute of Engineering & Technology (VNR VJIET)** |
| **Batch** | **2025 – 2029 (Expected)** |
| **CGPA** | **9.45 / 10** |
| **LeetCode Profile** | [leetcode.com/u/Siddhartha_bolla](https://leetcode.com/u/Siddhartha_bolla) (200+ Solved) |
| **LinkedIn Profile** | [linkedin.com/in/bolla-siddhartha](https://www.linkedin.com/in/bolla-siddhartha-189581375?utm_source=share_via&utm_content=profile&utm_medium=member_android) |
| **GitHub** | [github.com/siddharthabolla456-tech](https://github.com/siddharthabolla456-tech) |
| **Email** | [siddharthabolla456@gmail.com](mailto:siddharthabolla456@gmail.com) |

---

## 🏗️ 100% MERN Stack Architecture

This application strictly adheres to the **MERN (MongoDB, Express.js, React.js, Node.js)** specification:

```
siddhartha-portfolio-chatbot/
│
├── server/                          # [E & N] Node.js & Express.js Backend
│   ├── config/
│   │   └── db.js                    # MongoDB connection with auto-seeding & resilient fallback
│   ├── controllers/
│   │   ├── chatController.js        # Multi-intent NLP AI Chatbot engine + MongoDB chat logging
│   │   └── profileController.js     # RESTful controllers for Profile, Projects, Skills, Contact
│   ├── models/                      # [M] MongoDB Mongoose Schemas
│   │   ├── Profile.js               # Candidate bio, education, verified stats
│   │   ├── Project.js               # Portfolio project showcase
│   │   ├── Skill.js                 # Categorized technical proficiencies
│   │   ├── ContactMessage.js        # Contact form inquiries stored in DB
│   │   └── ChatLog.js               # User interaction history logged in DB
│   ├── routes/
│   │   ├── api.js                   # /api/profile, /api/projects, /api/skills, /api/contact
│   │   └── chat.js                  # /api/chat POST endpoint
│   ├── data/
│   │   └── seedData.js              # Initial database seed records
│   ├── server.js                    # Express app root & single-port production server
│   └── package.json                 # Backend dependencies (express, mongoose, cors, dotenv)
│
├── client/                          # [R] React.js Frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Responsive header with live navlinks & theme switch
│   │   │   ├── Hero.jsx             # Hero section with quick badges and action CTAs
│   │   │   ├── About.jsx            # Detailed education, CGPA 9.45, college background
│   │   │   ├── Skills.jsx           # Technical domain skills grid
│   │   │   ├── Projects.jsx         # KrishiLink AI, Smart Feedback, Portfolio Bot
│   │   │   ├── CodingProfiles.jsx   # Live LeetCode (200+ solved), GitHub, LinkedIn cards
│   │   │   ├── ResumeSection.jsx    # Embedded modal viewer & downloadable PDF
│   │   │   ├── ResumeModal.jsx      # High-fidelity PDF & HTML viewer dialog
│   │   │   ├── Contact.jsx          # Direct inquiry form wired to MongoDB
│   │   │   ├── Chatbot.jsx          # Self-contained AI Assistant with Speech & quick-prompts
│   │   │   ├── SettingsModal.jsx    # Appearance, speech rate, and sound settings
│   │   │   └── Footer.jsx           # Footnotes, social links, copyright
│   │   ├── App.jsx                  # Main React container with state management
│   │   ├── index.css                # Futuristic design system (Dark & Light theme tokens)
│   │   └── main.jsx                 # React root renderer
│   ├── dist/                        # Pre-compiled high-performance production build
│   ├── vite.config.js               # Vite config with backend proxy on port 5000
│   └── package.json                 # Frontend dependencies (react, react-dom, lucide-react)
│
├── assets/
│   └── resume.pdf                   # Siddhartha Bolla's verified resume
├── package.json                     # Root orchestrator (scripts: start, dev, build)
├── start.bat                        # 1-Click launcher for Windows
└── README.md                        # Documentation
```

---

## ⚡ Zero-Hurdle Setup: Run on ANY Computer

Anyone cloning this repository can launch the full application in **under 30 seconds** on any Windows, macOS, or Linux machine.

### Prerequisites
- **Node.js**: v18.0.0 or later installed ([Download Node.js](https://nodejs.org))
- **MongoDB** *(Optional)*: Local MongoDB server on port 27017 or MongoDB Atlas URI.  
  *(Note: The server includes an **automatic in-memory fallback**. If MongoDB is not running locally, the server still launches 100% flawlessly without crashing!)*

---

### Method 1: The 1-Click Windows Launcher (Easiest)
Simply double-click:
```
start.bat
```
This script launches the Express backend on `http://localhost:5000` and automatically opens the portfolio in your default web browser!

---

### Method 2: Running from VS Code Terminal

1. Open the project folder in **Visual Studio Code**:
   ```bash
   code .
   ```
2. Open the built-in terminal (`Ctrl + ~` on Windows/Linux, `Cmd + ~` on macOS).
3. Install dependencies:
   ```bash
   npm install
   ```
   *(This automatically triggers `postinstall` to configure both backend and frontend!)*
4. Start the application:
   ```bash
   npm start
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

---

### Method 3: Development Mode (Hot-Reloading)

If you are developing or modifying React components in real time:
```bash
npm run dev
```
This starts both:
- **Backend API**: `http://localhost:5000`
- **React Vite Dev Server**: `http://localhost:5173` (with hot-reloading & API proxy)

---

## 🤖 Integrated AI Chatbot Capabilities

The embedded conversational agent provides instant, accurate responses regarding Siddhartha's technical profile:

- **Academic Queries:** Explains B.Tech (AI & ML) at VNR VJIET, 9.45 CGPA, and batch 2025–2029.
- **Projects Exploration:** Delivers deep architectural breakdowns of *KrishiLink AI*, *Smart Feedback System*, and *AI Portfolio*.
- **Coding Profiles:** Answers questions about LeetCode (200+ solved problems), GitHub repositories, and LinkedIn profile.
- **Interactive Triggers:** Includes clickable shortcut buttons directly in chat (`"View Projects"`, `"Inspect Resume"`, `"Contact Siddhartha"`).
- **Speech Synthesis (TTS):** Uses Web Speech API for voice responses with toggleable audio settings.
- **MongoDB Persistence:** All user interactions are archived in the `chatlogs` collection for analytics.

---

## 📡 REST API Reference

| Endpoint | Method | Description |
| :--- | :---: | :--- |
| `/api/profile` | `GET` | Fetches candidate bio, education, verified stats from MongoDB |
| `/api/projects` | `GET` | Fetches project repository catalog |
| `/api/skills` | `GET` | Fetches categorized skill matrix |
| `/api/coding-profiles` | `GET` | Fetches LeetCode, GitHub, LinkedIn metrics |
| `/api/contact` | `POST` | Stores new visitor inquiry in MongoDB (`ContactMessage`) |
| `/api/chat` | `POST` | NLP response generator + logs conversation in MongoDB (`ChatLog`) |
| `/resume.pdf` | `GET` | Downloads/serves Siddhartha Bolla's resume PDF |

---

## 🛠️ Technology Stack Breakdown

- **Frontend:** React 18, Vite, Lucide Icons, Modern CSS3 with CSS Custom Properties.
- **Backend:** Node.js, Express.js REST APIs, CORS middleware.
- **Database:** MongoDB, Mongoose ODM with Schema Validation and Indexing.
- **Build & Dev Tooling:** Concurrently, Vite Bundler, NPM Workspaces.

---

## 👤 Author & Contact

**Siddhartha Bolla**  
- **Email:** [siddharthabolla456@gmail.com](mailto:siddharthabolla456@gmail.com)  
- **LinkedIn:** [bolla-siddhartha](https://www.linkedin.com/in/bolla-siddhartha-189581375?utm_source=share_via&utm_content=profile&utm_medium=member_android)  
- **LeetCode:** [Siddhartha_bolla](https://leetcode.com/u/Siddhartha_bolla)  
- **GitHub:** [siddharthabolla456-tech](https://github.com/siddharthabolla456-tech)  
