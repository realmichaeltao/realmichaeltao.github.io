import React from 'react';

const Projects = () => (
  <div className="section">
    <div className="container">
      <h2 className="section-title">Projects</h2>
      
      <div className="grid grid-2">
        <div className="card">
          <h3>🎓 TAC (Taolearn)</h3>
          <div className="meta">
            <span>👨‍💻 Tech Lead</span>
            <span>•</span>
            <span>📅 Jan 2025 - May 2025</span>
          </div>
          <p style={{ marginTop: '1rem' }}>
            Led the development of a full-stack online education platform using <strong>Ruby on Rails</strong>, <strong>MongoDB</strong>, 
            and <strong>Bootstrap</strong> in an Agile team of four, serving over 100 active users.
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li>Architected <strong>RESTful APIs</strong> with <strong>asJSON</strong> based data windows for course content delivery, user authentication, and data validation</li>
            <li>Deployed the application on <strong>Heroku</strong> with optimized database indexing, achieving 8 model version conflicts, and achieving 95%+ test coverage using <strong>RSpec</strong> and <strong>Cucumber</strong> for behavior-driven development</li>
          </ul>
        </div>

        <div className="card">
          <h3>🔄 FlowEx</h3>
          <div className="meta">
            <span>👨‍💻 Project Lead</span>
            <span>•</span>
            <span>📅 Sept 2024 - Dec 2024</span>
          </div>
          <p style={{ marginTop: '1rem' }}>
            Designed and developed a multi-threaded operating system project in <strong>C</strong>, simulating Linux, 
            integrating process control, file management, buffer cache, priority scheduling, and synchronization with 
            semaphores and locks.
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li>Optimized system performance by <strong>10%</strong> through implementing <strong>AWS</strong> auto-scaling and load balancing</li>
          </ul>
        </div>

        <div className="card">
          <h3>💾 Database Engine</h3>
          <div className="meta">
            <span>👨‍💻 Project Lead</span>
            <span>•</span>
            <span>📅 Jan 2024 - May 2024</span>
          </div>
          <p style={{ marginTop: '1rem' }}>
            Built a relational database system from scratch in <strong>Java</strong>, implementing B+ tree indexing, 
            query optimization, and transaction management with full ACID compliance.
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li>Implemented advanced query optimization techniques including join algorithms and cost-based optimization</li>
            <li>Designed and built a robust storage engine with page-level caching and buffer pool management</li>
            <li>Achieved full ACID compliance with proper transaction isolation and recovery mechanisms</li>
          </ul>
        </div>

        <div className="card">
          <h3>🤖 More Projects</h3>
          <div className="meta">
            <span>🚀 Various Technologies</span>
          </div>
          <p style={{ marginTop: '1rem' }}>
            I've worked on numerous other projects involving machine learning, web development, and system programming. 
            Check out my GitHub for more details!
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a 
              href="https://linkedin.com/in/realmichaeltao/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-block' }}
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Technologies Used Across Projects</h3>
        <div className="skills-grid" style={{ maxWidth: '800px', margin: '2rem auto' }}>
          <div className="skill-tag">Python</div>
          <div className="skill-tag">Java</div>
          <div className="skill-tag">C</div>
          <div className="skill-tag">Ruby on Rails</div>
          <div className="skill-tag">MongoDB</div>
          <div className="skill-tag">AWS</div>
          <div className="skill-tag">Heroku</div>
          <div className="skill-tag">RSpec</div>
          <div className="skill-tag">Cucumber</div>
          <div className="skill-tag">RESTful APIs</div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
