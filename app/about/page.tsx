import React from 'react';

const About = () => (
  <div className="section">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3>👋 Hello, I'm Michael Tao</h3>
        <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
          I'm a software engineer and data scientist currently pursuing my Master of Science in Software Engineering 
          at Carnegie Mellon University - Silicon Valley. With a strong foundation in computer science and data science 
          from UC Berkeley, I specialize in building scalable systems, cloud infrastructure, and machine learning solutions.
        </p>
        <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
          I have hands-on experience working with cutting-edge technologies including Angular, Vue, TypeScript, Python, 
          and various cloud platforms (AWS, Azure, GCP). My work spans from modernizing legacy codebases to developing 
          real-time shuttle tracking systems and optimizing cloud infrastructure.
        </p>
      </div>

      <h3 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '2rem', textAlign: 'center' }}>🎓 Education</h3>
      
      <div className="grid grid-2">
        <div className="card">
          <h3>Carnegie Mellon University - Silicon Valley</h3>
          <div className="meta">
            <span>📍 Mountain View, CA</span>
            <span>•</span>
            <span>📅 Aug 2025 - May 2026</span>
          </div>
          <p><strong>Master of Science in Software Engineering</strong></p>
          <p style={{ marginTop: '0.5rem' }}>
            <strong>Relevant coursework:</strong> Foundations of Software Engineering, Foundation of computer system, 
            Cloud Computing, Software Refactoring
          </p>
        </div>

        <div className="card">
          <h3>University of California, Berkeley</h3>
          <div className="meta">
            <span>📍 Berkeley, CA</span>
            <span>•</span>
            <span>📅 Aug 2021 - May 2025</span>
          </div>
          <p><strong>Bachelor of Arts in Computer Science and Data Science</strong></p>
          <p style={{ marginTop: '0.5rem' }}>
            <strong>Relevant coursework:</strong> Data Structures and Algorithms, Operating Systems, Database Systems, 
            Artificial Intelligence, Machine Learning, Computer Networks
          </p>
        </div>
      </div>

      <h3 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '2rem', textAlign: 'center' }}>💻 Technical Skills</h3>
      
      <div className="card">
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Programming Languages</h3>
        <div className="skills-grid">
          <div className="skill-tag">Python</div>
          <div className="skill-tag">Java</div>
          <div className="skill-tag">C/C++</div>
          <div className="skill-tag">JavaScript</div>
          <div className="skill-tag">TypeScript</div>
          <div className="skill-tag">SQL</div>
          <div className="skill-tag">HTML/CSS</div>
          <div className="skill-tag">Go</div>
          <div className="skill-tag">Ruby</div>
          <div className="skill-tag">GraphQL</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Technologies & Tools</h3>
        <div className="skills-grid">
          <div className="skill-tag">React</div>
          <div className="skill-tag">Next.js</div>
          <div className="skill-tag">Vue</div>
          <div className="skill-tag">Angular</div>
          <div className="skill-tag">Express.js</div>
          <div className="skill-tag">Django</div>
          <div className="skill-tag">Flask</div>
          <div className="skill-tag">Ruby on Rails</div>
          <div className="skill-tag">PyTest</div>
          <div className="skill-tag">Git</div>
          <div className="skill-tag">Docker</div>
          <div className="skill-tag">Kubernetes</div>
          <div className="skill-tag">CI/CD</div>
          <div className="skill-tag">GitHub</div>
          <div className="skill-tag">Jenkins</div>
          <div className="skill-tag">Terraform</div>
          <div className="skill-tag">Cloud/AWS</div>
          <div className="skill-tag">Azure</div>
          <div className="skill-tag">GCP</div>
          <div className="skill-tag">Linux</div>
          <div className="skill-tag">VS Code</div>
          <div className="skill-tag">Grafana</div>
          <div className="skill-tag">Prometheus</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Data Science & ML</h3>
        <div className="skills-grid">
          <div className="skill-tag">TensorFlow</div>
          <div className="skill-tag">PyTorch</div>
          <div className="skill-tag">Scikit-learn</div>
          <div className="skill-tag">Pandas</div>
          <div className="skill-tag">NumPy</div>
          <div className="skill-tag">Hugging Face</div>
          <div className="skill-tag">LangChain</div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
