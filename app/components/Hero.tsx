'use client';

import { useEffect } from 'react';
import ResumeDownload from './ResumeDownload';

export default function Hero() {
  useEffect(() => {
    // Typing Animation
    const typedText = document.getElementById('typed-text');
    const text = "I build things for the web & mobile.";
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        if (typedText) {
          typedText.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100);
        }
      }
    }

    setTimeout(typeWriter, 1000);
  }, []);

  return (
    <section id="home">
      <div className="hero-content">
        <p className="greeting">Hi, my name is</p>
        <h1 className="name">Abhay</h1>
        <h2 className="title">
          <span id="typed-text"></span>
          <span id="cursor">|</span>
        </h2>
        <p className="description">
          I'm an experienced Fullstack Developer with hands-on skills in Java, JavaScript, mobile, and web development frameworks.
          I specialize in delivering complex, business-critical projects across Financial, Telecom, Retail, and Life Sciences domains.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn-primary">Check out my work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
          <ResumeDownload className="btn-resume">
            <i className="fas fa-download"></i>
            Download Resume
          </ResumeDownload>
        </div>
      </div>
    </section>
  );
}
