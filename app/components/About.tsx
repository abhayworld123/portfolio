'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  useEffect(() => {
    const handleScroll = () => {
      const profileBorder = document.querySelector('.profile-border') as HTMLElement;
      if (profileBorder) {
        const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const rotation = scrollProgress * 360;
        profileBorder.style.setProperty('--rotation', `${rotation}deg`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Material-UI'],
    backend: ['Java Spring Boot', 'Node.js', 'NestJS', 'Express', 'REST APIs', 'GraphQL'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'Git']
  };

  return (
    <section id="about">
      <div className="section-number">01.</div>
      <div className="section-content">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-container">
          <div className="about-main">
            <div className="about-intro">
              <h3 className="about-subtitle">
                Crafting Digital Experiences with Code & Creativity
              </h3>
              <p className="about-lead">
                I'm a <span className="highlight">Senior Fullstack Developer</span> passionate about building 
                scalable, user-centric applications that solve real business problems.
              </p>
            </div>

            <div className="about-content-grid">
              <div className="about-story">
                <p>
                  With over 5 years of experience in software development, I've had the privilege of working 
                  with leading organizations like <strong>Bank of America</strong>, <strong>NTT Data</strong>, 
                  and <strong>Tech Mahindra</strong>, delivering mission-critical solutions across 
                  Financial, Telecom, and Healthcare sectors.
                </p>
                <p>
                  My expertise spans the entire development lifecycle — from architecting robust backend systems 
                  to crafting intuitive frontend interfaces. I specialize in <strong>modern JavaScript frameworks</strong>, 
                  <strong>Java ecosystem</strong>, and <strong>cloud technologies</strong>, always staying current 
                  with industry best practices.
                </p>
                <p>
                  Beyond coding, I'm committed to fostering collaborative team environments, mentoring junior developers, 
                  and contributing to technical communities. I believe great software is built by great teams.
                </p>
              </div>

              <div className="about-highlights">
                <div className="highlight-card">
                  <div className="highlight-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <h4>Clean Code Advocate</h4>
                  <p>Writing maintainable, scalable, and well-documented code</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h4>Team Collaborator</h4>
                  <p>Experience leading distributed agile teams globally</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h4>Performance Focused</h4>
                  <p>Optimizing applications for speed and efficiency</p>
                </div>
              </div>
            </div>

            <div className="about-skills">
              <h3 className="skills-heading">Technical Expertise</h3>
              
              <div className="skills-categories">
                <button 
                  className={`skill-category-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('frontend')}
                >
                  <i className="fas fa-palette"></i>
                  Frontend
                </button>
                <button 
                  className={`skill-category-btn ${activeCategory === 'backend' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('backend')}
                >
                  <i className="fas fa-server"></i>
                  Backend
                </button>
                <button 
                  className={`skill-category-btn ${activeCategory === 'database' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('database')}
                >
                  <i className="fas fa-database"></i>
                  Database
                </button>
                <button 
                  className={`skill-category-btn ${activeCategory === 'devops' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('devops')}
                >
                  <i className="fas fa-cloud"></i>
                  DevOps
                </button>
              </div>

              <div className="skills-showcase">
                {skills[activeCategory as keyof typeof skills].map((skill, index) => (
                  <div 
                    key={skill} 
                    className="skill-badge"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="skill-icon">▹</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image-container">
                <img src="/images/noch.png" alt="Abhay Chaturvedi" className="profile-image" />
                <div className="profile-overlay"></div>
                <div className="profile-border"></div>
              </div>
              <div className="profile-info">
                <h4 className="profile-name">Abhay Chaturvedi</h4>
                <p className="profile-title">Senior Fullstack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
