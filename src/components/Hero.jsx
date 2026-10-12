import React, { useState } from 'react';
import { ArrowRight, FileText, Mail, MapPin, Sparkles, Brain } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { projectsData } from '../data/projectsData';
import './Hero.css';

export default function Hero({ onNavigate, onSelectProject }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="hero-section dark-theme-hero">
      {/* Ambient background glow accents */}
      <div className="hero-ambient-glows" aria-hidden="true">
        <div className="glow-orb glow-purple" />
        <div className="glow-orb glow-blue" />
        <div className="glow-orb glow-cyan" />
        <div className="hero-grid-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* LEFT SIDE: Heading, Introduction, and Action Buttons */}
          <div className="hero-content">
            {/* Availability Status Badge */}
            <div className="hero-status-row animate-fade-in">
              <span className="hero-badge-pill">
                <Sparkles size={13} className="badge-sparkle-icon" />
                <span>{personalDetails.heroGreeting}</span>
              </span>
              <div className="hero-status-tag">
                <span className="status-live-dot" />
                <span>Open for AI/ML &amp; Python Opportunities</span>
              </div>
            </div>

            {/* Main Name Heading */}
            <h1 className="hero-name-heading animate-fade-in delay-1">
              <span className="hero-name-text">{personalDetails.name}</span>
            </h1>

            {/* Professional Title Pill */}
            <div className="hero-title-badge animate-fade-in delay-2">
              <Brain size={16} className="title-brain-icon" />
              <span>{personalDetails.title}</span>
            </div>

            {/* Introduction Paragraph */}
            <p className="hero-intro-paragraph animate-fade-in delay-3">
              I'm passionate about <span className="highlight-ai">Artificial Intelligence</span> and <span className="highlight-ml">Machine Learning</span>. I enjoy exploring new technologies and building practical applications that solve real-world problems.
            </p>

            {/* Core Tech Highlights */}
            <div className="hero-tech-tags animate-fade-in delay-4">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge">Scikit-learn</span>
              <span className="tech-badge">Data Analysis</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-action-buttons animate-fade-in delay-5">
              <button 
                className="btn-hero-primary"
                onClick={() => onNavigate('projects')}
              >
                <span>View My Projects</span>
                <ArrowRight size={16} className="btn-arrow-icon" />
              </button>

              <a
                href={personalDetails.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-secondary"
              >
                <FileText size={16} />
                <span>View Resume</span>
              </a>

              <button 
                className="btn-hero-outline"
                onClick={() => onNavigate('contact')}
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Profile Photograph in Circular Frame with Glow */}
          <div className="hero-visual animate-fade-in delay-2">
            <div className="avatar-glow-wrapper">
              {/* Outer pulsing glow aura */}
              <div className="avatar-ambient-glow" />
              <div className="avatar-gradient-ring" />

              {/* Circular cropped image container */}
              <div className="avatar-circle-frame">
                {!imgError ? (
                  <img
                    src={personalDetails.profileImage}
                    alt="Mughaisina Parveen - AI/ML Engineer and Python Developer"
                    className="avatar-photo-img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="avatar-photo-fallback">
                    <span className="fallback-monogram">MP</span>
                    <span className="fallback-text">{personalDetails.name}</span>
                  </div>
                )}
              </div>

              {/* Location Badge */}
              <div className="avatar-location-badge">
                <MapPin size={13} className="loc-pin-icon" />
                <span>{personalDetails.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED WORK PREVIEW INTEGRATED AT BOTTOM OF HERO */}
        <div className="hero-featured-preview animate-fade-in delay-5">
          <div className="featured-preview-header">
            <div className="featured-header-left">
              <span className="featured-section-tag">Featured Work</span>
              <h2 className="featured-preview-title">Core Machine Learning Projects</h2>
            </div>
            <button 
              className="featured-view-link"
              onClick={() => onNavigate('projects')}
            >
              <span>Explore All Projects</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="featured-preview-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="featured-preview-card">
                <div className="featured-card-header">
                  <span className="featured-badge">{project.badge}</span>
                  <span className="featured-status">{project.status}</span>
                </div>

                <h3 className="featured-card-name">{project.title}</h3>
                <p className="featured-card-summary">{project.shortDescription}</p>

                <div className="featured-card-action-bar">
                  <div className="featured-tags-row">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="featured-mini-tag">{tech}</span>
                    ))}
                  </div>

                  <button
                    className="featured-details-btn"
                    onClick={() => onSelectProject(project.id)}
                  >
                    <span>View Details</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade into subsequent sections */}
      <div className="hero-bottom-fade" aria-hidden="true" />
    </section>
  );
}
