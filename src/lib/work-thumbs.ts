/** Thumbnails shown on the main Work section list */
export const workThumbs: Record<
  string,
  { src: string; alt: string; className?: string }
> = {
  syna: {
    src: "/projects/syna-logo.png",
    alt: "Syna",
    className: "h-14 w-14 object-contain",
  },
  "on-eum": {
    src: "/projects/on-eum-logo.png",
    alt: "온이음",
    className: "h-14 w-14 object-contain",
  },
  kmong: {
    src: "/projects/kmong-likerain.png",
    alt: "likerain",
    className: "h-14 w-20 object-cover object-top border border-line",
  },
};
