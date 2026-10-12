import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal foundation in Computer Science and software engineering principles.
          </p>
        </div>

        <div className="education-list">
          {educationData.map((item, index) => (
            <div key={index} className="education-item-card">
              <div className="education-icon-col">
                <div className="education-icon-box">
                  <GraduationCap size={20} />
                </div>
                {index < educationData.length - 1 && <div className="education-line" />}
              </div>

              <div className="education-content-col">
                <div className="education-top-bar">
                  <div>
                    <h3 className="education-degree-title">{item.degree}</h3>
                    <p className="education-inst-name">{item.institution}</p>
                    {item.university && (
                      <p className="education-univ-name">{item.university}</p>
                    )}
                  </div>

                  <div className="education-meta-badges">
                    <span className="badge badge-neutral">
                      <Calendar size={12} />
                      <span>{item.period}</span>
                    </span>
                    <span className="badge badge-success">
                      <Award size={12} />
                      <span>{item.score}</span>
                    </span>
                  </div>
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="education-highlights-list">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="education-highlight-point">
                        <span className="education-point-bullet">&bull;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
