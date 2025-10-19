'use client';

import { useEffect } from 'react';

export default function Experience() {
  useEffect(() => {
    // Experience tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const experienceItems = document.querySelectorAll('.experience-item');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(tab => tab.classList.remove('active'));
        experienceItems.forEach(item => item.classList.remove('active'));

        btn.classList.add('active');

        const company = btn.getAttribute('data-company');
        const targetItem = document.querySelector(`.experience-item[data-company="${company}"]`);
        if (targetItem) {
          targetItem.classList.add('active');
        }
      });
    });
  }, []);

  return (
    <section id="experience">
      <div className="section-number">02.</div>
      <div className="section-content">
        <h2 className="section-title">Where I've Worked</h2>
        <div className="experience-container">
          <div className="experience-tabs">
            <button className="tab-btn" data-company="boa">Bank of America</button>
            <button className="tab-btn" data-company="cm">CM Alliance</button>
            <button className="tab-btn" data-company="ntt">NTT Data</button>
            <button className="tab-btn" data-company="techm">Tech Mahindra</button>
          </div>
          <div className="experience-content">
            <div className="experience-item" data-company="boa">
              <h3>Sr. Software Engineer <span>@ Bank of America</span></h3>
              {/* <p className="experience-date">February 2024 - March 2025</p> */}
              <ul>
                <li>Developed bank's internal web-based application for performance monitoring and reporting with approval mechanisms</li>
                <li>Designed and implemented accessible Next.js, React JS and TypeScript components for multiple screens</li>
                <li>Developed and integrated REST APIs in Java Spring Boot from multiple third-party sources</li>
                <li>Implemented roles mechanism to manage user approval access and authorization</li>
                <li>Ensured 100% AA compliance and WCAG 2.2 accessibility standards</li>
                <li>Managed deployments using Ansible and code pipelines, reducing manual errors</li>
              </ul>
            </div>
            <div className="experience-item" data-company="cm">
              <h3>Sr. Software Engineer <span>@ CM Alliance</span></h3>
              {/* <p className="experience-date">May 2023 - January 2024</p> */}
              <ul>
                <li>Created and designed MongoDB Schema for storing user profiles and event data</li>
                <li>Developed REST APIs using Node.js and MongoDB to serve data to frontend and metaverse view</li>
                <li>Integrated Web3 API with Node.js for enhanced functionality</li>
                <li>Designed and constructed frontend using React JS and Material UI framework</li>
                <li>Implemented RBAC by assigning different roles and restricting access based on user roles</li>
                <li>Containerized application through Docker and Kubernetes for efficient deployment</li>
              </ul>
            </div>
            <div className="experience-item" data-company="ntt">
              <h3>System Integration Senior Specialist <span>@ NTT Data Global US</span></h3>
              {/* <p className="experience-date">February 2022 - April 2023</p> */}
              <ul>
                <li>Collaborated with designers to create clean interfaces and intuitive interactions</li>
                <li>Led team to deliver complex design projects for corporate clients</li>
                <li>Developed applications using HTML5, CSS3, Bootstrap, jQuery, React JS, NextJS, Node JS</li>
                <li>Applied optimization techniques to reduce page size and load times</li>
                <li>Used WebSockets API for real-time communication</li>
                <li>Ensured accessibility (A11Y) compliance across all screens</li>
              </ul>
            </div>
            <div className="experience-item" data-company="techm">
              <h3>Senior Software Engineer <span>@ Tech Mahindra</span></h3>
              {/* <p className="experience-date">June 2019 - February 2022</p> */}
              <ul>
                <li>Developed mobile and web applications using Ionic, React JS, Angular, and Cordova</li>
                <li>Led development of new features and UI components ensuring accessibility compliance</li>
                <li>Deployed applications to both iOS and Android platforms via App Store and Play Store</li>
                <li>Developed and maintained web and mobile applications for Telecom and E-commerce sectors</li>
                <li>Implemented real-time communication using WebSockets API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
