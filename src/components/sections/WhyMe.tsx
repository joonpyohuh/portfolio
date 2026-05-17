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
                <div className="text-body text-ink2 flex-1 space-y-4">
                  {card.body.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <p className="meta mt-8 text-metal">{card.meta}</p>
              </article>
            </FadeUp>
          ))}
        </div>

        {t.whyMe.outro && (
          <FadeUp delay={0.4} className="mt-16 md:mt-24">
            <p
              className="text-body text-ink/85 max-w-prose"
              style={{ lineHeight: 1.9 }}
            >
              {t.whyMe.outro}
            </p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
