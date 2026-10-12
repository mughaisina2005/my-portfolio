import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalDetails } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Open to AI/ML engineering roles, Python developer opportunities, and technical collaborations.
          </p>
        </div>

        <div className="contact-compact-container">
          <div className="contact-cards-grid">
            {/* Phone */}
            <a 
              href={`tel:${personalDetails.phone}`}
              className="contact-card"
              title="Call phone number"
            >
              <div className="contact-card-icon">
                <Phone size={20} />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">Phone</span>
                <span className="contact-card-val">{personalDetails.phone}</span>
              </div>
              <ArrowUpRight size={16} className="contact-card-arrow" />
            </a>

            {/* Email */}
            <a 
              href={`mailto:${personalDetails.email}`}
              className="contact-card"
              title="Send email"
            >
              <div className="contact-card-icon">
                <Mail size={20} />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">Email</span>
                <span className="contact-card-val">{personalDetails.email}</span>
              </div>
              <ArrowUpRight size={16} className="contact-card-arrow" />
            </a>

            {/* GitHub */}
            <a 
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              title="Visit GitHub Profile"
            >
              <div className="contact-card-icon">
                <GithubIcon size={20} />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-val">github.com/mughaisina2005</span>
              </div>
              <ArrowUpRight size={16} className="contact-card-arrow" />
            </a>

            {/* LinkedIn */}
            <a 
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              title="Visit LinkedIn Profile"
            >
              <div className="contact-card-icon">
                <LinkedinIcon size={20} />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-val">linkedin.com/in/mughaisina-parveen-1734aa2a5</span>
              </div>
              <ArrowUpRight size={16} className="contact-card-arrow" />
            </a>
          </div>

          <div className="contact-location-bar">
            <div className="location-icon-box">
              <MapPin size={16} />
            </div>
            <span>Location: <strong>{personalDetails.location}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
