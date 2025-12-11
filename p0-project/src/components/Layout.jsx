import React from 'react';
import { Container } from 'react-bootstrap';
import SiteNavbar from './SiteNavbar.jsx';
import FooterEarth from './FooterEarth.jsx';

export default function Layout({ children }) {
  return (
    <div className="app-root">
      <div className="star-twinkles" aria-hidden="true"></div>

      <SiteNavbar />
      <main className="flex-grow-1 py-4">
        <Container>{children}</Container>
      </main>
      <FooterEarth />
    </div>
  );
}
