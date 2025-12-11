import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HobbiesSection from './HobbiesSection.jsx';
import SpecimenInfoSection from './SpecimenInfoSection.jsx';

export default function AboutPage() {
  return (
    <section aria-labelledby="about-heading">
      <h1 id="about-heading" className="mb-3">
        About Me
      </h1>
      <Row className="g-4">
        <Col lg={7}>
          <HobbiesSection />
        </Col>
        <Col lg={5}>
          <SpecimenInfoSection />
        </Col>
      </Row>
    </section>
  );
}
