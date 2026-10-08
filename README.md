# 🚀 Siddhartha Bolla — Personal Portfolio & AI Chatbot
> **Technical Domain — Round 2 Task Submission**  
> An ultra-responsive personal portfolio with an integrated profile AI conversational assistant. Designed to run on **ANY PC** or mobile device with **zero configuration, zero external servers, and zero API key dependencies**!

---

## 🌟 Live Demo & Preview
- **GitHub Repository**: [https://github.com/siddharthabolla456-tech/siddhartha-portfolio-chatbot](https://github.com/siddharthabolla456-tech)
- **Resume Access**: Available directly via interactive online preview and downloadable PDF in `assets/resume.pdf`.

---

## 🎯 Task Alignment (Round 2 Specifications)

| Task Requirement | Implementation in this Repository | Status |
| :--- | :--- | :---: |
| **Personal Portfolio** | Fully responsive, dark/light mode, modern glassmorphic UI representing Siddhartha's background, education at VNR VJIET, skills, and projects. | ✅ Completed |
| **Integrated Chatbot** | Built-in conversational agent designed around Siddhartha's profile, capable of answering all questions about projects, skills, resume, and coding stats. | ✅ Completed |
| **Resume Accessible** | Interactive full-screen online resume viewer modal + Direct download button linking to `assets/resume.pdf`. | ✅ Completed |
| **Cross-Platform Portability** | Runs seamlessly on **any PC** (Windows, Mac, Linux) by simply opening `index.html` or running a lightweight local server. | ✅ Completed |
| **Coding Profiles & GitHub** | Includes live links & stats for LeetCode (200+ solved), GitHub, HackerRank (5-Star), and CodeChef. | ✅ Completed |

---

## 💻 How to Run on ANY PC (Zero Setup Required)

Whoever clones or downloads this repository can run it immediately using **any** of the following options:

### ⚡ Method 1: Instant Browser Launch (Recommended / Simplest)
No command line or installation required:
1. Clone or download this repository.
2. Double-click **`index.html`** (or double-click **`start.bat`** on Windows).
3. The portfolio and chatbot will instantly open in your default web browser (Chrome, Edge, Firefox, Safari).

---

### 🐍 Method 2: Python Local Server
If you prefer running a local server with Python:
```bash
python server.py
# or
python -m http.server 8000
```
This automatically opens your browser at `http://localhost:8000`.

---

### 📦 Method 3: Node.js / NPM
If you prefer Node.js:
```bash
npm start
# or
npx serve .
```

---

### 🌐 Method 4: 1-Click GitHub Pages Deployment (Free Public URL)
To make your portfolio live globally:
1. Push this repository to your GitHub account (`https://github.com/siddharthabolla456-tech/...`).
2. Go to repository **Settings** ➔ **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
4. GitHub will generate a public HTTPS URL (e.g., `https://siddharthabolla456-tech.github.io/siddhartha-portfolio-chatbot/`) accessible from any device worldwide!

---

## 🤖 The AI Chatbot Engine

The chatbot is integrated directly into the web application and features a floating launcher in the bottom right corner with interactive conversation capabilities:

### 💬 Sample Prompts from the Task Sheet:
- *"What projects has User worked on?"* ➔ Renders interactive project cards (KrishiLink AI, Smart Feedback Management System, MedScan AI, etc.) with GitHub links.
- *"What technologies does he know?"* ➔ Displays categorized skills (Python, React, FastAPI, Node.js, Scikit-learn, etc.).
- *"What are his coding profiles?"* ➔ Displays LeetCode (200+ solved), GitHub, and HackerRank stats and profile links.
- *"Show me his resume."* ➔ Renders interactive buttons to immediately trigger the Resume Preview Modal or download the verified PDF.

### 🧠 Dual-Mode Chatbot Architecture:
1. **Autonomous Offline Intelligent NLP (Default)**:
   - Uses a client-side Natural Language Processing (NLP) intent matching and entity extraction engine.
   - **Requires NO API keys or external server** — guaranteed to work 100% reliably on any PC even without internet!
2. **Optional Google Gemini Live AI Mode**:
   - Evaluators can click the settings gear (⚙️) inside the chat header and enter a Google Gemini API key to experience real-time generative responses.

### 🎙️ Additional Chatbot Features:
- **Speech-to-Text (Voice Input)**: Click the microphone (🎤) icon to speak questions aloud using the Web Speech API.
- **Text-to-Speech (Voice Output)**: Toggle the speech button (🗣️) to hear answers read out loud.
- **Interactive Audio Feedback**: Synthesizes soft sound effects via the Web Audio API (no external MP3 downloads required).
- **Quick Suggestion Chips**: 1-click prompt pills for testing core questions immediately.

---

## 📂 Project Directory Structure

```plaintext
siddhartha-portfolio-chatbot/
│
├── index.html              # Main responsive portfolio web page
├── generate_resume.html    # High-fidelity printable resume template
├── start.bat               # 1-click Windows desktop launcher
├── server.py               # Lightweight zero-dependency Python local server
├── package.json            # Node.js project configuration
├── README.md               # Complete project documentation & guide
│
├── css/
│   └── style.css           # Modern CSS, dark/light theme tokens & glassmorphism
│
├── js/
│   ├── main.js             # UI controller, theme toggle, animations & modals
│   └── chatbot.js          # Self-contained AI chatbot engine & NLP router
│
└── assets/
    └── resume.pdf          # Official compiled PDF resume
```

---

## 👤 About the Author

- **Name**: Siddhartha Bolla
- **Department**: Computer Science & Engineering (Artificial Intelligence & Machine Learning)
- **Institution**: Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology (VNR VJIET), Hyderabad
- **Email**: [siddharthabolla456@gmail.com](mailto:siddharthabolla456@gmail.com)
- **GitHub**: [github.com/siddharthabolla456-tech](https://github.com/siddharthabolla456-tech)
- **LinkedIn**: [linkedin.com/in/siddhartha-bolla](https://linkedin.com/in/siddhartha-bolla)

---

## 📞 Task Contacts & Submission Details
For queries related to Round 2 evaluation:
- **Pallavi (Technical Head)**: +91 8919505048  
- **Sahithi (Web Development Lead)**: +91 9182624247  

---
*Built with ❤️ and passion for engineering intelligent, accessible web experiences.*
