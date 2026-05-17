"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/**
 * Hero — above the fold.
 *
 * Signature flaw: in "Junpyo Heo", the letter "n" carries a slightly
 * lifted baseline (.drift). It looks accidental. It isn't.
 */
export default function Hero() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();

  // Render the english name with one drifting glyph.
  const nameParts = t.hero.name.split(""); // "Junpyo Heo"

  return (
    <section className="container-page pt-16 md:pt-28 pb-section-m md:pb-section">
      <div className="container-prose-wide">
        {/* Eyebrow */}
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="meta mb-10 md:mb-14"
        >
          {t.hero.eyebrow}
        </motion.p>

        {/* Name (display) */}
        <motion.h1
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-display text-h1-m md:text-h1-d text-ink leading-[1.02]"
        >
          {nameParts.map((ch, i) => {
            // Drift the second 'n' in "Junpyo" — index 2.
            const isDrift = i === 2;
            return (
              <span
                key={`${ch}-${i}`}
                className={isDrift ? "drift" : ""}
                aria-hidden={false}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            );
          })}
        </motion.h1>

        {/* Korean name + role */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-6 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6"
        >
          <p className="text-h3 text-ink2">{t.hero.nameKo}</p>
          <span className="hidden md:inline text-line">·</span>
          <p className="text-h3 text-ink2">{t.hero.role}</p>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-14 md:mt-20 max-w-prose text-body text-ink/90"
        >
          {t.hero.intro}
        </motion.p>

        {/* Quiet scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 md:mt-28 flex items-center gap-3"
        >
          <span className="block h-px w-10 bg-ink2" />
          <p className="meta text-ink2">
            {lang === "ko" ? "스크롤" : "Scroll"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
