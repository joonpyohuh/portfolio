"use client";

import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { useLang } from "@/lib/i18n";
import { awardsContent } from "@/lib/awards-content";

export default function AwardsView() {
  const { t, lang } = useLang();
  const a = awardsContent[lang];
  const overviewLabel = lang === "ko" ? "요약" : "Overview";
  const takeawayLabel = lang === "ko" ? "남은 것" : "What stayed";

  return (
    <article className="section">
      <div className="container-page">
        <FadeUp>
          <Link
            href="/#experience"
            className="meta text-ink2 hover:text-ink transition-colors duration-300 ease-soft"
          >
            {t.common.backExperience}
          </Link>
        </FadeUp>

        <FadeUp delay={0.1}>
          <header className="container-prose-wide mt-12 mb-16 md:mb-24">
            <p className="meta text-metal mb-6">{a.label}</p>
            <p className="meta text-metal mb-8">{a.meta}</p>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-6">
              <span className="text-h2-m md:text-h2-d text-ink">{a.rank}</span>
              <span className="meta text-ink2 normal-case tracking-normal">
                {a.period}
              </span>
            </div>
            <h1 className="text-h1-m md:text-h2-d text-ink">{a.event}</h1>
            <p className="mt-4 text-body text-ink2">{a.org}</p>
            <p className="mt-6 meta text-ink2 normal-case tracking-normal">
              {a.role}
            </p>
            <p
              className="mt-10 text-body text-ink/90 max-w-prose"
              style={{ lineHeight: 1.9 }}
            >
              {a.tagline}
            </p>
          </header>
        </FadeUp>

        <div className="container-prose-wide space-y-12">
          <FadeUp delay={0.15}>
            <section>
              <h2 className="meta mb-6">{overviewLabel}</h2>
              <p className="text-body text-ink/90" style={{ lineHeight: 1.9 }}>
                {a.summary}
              </p>
            </section>
          </FadeUp>

          {a.sections.map((sec, i) => (
            <FadeUp key={sec.title} delay={0.18 + i * 0.06}>
              <section>
                <h2 className="meta mb-6">{sec.title}</h2>
                {sec.paragraphs?.map((p) => (
                  <p
                    key={p.slice(0, 32)}
                    className="text-body text-ink/90 mb-4 last:mb-0"
                    style={{ lineHeight: 1.9 }}
                  >
                    {p}
                  </p>
                ))}
                {sec.items && (
                  <ul className="space-y-3">
                    {sec.items.map((item) => (
                      <li
                        key={item}
                        className="text-body text-ink/90 pl-5 -indent-5"
                      >
                        <span className="text-metal mr-3">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </FadeUp>
          ))}

          <FadeUp delay={0.4}>
            <section className="border-l-2 border-line pl-6">
              <h2 className="meta mb-6">{takeawayLabel}</h2>
              <p className="text-body text-ink2" style={{ lineHeight: 1.9 }}>
                {a.takeaway}
              </p>
            </section>
          </FadeUp>
        </div>
      </div>
    </article>
  );
}
