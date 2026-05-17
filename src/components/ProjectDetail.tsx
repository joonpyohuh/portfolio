"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { useLang } from "@/lib/i18n";
import type { ProjectDetail as Project } from "@/lib/projects";

export default function ProjectDetailView({ project }: { project: Project }) {
  const { t, lang } = useLang();
  const endedLabel = lang === "ko" ? "종료" : "Ended";
  const overviewLabel = lang === "ko" ? "요약" : "Overview";

  return (
    <article className="section">
      <div className="container-page">
        <FadeUp>
          <Link
            href="/#work"
            className="meta text-ink2 hover:text-ink transition-colors duration-300 ease-soft"
          >
            {t.common.backHome}
          </Link>
        </FadeUp>

        <FadeUp delay={0.1}>
          <header className="container-prose-wide mt-12 mb-16 md:mb-24">
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
              <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <p className="meta text-metal">{project.period}</p>
                    {project.statusLabel ? (
                      <span className="meta text-ink2 border border-line px-2 py-0.5">
                        {project.statusLabel}
                      </span>
                    ) : (
                      project.status === "ended" && (
                        <span className="meta text-ink2 border border-line px-2 py-0.5">
                          {endedLabel}
                        </span>
                      )
                    )}
                  </div>
                  <h1 className="text-h1-m md:text-h2-d text-ink">{project.name}</h1>
                  <p className="mt-4 text-body text-ink2">{project.tagline}</p>
                  <p className="mt-4 meta text-ink2 normal-case tracking-normal">
                    {project.role}
                  </p>
                  {project.summary && (
                    <p
                      className="mt-8 text-body text-ink/90 max-w-prose"
                      style={{ lineHeight: 1.9 }}
                    >
                      {project.summary}
                    </p>
                  )}
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-8 meta text-ink quiet-link"
                    >
                      {t.common.viewSite} →
                    </a>
                  )}
                </div>

                {project.logoImage && (
                  <div className="shrink-0 md:pt-2">
                    <Image
                      src={project.logoImage}
                      alt={project.logoAlt ?? project.name}
                      width={200}
                      height={200}
                      className="h-auto w-40 md:w-48 object-contain"
                      priority
                    />
                  </div>
                )}
            </div>
          </header>
        </FadeUp>

        <div className="container-prose-wide space-y-12">
          {project.image && (
            <FadeUp delay={0.12}>
              <figure>
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden border border-line transition-colors duration-300 hover:border-ink/25"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.name}
                    width={1200}
                    height={750}
                    className="w-full h-auto"
                  />
                </a>
                {project.externalLabel && (
                  <figcaption className="meta mt-4 text-metal normal-case tracking-normal">
                    {project.externalLabel}
                  </figcaption>
                )}
              </figure>
            </FadeUp>
          )}

          <FadeUp delay={0.15}>
            <section>
              <h2 className="meta mb-6">{overviewLabel}</h2>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="text-body text-ink/90">
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          </FadeUp>

          {project.sections?.map((sec, i) => (
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
                      <li key={item} className="text-body text-ink/90">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </FadeUp>
          ))}

          {project.learning && (
            <FadeUp delay={0.35}>
              <section className="border-l-2 border-line pl-6">
                <h2 className="meta mb-6">
                  {lang === "ko" ? "솔직한 배움" : "Honest learning"}
                </h2>
                <p className="text-body text-ink2" style={{ lineHeight: 1.9 }}>
                  {project.learning}
                </p>
              </section>
            </FadeUp>
          )}

          {project.placeholderNote && (
            <FadeUp delay={0.4}>
              <p className="meta text-metal border-t border-line pt-8">
                {project.placeholderNote}
              </p>
            </FadeUp>
          )}
        </div>
      </div>
    </article>
  );
}
