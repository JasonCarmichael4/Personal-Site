import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { GiCow } from "react-icons/gi";

const codeSnippets = [
  { lang: "Python", code: "print('hello, world')" },
  { lang: "JavaScript", code: "console.log('hello, world');" },
  { lang: "C++", code: "std::cout << \"hello, world\";" },
  { lang: "Java", code: "System.out.println(\"hello, world\");" },
  { lang: "C", code: "printf(\"hello, world\");" },
];

export default function FooterEarth() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // rotate languages
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  // scramble effect
  useEffect(() => {
    setAnimate(true);
    const t = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(t);
  }, [index]);

  const snippet = codeSnippets[index];

  return (
    <footer className="footer-earth text-light">
      <Container fluid className="p-0 position-relative">

        {/* UFO */}
        <div className="ufo">
          <div className="ufo-top"></div>
        </div>

        {/* Beam */}
        <div className="ufo-beam"></div>

        {/* Cow */}
        <GiCow className="cow-icon" />

        {/* Rotating speech bubble */}
        <div className={"speech-bubble " + (animate ? "alien-code-change" : "")}>
          {snippet.code}
        </div>

        {/* Ground layers */}
        <div className="earth-green"></div>
        <div className="earth-brown"></div>

        <small className="footer-copy">&copy; 2025 Jason Carmichael</small>
      </Container>
    </footer>
  );
}
