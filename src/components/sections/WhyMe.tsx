"use client";

import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";
import { useLang } from "@/lib/i18n";

export default function WhyMe() {
  const { t } = useLang();

  return (
    <section id="why-me" className="section border-t border-line">
      <div className="container-page">
        <SectionHeader eyebrow={t.whyMe.eyebrow} title={t.whyMe.title} index="02" />
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {t.whyMe.cards.map((card, i) => (
            <FadeUp key={card.tag} delay={i * 0.1}>
              <article className="group flex h-full flex-col border border-line p-8 transition-colors duration-300 ease-soft hover:border-ink/30">
                <p className="meta mb-6">{card.tag}</p>
                <h3 className="text-h3 text-ink mb-4">{card.title}</h3>
                <p className="text-body text-ink2 flex-1">{card.body}</p>
                <p className="meta mt-8 text-metal">{card.meta}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
