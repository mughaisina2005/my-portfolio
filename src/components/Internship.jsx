import React from 'react';
import { Briefcase, CheckCircle2, Clock } from 'lucide-react';
import { internshipData } from '../data/portfolioData';
import './Internship.css';

export default function Internship() {
  return (
    <section id="internship" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Industry Experience</span>
          <h2 className="section-title">Internships</h2>
          <p className="section-subtitle">
            Hands-on technical exposure in artificial intelligence modeling, data preprocessing, and web development.
          </p>
        </div>

        <div className="internship-grid">
          {internshipData.map((item) => (
            <div key={item.id} className="internship-card">
              <div className="internship-card-header">
                <div className="internship-icon-box">
                  <Briefcase size={20} />
                </div>
                <div className="internship-badges">
                  {item.duration && (
                    <span className="badge badge-neutral">
                      <Clock size={11} />
                      <span>{item.duration}</span>
                    </span>
                  )}
                  <span className="badge badge-primary">{item.badge}</span>
                </div>
              </div>

              <div className="internship-info">
                <h3 className="internship-role">{item.role}</h3>
                <p className="internship-org">{item.organization}</p>
              </div>

              <ul className="internship-bullets">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="internship-bullet-item">
                    <CheckCircle2 size={15} className="bullet-check-icon" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="internship-tech-footer">
                {item.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="internship-tech-pill">
                    {tech}
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
