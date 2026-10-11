import React from 'react';

export default function CodingProfiles({ profiles, onAskBot }) {
  return (
    <section className="section" id="profiles">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Competitive Coding</div>
          <h2 className="section-title">Coding Profiles & Achievements</h2>
          <p className="section-desc">
            Rigorous algorithmic problem solving and open-source contributions stored in MongoDB.
          </p>
        </div>

        <div className="profiles-grid">
          {profiles.map((item) => (
            item.url && item.url !== '#' ? (
              <a 
                href={item.url} 
                target="_blank" 
                rel="noreferrer" 
                className="glass-card profile-card" 
                key={item.platform}
              >
                <div className="profile-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div className="profile-info">
                  <h3>{item.platform}</h3>
                  <p>{item.description}</p>
                  <div className="profile-stat">{item.stat}</div>
                </div>
              </a>
            ) : (
              <div 
                className="glass-card profile-card" 
                style={{ cursor: "pointer" }}
                key={item.platform}
                onClick={() => onAskBot("What hackathons and achievements does Siddhartha have?")}
              >
                <div className="profile-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div className="profile-info">
                  <h3>{item.platform}</h3>
                  <p>{item.description}</p>
                  <div className="profile-stat">{item.stat}</div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
