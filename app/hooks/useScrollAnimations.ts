'use client';

import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    // Navigation smooth scroll
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function (this: HTMLElement, e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            const offsetTop = (targetSection as HTMLElement).offsetTop - 100;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Mobile hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');

    if (hamburger && navLinksContainer) {
      hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        hamburger.classList.toggle('active');
      });
    }

    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');

    function updateScrollIndicator() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollIndicator) {
        if (scrollTop > windowHeight / 2) {
          (scrollIndicator as HTMLElement).style.opacity = '0';
        } else {
          (scrollIndicator as HTMLElement).style.opacity = '1';
        }
      }
    }

    window.addEventListener('scroll', updateScrollIndicator);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      (section as HTMLElement).style.opacity = '0';
      (section as HTMLElement).style.transform = 'translateY(30px)';
      (section as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });

    // Prevent scroll indicator from showing on mobile initially
    if (window.innerWidth <= 768 && scrollIndicator) {
      (scrollIndicator as HTMLElement).style.display = 'none';
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', updateScrollIndicator);
      navLinks.forEach(link => {
        link.removeEventListener('click', function (this: HTMLElement, e) {
          const targetId = this.getAttribute('href');
          if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
              const offsetTop = (targetSection as HTMLElement).offsetTop - 100;
              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
              });
            }
          }
        });
      });
    };
  }, []);
}
