import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [replyEmail, setReplyEmail] = useState('');
  const [message, setMessage] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio message from ${name || 'visitor'}`;
    const lines = [
      'Hi Jason,',
      '',
      `Name: ${name || 'Anonymous visitor'}`,
      `Reply email: ${replyEmail || 'not provided'}`,
      '',
      message || '(no message body provided)',
      '',
      '-- sent from your space portfolio',
    ];
    const mailtoUrl = `mailto:Jaseque999@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join('\n'))}`;

    window.location.href = mailtoUrl;
    setInfo(
      'Opening your email app… if nothing appears, you can email me at Jaseque999@gmail.com.'
    );
  };

  return (
    <Card className="section-card">
      <Card.Body>
        <h2 className="h4 mb-3">Beam a Message</h2>
        <p className="mb-3">
          This form will open your email client and pre-fill a message to me at{' '}
          <strong>Jaseque999@gmail.com</strong>.
        </p>

        {info && (
          <Alert variant="info" className="py-2">
            {info}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="contact-name">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contact-email">
            <Form.Label>Your email</Form.Label>
            <Form.Control
              type="email"
              value={replyEmail}
              onChange={(e) => setReplyEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contact-message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Send Email
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
