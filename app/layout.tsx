import React, { ReactNode } from 'react';
import './globals.css';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: 'Michael Tao - Software Engineer & Data Scientist',
  description: 'Portfolio website of Michael Tao, Software Engineer and Data Scientist at Carnegie Mellon University',
  keywords: 'Michael Tao, Software Engineer, Data Scientist, CMU, Carnegie Mellon, Portfolio',
};

const RootLayout = ({ children }: LayoutProps) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <Header />
      <main>
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
