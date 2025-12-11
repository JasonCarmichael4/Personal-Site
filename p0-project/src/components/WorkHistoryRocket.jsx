import React from 'react';
import { ListGroup } from 'react-bootstrap';

const stops = [
  {
    title: 'Coming soon(ish)!',
    time: 'I graduate in December 2026',
    description:
      'I\'ll be pursuing a masters in CS afterwards so, I lied actually',
  },
];

export default function WorkHistoryRocket() {
  return (
    <div className="rocket-timeline" aria-label="Timeline of my work experience.">
      <div className="rocket" aria-hidden="true" />
      <ListGroup variant="flush">
        {stops.map((stop) => (
          <ListGroup.Item
            key={stop.title}
            className="bg-transparent text-light border-0 ps-0"
          >
            <h3 className="h5 mb-1">{stop.title}</h3>
            <p className="mb-1 text-info">{stop.time}</p>
            <p className="mb-0">{stop.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
