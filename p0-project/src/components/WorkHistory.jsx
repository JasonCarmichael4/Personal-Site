import React from "react";
import { Container } from "react-bootstrap";
import { BsBriefcaseFill } from "react-icons/bs";

export default function WorkHistory() {
  const jobs = [
    {
      title: "SunnyStudy — Project Lead",
      description:
        "Leading a team developing a browser extension that improves student study workflows."
    },
    {
      title: "Software & CS Coursework",
      description:
        "Systems programming, data science, machine learning, full-stack engineering, and algorithms."
    },
    {
      title: "Personal Engineering Projects",
      description:
        "Minecraft simulation builds, UI engineering, data tools, and creative systems."
    }
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-3 d-flex align-items-center gap-2 text-dark">
        <BsBriefcaseFill size={28} />
        Work History
      </h2>

      <ul className="list-unstyled">
        {jobs.map((job, index) => (
          <li key={index} className="mb-4">
            <h5 className="fw-bold text-dark">{job.title}</h5>
            <p className="text-secondary">{job.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
