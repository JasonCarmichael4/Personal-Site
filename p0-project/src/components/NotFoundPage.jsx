import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section aria-labelledby="not-found-heading" className="text-center py-5">
      <h1 id="not-found-heading" className="mb-3">
        404: Lost in Space
      </h1>
      <p className="mb-4">
        This constellation doesn&apos;t exist yet. Let&apos;s head back to the
        main star.
      </p>
      <Button as={Link} to="/" variant="primary">
        Return Home
      </Button>
    </section>
  );
}
