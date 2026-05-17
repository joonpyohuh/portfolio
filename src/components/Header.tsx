"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="sticky top-0 z-40 bg-base/85 backdrop-blur-sm">
      <div className="container-page flex items-center justify-between py-6 md:py-8">
        {/* Logotype — quiet, lowercase, signed */}
        <Link
          href="/"
          className="text-meta uppercase tracking-[0.18em] text-ink hover:text-ink2 transition-colors duration-300 ease-soft"
          aria-label="Junpyo Heo — Home"
        >
          Junpyo&nbsp;Heo
          <span className="ml-2 text-ink2">— Portfolio</span>
        </Link>

        <nav className="flex items-center gap-6 md:gap-9">
          <Link href="/#about"      className="hidden md:inline text-meta uppercase tracking-[0.1em] text-ink2 hover:text-ink transition-colors duration-300 ease-soft">{t.nav.about}</Link>
          <Link href="/#work"       className="hidden md:inline text-meta uppercase tracking-[0.1em] text-ink2 hover:text-ink transition-colors duration-300 ease-soft">{t.nav.work}</Link>
          <Link href="/awards"           className="hidden md:inline text-meta uppercase tracking-[0.1em] text-ink2 hover:text-ink transition-colors duration-300 ease-soft">{t.nav.awards}</Link>
          <Link href="/#certifications" className="hidden md:inline text-meta uppercase tracking-[0.1em] text-ink2 hover:text-ink transition-colors duration-300 ease-soft">{t.nav.certifications}</Link>
          {/* Intentional flaw: this single nav item carries a slightly looser letter-spacing.
              Almost no one will notice — that's the point. */}
          <Link
            href="/manifesto"
            className="hidden md:inline text-meta uppercase text-ink2 hover:text-ink transition-colors duration-300 ease-soft"
            style={{ letterSpacing: "0.22em" }}
          >
            {t.nav.manifesto}
          </Link>
          <Link href="/#contact"    className="hidden md:inline text-meta uppercase tracking-[0.1em] text-ink2 hover:text-ink transition-colors duration-300 ease-soft">{t.nav.contact}</Link>

          {/* Lang switch */}
          <div className="flex items-center gap-1 text-meta uppercase tracking-[0.1em] tabular-nums">
            <button
              type="button"
              onClick={() => setLang("ko")}
              aria-pressed={lang === "ko"}
              className={`transition-colors duration-300 ease-soft ${lang === "ko" ? "text-ink" : "text-ink2 hover:text-ink"}`}
            >
              KR
            </button>
            <span className="text-line">/</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`transition-colors duration-300 ease-soft ${lang === "en" ? "text-ink" : "text-ink2 hover:text-ink"}`}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
