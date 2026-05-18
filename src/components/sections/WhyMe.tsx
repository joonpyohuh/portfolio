"use client";

import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";
import TypewriterLine from "@/components/TypewriterLine";
import { useLang } from "@/lib/i18n";

export default function WhyMe() {
  const { t } = useLang();

  return (
    <section id="why-me" className="section border-t border-line">
      <div className="container-page">
        <SectionHeader eyebrow={t.whyMe.eyebrow} title={t.whyMe.title} index="02" />

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {t.whyMe.cards.map((card, i) => (
            <FadeUp key={card.headline} delay={i * 0.1}>
              <article className="group flex h-full flex-col border-t border-line pt-10">
                <p className="meta text-metal mb-6">{card.kicker}</p>
                <h3 className="text-h3 text-ink mb-6">{card.headline}</h3>
                <p
                  className="text-body text-ink2 mb-8"
                  style={{ lineHeight: 1.9 }}
                >
                  {card.body}
                </p>
                <ul className="space-y-2 mb-10 flex-1">
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-body text-ink/85 pl-5 -indent-5"
                    >
                      <span className="text-metal mr-3">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={card.link.href}
                  className="meta text-ink quiet-link normal-case tracking-normal w-fit"
                >
                  {card.link.label}
                </Link>
              </article>
            </FadeUp>
          ))}
        </div>

        {t.whyMe.outro && (
          <FadeUp delay={0.4} className="mt-20 md:mt-28">
            <div className="-mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <TypewriterLine text={t.whyMe.outro} />
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
