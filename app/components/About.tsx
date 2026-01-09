export default function About() {
  return (
    <section id="about">
      <div className="section-number">01.</div>
      <div className="section-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I'm Abhay Chaturvedi, an experienced Fullstack Developer with expertise in delivering complex, 
              business-critical projects for clients across Financial, Telecom, Retail, and Life Sciences domains.
            </p>
            <p>
              I have proven ability to assist in IT modernization and cloud migration strategies. 
              I'm adept at working with distributed teams globally, solving problems, and enhancing communication.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="tech-list">
              <li>React & Next.js</li>
              <li>Java & Spring Boot</li>
              <li>TypeScript & JavaScript</li>
              <li>Node.js & NestJS</li>
              <li>AWS & Azure</li>
              <li>Docker & Kubernetes</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img src="/images/noch.png" alt="Abhay Chaturvedi" className="cropped-image" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
