import React from 'react';
import { Card } from 'react-bootstrap';

export default function SpecimenInfoSection() {
  return (
    <section aria-labelledby="specimen-heading">
      <Card className="section-card h-100">
        <Card.Body>
          <h2 id="specimen-heading" className="h4 mb-3">
            Specimen Info
          </h2>
          <dl>
            <dt className="fw-semibold">Name</dt>
            <dd>Jason Raymond Carmichael</dd>

            <dt className="fw-semibold">Date of Birth</dt>
            <dd>April 4, 2006</dd>

            <dt className="fw-semibold">Current Residence</dt>
            <dd>Madison, Wisconsin</dd>

            <dt className="fw-semibold">Home</dt>
            <dd>DC Metro Area, Virginia, USA, Earth, Sol System, Orion Spur, Sagittarius–Carina Arm, Milky Way Galaxy, Local Group, Laniakea Supercluster, Oberservable Universe</dd>

            <dt className="fw-semibold">Favorite Food</dt>
            <dd>Steak with potato</dd>

            <dt className="fw-semibold">Favorite Movie</dt>
            <dd>Coraline</dd>

            <dt className="fw-semibold">Favorite Show</dt>
            <dd>Lord of the Mysteries</dd>

            <dt className="fw-semibold">Favorite Music Artists</dt>
            <dd>
              Smashing Pumpkins, Elliott Smith, Radiohead, Deftones, Pierce the
              Veil
            </dd>
          </dl>
          <h3 className="h5 mt-3">Early Life Notes</h3>
          <ul>
            <li>Eagle Scout</li>
            <li>Chess club president</li>
            <li>VEX robotics team member</li>
          </ul>
        </Card.Body>
      </Card>
    </section>
  );
}
