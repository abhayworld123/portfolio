'use client';

import { useEffect, useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('boa');

  const experiences = [
    {
      id: 'boa',
      company: 'Bank of America',
      role: 'Sr. Software Engineer',
      period: 'Feb 2024 - Mar 2025',
      location: 'Charlotte, NC',
      achievements: [
        'Developed banks internal web-based application for performance monitoring and reporting with approval mechanisms',
        'Designed and implemented accessible Next.js, React JS and TypeScript components for multiple screens',
        'Developed and integrated REST APIs in Java Spring Boot from multiple third-party sources',
        'Implemented roles mechanism to manage user approval access and authorization',
        'Ensured 100% AA compliance and WCAG 2.2 accessibility standards',
        'Managed deployments using Ansible and code pipelines, reducing manual errors'
      ],
      tech: ['Next.js', 'React', 'TypeScript', 'Java', 'Spring Boot']
    },
    {
      id: 'cm',
      company: 'CM Alliance',
      role: 'Sr. Software Engineer',
      period: 'May 2023 - Jan 2024',
      location: 'Remote',
      achievements: [
        'Created and designed MongoDB Schema for storing user profiles and event data',
        'Developed REST APIs using Node.js and MongoDB to serve data to frontend and metaverse view',
        'Integrated Web3 API with Node.js for enhanced functionality',
        'Designed and constructed frontend using React JS and Material UI framework',
        'Implemented RBAC by assigning different roles and restricting access based on user roles',
        'Containerized application through Docker and Kubernetes for efficient deployment'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Web3', 'Docker', 'Kubernetes']
    },
    {
      id: 'ntt',
      company: 'NTT Data',
      role: 'System Integration Sr. Specialist',
      period: 'Feb 2022 - Apr 2023',
      location: 'Remote',
      achievements: [
        'Collaborated with designers to create clean interfaces and intuitive interactions',
        'Led team to deliver complex design projects for corporate clients',
        'Developed applications using HTML5, CSS3, Bootstrap, jQuery, React JS, NextJS, Node JS',
        'Applied optimization techniques to reduce page size and load times',
        'Used WebSockets API for real-time communication',
        'Ensured accessibility (A11Y) compliance across all screens'
      ],
      tech: ['React', 'Next.js', 'Node.js', 'WebSockets', 'Bootstrap']
    },
    {
      id: 'techm',
      company: 'Tech Mahindra',
      role: 'Senior Software Engineer',
      period: 'Jun 2019 - Feb 2022',
      location: 'India',
      achievements: [
        'Developed mobile and web applications using Ionic, React JS, Angular, and Cordova',
        'Led development of new features and UI components ensuring accessibility compliance',
        'Deployed applications to both iOS and Android platforms via App Store and Play Store',
        'Developed and maintained web and mobile applications for Telecom and E-commerce sectors',
        'Implemented real-time communication using WebSockets API'
      ],
      tech: ['React', 'Angular', 'Ionic', 'Cordova', 'iOS', 'Android']
    }
  ];

  const activeExperience = experiences.find(exp => exp.id === activeTab) || experiences[0];

  return (
    <section id="experience">
      <div className="section-number">02.</div>
      <div className="section-content">
        <h2 className="section-title">Where I've Worked</h2>
        <div className="experience-wrapper">
          <div className="experience-tabs">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                className={`exp-tab ${activeTab === exp.id ? 'active' : ''}`}
                onClick={() => setActiveTab(exp.id)}
                style={{ '--tab-index': index } as React.CSSProperties}
              >
                {exp.company}
              </button>
            ))}
            <div 
              className="tab-indicator"
              style={{ 
                transform: `translateY(calc(${experiences.findIndex(e => e.id === activeTab)} * 100%))` 
              }}
            />
          </div>
          <div className="experience-panel">
            <div className="exp-header">
              <div>
                <h3 className="exp-role">
                  {activeExperience.role} 
                  <span className="exp-company"> @ {activeExperience.company}</span>
                </h3>
                <p className="exp-period">{activeExperience.period}</p>
              </div>
              <div className="exp-tech">
                {activeExperience.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <ul className="exp-achievements">
              {activeExperience.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
