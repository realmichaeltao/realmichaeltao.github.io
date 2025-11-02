import React from 'react';

const Resume = () => (
  <div className="section">
    <div className="container">
      <h2 className="section-title">Resume</h2>
      
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Michael Tao</h1>
        <div className="contact-links">
          <a href="mailto:mtao3@andrew.cmu.edu" className="contact-link">
            📧 mtao3@andrew.cmu.edu
          </a>
          <a href="tel:+15107103025" className="contact-link">
            📱 (510) 710-3025
          </a>
          <a href="https://linkedin.com/in/realmichaeltao/" target="_blank" rel="noopener noreferrer" className="contact-link">
            💼 LinkedIn
          </a>
          <span className="contact-link">📍 Mountain View, CA</span>
        </div>
      </div>

      {/* Education Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid var(--accent-color)', paddingBottom: '0.5rem' }}>
          🎓 EDUCATION
        </h3>
        
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ marginBottom: '0.25rem' }}>Carnegie Mellon University – Silicon Valley</h3>
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>Mountain View, CA</p>
            </div>
            <p style={{ color: 'var(--accent-color)', fontWeight: '600' }}>Aug 2025 - May 2026</p>
          </div>
          <p style={{ marginTop: '1rem' }}><strong>Master of Science in Software Engineering</strong></p>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            <strong>Relevant coursework:</strong> Foundations of Software Engineering, Foundation of computer system, 
            Cloud Computing, Software Refactoring
          </p>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ marginBottom: '0.25rem' }}>University of California, Berkeley</h3>
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>Berkeley, CA</p>
            </div>
            <p style={{ color: 'var(--accent-color)', fontWeight: '600' }}>Aug 2021 - May 2025</p>
          </div>
          <p style={{ marginTop: '1rem' }}><strong>Bachelor of Arts in Computer Science and Data Science</strong></p>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            <strong>Relevant coursework:</strong> Data Structures and Algorithms, Operating Systems, Database Systems, 
            Artificial Intelligence, Machine Learning, Computer Networks
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid var(--accent-color)', paddingBottom: '0.5rem' }}>
          💻 SKILLS
        </h3>
        
        <div className="card">
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Programming Languages:</strong> Python, Java, C/C++, JavaScript/TypeScript, SQL, HTML/CSS, Go, Ruby, GraphQL
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Frameworks & Libraries:</strong> React, Next.js, Vue, Angular, Express.js, Django, Flask, Ruby on Rails, PyTest
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Tools:</strong> Git, Docker, Kubernetes, CI/CD (GitHub, Jenkins), Cloud/AWS, Azure, GCP, Linux, VS Code, Terraform, Prometheus, Grafana
          </p>
          <p>
            <strong>Data Science & ML:</strong> TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Hugging Face, LangChain
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid var(--accent-color)', paddingBottom: '0.5rem' }}>
          💼 EXPERIENCE
        </h3>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Jun 2025 - Aug 2025</div>
            <div className="timeline-title">Software Engineer Intern | Cleo (ThreatEdge)</div>
            <div className="timeline-subtitle">San Francisco, CA</div>
            <div className="timeline-content">
              <ul>
                <li>Modernized old <strong>Angular</strong> codebase to <strong>Vue</strong>, utilizing <strong>TypeScript</strong>, <strong>Pinia</strong> for state management, and <strong>VueQuery</strong> for API data fetching and caching, while integrating <strong>Vite</strong> for fast tooling and streamlining backend services</li>
                <li>Architected a <strong>BFF</strong> (Backend for Frontend) layer using <strong>NestJS</strong> and <strong>GraphQL</strong> to optimize core backend API services, implementing authentication for seamless integration and improved backend service integration and type safety and streamlined backend services integration</li>
                <li>Actively engaged in standup meetings, participated in <strong>sprint planning</strong> and velocity and workflow coordination and codebase discussions using <strong>GitHub</strong>, contributing to a 100% on-time feature delivery and adopting a <strong>CI/CD</strong> pipeline for automated testing and deployment</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">May 2024 - Aug 2024</div>
            <div className="timeline-title">MLOps Intern | Ocula Labs</div>
            <div className="timeline-subtitle">Remote</div>
            <div className="timeline-content">
              <ul>
                <li>Spearheaded the end-to-end design and implementation of a scalable workflow to run and test all <strong>Large Language Models (LLM)</strong> with a single codebase using <strong>Python</strong> and <strong>LangChain</strong>, enabling unified model management across diverse AI architectures</li>
                <li>Deployed 15 models, including <strong>GPT-2</strong> and <strong>Llama</strong> from <strong>Hugging Face</strong>, by creating <strong>Poetry</strong> files for dependency management and optimizing model loading, reducing manual deployment steps from 12 to 3 in seconds and enabling scalability and reliability through auto-scaling <strong>CI/CD</strong> workflows</li>
                <li>Streamlined <strong>CI/CD</strong> workflows by writing comprehensive documentation to optimize deployment processes, configuring <strong>Terraform</strong>, <strong>GitHub CI/CD</strong> pipelines, and <strong>Azure</strong> deployment, reducing manual deployment steps from 12 to 3 and improving testing efficiency by 5x, then demoed 8 model version conflicts, and presented the project to company CEO, receiving positive recognition for impactful contributions</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Jul 2023 - Aug 2023</div>
            <div className="timeline-title">Software Engineer Intern | Alibaba Cloud</div>
            <div className="timeline-subtitle">Nanjing, China</div>
            <div className="timeline-content">
              <ul>
                <li>Designed and developed a real-time shuttle bus tracking web application using <strong>React</strong> for the frontend, <strong>Django</strong> for backend services, integrating <strong>Tencent Location Services API</strong> for real-time bus location tracking, and <strong>WebSockets</strong> for real-time bus updates, and implementing advanced geospatial search with optimized indexing strategies, performance optimization, addressing concurrency issues, and resolving performance bottlenecks with robust data processing, handling data processing with 50+ queries per second and decreasing query latency by 20%</li>
                <li>Developed a schema normalization, handling data processing with 50+ queries per second and decreasing query latency by 20%</li>
                <li>Integrated with Alibaba&apos;s <strong>Qwen LLM</strong> (closed-source AI model) to enable <strong>Natural Language Processing (NLP)</strong> to enable intelligent assistance for route inquiries, handling 500+ user conversations daily</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid var(--accent-color)', paddingBottom: '0.5rem' }}>
          🚀 PROJECTS
        </h3>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Jan 2025 - May 2025</div>
            <div className="timeline-title">TAC (Taolearn) | Tech Lead</div>
            <div className="timeline-content">
              <ul>
                <li>Led development of a full-stack online education platform using <strong>Ruby on Rails</strong>, <strong>MongoDB</strong>, and <strong>Bootstrap</strong> in an Agile team of four, serving over 100 active users</li>
                <li>Architected <strong>RESTful APIs</strong> with <strong>asJSON</strong> based data windows for course content delivery, user authentication, and data validation</li>
                <li>Deployed the application on <strong>Heroku</strong> with optimized database indexing, achieving 8 model version conflicts, and achieving 95%+ test coverage using <strong>RSpec</strong> and <strong>Cucumber</strong> for behavior-driven development</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Sept 2024 - Dec 2024</div>
            <div className="timeline-title">FlowEx | Project Lead</div>
            <div className="timeline-content">
              <ul>
                <li>Designed and developed a multi-threaded operating system project in <strong>C</strong>, simulating Linux, integrating process control, file management, buffer cache, priority scheduling, and synchronization with semaphores and locks</li>
                <li>Optimized system performance by <strong>10%</strong> through implementing <strong>AWS</strong> auto-scaling and load balancing for seamless testing and hosting, and optimizing system testing and storage by configuring auto-scaling policies for seamless resource management and enabling distributed load testing environment using <strong>Grafana</strong> presented the project to company CEO, receiving positive recognition for impactful contributions</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Jan 2024 - May 2024</div>
            <div className="timeline-title">Database Engine | Project Lead</div>
            <div className="timeline-content">
              <ul>
                <li>Built a relational database system from scratch in <strong>Java</strong>, implementing B+ tree indexing, query optimization, and transaction management with full ACID compliance</li>
                <li>Implemented advanced query optimization techniques and designed a robust storage engine with page-level caching</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <a 
          href="https://linkedin.com/in/realmichaeltao/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View Full Resume on LinkedIn
        </a>
      </div>
    </div>
  </div>
);

export default Resume;
