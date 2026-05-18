"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import TypewriterHeadline from "@/components/TypewriterHeadline";
import { useLang } from "@/lib/i18n";
import { useState } from "react";

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [headlineDone, setHeadlineDone] = useState(reduce ?? false);

  return (
    <section className="container-page pt-16 md:pt-28 pb-section-m md:pb-section">
      <div className="container-prose-wide relative">
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="meta mb-12 md:mb-16"
        >
          {t.hero.metaName}
        </motion.p>

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-14 lg:gap-16">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
            className="shrink-0"
          >
            <Image
              src="/profile.png"
              alt="Junpyo Heo"
              width={128}
              height={160}
              priority
              className="h-[140px] w-[112px] md:h-[168px] md:w-[134px] object-cover object-top border border-line bg-cold"
            />
          </motion.div>

          <div className="min-w-0 flex-1">
            <TypewriterHeadline
              lines={t.hero.headline}
              className="font-display text-h1-m md:text-h2-d text-ink max-w-[20ch]"
              charDelayMs={48}
              onComplete={() => setHeadlineDone(true)}
            />

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={
                headlineDone
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 8 }
              }
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="mt-12 md:mt-16 max-w-prose space-y-2 text-body text-ink2"
              style={{ lineHeight: 1.9 }}
            >
              {t.hero.sub.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={
            headlineDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
          }
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-16 md:mt-20 pt-12 border-t border-line"
        >
          <Link
            href="/project/future-brand"
            className="group flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8"
          >
            <div className="shrink-0 bg-ink p-4 w-fit">
              <Image
                src="/projects/iove-logo.png"
                alt="IOVE"
                width={72}
                height={72}
                className="h-14 w-14 md:h-[72px] md:w-[72px] object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="meta text-metal mb-2">{t.hero.iove.eyebrow}</p>
              <p className="text-h3 text-ink">{t.hero.iove.title}</p>
              <p className="mt-1 meta text-ink2 normal-case tracking-normal">
                {t.hero.iove.subtitle}
              </p>
              <p
                className="mt-4 text-body text-ink2 max-w-prose"
                style={{ lineHeight: 1.9 }}
              >
                {t.hero.iove.body}
              </p>
              <p className="mt-6 meta text-ink group-hover:text-ink2 transition-colors duration-300 ease-soft">
                {t.hero.iove.cta}
              </p>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: reduce ? 0.3 : 1.2 }}
          className="mt-20 md:mt-28 flex items-center justify-end gap-3"
        >
          <p className="meta text-ink2">{t.hero.scroll}</p>
          <span aria-hidden className="meta text-ink">
            ↓
          </span>
        </motion.div>
      </div>
    </section>
  );
}
