import { useState, useEffect } from "react";

function renderLines(t) {
  return t.split("\n").map((line, i) => (
    <span key={i}>{i > 0 && <br />}{line}</span>
  ));
}

function TypewriterInner({ text, delay }) {
  const [chars, setChars] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setChars(i);
      if (i >= text.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  const isComplete = chars >= text.length;

  return (
    <span className="relative inline-block">
      <span className="invisible" aria-hidden="true">
        {renderLines(text)}
        <span className="inline-block w-[2px] h-[0.85em] ml-1" />
      </span>
      <span className="absolute inset-0">
        {renderLines(text.slice(0, chars))}
        {isComplete && (
          <span className="inline-block w-[2px] h-[0.85em] bg-[var(--text)] ml-1 align-middle animate-cursorBlink" />
        )}
      </span>
    </span>
  );
}

function Typewriter({ text, delay = 60 }) {
  return <TypewriterInner key={text} text={text} delay={delay} />;
}

export default Typewriter;
