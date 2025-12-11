import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const groups = [
  {
    id: 'projects',
    title: 'Projects Constellation',
    text: 'A cluster of stars forming the outline of SunnyStudy, portfolio projects, and systems work.',
  },
  {
    id: 'about',
    title: 'About Me Constellation',
    text: 'Stars traced into early-life achievements: Eagle Scout, chess club president, VEX robotics.',
  },
  {
    id: 'contact',
    title: 'Contact Constellation',
    text: 'A beacon star guiding messages from Earth to my inbox.',
  },
];

export default function ConstellationSection() {
  return (
    <section aria-labelledby="constellations-heading" className="mb-4">
      <h2 id="constellations-heading" className="mb-3">
        Constellations of My Work
      </h2>
      <Row className="g-4">
        {groups.map((group) => (
          <Col md={4} key={group.id}>
            <Card className="section-card h-100">
              <Card.Body>
                <Card.Title as="h3" className="h5">
                  {group.title}
                </Card.Title>
                <Card.Text>{group.text}</Card.Text>
                <div
                  aria-hidden="true"
                  className="mt-3"
                  style={{
                    position: 'relative',
                    height: '80px',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '14%',
                      left: '10%',
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '40%',
                      left: '40%',
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '70%',
                      left: '75%',
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                    }}
                  />
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 60"
                    preserveAspectRatio="none"
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <polyline
                      points="15,10 45,30 80,50"
                      fill="none"
                      stroke="#9fd3ff"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  </svg>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
