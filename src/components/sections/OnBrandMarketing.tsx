"use client";

import FadeUp from "@/components/FadeUp";
import { useLang } from "@/lib/i18n";

export default function OnBrandMarketing() {
  const { t } = useLang();
  const m = t.onBrandMarketing;

  return (
    <section
      id="on-brand-marketing"
      className="section border-t border-line"
    >
      <div className="container-page">
        <FadeUp className="container-manifesto mb-16 md:mb-20">
          <p className="meta text-metal">{m.eyebrow}</p>
        </FadeUp>

        <div
          className="container-manifesto space-y-8 md:space-y-10"
          style={{ lineHeight: 1.95 }}
        >
          {m.paragraphs.map((p, i) => (
            <FadeUp key={p.slice(0, 32)} delay={0.05 + i * 0.06}>
              <p className="text-body text-ink/90">{p}</p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.5} className="container-manifesto mt-16 md:mt-20">
          <p className="meta text-metal">{m.date}</p>
        </FadeUp>
      </div>
    </section>
  );
}
