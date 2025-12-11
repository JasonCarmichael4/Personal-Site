import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-wrapper" aria-labelledby="home-heading">
      <div className="hero-content container">
        <Row className="align-items-center g-4">
          <Col md={7}>
            <h1 id="home-heading" className="fw-bold hero-title">
              Welcome to My Space :)
            </h1>

            <h2 className="h4 text-info mb-3 hero-subtitle">
              Jason Carmichael  |  Full-Stack & ML Student
            </h2>

            <p className="lead hero-lead">
              I’m an aspiring full-stack developer with a machine learning focus,
              pursuing a B.S. in Computer Science and Data Science at the University
              of Wisconsin–Madison.
            </p>

            <p className="hero-desc">
              Right now I’m leading a team building{' '}
              <span className="fw-semibold">SunnyStudy</span>, a browser
              extension that turns studying into a brighter experience.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-3">
              <Button as={Link} to="/projects" variant="primary">
                Explore Projects
              </Button>

              <Button as={Link} to="/about" variant="outline-light">
                Learn About Me
              </Button>
            </div>
          </Col>

          <Col md={5} className="text-center">
            <div
              className="starfield-card hero-card"
              role="img"
              aria-label="Stylized constellation representing navigation."
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
