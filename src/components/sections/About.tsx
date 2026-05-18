"use client";

import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";
import { useLang } from "@/lib/i18n";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="section border-t border-line">
      <div className="container-page">
        <SectionHeader eyebrow={t.about.eyebrow} index="01" />
        <div className="container-prose-wide max-w-prose space-y-8">
          {t.about.body.map((p, i) => (
            <FadeUp key={p} delay={i * 0.1}>
              <p
                className="text-body text-ink/90"
                style={{ lineHeight: 1.9 }}
              >
                {p}
              </p>
            </FadeUp>
          ))}
        </div>
        <div className="container-prose-wide max-w-prose mt-16 md:mt-20 space-y-2">
          {t.about.signature.map((line, i) => (
            <FadeUp key={line} delay={0.2 + i * 0.08}>
              <p className="text-body text-ink2 normal-case tracking-normal">
                {line}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
