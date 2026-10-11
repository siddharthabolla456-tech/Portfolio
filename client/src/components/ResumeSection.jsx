import React from 'react';

export default function ResumeSection({ onOpenResume, onAskBot }) {
  return (
    <section className="section" id="resume-section">
      <div className="container">
        <div className="resume-showcase glass-card">
          <div className="resume-showcase-content">
            <div className="resume-badge">📄 Official Curriculum Vitae</div>
            <h2>Ready to Inspect Siddhartha's Resume?</h2>
            <p>
              Access the complete resume detailing academic achievements at VNR VJIET (CGPA: <strong>9.45</strong>, Batch: <strong>2025–2029</strong>), featured MERN stack projects, algorithmic skills, and technical accomplishments.
            </p>

            <div className="resume-cta-group">
              <button className="btn btn-primary btn-view-resume" onClick={onOpenResume}>
                👁️ View Full Resume Online
              </button>
              <a 
                href="/resume.pdf" 
                download="Siddhartha_Bolla_Resume.pdf" 
                className="btn btn-secondary"
              >
                ⬇️ Download PDF Copy
              </a>
              <button 
                className="btn btn-secondary" 
                onClick={() => onAskBot("Show me his resume")}
              >
                🤖 Ask Bot to Summarize
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
