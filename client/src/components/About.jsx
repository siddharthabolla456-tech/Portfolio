import React from 'react';
import profileImg from '../assets/profile.jpg';

export default function About({ profile }) {
  const stats = profile.stats || {
    projectsCount: "2",
    problemsSolved: "200+",
    cgpa: "9.45",
    portability: "100%"
  };

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Overview</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">
            Passionate full-stack software engineer merging the MERN stack with modern machine learning intelligence.
          </p>
        </div>

        <div className="about-grid">
          <div className="glass-card about-text">
            <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "1.25rem", flexWrap: "wrap" }}>
              <img 
                src={profileImg} 
                alt="Siddhartha Bolla" 
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/profile.jpg'; }}
                style={{ 
                  width: "88px", 
                  height: "88px", 
                  borderRadius: "50%", 
                  objectFit: "cover", 
                  border: "3px solid var(--accent-primary, #3b82f6)",
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.35)"
                }} 
              />
              <div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "4px" }}>
                  Siddhartha Bolla
                </h3>
                <div style={{ color: "var(--accent-primary, #3b82f6)", fontWeight: 600, fontSize: "0.95rem" }}>
                  Branch: CSE (AI & ML) • VNR VJIET
                </div>
              </div>
            </div>

            <p>
              I am a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at <strong>Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology (VNR VJIET)</strong>, Hyderabad (Batch 2025–2029) with a <strong>9.45 / 10 CGPA</strong>.
            </p>
            <p>
              My engineering core revolves around building robust, end-to-end full-stack applications with <strong>MongoDB, Express.js, React.js, and Node.js</strong>. I integrate real-world machine learning services (crop yield forecasting in <strong>KrishiLink AI</strong>) and secure RESTful systems with NLP text analytics (<strong>Smart Feedback Management System</strong>).
            </p>
            <p>
              I actively solve algorithmic problems on <strong>LeetCode (200+ solved)</strong>, <strong>Smart Interviews Hive</strong>, and <strong>HackerRank (5-star badges)</strong>.
            </p>

            {/* Languages Spoken Badges */}
            <div style={{ margin: "1.2rem 0", padding: "12px 16px", borderRadius: "8px", background: "rgba(99, 102, 241, 0.08)", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
              <div style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "8px", color: "var(--accent-primary, #6366f1)" }}>
                🗣️ Languages Spoken:
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span className="tech-tag" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                  🇮🇳 Telugu (Native)
                </span>
                <span className="tech-tag" style={{ background: "rgba(59, 130, 246, 0.15)", color: "#3b82f6", border: "1px solid rgba(59, 130, 246, 0.3)" }}>
                  🇮🇳 Hindi (Fluent)
                </span>
                <span className="tech-tag" style={{ background: "rgba(168, 85, 247, 0.15)", color: "#a855f7", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
                  🌐 English (Professional Fluent)
                </span>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-num">{stats.projectsCount || "2"}</div>
                <div className="stat-label">Featured Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">{stats.problemsSolved || "200+"}</div>
                <div className="stat-label">LeetCode Problems Solved</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">{stats.cgpa || "9.45"}</div>
                <div className="stat-label">Academic CGPA</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">3</div>
                <div className="stat-label">Languages Known</div>
              </div>
            </div>
          </div>

          <div className="glass-card education-card">
            <h3 style={{ marginBottom: "1.5rem", fontSize: "1.4rem" }}>
              🎓 Education & Academic Record
            </h3>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2025 — 2029 (Expected)</div>
              <div className="timeline-title">B.Tech in Computer Science & Engineering (AI & ML)</div>
              <div className="timeline-sub">VNR Vignana Jyothi Institute of Engineering & Technology (VNR VJIET)</div>
              <div className="timeline-desc">
                • Outstanding CGPA: <strong style={{ color: "#10b981", fontSize: "1.05rem" }}>9.45 / 10</strong><br />
                • Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning Foundations, Web Technologies (MERN), Operating Systems.<br />
                • Active lead in collegiate technical hackathons and competitive programming groups.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-year">Technical Domain Focus</div>
              <div className="timeline-title">MERN Stack, Machine Learning & Scalable APIs</div>
              <div className="timeline-sub">Continuous Learning & Production Engineering</div>
              <div className="timeline-desc">
                Engineering full-stack architectures connecting MongoDB data pipelines, Express backends, and responsive React web interfaces with machine learning microservices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
