import React from 'react';
import HeroSection from './HeroSection.jsx';
import ConstellationSection from './ConstellationSection.jsx';
import SocialLinksBar from './SocialLinksBar.jsx';

export default function HomePage() {
  return (
    <>
        <HeroSection />

        <ConstellationSection />

        <div className="links-wrapper mt-4">
            <SocialLinksBar />
        </div>

    </>
  );
}
