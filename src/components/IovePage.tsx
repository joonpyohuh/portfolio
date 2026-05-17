"use client";

import FadeUp from "@/components/FadeUp";
import { useLang } from "@/lib/i18n";
import { ioveContent, IOVE_CODENAME } from "@/lib/iove-content";

export default function IovePage() {
  const { lang } = useLang();
  const c = ioveContent[lang];

  return (
    <article className="section bg-cold/30 min-h-[80vh]">
      <div className="container-page">
        <FadeUp>
          <header className="max-w-prose mb-20 md:mb-28">
            <p className="meta mb-6 text-ink2">{c.eyebrow}</p>
            <h1 className="font-display text-h1-m md:text-h1-d text-ink tracking-tight">
              {IOVE_CODENAME}
            </h1>
            <p className="mt-4 text-h3 text-ink2">{c.subtitle}</p>
            <p className="meta mt-4 text-metal italic normal-case tracking-normal">
              {c.tagline}
            </p>
            <p className="meta mt-6 text-ink2">
              Codename: {c.codename} · {c.status}
            </p>
          </header>
        </FadeUp>

        <div className="max-w-prose space-y-section-m md:space-y-section">
            <FadeUp delay={0.1}>
              <section className="border border-line bg-base p-8 md:p-10">
                <h2 className="meta mb-4">{c.site.title}</h2>
                <p className="text-body text-ink/90 mb-8" style={{ lineHeight: 1.9 }}>
                  {c.site.description}
                </p>
                <a
                  href={c.site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-h3 text-ink quiet-link"
                >
                  {c.site.cta} →
                </a>
                <p className="meta mt-4 text-metal normal-case tracking-normal">
                  {c.site.url.replace(/^https:\/\//, "")}
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.12}>
              <section>
                <h2 className="meta mb-6">{c.concept.title}</h2>
                <div className="space-y-3">
                  {c.concept.body.map((line) => (
                    <p key={line} className="text-body text-ink/90">
                      {line}
                    </p>
                  ))}
                </div>
              </section>
            </FadeUp>

            <FadeUp delay={0.15}>
              <section>
                <h2 className="meta mb-8">Palette</h2>
                <div className="flex flex-wrap gap-4">
                  {c.palette.map((swatch) => (
                    <div key={swatch.hex} className="flex flex-col gap-2">
                      <div
                        className="h-16 w-16 border border-line"
                        style={{ backgroundColor: swatch.hex }}
                        aria-hidden
                      />
                      <p className="text-[11px] font-mono text-ink2">{swatch.hex}</p>
                      <p className="meta text-metal normal-case tracking-normal">
                        {swatch.name}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeUp>

            <FadeUp delay={0.2}>
              <section>
                <h2 className="meta mb-6">{c.collection.title}</h2>
                <ul className="space-y-4">
                  {c.collection.items.map((item) => (
                    <li key={item} className="text-body text-ink2">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p
                className="text-body text-ink2 border-t border-line pt-12"
                style={{ lineHeight: 1.9 }}
              >
                {c.closing}
              </p>
            </FadeUp>
        </div>
      </div>
    </article>
  );
}
