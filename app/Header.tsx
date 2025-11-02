"use client";

import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/life">Life</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
