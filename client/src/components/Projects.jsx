import React, { useState } from 'react';

export default function Projects({ projects, onAskBot }) {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Production-grade software architectures engineered with scalable backends and machine learning intelligence.
          </p>
        </div>

        <div className="skills-filter-bar">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Featured Projects ({projects.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend & NLP Systems
          </button>
          <button 
            className={`filter-btn ${filter === 'aiml' ? 'active' : ''}`}
            onClick={() => setFilter('aiml')}
          >
            AI & Machine Learning
          </button>
        </div>

        <div className="projects-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))" }}>
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.projectId}>
              <div className={`project-banner ${project.bannerClass || 'feedback'}`}>
                <span className="project-category-badge">{project.categoryBadge || 'Featured Project'}</span>
                <div className="project-banner-content">
                  <div className="project-banner-icon">{project.bannerIcon || '🚀'}</div>
                  <h3>{project.title.split('—')[0]}</h3>
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-techs">
                  {project.techStack.map((tech) => (
                    <span className="tech-tag" key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-secondary btn-sm"
                  >
                    🐙 GitHub Repo
                  </a>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => onAskBot(`Tell me in detail about the ${project.title} project`)}
                  >
                    💬 Ask Bot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
