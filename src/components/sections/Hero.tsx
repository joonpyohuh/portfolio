"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/**
 * Hero — above the fold.
 * Signature flaw: the second "n" in "Junpyo" uses .drift baseline.
 */
export default function Hero() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();
  const nameParts = t.hero.name.split("");

  return (
    <section className="container-page pt-16 md:pt-28 pb-section-m md:pb-section">
      <div className="container-prose-wide">
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="meta mb-10 md:mb-14"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-10"
        >
          <div className="shrink-0">
            <Image
              src="/profile.png"
              alt={t.hero.nameKo}
              width={112}
              height={140}
              priority
              className="h-[120px] w-[96px] sm:h-[140px] sm:w-[112px] object-cover object-top border border-line bg-cold"
            />
          </div>

          <div className="min-w-0">
            <h1 className="font-display text-h1-m md:text-h1-d text-ink leading-[1.02]">
              {nameParts.map((ch, i) => (
                <span key={`${ch}-${i}`} className={i === 2 ? "drift" : ""}>
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </h1>
            <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
              <p className="text-h3 text-ink2">{t.hero.nameKo}</p>
              <span className="hidden md:inline text-line">·</span>
              <p className="text-h3 text-ink2">{t.hero.role}</p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-14 md:mt-20 max-w-prose text-body text-ink/90"
        >
          {t.hero.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 md:mt-28 flex items-center gap-3"
        >
          <span className="block h-px w-10 bg-ink2" />
          <p className="meta text-ink2">{lang === "ko" ? "스크롤" : "Scroll"}</p>
        </motion.div>
      </div>
    </section>
  );
}
