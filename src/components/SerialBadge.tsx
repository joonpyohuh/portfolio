"use client";

/**
 * Fixed-position serial number — one of the site's "intended imperfections".
 * Sits in the bottom-left corner like a stamped tag on a garment.
 */
export default function SerialBadge({ value = "#001 / 500" }: { value?: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-5 left-5 z-30 hidden md:block select-none"
    >
      <p className="text-meta uppercase tracking-[0.22em] text-metal tabular-nums">
        {value}
      </p>
    </div>
  );
}
