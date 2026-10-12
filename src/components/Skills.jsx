import React, { useState } from 'react';
import { Code, Brain, BarChart3, Layers, Globe, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

const ICON_MAP = {
  code: Code,
  brain: Brain,
  barChart: BarChart3,
  layers: Layers,
  globe: Globe,
  database: Database
};

export default function Skills() {
  // Default to Machine Learning as the primary highlighted specialization
  const [activeCategoryId, setActiveCategoryId] = useState('machine-learning');

  const activeCategory = skillsData.find((cat) => cat.id === activeCategoryId) || skillsData[0];
  const ActiveIcon = ICON_MAP[activeCategory.icon] || Brain;

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <p className="section-subtitle">
            Interactive skill explorer covering Machine Learning algorithms, analytical libraries, and Python development.
          </p>
        </div>

        <div className="skills-interactive-container">
          {/* CATEGORY TABS SELECTOR */}
          <div className="skills-tab-bar" role="tablist" aria-label="Skill Categories">
            {skillsData.map((category) => {
              const Icon = ICON_MAP[category.icon] || Code;
              const isActive = category.id === activeCategoryId;

              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`skills-panel-${category.id}`}
                  id={`skill-tab-${category.id}`}
                  className={`skill-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategoryId(category.id)}
                >
                  <Icon size={17} className="tab-btn-icon" />
                  <span className="tab-btn-label">{category.category}</span>
                  <span className="tab-btn-count">{category.skills.length}</span>
                </button>
              );
            })}
          </div>

          {/* ACTIVE CATEGORY SKILLS PANEL */}
          <div 
            id={`skills-panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`skill-tab-${activeCategory.id}`}
            className="skills-display-panel"
            key={activeCategory.id}
          >
            {/* Category Header */}
            <div className="panel-header">
              <div className="panel-header-left">
                <div className="panel-category-icon">
                  <ActiveIcon size={22} />
                </div>
                <div>
                  <div className="panel-title-row">
                    <h3 className="panel-title">{activeCategory.category}</h3>
                    <span className="badge badge-purple">{activeCategory.badge}</span>
                  </div>
                  <p className="panel-description">{activeCategory.description}</p>
                </div>
              </div>
            </div>

            {/* Grid of related skills */}
            <div className="panel-skills-grid">
              {activeCategory.skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className={`skill-item-card ${skill.highlight ? 'skill-card-highlight' : ''}`}
                >
                  <div className="skill-item-top">
                    <div className="skill-name-group">
                      <CheckCircle2 size={15} className="skill-check-icon" />
                      <h4 className="skill-name">{skill.name}</h4>
                    </div>
                    {skill.level && (
                      <span className="skill-level-badge">
                        {skill.level}
                      </span>
                    )}
                  </div>
                  {skill.note && (
                    <p className="skill-note">{skill.note}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Quick summary of all categories as compact pills */}
            <div className="panel-footer-nav">
              <span className="footer-nav-label">Switch Category:</span>
              <div className="footer-nav-pills">
                {skillsData.map((cat) => (
                  <button
                    key={cat.id}
                    className={`footer-nav-pill ${cat.id === activeCategoryId ? 'active' : ''}`}
                    onClick={() => setActiveCategoryId(cat.id)}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
