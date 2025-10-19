'use client';

import { useEffect } from 'react';

export default function Skills() {
  useEffect(() => {
    // Skills tabs
    const skillTabs = document.querySelectorAll('.skill-tab');
    const skillCategories = document.querySelectorAll('.skill-category');

    skillTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        skillTabs.forEach(t => t.classList.remove('active'));
        skillCategories.forEach(cat => cat.classList.remove('active'));

        tab.classList.add('active');

        const category = tab.getAttribute('data-category');
        if (category) {
          const targetCategory = document.getElementById(category);
          if (targetCategory) {
            targetCategory.classList.add('active');
          }
        }
      });
    });
  }, []);

  return (
    <section id="skills">
      <div className="section-number">03.</div>
      <div className="section-content">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container">
          <div className="skills-tabs">
            <button className="skill-tab active" data-category="frontend">
              <i className="fas fa-desktop"></i>
              Frontend
            </button>
            <button className="skill-tab" data-category="backend">
              <i className="fas fa-server"></i>
              Backend
            </button>
            <button className="skill-tab" data-category="tools">
              <i className="fas fa-tools"></i>
              Tools
            </button>
            <button className="skill-tab" data-category="design">
              <i className="fas fa-paint-brush"></i>
              Design
            </button>
          </div>
          <div className="skills-panel">
            <div className="skill-category active" id="frontend">
              <h3>Frontend Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <i className="fab fa-react"></i>
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-js-square"></i>
                  <span>Next.js</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-js-square"></i>
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-js-square"></i>
                  <span>TypeScript</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-angular"></i>
                  <span>Angular 12</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-html5"></i>
                  <span>HTML5</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-css3-alt"></i>
                  <span>CSS3</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-bootstrap"></i>
                  <span>Bootstrap</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-react"></i>
                  <span>React Native</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Ionic</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-palette"></i>
                  <span>Material UI</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Redux</span>
                </div>
              </div>
            </div>
            <div className="skill-category" id="backend">
              <h3>Backend Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <i className="fab fa-java"></i>
                  <span>Java</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-server"></i>
                  <span>Spring Boot</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-node-js"></i>
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-server"></i>
                  <span>NestJS</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-python"></i>
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-database"></i>
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-database"></i>
                  <span>PostgreSQL</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-database"></i>
                  <span>MySQL</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-fire"></i>
                  <span>Firebase</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-code"></i>
                  <span>REST APIs</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-plug"></i>
                  <span>gRPC</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-wifi"></i>
                  <span>WebSockets</span>
                </div>
              </div>
            </div>
            <div className="skill-category" id="tools">
              <h3>Tools & Technologies</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <i className="fab fa-aws"></i>
                  <span>AWS</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-microsoft"></i>
                  <span>Azure</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-google"></i>
                  <span>Google Cloud</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-docker"></i>
                  <span>Docker</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-cubes"></i>
                  <span>Kubernetes</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-git-alt"></i>
                  <span>Git</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-bitbucket"></i>
                  <span>Bitbucket</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-cogs"></i>
                  <span>Jenkins</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-code-branch"></i>
                  <span>Webpack</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-bug"></i>
                  <span>Jest</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-vial"></i>
                  <span>Cypress</span>
                </div>
              </div>
            </div>
            <div className="skill-category" id="design">
              <h3>Design & Mobile</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <i className="fab fa-figma"></i>
                  <span>Figma</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-palette"></i>
                  <span>UI/UX Design</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-mobile-alt"></i>
                  <span>React Native</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Ionic</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-android"></i>
                  <span>Android</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-apple"></i>
                  <span>iOS</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Mobile Development</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-drafting-compass"></i>
                  <span>Prototyping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
