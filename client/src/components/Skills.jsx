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
          <h2 className="section-title">Technical Skills & Expertise</h2>
          <p className="section-desc">
            A comprehensive MERN stack and machine learning toolkit dynamically loaded from the MongoDB database.
          </p>
        </div>

        <div className="skills-filter-bar">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Skills
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'programming' || activeCategory === 'languages' ? 'active' : ''}`}
            onClick={() => setActiveCategory('languages')}
          >
            Languages
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
            Backend & Node/MongoDB
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
                  <span className="skill-tag" key={item.name}>
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
