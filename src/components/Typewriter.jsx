import { useState, useEffect } from "react";

function Typewriter({ text, delay = 60 }) {
  const [chars, setChars] = useState(0);
  useEffect(() => {
    setChars(0);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setChars(i);
      if (i >= text.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);
  return (
    <>
      {text.slice(0, chars).split("\n").map((line, i) => (
        <span key={i}>{i > 0 && <br />}{line}</span>
      ))}
      <span className="inline-block w-[2px] h-[0.85em] bg-[var(--text)] ml-1 align-middle animate-cursorBlink" />
    </>
  );
}

export default Typewriter;
