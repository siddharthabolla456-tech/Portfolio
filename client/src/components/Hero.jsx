import React, { useState, useEffect } from 'react';

export default function Hero({ profile, onAskBot }) {
  const phrases = [
    "MERN Stack Software Engineer",
    "AI & Machine Learning Developer",
    "Competitive Programmer (200+ LeetCode)",
    "FastAPI & React Architect"
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
              Specializing in the <strong>MERN Stack</strong> (MongoDB, Express, React, Node.js) and connecting intelligent machine learning microservices with robust web architectures.
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
              <a href={profile.github || "https://github.com/siddharthabolla456-tech"} target="_blank" rel="noreferrer" className="social-pill">
                <span>🐙</span> GitHub
              </a>
              <a href={profile.linkedin || "https://www.linkedin.com/in/bolla-siddhartha-189581375?utm_source=share_via&utm_content=profile&utm_medium=member_android"} target="_blank" rel="noreferrer" className="social-pill">
                <span>🔗</span> LinkedIn
              </a>
              <a href={profile.leetcode || "https://leetcode.com/u/Siddhartha_bolla"} target="_blank" rel="noreferrer" className="social-pill">
                <span>🟡</span> LeetCode
              </a>
              <a href={`mailto:${profile.email || "siddharthabolla456@gmail.com"}`} className="social-pill">
                <span>📧</span> Email
              </a>
            </div>
          </div>

          {/* Code Mockup Visual Card */}
          <div className="hero-visual-card">
            <div className="floating-badge badge-1">
              <span>⚡</span> 200+ LeetCode DSA Solved
            </div>
            <div className="floating-badge badge-2">
              <span>🍃</span> MERN Stack + 9.45 CGPA
            </div>

            <div className="code-mockup-header">
              <div className="code-dots">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <div className="code-filename">mern_profile.js</div>
            </div>

            <pre className="code-snippet"><code><span className="code-keyword">const</span> <span class="code-var">developer</span> = &#123;
  <span className="code-var">name</span>: <span className="code-string">"Siddhartha Bolla"</span>,
  <span className="code-var">college</span>: <span className="code-string">"VNR VJIET, Hyderabad"</span>,
  <span className="code-var">degree</span>: <span className="code-string">"B.Tech CSE (AI & ML)"</span>,
  <span className="code-var">batch</span>: <span className="code-string">"2025 - 2029"</span>,
  <span className="code-var">cgpa</span>: <span className="code-num">9.45</span>,
  <span className="code-var">stack</span>: [<span className="code-string">"MongoDB"</span>, <span className="code-string">"Express"</span>, <span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>],
  <span className="code-fn">execute</span>: () =&gt; <span className="code-string">"Building scalable full-stack & AI products"</span>
&#125;;</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
