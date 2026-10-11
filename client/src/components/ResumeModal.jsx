import React from 'react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop open" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">📄 Siddhartha Bolla — Curriculum Vitae</div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        <div className="modal-body">
          <div className="resume-paper-view">
            <div style={{ borderBottom: "2px solid #2563eb", paddingBottom: "12px", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f172a", marginBottom: "2px" }}>Siddhartha Bolla</h1>
                <div style={{ fontSize: "1.05rem", color: "#2563eb", fontWeight: 600 }}>MERN Stack Developer & AI/ML Software Engineer</div>
              </div>
              <div style={{ textAlign: "right", fontSize: "0.88rem", color: "#475569", lineHeight: 1.4 }}>
                <div>📧 <a href="mailto:siddharthabolla456@gmail.com">siddharthabolla456@gmail.com</a></div>
                <div>📍 Hyderabad, Telangana, India</div>
                <div>💻 GitHub: <a href="https://github.com/siddharthabolla456-tech" target="_blank" rel="noreferrer">github.com/siddharthabolla456-tech</a></div>
                <div>🟡 LeetCode: <a href="https://leetcode.com/u/Siddhartha_bolla" target="_blank" rel="noreferrer">leetcode.com/u/Siddhartha_bolla</a></div>
                <div>🔗 LinkedIn: <a href="https://www.linkedin.com/in/bolla-siddhartha-189581375?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">linkedin.com/in/bolla-siddhartha</a></div>
              </div>
            </div>

            {/* Education */}
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", color: "#1e3a8a", borderBottom: "1px solid #cbd5e1", paddingBottom: "4px", marginBottom: "8px" }}>Education</h3>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>
                <span>Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology (VNR VJIET)</span>
                <span>Hyderabad, India</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#475569", fontStyle: "italic", marginBottom: "6px" }}>
                <span>Bachelor of Technology in Computer Science & Engineering (AI & ML)</span>
                <span>CGPA: <strong>9.45 / 10</strong> | 2025 – 2029</span>
              </div>
              <ul style={{ paddingLeft: "18px", fontSize: "0.9rem", color: "#334155" }}>
                <li>Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning Foundations, Web Technologies (MERN), Operating Systems.</li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", color: "#1e3a8a", borderBottom: "1px solid #cbd5e1", paddingBottom: "4px", marginBottom: "8px" }}>Technical Skills</h3>
              <div style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#334155" }}>
                <div><strong>Programming Languages:</strong> Python, JavaScript (ES6+), C++, C, SQL, HTML5, CSS3</div>
                <div><strong>MERN Stack & Frameworks:</strong> React.js, Node.js, Express.js, MongoDB, FastAPI, RESTful APIs, Tailwind CSS, Vite</div>
                <div><strong>AI / Machine Learning:</strong> Scikit-Learn, Pandas, NumPy, Predictive Modeling, Exploratory Data Analysis</div>
                <div><strong>Databases & Tools:</strong> MongoDB, MySQL, Git, GitHub, Postman, Docker, VS Code, Linux / Bash</div>
              </div>
            </div>

            {/* Featured Projects */}
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", color: "#1e3a8a", borderBottom: "1px solid #cbd5e1", paddingBottom: "4px", marginBottom: "8px" }}>Featured Projects</h3>
              
              <div style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>
                  <span>KrishiLink AI — Smart Agri-Commerce & Predictive ML Ecosystem</span>
                  <span style={{ fontSize: "0.8rem", background: "#eff6ff", color: "#1d4ed8", padding: "2px 8px", borderRadius: "4px" }}>React, FastAPI, ML</span>
                </div>
                <ul style={{ paddingLeft: "18px", fontSize: "0.9rem", color: "#334155", marginTop: "4px" }}>
                  <li>Built a complete full-stack marketplace connecting farmers, FPOs, and bulk buyers directly.</li>
                  <li>Implemented machine learning services in FastAPI & Scikit-learn for crop yield forecasting and price analytics.</li>
                  <li>Created dynamic dashboards with geolocation mapping using Leaflet and responsive Tailwind UI.</li>
                </ul>
              </div>

              <div style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>
                  <span>Smart Feedback Management System</span>
                  <span style={{ fontSize: "0.8rem", background: "#eff6ff", color: "#1d4ed8", padding: "2px 8px", borderRadius: "4px" }}>Node, Express, MongoDB</span>
                </div>
                <ul style={{ paddingLeft: "18px", fontSize: "0.9rem", color: "#334155", marginTop: "4px" }}>
                  <li>Engineered scalable RESTful backend service with Express.js & MongoDB for college hackathon submission.</li>
                  <li>Implemented secure JWT authentication and role-based access control for students, faculty, and admins.</li>
                  <li>Constructed automated metrics pipelines with comprehensive Postman test environments.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>
                  <span>Personal Portfolio with Integrated AI Chatbot (MERN Stack)</span>
                  <span style={{ fontSize: "0.8rem", background: "#eff6ff", color: "#1d4ed8", padding: "2px 8px", borderRadius: "4px" }}>MongoDB, Express, React, Node</span>
                </div>
                <ul style={{ paddingLeft: "18px", fontSize: "0.9rem", color: "#334155", marginTop: "4px" }}>
                  <li>Engineered an autonomous conversational agent connected to MongoDB ChatLogs and Express REST endpoints.</li>
                  <li>Features dynamic action triggers for instant resume modal preview and direct PDF download.</li>
                </ul>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", color: "#1e3a8a", borderBottom: "1px solid #cbd5e1", paddingBottom: "4px", marginBottom: "8px" }}>Achievements & Coding Profiles</h3>
              <ul style={{ paddingLeft: "18px", fontSize: "0.9rem", color: "#334155" }}>
                <li><strong>LeetCode:</strong> 200+ Problems Solved (<a href="https://leetcode.com/u/Siddhartha_bolla" target="_blank" rel="noreferrer">leetcode.com/u/Siddhartha_bolla</a>).</li>
                <li><strong>Academic Standing:</strong> 9.45 / 10 CGPA at VNR VJIET (CSE AI & ML, 2025–2029).</li>
                <li><strong>HackerRank:</strong> 5-Star Badges in Problem Solving and Python.</li>
                <li><strong>College Hackathons:</strong> Active team lead building impactful web and machine learning solutions.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-actions-bar">
          <button className="btn btn-secondary btn-sm" onClick={() => window.print()}>🖨️ Print Resume</button>
          <a href="/resume.pdf" download="Siddhartha_Bolla_Resume.pdf" className="btn btn-primary btn-sm">⬇️ Download PDF</a>
          <button className="btn btn-secondary btn-sm" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
