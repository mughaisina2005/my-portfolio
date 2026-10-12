import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import './Resume.css';

export default function Resume() {
  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Curriculum Vitae</span>
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            Verified academic qualifications, technical proficiencies, internships, and project experience.
          </p>
        </div>

        <div className="resume-compact-card">
          <div className="resume-info-side">
            <div className="resume-icon-badge">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="resume-doc-title">Mughaisina Parveen — Resume</h3>
              <p className="resume-doc-meta">
                AI/ML Engineer &bull; Python Developer &bull; PDF Document
              </p>
            </div>
          </div>

          <div className="resume-actions-side">
            <a
              href={personalDetails.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Eye size={16} />
              <span>View Resume</span>
            </a>

            <a
              href={personalDetails.resumePath}
              download="Mughaisina_Parveen_Resume.pdf"
              className="btn btn-secondary"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
