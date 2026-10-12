import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Education from './components/Education';
import Internship from './components/Internship';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projectsData } from './data/projectsData';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  // Handle URL hash routing (e.g. #/project/laptop-price-prediction or #skills)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const slug = hash.replace('#/project/', '');
        const matched = projectsData.find((p) => p.slug === slug || p.id === slug);
        if (matched) {
          setSelectedProjectId(matched.id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      // If regular section hash
      if (hash && !hash.startsWith('#/project/')) {
        setSelectedProjectId(null);
        const sectionId = hash.replace('#', '');
        setActiveSection(sectionId);
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Intersection Observer for scroll spy on home page sections
  useEffect(() => {
    if (selectedProjectId) return;

    const sectionIds = [
      'home',
      'summary',
      'skills',
      'education',
      'internship',
      'projects',
      'certificates',
      'resume',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProjectId]);

  const navigateToSection = (sectionId) => {
    if (selectedProjectId) {
      setSelectedProjectId(null);
      window.location.hash = sectionId === 'home' ? '' : `#${sectionId}`;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', sectionId === 'home' ? ' ' : `#${sectionId}`);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleSelectProject = (projectId) => {
    const project = projectsData.find((p) => p.id === projectId);
    if (project) {
      setSelectedProjectId(project.id);
      window.location.hash = `#/project/${project.slug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToProjects = () => {
    setSelectedProjectId(null);
    window.location.hash = '#projects';
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const currentProject = projectsData.find((p) => p.id === selectedProjectId);

  return (
    <div className="portfolio-app">
      <Navbar
        activeSection={activeSection}
        onNavigate={navigateToSection}
        isProjectDetailPage={Boolean(selectedProjectId)}
      />

      <main id="main-content">
        {selectedProjectId && currentProject ? (
          <ProjectDetail
            project={currentProject}
            onBack={handleBackToProjects}
          />
        ) : (
          <>
            <Hero
              onNavigate={navigateToSection}
              onSelectProject={handleSelectProject}
            />
            <Summary />
            <Skills />
            <Education />
            <Internship />
            <Projects
              onSelectProject={handleSelectProject}
            />
            <Certificates />
            <Resume />
            <Contact />
          </>
        )}
      </main>

      <Footer onNavigate={navigateToSection} />
    </div>
  );
}
