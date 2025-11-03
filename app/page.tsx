import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

const Home = () => (
  <div className="hero">
    <div className="hero-content">
      <div className="profile-image-container">
        <Image
          src="/images/Profile.JPG"
          alt="Michael Tao"
          width={180}
          height={180}
          className="profile-image"
          priority
          sizes="(max-width: 480px) 150px, 180px"
        />
      </div>
      <h1>Michael Tao</h1>
      <p className="subtitle">Software & AI Engineer</p>
      <p className="description">
        Master&apos;s student at Carnegie Mellon University specializing in Software Engineering. 
        Passionate about building scalable systems, machine learning, and cloud infrastructure.
      </p>
      <div className="btn-group">
        <Link href="/projects" className="btn btn-primary">
          View My Work
        </Link>
        <Link href="/internships" className="btn btn-secondary">
          View Internships
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
      <div className="home-footer">
        <p>Proudly built by myself using Next.js, React, TypeScript & Tailwind CSS</p>
      </div>
    </div>
  </div>
);

export default Home;
