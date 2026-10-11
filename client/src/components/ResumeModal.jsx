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
            <div style={{ borderBottom: "2.5px solid #2563eb", paddingBottom: "12px", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <img 
                  src="/profile.jpg" 
                  alt="Siddhartha Bolla" 
                  style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", border: "2.5px solid #2563eb", boxShadow: "0 4px 10px rgba(37,99,235,0.2)" }} 
                />
                <div>
                  <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", marginBottom: "2px" }}>Siddhartha Bolla</h1>
                  <div style={{ fontSize: "1.02rem", color: "#2563eb", fontWeight: 600 }}>AI/ML Developer & Full-Stack Software Engineer</div>
                </div>
              </div>
              <div style={{ textAlign: "right", fontSize: "0.85rem", color: "#475569", lineHeight: 1.4 }}>
                <div>📧 <a href="mailto:siddharthabolla456@gmail.com" style={{ color: "#2563eb" }}>siddharthabolla456@gmail.com</a> | 📍 Hyderabad, India</div>
                <div>🟡 LeetCode: <a href="https://leetcode.com/u/Siddhartha_bolla" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>leetcode.com/u/Siddhartha_bolla</a> (200+ Solved)</div>
                <div>🧠 Smart Interviews: <a href="https://hive.smartinterviews.in/profile/siddhartha_bolla" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>hive.smartinterviews.in/profile/siddhartha_bolla</a></div>
                <div>⭐ HackerRank: <a href="https://www.hackerrank.com/profile/siddharthabolla1" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>hackerrank.com/profile/siddharthabolla1</a></div>
                <div>🐙 GitHub: <a href="https://github.com/siddharthabolla456-tech" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>github.com/siddharthabolla456-tech</a></div>
                <div>🔗 LinkedIn: <a href="https://www.linkedin.com/in/bolla-siddhartha-189581375?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>linkedin.com/in/bolla-siddhartha</a></div>
              </div>
            </div>

            {/* Education */}
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "1.05rem", textTransform: "uppercase", color: "#1e3a8a", borderBottom: "1px solid #cbd5e1", paddingBottom: "4px", marginBottom: "8px" }}>Education</h3>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>
                <span>Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology (VNR VJIET)</span>
                <span>Hyderabad, India</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#475569", fontStyle: "italic", marginBottom: "6px" }}>
                <span>Bachelor of Technology in Computer Science & Engineering (AI & ML)</span>
                <span>CGPA: <strong style={{ color: "#10b981" }}>9.45 / 10</strong> | Batch: 2025 – 2029</span>
              </div>
              <ul style={{ paddingLeft: "18px", fontSize: "0.88rem", color: "#334155" }}>
                <li>Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning Foundations, Web Technologies (MERN), Operating Systems.</li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "1.05rem", textTransform: "uppercase", color: "#1e3a8a", borderBottom: "1px solid #cbd5e1", paddingBottom: "4px", marginBottom: "8px" }}>Technical Skills</h3>
              <div style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#334155" }}>
                <div><strong>Programming Languages:</strong> Python, C++, C, Java, JavaScript (ES6+), SQL, HTML5, CSS3</div>
                <div><strong>Core Computer Science:</strong> Data Structures & Algorithms (DSA), OOP, DBMS, Operating Systems, Computer Networks, Algorithmic Problem Solving</div>
                <div><strong>Full-Stack & Web:</strong> React.js, Node.js, Express.js, MongoDB (Mongoose), RESTful APIs, FastAPI, Tailwind CSS, Vite</div>
                <div><strong>AI / Machine Learning & Tools:</strong> Scikit-Learn, Pandas, NumPy, Machine Learning, Postman, Git & GitHub, Docker, Linux/Bash</div>
                <div><strong>Languages Spoken:</strong> <strong>Telugu</strong> (Native/Bilingual), <strong>Hindi</strong> (Fluent), <strong>English</strong> (Professional Working Proficiency)</div>
              </div>
            </div>

            {/* Featured Projects (Only 2 projects) */}
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "1.05rem", textTransform: "uppercase", color: "#1e3a8a", borderBottom: "1px solid #cbd5e1", paddingBottom: "4px", marginBottom: "8px" }}>Featured Projects</h3>
              
              <div style={{ marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>
                  <span>Smart Feedback Management System</span>
                  <span style={{ fontSize: "0.8rem", background: "#eff6ff", color: "#1d4ed8", padding: "2px 8px", borderRadius: "4px" }}>Node, Express, MongoDB, REST</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "#475569", fontStyle: "italic", marginBottom: "4px" }}>
                  College Hackathon Project — Enterprise Academic Analytics & NLP Classification (<a href="https://github.com/siddharthabolla456-tech/smart-feedback-management-system" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>GitHub Repo</a>)
                </div>
                <ul style={{ paddingLeft: "18px", fontSize: "0.88rem", color: "#334155" }}>
                  <li>Architected scalable RESTful backend service with Express.js & MongoDB for continuous student grievances and administrative governance.</li>
                  <li>Built automated NLP categorization, sentiment classification, and life-safety emergency detection (CRITICAL priority).</li>
                  <li>Implemented duplicate issue clustering (ClusterKey) with automatic priority escalation as report frequencies rise.</li>
                  <li>Constructed role-based access control (Student, Staff, Admin) with complete resolution audit trails and automated Postman test suites.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>
                  <span>KrishiLink AI — Smart Agri-Commerce & Predictive ML Ecosystem</span>
                  <span style={{ fontSize: "0.8rem", background: "#eff6ff", color: "#1d4ed8", padding: "2px 8px", borderRadius: "4px" }}>React, FastAPI, ML, Node.js</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "#475569", fontStyle: "italic", marginBottom: "4px" }}>
                  Full-Stack Agricultural Platform with Machine Learning Integration (<a href="https://github.com/siddharthabolla456-tech" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>GitHub Profile</a>)
                </div>
                <ul style={{ paddingLeft: "18px", fontSize: "0.88rem", color: "#334155" }}>
                  <li>Built a complete full-stack marketplace connecting smallholder farmers, FPOs, and bulk agricultural buyers directly.</li>
                  <li>Integrated machine learning microservices in FastAPI & Scikit-learn for crop yield forecasting and commodity price trend analytics.</li>
                  <li>Created dynamic role-based dashboards (Farmer, Buyer, FPO, Admin) with interactive geolocation mapping using Leaflet.</li>
                </ul>
              </div>
            </div>

            {/* Achievements & Coding Profiles */}
            <div>
              <h3 style={{ fontSize: "1.05rem", textTransform: "uppercase", color: "#1e3a8a", borderBottom: "1px solid #cbd5e1", paddingBottom: "4px", marginBottom: "8px" }}>Achievements & Coding Profiles</h3>
              <ul style={{ paddingLeft: "18px", fontSize: "0.88rem", color: "#334155" }}>
                <li><strong>LeetCode (200+ Solved):</strong> Active algorithmic problem solver (<a href="https://leetcode.com/u/Siddhartha_bolla" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>leetcode.com/u/Siddhartha_bolla</a>) in Python & C++.</li>
                <li><strong>Smart Interviews Hive:</strong> Continuous algorithmic and problem solving profile (<a href="https://hive.smartinterviews.in/profile/siddhartha_bolla" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>hive.smartinterviews.in/profile/siddhartha_bolla</a>).</li>
                <li><strong>HackerRank (5-Star Badges):</strong> Earned 5-Star Badges in Problem Solving and Python (<a href="https://www.hackerrank.com/profile/siddharthabolla1" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>hackerrank.com/profile/siddharthabolla1</a>).</li>
                <li><strong>Academic Standing:</strong> Exceptional <strong>9.45 / 10 CGPA</strong> in B.Tech CSE (AI & ML) at VNR VJIET (Batch 2025–2029).</li>
                <li><strong>Collegiate Hackathons:</strong> Active team lead developing scalable, production-grade applications.</li>
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
