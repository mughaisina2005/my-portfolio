import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalDetails } from '../data/portfolioData';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const essentialLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Summary', id: 'summary' },
    { label: 'Skills', id: 'skills' },
    { label: 'Internship', id: 'internship' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="footer-minimal">
      <div className="container footer-container">
        <div className="footer-main-row">
          <div className="footer-identity">
            <span className="footer-author-name">{personalDetails.name}</span>
            <span className="footer-author-role">{personalDetails.title}</span>
          </div>

          <div className="footer-social-icons">
            <a
              href={`mailto:${personalDetails.email}`}
              className="footer-icon-link"
              title="Email"
              aria-label="Email Mughaisina Parveen"
            >
              <Mail size={17} />
            </a>

            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={17} />
            </a>

            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={17} />
            </a>
          </div>
        </div>

        <div className="footer-links-row">
          <ul className="footer-nav-list">
            {essentialLinks.map((link) => (
              <li key={link.id}>
                <button
                  className="footer-nav-btn"
                  onClick={() => onNavigate(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright-text">
            &copy; {currentYear} {personalDetails.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
