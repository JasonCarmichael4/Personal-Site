import React from 'react';
import SiteNavbar from './SiteNavbar';
import FooterEarth from './FooterEarth';

function generateStars(n = 250) {
  return [...Array(n)].map((_, i) => ({
    id: i,
    top: Math.random() * 100 + 'vh',
    left: Math.random() * 100 + 'vw',
    delay: Math.random() * 4 + 's'
  }));
}

export default function Layout({ children }) {
  const stars = generateStars();

  return (
    <>
      {/* STARFIELD */}
      <div className="star-twinkles">
        {stars.map(s => (
          <div
            key={s.id}
            className="star"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay
            }}
          />
        ))}
      </div>

      <SiteNavbar />

      <main>{children}</main>

      <FooterEarth />
    </>
  );
}
