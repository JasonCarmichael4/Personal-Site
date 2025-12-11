import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm.jsx';
import SocialLinksBar from './SocialLinksBar.jsx';

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-heading" className="page-section">
      <h1 id="contact-heading" className="mb-3">
        Contact
      </h1>

      <Row className="g-4">
        <Col lg={7}>
          <ContactForm />
        </Col>
        <Col lg={5}>
          <SocialLinksBar />
        </Col>
      </Row>
    </section>
  );
}
