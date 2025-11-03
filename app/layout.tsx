'use client';

import React, { ReactNode } from 'react';
import './globals.css';
import Header from './Header';
import { usePathname } from 'next/navigation';

type LayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#0f172a" />
        <title>Michael Tao</title>
        <meta name="description" content="Portfolio website of Michael Tao, Software Engineer and AI Enthusiast at Carnegie Mellon University" />
      </head>
      <body>
        <Header />
        <main className={isHomePage ? 'home-page' : ''}>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
