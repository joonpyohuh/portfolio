"use client";

import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { useLang } from "@/lib/i18n";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="section border-t border-line">
      <div className="container-page">
        <FadeUp className="flex flex-col gap-6 mb-16 md:mb-24">
          <div className="flex items-center justify-between">
            <p className="meta">{t.experience.eyebrow}</p>
            <p className="meta tabular-nums text-metal">{t.experience.period}</p>
          </div>
          <div className="divider-flawed" />
          {t.experience.intro && (
            <p
              className="text-body text-ink2 max-w-prose mt-2"
              style={{ lineHeight: 1.9, whiteSpace: "pre-line" }}
            >
              {t.experience.intro}
            </p>
          )}
        </FadeUp>

        <div className="md:max-w-[60%]">
          <ol className="relative pl-6 md:pl-8 border-l border-line">
            {t.experience.items.map((item, i) => (
              <li
                key={`${item.org}-${i}`}
                className="relative group pb-14 md:pb-20 last:pb-0"
              >
                <span
                  aria-hidden
                  className={[
                    "absolute -left-[27px] md:-left-[33px] top-[6px]",
                    "h-[10px] w-[10px] rounded-full",
                    "bg-base border border-metal",
                    "transition-all duration-300 ease-soft",
                    "group-hover:scale-125 group-hover:border-ink",
                    item.ongoing ? "" : "bg-metal group-hover:bg-ink",
                  ].join(" ")}
                />

                <FadeUp delay={i * 0.08}>
                  <p className="meta tabular-nums text-metal">{item.period}</p>
                  <h3 className="mt-2 text-h3 text-ink">{item.org}</h3>
                  <p className="mt-2 text-body text-ink2 normal-case tracking-normal">
                    {item.role}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {item.details.map((d) => (
                      <li
                        key={d}
                        className="text-body text-ink/85 pl-5 -indent-5"
                      >
                        <span className="text-metal mr-3">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  {item.href && (
                    <Link
                      href={item.href}
                      className="mt-6 inline-block meta text-ink quiet-link normal-case tracking-normal"
                    >
                      {item.linkLabel ?? t.common.viewAwards}
                    </Link>
                  )}
                </FadeUp>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
