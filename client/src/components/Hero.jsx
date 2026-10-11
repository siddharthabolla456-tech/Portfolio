import React, { useState, useEffect } from 'react';

export default function Hero({ profile, onAskBot }) {
  const phrases = [
    "MERN Stack Software Engineer",
    "AI & Machine Learning Developer",
    "Competitive Programmer (200+ LeetCode)",
    "Smart Interviews & HackerRank Verified"
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => setCharIndex(prev => prev + 1), 80);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(prev => prev - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex(prev => (prev + 1) % phrases.length);
      timeout = setTimeout(() => {}, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const currentText = phrases[phraseIndex].substring(0, charIndex);

  const handleEmailRedirect = (e) => {
    // Attempt system mail client, fall back safely
    window.location.href = "mailto:siddharthabolla456@gmail.com";
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Available for MERN & AI/ML Opportunities</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{profile.name || "Siddhartha Bolla"}</span>
            </h1>

            <div className="hero-subtitle">
              <span>{currentText}</span>
              <span className="typewriter-cursor">&nbsp;</span>
            </div>

            <p className="hero-bio">
              Undergraduate in <strong>Computer Science & Engineering (AI & ML)</strong> at <strong>VNR VJIET</strong> (Batch 2025–2029) maintaining an exceptional <strong>9.45 CGPA</strong>. 
              Specializing in the <strong>MERN Stack</strong> (MongoDB, Express, React, Node.js), competitive problem solving, and building scalable full-stack products with machine learning intelligence.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">🚀 Explore Projects</a>
              <button 
                className="btn btn-secondary" 
                onClick={() => onAskBot("Hello! Tell me about Siddhartha's MERN and AI experience")}
              >
                💬 Chat with AI Bot
              </button>
              <a 
                href="/resume.pdf" 
                download="Siddhartha_Bolla_Resume.pdf" 
                className="btn btn-secondary"
              >
                ⬇️ Download CV
              </a>
            </div>

            <div className="hero-social-links">
              <a href={profile.github || "https://github.com/siddharthabolla456-tech"} target="_blank" rel="noreferrer" className="social-pill" title="GitHub">
                <span>🐙</span> GitHub
              </a>
              <a href={profile.linkedin || "https://www.linkedin.com/in/bolla-siddhartha-189581375?utm_source=share_via&utm_content=profile&utm_medium=member_android"} target="_blank" rel="noreferrer" className="social-pill" title="LinkedIn">
                <span>🔗</span> LinkedIn
              </a>
              <a href={profile.leetcode || "https://leetcode.com/u/Siddhartha_bolla"} target="_blank" rel="noreferrer" className="social-pill" title="LeetCode (200+ Solved)">
                <span>🟡</span> LeetCode
              </a>
              <a href="https://hive.smartinterviews.in/profile/siddhartha_bolla" target="_blank" rel="noreferrer" className="social-pill" title="Smart Interviews Hive">
                <span>🧠</span> Smart Interviews
              </a>
              <a href="https://www.hackerrank.com/profile/siddharthabolla1" target="_blank" rel="noreferrer" className="social-pill" title="HackerRank">
                <span>⭐</span> HackerRank
              </a>
              <a 
                href="mailto:siddharthabolla456@gmail.com" 
                onClick={handleEmailRedirect}
                className="social-pill"
                title="Send Email to siddharthabolla456@gmail.com"
              >
                <span>📧</span> Email
              </a>
            </div>
          </div>

          {/* Hero Visual Card with Siddhartha's Photo */}
          <div className="hero-visual-card">
            <div className="floating-badge badge-1">
              <span>⚡</span> 200+ LeetCode DSA Solved
            </div>
            <div className="floating-badge badge-2">
              <span>🎓</span> VNR VJIET • 9.45 CGPA
            </div>

            {/* Profile Photo Display */}
            <div className="hero-photo-wrapper" style={{ textAlign: "center", marginBottom: "1.25rem" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <img 
                  src="/profile.jpg" 
                  alt="Siddhartha Bolla" 
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3.5px solid var(--accent-primary, #6366f1)",
                    boxShadow: "0 0 25px rgba(99, 102, 241, 0.45)",
                    display: "block",
                    margin: "0 auto"
                  }}
                />
                <span 
                  style={{
                    position: "absolute",
                    bottom: "6px",
                    right: "12px",
                    background: "#10b981",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    border: "2.5px solid #0f172a",
                    boxShadow: "0 0 8px #10b981"
                  }}
                  title="Online & Ready to Build"
                ></span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <div style={{ fontWeight: "700", fontSize: "1.1rem" }}>Siddhartha Bolla</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted, #94a3b8)" }}>B.Tech CSE (AI & ML) • Batch 2025–2029</div>
              </div>
            </div>

            <div className="code-mockup-header">
              <div className="code-dots">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <div className="code-filename">candidate_profile.js</div>
            </div>

            <pre className="code-snippet"><code><span className="code-keyword">const</span> <span class="code-var">developer</span> = &#123;
  <span className="code-var">name</span>: <span className="code-string">"Siddhartha Bolla"</span>,
  <span className="code-var">college</span>: <span className="code-string">"VNR VJIET (2025-2029)"</span>,
  <span className="code-var">cgpa</span>: <span className="code-num">9.45</span>,
  <span className="code-var">languages</span>: [<span className="code-string">"Telugu"</span>, <span className="code-string">"Hindi"</span>, <span className="code-string">"English"</span>],
  <span className="code-var">profiles</span>: [<span className="code-string">"LeetCode"</span>, <span className="code-string">"Smart Interviews"</span>, <span className="code-string">"HackerRank"</span>],
  <span className="code-var">projects</span>: [<span className="code-string">"Feedback System"</span>, <span className="code-string">"KrishiLink AI"</span>]
&#125;;</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
