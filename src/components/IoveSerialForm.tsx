"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  formatSerial,
  IOVE_CODENAME,
  serialFromEmail,
  type IoveContent,
} from "@/lib/iove-content";

const STORAGE_KEY = "iove-serial";

type Props = {
  copy: IoveContent["serial"];
};

export default function IoveSerialForm({ copy }: Props) {
  const [email, setEmail] = useState("");
  const [serial, setSerial] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const n = parseInt(saved, 10);
        if (n >= 1 && n <= 500) {
          setSerial(n);
          setSubmitted(true);
        }
      }
    } catch {
      /* ignore */
    }
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) return;
    const n = serialFromEmail(trimmed);
    setSerial(n);
    setSubmitted(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(n));
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="max-w-md">
      <p className="meta mb-6 text-ink2">{copy.prompt}</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="underline-input font-mono text-sm"
          placeholder={copy.placeholder}
          aria-label="Email"
          autoComplete="email"
        />
        <button
          type="submit"
          className="meta text-ink hover:text-ink2 transition-colors duration-300 ease-soft"
        >
          {copy.cta} →
        </button>
      </form>
      <p className="mt-4 text-[13px] text-ink2/80">{copy.hint}</p>

      {serial !== null && submitted && (
        <div className="mt-10">
          <p className="font-mono text-h3 text-ink tabular-nums">{formatSerial(serial)}</p>
          <p className="mt-6 text-body text-ink2" style={{ lineHeight: 1.9 }}>
            {copy.result(serial)}
          </p>
          <p className="mt-4 meta text-metal">{IOVE_CODENAME}</p>
        </div>
      )}
    </div>
  );
}
