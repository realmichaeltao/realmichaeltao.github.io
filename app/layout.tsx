import React, { ReactNode } from 'react';
import './globals.css';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body>
      <Header />
      <main>
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
