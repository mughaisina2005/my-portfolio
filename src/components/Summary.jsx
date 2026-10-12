import React from 'react';
import { Brain, Database, Cpu, CheckCircle } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import './Summary.css';

export default function Summary() {
  return (
    <section id="summary" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Professional Summary</h2>
        </div>

        <div className="summary-compact-card">
          <div className="summary-quote-wrapper">
            <p className="summary-text-lead">
              "{personalDetails.professionalSummary}"
            </p>
          </div>

          <div className="summary-pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon">
                <Brain size={18} />
              </div>
              <div className="pillar-details">
                <span className="pillar-title">Machine Learning</span>
                <span className="pillar-desc">Classification, regression, and model evaluation</span>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <Database size={18} />
              </div>
              <div className="pillar-details">
                <span className="pillar-title">Data Preprocessing</span>
                <span className="pillar-desc">Pandas, NumPy, encoding, and data cleaning</span>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <Cpu size={18} />
              </div>
              <div className="pillar-details">
                <span className="pillar-title">Applied Engineering</span>
                <span className="pillar-desc">Modular Python scripting &amp; AI application logic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
