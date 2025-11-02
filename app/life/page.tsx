import React from 'react';

const Life = () => (
  <div className="section">
    <div className="container">
      <h2 className="section-title">Life & Interests</h2>
      
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3>🌟 About My Journey</h3>
        <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
          Beyond coding and building systems, I'm passionate about continuous learning and exploring new technologies. 
          Currently pursuing my Master's at Carnegie Mellon University, I'm constantly amazed by the intersection of 
          software engineering, artificial intelligence, and cloud computing.
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>💡 Interests & Hobbies</h3>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '2' }}>
            <li>🤖 Machine Learning & AI Research</li>
            <li>☁️ Cloud Architecture & DevOps</li>
            <li>📚 Reading Tech Blogs & Documentation</li>
            <li>🏗️ Building Side Projects</li>
            <li>🎮 Gaming & Problem Solving</li>
            <li>🌍 Exploring New Technologies</li>
          </ul>
        </div>

        <div className="card">
          <h3>🎯 Current Focus</h3>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '2' }}>
            <li>Mastering Software Engineering principles at CMU</li>
            <li>Deep diving into Cloud Computing & Distributed Systems</li>
            <li>Building scalable web applications</li>
            <li>Contributing to open-source projects</li>
            <li>Staying updated with the latest in AI/ML</li>
          </ul>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3>🌏 Experience Across Borders</h3>
        <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
          Having worked in both the United States and China, I've gained valuable insights into different tech cultures 
          and approaches to software development. From my time at Alibaba Cloud in Nanjing to internships in San Francisco 
          and Silicon Valley, these experiences have shaped my perspective on building global, scalable solutions.
        </p>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3>💬 Let's Connect!</h3>
        <p style={{ marginTop: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          I'm always excited to connect with fellow developers, discuss new technologies, or collaborate on interesting projects. 
          Feel free to reach out!
        </p>
        <div className="contact-links" style={{ justifyContent: 'flex-start' }}>
          <a href="mailto:mtao3@andrew.cmu.edu" className="contact-link">
            📧 Email Me
          </a>
          <a href="https://linkedin.com/in/realmichaeltao/" target="_blank" rel="noopener noreferrer" className="contact-link">
            💼 LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Life;
