import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ConstellationSection.css';

export default function ConstellationSection() {
  const groups = [
    {
      title: 'Projects Constellation',
      text: 'A cluster of stars forming the outline of SunnyStudy, portfolio projects, and system work.',
      link: '/projects',
    },
    {
      title: 'About Me Constellation',
      text: 'Stars traced into early-life achievements: Eagle Scout, chess club president, VEX robotics.',
      link: '/about',
    },
    {
      title: 'Contact Constellation',
      text: 'A beacon star guiding messages from Earth to my inbox.',
      link: '/contact',
    },
  ];

  return (
      <Container className="mt-5 text-center">
  <h2 className="mb-4 constellations-heading">Constellations of My Work</h2>


      <Row className="g-4">
        {groups.map((group, idx) => (
          <Col key={idx} md={4}>
            <Link to={group.link} className="text-decoration-none constellation-card-link">
              <Card className="bg-light text-dark shadow-sm h-100 constellation-card">
                <Card.Body>
                  <Card.Title>{group.title}</Card.Title>
                  <Card.Text>{group.text}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
