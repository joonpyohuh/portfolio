"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/**
 * Hero — statement of intent.
 * No portrait, no name H1. Texture-first headline that signals
 * brand-marketing positioning toward Korean indie designer houses.
 */
export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  return (
    <section className="container-page pt-16 md:pt-28 pb-section-m md:pb-section">
      <div className="container-prose-wide relative">
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="meta mb-14 md:mb-20"
        >
          {t.hero.metaName}
        </motion.p>

        <motion.h1
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-display text-h1-m md:text-h1-d text-ink leading-[1.12] max-w-[18ch]"
        >
          {t.hero.headline.map((line, i) =>
            line === "" ? (
              <span key={`gap-${i}`} className="block h-6 md:h-10" />
            ) : (
              <span key={`${line}-${i}`} className="block">
                {line}
              </span>
            ),
          )}
        </motion.h1>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-16 md:mt-24 max-w-prose space-y-2 text-body text-ink2"
          style={{ lineHeight: 1.9 }}
        >
          {t.hero.sub.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-24 md:mt-32 flex items-center justify-end gap-3"
        >
          <p className="meta text-ink2">{t.hero.scroll}</p>
          <span aria-hidden className="meta text-ink">↓</span>
        </motion.div>
      </div>
    </section>
  );
}
