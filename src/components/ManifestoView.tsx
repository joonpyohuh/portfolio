"use client";

import FadeUp from "@/components/FadeUp";
import { useLang } from "@/lib/i18n";
import { manifestoContent } from "@/lib/manifesto-content";

export default function ManifestoView() {
  const { lang } = useLang();
  const m = manifestoContent[lang];

  return (
    <article className="section">
      <div className="container-page">
        <FadeUp>
          <header className="container-manifesto mb-20 md:mb-28">
            <p className="meta mb-6">{m.label}</p>
            <h1 className="font-display text-h1-m md:text-h1-d text-ink">MANIFESTO</h1>
            <p className="meta mt-8 text-metal">{m.meta}</p>
          </header>
        </FadeUp>

        {lang === "en" && (
          <FadeUp delay={0.1}>
            <p className="container-manifesto mb-16 text-body text-ink2 border-l border-line pl-6">
              {m.enNote}
            </p>
          </FadeUp>
        )}

        <div className="container-manifesto space-y-20 md:space-y-28">
          {m.chapters.map((ch, i) => (
            <FadeUp key={ch.number} delay={0.1 + i * 0.1}>
              <section
                className={i === 1 ? "ml-0 md:ml-6" : ""}
                style={i === 1 ? { marginLeft: "clamp(0px, 4vw, 24px)" } : undefined}
              >
                <p className="meta text-metal mb-4">{ch.number}</p>
                <h2 className="text-h2-m md:text-h2-d text-ink mb-8">{ch.title}</h2>
                <div className="space-y-6" style={{ lineHeight: 1.9 }}>
                  {ch.body.map((para) => (
                    <p key={para.slice(0, 24)} className="text-body text-ink/90">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.5}>
          <p className="container-manifesto mt-24 text-body text-ink2">{m.signoff}</p>
        </FadeUp>
      </div>
    </article>
  );
}
