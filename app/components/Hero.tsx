'use client';

import { useEffect } from 'react';
import ResumeDownload from './ResumeDownload';

export default function Hero() {
  useEffect(() => {
    // Typing Animation with smoother effect
    const typedText = document.getElementById('typed-text');
    const text = "I build things for the web & mobile.";
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        if (typedText) {
          typedText.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeWriter, 80);
        }
      }
    }

    setTimeout(typeWriter, 800);

    // Fade in animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('fade-in');
    }
  }, []);

  return (
    <section id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Available for new opportunities</span>
          </div>
          
          <h1 className="hero-greeting">
            Hi, I'm <span className="hero-name-highlight">Abhay Chaturvedi</span>
          </h1>
          
          <h2 className="hero-tagline">
            <span id="typed-text" className="typed-text"></span>
            <span id="cursor" className="typing-cursor">|</span>
          </h2>
          
          <p className="hero-description">
            Senior Fullstack Developer specializing in building exceptional digital experiences. 
            With expertise in <span className="tech-highlight">React</span>, <span className="tech-highlight">Node.js</span>, 
            and <span className="tech-highlight">Java Spring Boot</span>, I deliver scalable solutions 
            for enterprise clients across Financial, Telecom, and Healthcare sectors.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
          
          <div className="hero-cta">
            <a href="#projects" className="cta-primary">
              <span>View My Work</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="cta-secondary">
              <span>Let's Talk</span>
              <i className="fas fa-comment-dots"></i>
            </a>
            <ResumeDownload className="cta-resume">
              <i className="fas fa-download"></i>
              <span>Resume</span>
            </ResumeDownload>
          </div>
        </div>
        
        <div className="hero-accent">
          <div className="accent-circle accent-1"></div>
          <div className="accent-circle accent-2"></div>
          <div className="accent-circle accent-3"></div>
        </div>
      </div>
    </section>
  );
}
