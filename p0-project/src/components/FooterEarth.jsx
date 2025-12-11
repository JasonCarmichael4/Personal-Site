import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const codeSnippets = [
  { lang: 'Python', code: "print('hello, earth')" },
  { lang: 'JavaScript', code: "console.log('hello, earth');" },
  { lang: 'C++', code: 'std::cout << "hello, earth";' },
  { lang: 'Java', code: 'System.out.println("hello, earth");' },
  { lang: 'C', code: 'printf("hello, earth");' },
];

export default function FooterEarth() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // cycle through snippets
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  // trigger scramble animation on change
  useEffect(() => {
    setAnimate(true);
    const t = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(t);
  }, [index]);

  const snippet = codeSnippets[index];

  return (
    <footer className="footer-earth text-center text-light mt-auto">
      <Container>
        <div
          className="earth-scene"
          role="img"
          aria-label="Illustration of Earth with a UFO beaming up a small figure."
        >
          <div className="ufo">
            <div className="ufo-beam" />
          </div>
          <div className="earth-planet">
            <div className="earth-landmass" />
            <div className="abducted-figure" />
          </div>
        </div>

        <div
          className={
            'alien-code mb-2 ' + (animate ? 'alien-code-change' : '')
          }
          aria-label={`Alien saying hello earth in ${snippet.lang}.`}
        >
          <span className="language-label">{snippet.lang}</span>
          <span>{snippet.code}</span>
        </div>
        <small className="text-muted">&copy; 2025 Jason Carmichael</small>
      </Container>
    </footer>
  );
}
