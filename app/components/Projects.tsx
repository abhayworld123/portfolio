export default function Projects() {
  return (
    <section id="projects">
      <div className="section-number">05.</div>
      <div className="section-content">
        <h2 className="section-title">Some Things I've Built</h2>
        <div className="projects-grid">
          <div className="project-card featured">
            <div className="project-content">
              <p className="project-type">Featured Project</p>
              <h3 className="project-title">Task Management App</h3>
              <div className="project-description">
                <p>
                  A full-stack web application for managing tasks and projects with real-time collaboration.
                  Features include user authentication, notifications, and team workspaces.
                </p>
              </div>
              <ul className="project-tech">
                <li>Django</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>React</li>
              </ul>
              <div className="project-links">
                <a href="#" className="project-link"><i className="fab fa-github"></i></a>
                <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div className="project-image">
              <div className="image-overlay"></div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Task Management App" />
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <p className="project-type">Web Application</p>
              <h3 className="project-title">Data Dashboard</h3>
              <div className="project-description">
                <p>
                  An interactive dashboard for data visualization and analysis with real-time updates.
                </p>
              </div>
              <ul className="project-tech">
                <li>Flask</li>
                <li>D3.js</li>
                <li>MongoDB</li>
                <li>Python</li>
              </ul>
              <div className="project-links">
                <a href="#" className="project-link"><i className="fab fa-github"></i></a>
                <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div className="project-image">
              <div className="image-overlay"></div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Data Dashboard" />
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <p className="project-type">Automation Tool</p>
              <h3 className="project-title">Script Suite</h3>
              <div className="project-description">
                <p>
                  A collection of Python automation scripts for data processing and API integrations.
                </p>
              </div>
              <ul className="project-tech">
                <li>Python</li>
                <li>Click</li>
                <li>AWS Lambda</li>
                <li>Docker</li>
              </ul>
              <div className="project-links">
                <a href="#" className="project-link"><i className="fab fa-github"></i></a>
                <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div className="project-image">
              <div className="image-overlay"></div>
              <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Script Suite" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
