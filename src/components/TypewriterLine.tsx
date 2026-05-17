"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  charDelayMs?: number;
};

export default function TypewriterLine({
  text,
  className = "",
  charDelayMs = 48,
}: Props) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const [count, setCount] = useState(() => (reduceMotion ? text.length : 0));

  useEffect(() => {
    if (reduceMotion) {
      setCount(text.length);
      return;
    }
    if (!inView || count >= text.length) return;
    const id = window.setTimeout(() => setCount((c) => c + 1), charDelayMs);
    return () => window.clearTimeout(id);
  }, [count, text.length, inView, reduceMotion, charDelayMs]);

  useEffect(() => {
    setCount(reduceMotion ? text.length : 0);
  }, [text, reduceMotion]);

  const done = count >= text.length;

  return (
    <p
      ref={ref}
      className={`whitespace-nowrap text-body text-ink/85 ${className}`}
      style={{ lineHeight: 1.9 }}
      aria-label={text}
    >
      <span aria-hidden="true">{text.slice(0, count)}</span>
      {!reduceMotion && inView && !done && (
        <span
          aria-hidden="true"
          className="inline-block w-px h-[1em] ml-0.5 align-[-0.1em] bg-ink/70 animate-pulse"
        />
      )}
    </p>
  );
}
