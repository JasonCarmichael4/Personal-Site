import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

export default function HobbiesSection() {
  return (
    <section aria-labelledby="hobbies-heading">
      <Card className="section-card h-100">
        <Card.Body>
          <h2 id="hobbies-heading" className="h4 mb-3">
            Hobbies &amp; Side Quests
          </h2>
          <Row className="g-3">
            <Col md={4}>
              <Card bg="transparent" border="secondary" className="h-100">
                <Card.Body>
                  <Card.Title as="h3" className="h5">
                    Drums
                  </Card.Title>
                  <Card.Text>
                    I love building complex rhythms and playing along to
                    everything from math rock to emo.
                  </Card.Text>
                  <Button
                    variant="outline-info"
                    size="sm"
                    href="https://open.spotify.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Spotify
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="transparent" border="secondary" className="h-100">
                <Card.Body>
                  <Card.Title as="h3" className="h5">
                    Backpacking
                  </Card.Title>
                  <Card.Text>
                    Multi-day trips, long ridgelines, and the kind of star
                    fields this site is trying to imitate.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="transparent" border="secondary" className="h-100">
                <Card.Body>
                  <Card.Title as="h3" className="h5">
                    Games
                  </Card.Title>
                  <Card.Text>
                    From sprawling RPGs to puzzle games and plenty of Minecraft
                    worlds.
                  </Card.Text>
                  <Button
                    variant="outline-info"
                    size="sm"
                    href="https://store.steampowered.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Steam
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </section>
  );
}
