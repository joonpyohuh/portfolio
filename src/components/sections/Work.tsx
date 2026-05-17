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
}: {
  item: (typeof import("@/lib/dict").dict)["ko"]["work"]["items"][number];
  cta: string;
}) {
  const href = item.href ?? (item.slug ? `/project/${item.slug}` : undefined);
  const thumb = item.slug ? workThumbs[item.slug] : undefined;

  const content = (
    <div className="flex flex-col gap-4 py-10 md:flex-row md:items-start md:justify-between md:gap-12 md:py-12">
      <div className="flex gap-5 md:gap-8 min-w-0 flex-1">
        <span className="meta tabular-nums text-metal shrink-0 pt-1">{item.index}</span>
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
            <p className="mt-2 meta text-ink2 normal-case tracking-normal">{item.role}</p>
          )}
        </div>
      </div>
      <div className="md:text-right md:shrink-0 md:pt-1">
        <p className="meta text-ink2">{item.period}</p>
        <p className="mt-2 meta text-metal normal-case tracking-normal">{item.meta}</p>
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
  const { t, lang } = useLang();

  return (
    <section id="work" className="section border-t border-line">
      <div className="container-page">
        <SectionHeader eyebrow={t.work.eyebrow} title={t.work.title} index="03" />
        <ul className="divide-y divide-line border-y border-line">
          {t.work.items.map((item, i) => (
            <li key={item.index}>
              <FadeUp delay={i * 0.08}>
                <WorkRow item={item} cta={t.work.cta} />
              </FadeUp>
            </li>
          ))}
        </ul>
        <FadeUp delay={0.35} className="mt-12">
          <Link
            href="/project/future-brand"
            className="meta text-ink2 hover:text-ink transition-colors duration-300 ease-soft"
          >
            IOVE — {lang === "ko" ? "브랜드 사이트" : "brand site"} (iove.vercel.app) →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

