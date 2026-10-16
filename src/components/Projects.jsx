import React from 'react';
import { ArrowRight, ExternalLink, Cpu, BookOpen, Layers, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projectsData';
import './Projects.css';

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Portfolio</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Applied Machine Learning predictive models and intelligent software architectures.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => {
            const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);
            const hasLiveDemo = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim().length > 0);
            const isLaptop = project.id === 'laptop-price-prediction';
            const isChurn = project.id === 'customer-churn-prediction';

            return (
              <div key={project.id} className="project-card">
                {/* MEANINGFUL CUSTOM VISUAL MOCKUP (Zero Empty Spaces / Zero Placeholder Lines) */}
                <div className="project-visual-banner">
                  {isLaptop ? (
                    /* Laptop Price Prediction Visual Illustration */
                    <div className="ml-visual-card">
                      <div className="visual-top-bar">
                        <div className="visual-window-dots">
                          <span className="dot red" />
                          <span className="dot yellow" />
                          <span className="dot green" />
                        </div>
                        <span className="visual-filename">laptop_price_regression.py</span>
                        <span className="visual-metric-pill">R² Score: 0.88</span>
                      </div>

                      <div className="visual-body">
                        <div className="visual-input-specs">
                          <span className="spec-chip">RAM: 16 GB</span>
                          <span className="spec-chip">CPU: Intel i7</span>
                          <span className="spec-chip">SSD: 512 GB</span>
                          <span className="spec-chip">GPU: Dedicated</span>
                        </div>

                        <div className="visual-result-banner">
                          <div className="result-indicator">
                            <span className="result-label">Predicted Valuation</span>
                            <span className="result-val">₹58,400</span>
                          </div>
                          <div className="result-metrics">
                            <span>MAE: ₹2,450</span>
                            <span>Split: 80/20</span>
                          </div>
                        </div>

                        <div className="visual-features-bar">
                          <span className="features-label">Feature Engineering:</span>
                          <div className="features-mini-tags">
                            <span>Label Encoding</span>
                            <span>Scikit-learn</span>
                            <span>Outlier Tuning</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : isChurn ? (
                    /* Customer Churn Prediction Visual Illustration */
                    <div className="ml-visual-card">
                      <div className="visual-top-bar">
                        <div className="visual-window-dots">
                          <span className="dot red" />
                          <span className="dot yellow" />
                          <span className="dot green" />
                        </div>
                        <span className="visual-filename">customer_churn_prediction.py</span>
                        <span className="visual-metric-pill">ROC-AUC: 0.89</span>
                      </div>

                      <div className="visual-body">
                        <div className="visual-input-specs">
                          <span className="spec-chip">Tenure: 24 Mos</span>
                          <span className="spec-chip">Contract: One-Year</span>
                          <span className="spec-chip">Charges: ₹650/mo</span>
                          <span className="spec-chip">Support: Active</span>
                        </div>

                        <div className="visual-result-banner">
                          <div className="result-indicator">
                            <span className="result-label">Predicted Status</span>
                            <span className="result-val">Retained (91%)</span>
                          </div>
                          <div className="result-metrics">
                            <span>Accuracy: 86%</span>
                            <span>Split: 80/20</span>
                          </div>
                        </div>

                        <div className="visual-features-bar">
                          <span className="features-label">Classification:</span>
                          <div className="features-mini-tags">
                            <span>Logistic Regression</span>
                            <span>Random Forest</span>
                            <span>Scikit-learn</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* AI Syllabus Agent Visual Illustration */
                    <div className="agent-visual-card">
                      <div className="visual-top-bar">
                        <div className="visual-window-dots">
                          <span className="dot red" />
                          <span className="dot yellow" />
                          <span className="dot green" />
                        </div>
                        <span className="visual-filename">ai_syllabus_agent.py</span>
                        <span className="visual-metric-pill purple">Flask + AI API</span>
                      </div>

                      <div className="visual-body">
                        <div className="agent-pipeline-flow">
                          <span className="pipeline-node active">Syllabus Ingestion</span>
                          <span className="pipeline-arrow">➔</span>
                          <span className="pipeline-node active">Prompt Structuring</span>
                          <span className="pipeline-arrow">➔</span>
                          <span className="pipeline-node active">Q&amp;A Synthesis</span>
                        </div>

                        <div className="agent-output-preview">
                          <div className="output-header">
                            <Sparkles size={13} className="sparkle-icon" />
                            <span className="output-title">Sample Output: Technical Interview Prep</span>
                          </div>
                          <p className="output-question">
                            "Explain the objective function of Logistic Regression vs Linear Regression."
                          </p>
                        </div>

                        <div className="visual-features-bar">
                          <span className="features-label">Architecture:</span>
                          <div className="features-mini-tags">
                            <span>Topic Distillation</span>
                            <span>Interview Prep</span>
                            <span>Modular API</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info Body */}
                <div className="project-card-body">
                  <div className="project-header-meta">
                    <span className="badge badge-purple">{project.badge}</span>
                    <span className="project-status-label">{project.status}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle-text">{project.subtitle}</p>
                  <p className="project-desc">{project.shortDescription}</p>

                  <div className="project-tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-action-row">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onSelectProject(project.id)}
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </button>

                    {hasGithub && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <GithubIcon size={14} />
                        <span>GitHub</span>
                      </a>
                    )}

                    {hasLiveDemo && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
