import React from 'react';

export default function About({ profile }) {
  const stats = profile.stats || {
    projectsCount: "3+",
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
            <h3 style={{ marginBottom: "1rem", fontSize: "1.4rem" }}>
              Architecting with Purpose, MERN & AI
            </h3>
            <p>
              I am a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at <strong>Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology (VNR VJIET)</strong>, Hyderabad.
            </p>
            <p>
              My engineering core revolves around building robust, end-to-end full-stack applications with <strong>MongoDB, Express.js, React.js, and Node.js</strong>. I integrate real-world machine learning services (crop yield forecasting in <strong>KrishiLink AI</strong>) and secure RESTful systems (JWT role-based access in <strong>Smart Feedback System</strong>).
            </p>
            <p>
              I actively solve algorithmic problems on LeetCode with 200+ challenges completed, and love collaborating on hackathon initiatives.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-num">{stats.projectsCount}</div>
                <div className="stat-label">Featured Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">{stats.problemsSolved}</div>
                <div className="stat-label">LeetCode Problems Solved</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">{stats.cgpa}</div>
                <div className="stat-label">Academic CGPA</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">{stats.portability}</div>
                <div className="stat-label">MERN Stack Portability</div>
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
                • Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning Foundations, Web Technologies, Operating Systems.<br />
                • Active lead in collegiate technical hackathons and competitive programming groups.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-year">Technical Domain Focus</div>
              <div className="timeline-title">MERN Stack, Machine Learning & Scalable APIs</div>
              <div className="timeline-sub">Continuous Learning & Production Engineering</div>
              <div className="timeline-desc">
                Engineering microservice architectures that seamlessly connect MongoDB data pipelines, Express backends, and responsive React web interfaces.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
