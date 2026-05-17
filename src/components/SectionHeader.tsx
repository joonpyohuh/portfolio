"use client";

import FadeUp from "./FadeUp";

type Props = {
  eyebrow: string;
  title?: string;
  index?: string; // e.g. "02"
  className?: string;
};

export default function SectionHeader({ eyebrow, title, index, className }: Props) {
  return (
    <FadeUp className={`flex flex-col gap-6 mb-16 md:mb-24 ${className ?? ""}`}>
      <div className="flex items-center justify-between">
        <p className="meta">{eyebrow}</p>
        {index && (
          <p className="meta tabular-nums text-metal">{index}</p>
        )}
      </div>
      <div className="divider-flawed" />
      {title && (
        <h2 className="text-h2-m md:text-h2-d text-ink text-balance max-w-prose2">
          {title}
        </h2>
      )}
    </FadeUp>
  );
}
