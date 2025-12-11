import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import ProjectsSolarSystem from './ProjectsSolarSystem.jsx';
import WorkHistory from './WorkHistory.jsx';

export default function ProjectsPage() {
  return (
    <section aria-labelledby="projects-heading" className="page-section">
      <h1 id="projects-heading" className="mb-3">
        Projects &amp; Tech Stack
      </h1>

      <Row className="g-4">
        <Col lg={6}>
          <Card className="section-card h-100">
            <Card.Body>
              <Card.Title as="h2" className="h4 mb-3">
                Language Solar System
              </Card.Title>
              <Card.Text>
                Each star in my sky has its own orbiting tools. JavaScript sits
                at the center, with React as its moon, and other languages
                forming planets in a tiny solar system.
              </Card.Text>
              <ProjectsSolarSystem />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="section-card h-100">
            <Card.Body>
              <Card.Title as="h2" className="h4 mb-3">
                Work History
              </Card.Title>
              <Card.Text>
                A small rocket hops between planets representing phases in my
                developer journey.
              </Card.Text>
              <WorkHistory/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}
