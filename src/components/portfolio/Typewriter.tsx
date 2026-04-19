import { useEffect, useState } from "react";

export const Typewriter = ({ words, className = "" }: { words: string[]; className?: string }) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === current) setTimeout(() => setDeleting(true), 1400);
      else if (deleting && next === "") {
        setDeleting(false);
        setI((n) => n + 1);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] -translate-y-[-2px] bg-accent align-middle animate-blink" />
    </span>
  );
};
