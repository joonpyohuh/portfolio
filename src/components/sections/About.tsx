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
        <div className="container-prose-wide grid gap-16 md:grid-cols-[1fr_240px] md:gap-20">
          <div className="space-y-6 max-w-prose">
            {t.about.body.map((p, i) => (
              <FadeUp key={p} delay={i * 0.1}>
                <p className="text-body text-ink/90">{p}</p>
              </FadeUp>
            ))}
          </div>
          <aside className="space-y-8">
            {t.about.meta.map((row, i) => (
              <FadeUp key={row.label} delay={0.15 + i * 0.08}>
                <div>
                  <p className="meta mb-2">{row.label}</p>
                  <p className="text-body text-ink">{row.value}</p>
                </div>
              </FadeUp>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
