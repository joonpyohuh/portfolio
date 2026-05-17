"use client";

import FadeUp from "@/components/FadeUp";
import SectionHeader from "@/components/SectionHeader";
import { useLang } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="section border-t border-line">
      <div className="container-page">
        <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} index="06" />
        <div className="container-prose-wide">
          <FadeUp>
            <p className="text-body text-ink2 mb-14 max-w-prose">{t.contact.intro}</p>
          </FadeUp>
          <div className="space-y-8">
            {t.contact.items.map((item, i) => (
              <FadeUp key={item.label} delay={0.1 + i * 0.08}>
                <div>
                  <p className="meta mb-2">{item.label}</p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-h3 text-ink quiet-link"
                  >
                    {item.value}
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
