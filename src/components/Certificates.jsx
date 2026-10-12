import React, { useState, useEffect, useCallback } from 'react';
import { Award, Eye, X, ChevronLeft, ChevronRight, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { certificatesData } from '../data/certificatesData';
import './Certificates.css';

export default function Certificates() {
  const [selectedCertIndex, setSelectedCertIndex] = useState(null);

  // Close lightbox on Escape key, navigate with Left/Right arrows
  const handleKeyDown = useCallback((e) => {
    if (selectedCertIndex === null) return;
    if (e.key === 'Escape') {
      setSelectedCertIndex(null);
    } else if (e.key === 'ArrowLeft') {
      setSelectedCertIndex((prev) => (prev > 0 ? prev - 1 : certificatesData.length - 1));
    } else if (e.key === 'ArrowRight') {
      setSelectedCertIndex((prev) => (prev < certificatesData.length - 1 ? prev + 1 : 0));
    }
  }, [selectedCertIndex]);

  useEffect(() => {
    if (selectedCertIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCertIndex, handleKeyDown]);

  const activeCert = selectedCertIndex !== null ? certificatesData[selectedCertIndex] : null;

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Verified Credentials</span>
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">
            Authentic qualifications in computer applications, technical typewriting, and web development.
          </p>
        </div>

        {/* Thumbnail Gallery Grid */}
        <div className="certificates-gallery-grid">
          {certificatesData.map((cert, index) => (
            <div 
              key={cert.id} 
              className="cert-gallery-card"
              onClick={() => setSelectedCertIndex(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${cert.title} certificate`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCertIndex(index);
                }
              }}
            >
              <div className="cert-thumb-wrapper">
                <img
                  src={cert.filePath}
                  alt={cert.title}
                  className="cert-thumb-image"
                  loading="lazy"
                />
                <div className="cert-thumb-overlay">
                  <div className="cert-thumb-action-badge">
                    <Eye size={16} />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>

              <div className="cert-card-body">
                <span className="cert-card-issuer">{cert.issuer}</span>
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-subtitle">{cert.subtitle}</p>
                
                {cert.date && (
                  <div className="cert-card-date">
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                )}

                <div className="cert-card-tags">
                  {cert.skillsCovered.slice(0, 3).map((skill, sIdx) => (
                    <span key={sIdx} className="cert-tag-pill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ACCESSIBLE LIGHTBOX MODAL */}
        {activeCert && (
          <div 
            className="cert-lightbox-backdrop"
            onClick={() => setSelectedCertIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCert.title} Details`}
          >
            <div 
              className="cert-lightbox-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="lightbox-header">
                <div>
                  <h3 className="lightbox-title">{activeCert.title}</h3>
                  <p className="lightbox-issuer">{activeCert.issuer}</p>
                </div>
                <button
                  className="lightbox-close-btn"
                  onClick={() => setSelectedCertIndex(null)}
                  aria-label="Close Certificate Modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body: Image & Details */}
              <div className="lightbox-body">
                <div className="lightbox-image-container">
                  <img
                    src={activeCert.filePath}
                    alt={`${activeCert.title} - ${activeCert.issuer}`}
                    className="lightbox-full-img"
                  />
                </div>

                <div className="lightbox-info-pane">
                  <div className="lightbox-info-block">
                    <span className="info-label">Category</span>
                    <span className="info-value">{activeCert.category}</span>
                  </div>

                  {activeCert.subtitle && (
                    <div className="lightbox-info-block">
                      <span className="info-label">Grade / Distinction</span>
                      <span className="info-value highlight-value">{activeCert.subtitle}</span>
                    </div>
                  )}

                  {activeCert.date && (
                    <div className="lightbox-info-block">
                      <span className="info-label">Date of Issue / Duration</span>
                      <span className="info-value">{activeCert.date}</span>
                    </div>
                  )}

                  {activeCert.certificateNo && (
                    <div className="lightbox-info-block">
                      <span className="info-label">Certificate Serial Number</span>
                      <code className="info-code">{activeCert.certificateNo}</code>
                    </div>
                  )}

                  {activeCert.regNo && (
                    <div className="lightbox-info-block">
                      <span className="info-label">Registration Number</span>
                      <code className="info-code">{activeCert.regNo}</code>
                    </div>
                  )}

                  <div className="lightbox-info-block">
                    <span className="info-label">Description</span>
                    <p className="lightbox-desc">{activeCert.description}</p>
                  </div>

                  <div className="lightbox-skills-group">
                    {activeCert.skillsCovered.map((skill, sIdx) => (
                      <span key={sIdx} className="badge badge-primary">
                        <CheckCircle2 size={11} />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>

                  <div className="lightbox-action-row">
                    <a
                      href={activeCert.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Open Full Photograph</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Navigation controls in lightbox */}
              <div className="lightbox-footer">
                <button
                  className="lightbox-nav-btn"
                  onClick={() => setSelectedCertIndex((prev) => (prev > 0 ? prev - 1 : certificatesData.length - 1))}
                  aria-label="Previous Certificate"
                >
                  <ChevronLeft size={18} />
                  <span>Previous</span>
                </button>

                <span className="lightbox-counter">
                  {selectedCertIndex + 1} of {certificatesData.length}
                </span>

                <button
                  className="lightbox-nav-btn"
                  onClick={() => setSelectedCertIndex((prev) => (prev < certificatesData.length - 1 ? prev + 1 : 0))}
                  aria-label="Next Certificate"
                >
                  <span>Next</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
