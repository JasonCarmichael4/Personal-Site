import React from 'react';

export default function ProjectsSolarSystem() {
  return (
    <div
      className="solar-system"
      role="img"
      aria-label="Solar system diagram of programming languages I know with React orbiting JavaScript."
    >
      <div className="solar-orbit solar-orbit--outer" />
      <div className="solar-orbit solar-orbit--inner" />
      <div className="solar-star">JS Core</div>

      <div className="solar-planet solar-planet--js">
        JS
        <div className="solar-moon-react">React</div>
      </div>

      <div className="solar-planet solar-planet--python">Python</div>
      <div className="solar-planet solar-planet--java">Java</div>
      <div className="solar-planet solar-planet--cpp">C++</div>
    </div>
  );
}
