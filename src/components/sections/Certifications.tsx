"use client";

import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";
import { useLang } from "@/lib/i18n";

export default function Certifications() {
  const { t } = useLang();

  return (
    <section id="certifications" className="section border-t border-line">
      <div className="container-page">
        <SectionHeader
          eyebrow={t.certifications.eyebrow}
          title={t.certifications.title}
          index="04"
        />
        <ul className="md:max-w-[60%] divide-y divide-line border-y border-line">
          {t.certifications.items.map((item, i) => (
            <li key={item.name}>
              <FadeUp delay={i * 0.08}>
                <article className="py-10 md:py-12">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <h3 className="text-h3 text-ink">{item.name}</h3>
                    <p className="meta text-ink normal-case tracking-normal">
                      {item.level}
                    </p>
                  </div>
                  <p className="mt-3 meta text-metal normal-case tracking-normal">
                    {item.issuer}
                  </p>
                  <p
                    className="mt-5 text-body text-ink2 max-w-prose"
                    style={{ lineHeight: 1.9 }}
                  >
                    {item.note}
                  </p>
                </article>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
