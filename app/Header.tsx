"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMenu}></div>
        )}
        <ul className={isMenuOpen ? 'mobile-menu-open' : ''}>
          <li>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link href="/projects" onClick={closeMenu}>Projects</Link>
          </li>
          <li>
            <Link href="/internships" onClick={closeMenu}>Internships</Link>
          </li>
          <li>
            <Link href="/life" onClick={closeMenu}>Life</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
