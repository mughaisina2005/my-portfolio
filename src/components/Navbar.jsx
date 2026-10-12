import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Summary', id: 'summary' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Internship', id: 'internship' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' }
];

export default function Navbar({ activeSection, onNavigate, isProjectDetailPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key or resize
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 992) setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleItemClick = (id) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a 
          href="#home" 
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            handleItemClick('home');
          }}
          aria-label="Mughaisina Parveen Homepage"
        >
          <div className="brand-badge">MP</div>
          <div className="brand-text-wrapper">
            <span className="brand-name">Mughaisina Parveen</span>
            <span className="brand-title-sub">AI/ML Engineer &bull; Python Developer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="desktop-nav">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => {
              const isActive = !isProjectDetailPage && activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => handleItemClick(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Navigation</span>
          <button 
            className="mobile-menu-close" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={18} />
          </button>
        </div>
        <div className="mobile-menu-links">
          {NAV_ITEMS.map((item) => {
            const isActive = !isProjectDetailPage && activeSection === item.id;
            return (
              <button
                key={item.id}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => handleItemClick(item.id)}
              >
                <span>{item.label}</span>
                <ChevronRight size={15} className="mobile-link-chevron" />
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
