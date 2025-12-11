import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

export default function HobbiesSection() {
  return (
    <section aria-labelledby="hobbies-heading">
      <Card className="section-card h-100">
        <Card.Body>
          <h2 id="hobbies-heading" className="h4 mb-3">
            Hobbies
          </h2>
          <Row className="g-3">
            <Col md={4}>
              <Card bg="transparent" border="secondary" className="h-100">
                <Card.Body>
                  <Card.Title as="h3" className="h5">
                    Drums
                  </Card.Title>
                  <Card.Text>
                    I love playing along to my favorite songs on my electric drum kit. I'd like to get an acoustic one some day, but I'd like my neighbors to not hate me. I don't make any music, but you can see what I've been listening to below
                  </Card.Text>
                  <Button
                    variant="outline-info"
                    size="sm"
                    href="https://open.spotify.com/user/tztd1f7s2i3js58o7qwtwmb64"
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
                    Multi-day hikes, months-long backpacking trips, long ridgelines, and the kind of star
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
                    I've been engrossed in sandbox game worlds since I was a kid, and I spent most of my game-time building these worlds in Minecrat. I also love survival horror, co-op, party games, and any combination of the like
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </section>
  );
}
