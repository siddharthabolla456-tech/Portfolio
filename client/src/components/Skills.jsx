import React, { useState } from 'react';

export default function Skills({ skills }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(cat => cat.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Tech Stack</div>
          <h2 className="section-title">Technical Skills & Languages</h2>
          <p className="section-desc">
            A comprehensive computer science toolkit, multilingual capabilities, and machine learning proficiencies.
          </p>
        </div>

        <div className="skills-filter-bar">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Skills ({skills.length})
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'languages' ? 'active' : ''}`}
            onClick={() => setActiveCategory('languages')}
          >
            Languages & Spoken
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'computer' || activeCategory === 'core' ? 'active' : ''}`}
            onClick={() => setActiveCategory('computer')}
          >
            Core CS & DSA
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('frontend')}
          >
            Frontend & React
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('backend')}
          >
            Backend & MongoDB
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveCategory('ai')}
          >
            AI / ML & Tools
          </button>
        </div>

        <div className="skills-grid-container">
          {filteredSkills.map((category) => (
            <div className="glass-card skill-category-card" key={category.category}>
              <div className="skill-cat-title">
                <span style={{ fontSize: "1.5rem" }}>{category.icon || "⚡"}</span>
                <span>{category.category}</span>
              </div>
              <div className="skill-tags">
                {category.items.map((item) => (
                  <span className="skill-tag" key={item.name} title={`Level: ${item.level}`}>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
