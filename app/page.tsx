import React from 'react';
import Link from 'next/link';
import './globals.css';

const Home = () => (
  <div className="hero">
    <div className="hero-content">
      <h1>Michael Tao</h1>
      <p className="subtitle">Software Engineer & Data Scientist</p>
      <p className="description">
        Master's student at Carnegie Mellon University specializing in Software Engineering. 
        Passionate about building scalable systems, machine learning, and cloud infrastructure.
      </p>
      <div className="btn-group">
        <Link href="/projects" className="btn btn-primary">
          View My Work
        </Link>
        <Link href="/resume" className="btn btn-secondary">
          View Resume
        </Link>
      </div>
      <div className="contact-links">
        <a href="mailto:mtao3@andrew.cmu.edu" className="contact-link">
          📧 mtao3@andrew.cmu.edu
        </a>
        <a href="https://linkedin.com/in/realmichaeltao/" target="_blank" rel="noopener noreferrer" className="contact-link">
          💼 LinkedIn
        </a>
        <a href="tel:+15107103025" className="contact-link">
          📱 (510) 710-3025
        </a>
      </div>
    </div>
  </div>
);

export default Home;
