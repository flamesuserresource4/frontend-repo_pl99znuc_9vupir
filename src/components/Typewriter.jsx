import { useEffect, useState } from 'react';

export default function Typewriter({ words = [], speed = 100, pause = 1200, className = '' }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[index % words.length];
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));

      if (!deleting && subIndex === currentWord.length) {
        setDeleting(true);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, speed]);

  useEffect(() => {
    if (!words.length) return;
    if (!deleting && subIndex === words[index % words.length].length) {
      const pauseTimer = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(pauseTimer);
    }
  }, [deleting, subIndex, index, words, pause]);

  const text = words[index % words.length]?.substring(0, subIndex) || '';

  return (
    <span className={className}>
      {text}
      <span className="ml-1 inline-block w-1 h-6 bg-current align-[-2px] animate-pulse" />
    </span>
  );
}
