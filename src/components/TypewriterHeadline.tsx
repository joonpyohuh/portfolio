"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  lines: string[];
  className?: string;
  charDelayMs?: number;
  onComplete?: () => void;
};

export default function TypewriterHeadline({
  lines,
  className = "",
  charDelayMs = 52,
  onComplete,
}: Props) {
  const reduceMotion = useReducedMotion();
  const fullText = lines.join("\n");
  const [count, setCount] = useState(() => (reduceMotion ? fullText.length : 0));
  const [ready, setReady] = useState(reduceMotion ?? false);
  const completedRef = useRef(false);

  useEffect(() => {
    completedRef.current = false;
    if (reduceMotion) {
      setCount(fullText.length);
      setReady(true);
      onComplete?.();
      return;
    }
    setCount(0);
    setReady(false);
    const id = window.setTimeout(() => setReady(true), 450);
    return () => window.clearTimeout(id);
  }, [fullText, reduceMotion, onComplete]);

  useEffect(() => {
    if (!ready || reduceMotion || count >= fullText.length) return;
    const id = window.setTimeout(() => setCount((c) => c + 1), charDelayMs);
    return () => window.clearTimeout(id);
  }, [count, fullText.length, ready, reduceMotion, charDelayMs]);

  useEffect(() => {
    if (count >= fullText.length && ready && !completedRef.current) {
      completedRef.current = true;
      onComplete?.();
    }
  }, [count, fullText.length, ready, onComplete]);

  const displayed = fullText.slice(0, count);
  const displayLines = displayed.split("\n");
  const done = count >= fullText.length;
  const showCursor = ready && !reduceMotion && !done;

  return (
    <h1
      className={className}
      style={{ lineHeight: 1.12 }}
      aria-label={lines.filter(Boolean).join(" ")}
    >
      {displayLines.map((line, i) => (
        <span
          key={i}
          className={line === "" ? "block h-6 md:h-10" : "block"}
          aria-hidden="true"
        >
          {line}
          {showCursor && i === displayLines.length - 1 && (
            <span className="inline-block w-[2px] h-[0.85em] ml-0.5 align-[-0.08em] bg-ink/70 animate-pulse" />
          )}
        </span>
      ))}
    </h1>
  );
}
