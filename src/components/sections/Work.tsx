"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";
import { useLang } from "@/lib/i18n";
import { workThumbs } from "@/lib/work-thumbs";

function WorkRow({
  item,
  cta,
  takeawayLabel,
}: {
  item: (typeof import("@/lib/dict").dict)["ko"]["work"]["items"][number];
  cta: string;
  takeawayLabel: string;
}) {
  const href = item.href ?? (item.slug ? `/project/${item.slug}` : undefined);
  const thumb = item.slug ? workThumbs[item.slug] : undefined;

  const content = (
    <div className="flex flex-col gap-6 py-12 md:flex-row md:items-start md:gap-12 md:py-14">
      <div className="flex gap-5 md:gap-8 min-w-0 flex-1">
        <span className="meta tabular-nums text-metal shrink-0 pt-1">
          {item.index}
        </span>
        {thumb && (
          <div className="shrink-0">
            <Image
              src={thumb.src}
              alt={thumb.alt}
              width={80}
              height={56}
              className={thumb.className ?? "h-14 w-14 object-contain"}
            />
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-h3 text-ink">{item.name}</h3>
          <p className="mt-2 text-body text-ink2">{item.tagline}</p>
          {item.role && (
            <p className="mt-2 meta text-ink2 normal-case tracking-normal">
              {item.role}
            </p>
          )}
          {item.takeaway && (
            <div className="mt-6 md:mt-7 border-l border-line pl-5 max-w-prose">
              <p className="meta text-metal mb-2">{takeawayLabel}</p>
              <p
                className="text-body text-ink/85"
                style={{ lineHeight: 1.9 }}
              >
                {item.takeaway}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="md:text-right md:shrink-0 md:pt-1 md:min-w-[160px]">
        <p className="meta text-ink2">{item.period}</p>
        <p className="mt-2 meta text-metal normal-case tracking-normal">
          {item.meta}
        </p>
        {href && (
          <p className="mt-4 meta text-ink group-hover:text-ink2 transition-colors duration-300">
            {cta} →
          </p>
        )}
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="group block">
      {content}
    </Link>
  );
}

export default function Work() {
  const { t } = useLang();

  return (
    <section id="work" className="section border-t border-line">
      <div className="container-page">
        <SectionHeader
          eyebrow={t.work.eyebrow}
          title={t.work.title}
          index="05"
        />
        <ul className="divide-y divide-line border-y border-line">
          {t.work.items.map((item, i) => (
            <li key={item.index}>
              <FadeUp delay={i * 0.06}>
                <WorkRow
                  item={item}
                  cta={t.work.cta}
                  takeawayLabel={t.work.takeawayLabel}
                />
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
