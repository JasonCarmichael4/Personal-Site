import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section aria-labelledby="home-heading" className="mb-5">
      <Row className="align-items-center g-4">
        <Col md={7}>
          <h1 id="home-heading" className="fw-bold">
            Welcome to My Space :)
          </h1>
          <h2 className="h4 text-info mb-3">
            Jason Carmichael &mdash; Full-Stack &amp; ML Explorer
          </h2>
          <p className="lead">
            I&apos;m an aspiring full-stack developer with a machine learning focus,
            pursuing a B.S. in Computer Science and Data Science at the University
            of Wisconsin&ndash;Madison. I plan to graduate in 2026 and move to
            California for a Master&apos;s in CS.
          </p>
          <p>
            Right now I&apos;m leading a team building{' '}
            <span className="fw-semibold">SunnyStudy</span>, a browser extension
            that turns studying into a brighter experience.
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
            className="starfield-card"
            role="img"
            aria-label="Stylized constellation representing navigation to projects, about, and contact."
          />
        </Col>
      </Row>
    </section>
  );
}
