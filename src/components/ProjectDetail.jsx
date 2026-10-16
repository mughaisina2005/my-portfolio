import React from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  ListChecks, 
  BookOpen, 
  Clock, 
  Target,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectDetail.css';

export default function ProjectDetail({ project, onBack }) {
  if (!project) return null;

  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);
  const hasLiveDemo = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim().length > 0);
  const isLaptop = project.id === 'laptop-price-prediction';
  const isChurn = project.id === 'customer-churn-prediction';

  return (
    <article className="project-detail-page container">
      <button className="detail-nav-back" onClick={onBack}>
        <ArrowLeft size={16} />
        <span>Back to Projects</span>
      </button>

      {/* Hero Banner with Rich Visual Dashboard */}
      <div className="detail-hero-card">
        <div className="detail-header-top">
          <span className="badge badge-purple">{project.badge}</span>
          <span className="badge badge-neutral">{project.status}</span>
        </div>

        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-subtitle">{project.subtitle}</p>

        {/* Meaningful Technical Visual Dashboard Illustration */}
        <div className="detail-custom-visual">
          {isLaptop ? (
            <div className="detail-visual-box">
              <div className="visual-top-bar">
                <div className="visual-window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="visual-filename">laptop_price_prediction_pipeline.py</span>
                <span className="visual-metric-pill">Model R²: 0.88</span>
              </div>

              <div className="visual-body">
                <div className="visual-input-specs">
                  <span className="spec-chip">Brand: Lenovo</span>
                  <span className="spec-chip">RAM: 16 GB DDR4</span>
                  <span className="spec-chip">CPU: Intel Core i7</span>
                  <span className="spec-chip">Storage: 512 GB NVMe SSD</span>
                  <span className="spec-chip">Weight: 1.75 kg</span>
                </div>

                <div className="visual-result-banner">
                  <div className="result-indicator">
                    <span className="result-label">Predicted Market Valuation</span>
                    <span className="result-val">₹58,400</span>
                  </div>
                  <div className="result-metrics">
                    <span>Mean Absolute Error: ₹2,450</span>
                    <span>Test Split: 20% (Unseen Data)</span>
                  </div>
                </div>

                <div className="visual-features-bar">
                  <span className="features-label">Core Pipeline Stages:</span>
                  <div className="features-mini-tags">
                    <span>Raw Specs Parsing</span>
                    <span>Categorical Encoding</span>
                    <span>Linear &amp; Random Forest Regression</span>
                    <span>Residual Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          ) : isChurn ? (
            <div className="detail-visual-box">
              <div className="visual-top-bar">
                <div className="visual-window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="visual-filename">customer_churn_pipeline.py</span>
                <span className="visual-metric-pill">Accuracy: 86% | AUC: 0.89</span>
              </div>

              <div className="visual-body">
                <div className="visual-input-specs">
                  <span className="spec-chip">Account: Subscription Service</span>
                  <span className="spec-chip">Tenure: 18 Months</span>
                  <span className="spec-chip">Contract: One-Year</span>
                  <span className="spec-chip">Payment: Bank Transfer</span>
                  <span className="spec-chip">Monthly Charges: ₹650</span>
                </div>

                <div className="visual-result-banner">
                  <div className="result-indicator">
                    <span className="result-label">Churn Risk Evaluation</span>
                    <span className="result-val">Low Risk — Retained (93%)</span>
                  </div>
                  <div className="result-metrics">
                    <span>Precision: 0.84 / Recall: 0.81</span>
                    <span>Test Split: 20% (Unseen Data)</span>
                  </div>
                </div>

                <div className="visual-features-bar">
                  <span className="features-label">Core Pipeline Stages:</span>
                  <div className="features-mini-tags">
                    <span>Data Wrangling with Pandas</span>
                    <span>Categorical One-Hot Encoding</span>
                    <span>Supervised Classification (Scikit-learn)</span>
                    <span>Confusion Matrix Validation</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="detail-visual-box">
              <div className="visual-top-bar">
                <div className="visual-window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="visual-filename">ai_syllabus_agent_architecture.py</span>
                <span className="visual-metric-pill purple">Prototype Engine</span>
              </div>

              <div className="visual-body">
                <div className="agent-pipeline-flow">
                  <span className="pipeline-node active">Syllabus PDF / Text Ingestion</span>
                  <span className="pipeline-arrow">➔</span>
                  <span className="pipeline-node active">Prompt &amp; Unit Segmentation</span>
                  <span className="pipeline-arrow">➔</span>
                  <span className="pipeline-node active">Technical Assessment Synthesis</span>
                </div>

                <div className="agent-output-preview">
                  <div className="output-header">
                    <Sparkles size={14} className="sparkle-icon" />
                    <span className="output-title">Sample Output: Academic to Interview Conversion</span>
                  </div>
                  <p className="output-question">
                    "Unit 3: Supervised Learning — Explain Gradient Descent optimization and compare Batch vs Stochastic Gradient Descent."
                  </p>
                </div>

                <div className="visual-features-bar">
                  <span className="features-label">Services:</span>
                  <div className="features-mini-tags">
                    <span>Flask REST API</span>
                    <span>AI Model Contextualization</span>
                    <span>Revision Planning Modules</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons: Only shown if real links exist */}
        <div className="detail-action-bar">
          {hasGithub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <GithubIcon size={15} />
              <span>GitHub Repository</span>
            </a>
          ) : (
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Source repository can be configured in <code>src/data/projectsData.js</code>
            </span>
          )}

          {hasLiveDemo && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={15} />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>
      </div>

      {/* Content Grid */}
      <div className="detail-content-grid">
        <div className="detail-main-flow">
          {/* Project Overview */}
          <section className="detail-block">
            <h2 className="detail-block-title">
              <BookOpen size={18} />
              <span>Project Overview</span>
            </h2>
            <p className="detail-prose">{project.overview}</p>
          </section>

          {/* Problem Statement */}
          <section className="detail-block">
            <h2 className="detail-block-title">
              <Target size={18} />
              <span>Problem Statement</span>
            </h2>
            <p className="detail-prose">{project.problemStatement}</p>
          </section>

          {/* Features with Implemented vs Planned Distinctions */}
          <section className="detail-block">
            <h2 className="detail-block-title">
              <ListChecks size={18} />
              <span>Features &amp; Functionality</span>
            </h2>
            
            <div className="features-grid">
              {project.features.map((feat, fIdx) => {
                const isPlanned = feat.status === 'Planned';
                return (
                  <div key={fIdx} className="feature-item-card">
                    <div className="feature-item-header">
                      <h3 className="feature-item-title">{feat.title}</h3>
                      {feat.status && (
                        <span className={`badge ${isPlanned ? 'badge-planned' : 'badge-success'}`}>
                          {feat.status}
                        </span>
                      )}
                    </div>
                    <p className="feature-item-desc">{feat.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* How It Works */}
          <section className="detail-block">
            <h2 className="detail-block-title">
              <Cpu size={18} />
              <span>How It Works</span>
            </h2>
            <div className="how-it-works-list">
              {project.howItWorks.map((step, sIdx) => (
                <div key={sIdx} className="step-card">
                  <h4>{step.step}</h4>
                  <p>{step.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What I Learned */}
          <section className="detail-block">
            <h2 className="detail-block-title">
              <CheckCircle2 size={18} />
              <span>What I Learned</span>
            </h2>
            <ul className="learned-list">
              {project.whatILearned.map((item, lIdx) => (
                <li key={lIdx} className="learned-item">
                  <CheckCircle2 size={16} className="learned-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar Info */}
        <aside className="detail-sidebar">
          {/* Development Status */}
          {project.developmentStatus && (
            <div className="sidebar-card">
              <h3 className="sidebar-card-title">Development Status</h3>
              <div style={{ marginBottom: '0.65rem' }}>
                <span className="badge badge-planned">
                  <Clock size={11} />
                  {project.developmentStatus.currentPhase}
                </span>
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                {project.developmentStatus.summary}
              </p>
            </div>
          )}

          {/* Technologies Used */}
          <div className="sidebar-card">
            <h3 className="sidebar-card-title">Technologies Used</h3>
            <div className="tech-detail-list">
              {project.technologiesUsed.map((tech, tIdx) => (
                <div key={tIdx} className="tech-detail-row">
                  <span className="tech-detail-name">{tech.name}</span>
                  <span className="tech-detail-cat">{tech.category}</span>
                  <p className="tech-detail-desc">{tech.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
