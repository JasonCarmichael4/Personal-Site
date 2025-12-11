import React from 'react';
import { Card, Stack } from 'react-bootstrap';

export default function SocialLinksBar({ className = '' }) {
  const links = [
    { id: 'github', label: 'GitHub', href: '#', text: 'GitHub' },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/jason_carmichael4/',
      text: 'Instagram',
    },
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:Jaseque999@gmail.com',
      text: 'Email',
    },
    { id: 'resume', label: 'Resume', href: '#', text: 'Resume (coming soon)' },
  ];

  return (
    <Card className={`section-card ${className}`}>
      <Card.Body>
        <h2 className="h4 mb-3">Links</h2>
        <p className="mb-3">
          Find me across the internet (links are placeholders you can swap for your
          real profiles, Instagram is already set).
        </p>
        <Stack
          direction="horizontal"
          gap={2}
          className="flex-wrap social-links"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-label={link.label}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span>{link.text}</span>
            </a>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
}
