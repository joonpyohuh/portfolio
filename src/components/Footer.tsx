"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { IOVE_CODENAME } from "@/lib/iove-content";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:items-end md:justify-between md:py-16">
        <div className="space-y-1">
          <p className="text-body text-ink2">{t.footer.line1}</p>
          <p className="text-body text-ink2">{t.footer.line2}</p>
          <Link
            href="/project/future-brand"
            className="inline-block mt-3 meta text-ink2 hover:text-ink transition-colors duration-300 ease-soft"
          >
            {IOVE_CODENAME} →
          </Link>
        </div>
        <p className="meta tracking-[0.18em] text-metal tabular-nums">
          {t.footer.serial}
        </p>
      </div>
    </footer>
  );
}
