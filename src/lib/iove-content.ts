import type { Lang } from "./dict";

export const IOVE_CODENAME = "IOVE";
export const IOVE_SITE_URL = "https://iove.vercel.app/";

export type IoveContent = {
  eyebrow: string;
  codename: string;
  subtitle: string;
  status: string;
  tagline: string;
  concept: { title: string; body: string[] };
  palette: { hex: string; name: string }[];
  site: {
    title: string;
    description: string;
    cta: string;
    url: string;
  };
  collection: { title: string; items: string[] };
  closing: string;
};

const ko: IoveContent = {
  eyebrow: "Brand project",
  codename: IOVE_CODENAME,
  subtitle: "Atelier of Cold Light",
  status: "Live prototype",
  tagline: "the beauty of inefficiency",
  concept: {
    title: "컨셉",
    body: [
      "IOVE — 차가운 빛의 아틀리에. Off-white와 brushed metal, 젠더리스 정핏.",
      "의도된 결핍. 첫 카테고리는 티셔츠.",
      "매니페스토의 ‘비효율의 아름다움’을 브랜드 언어로 옮긴 프로토타입입니다.",
    ],
  },
  palette: [
    { hex: "#F5F3EE", name: "Off-white" },
    { hex: "#FAFAFA", name: "Cold white" },
    { hex: "#8A8A8A", name: "Brushed metal" },
    { hex: "#1A1A1A", name: "Deep ink" },
  ],
  site: {
    title: "IOVE 브랜드 사이트",
    description:
      "아래 링크는 실제로 제작·배포한 IOVE 브랜드 프로토타입입니다. 포트폴리오와 동일한 결 — 여백, 차가운 톤, 의도된 결핍 — 을 브랜드 경험으로 풀어낸 첫 작품입니다.",
    cta: "iove.vercel.app 방문",
    url: IOVE_SITE_URL,
  },
  collection: {
    title: "첫 컬렉션 — 텍스트 스케치",
    items: [
      "Tee 01 — One-shoulder patch",
      "Tee 02 — Asymmetric collar polo",
      "Tee 03 — See-through polo",
    ],
  },
  closing: "가상의 브랜드입니다.",
};

const en: IoveContent = {
  eyebrow: "Brand project",
  codename: IOVE_CODENAME,
  subtitle: "Atelier of Cold Light",
  status: "Live prototype",
  tagline: "the beauty of inefficiency",
  concept: {
    title: "Concept",
    body: [
      "IOVE — an atelier of cold light. Off-white, brushed metal, genderless slim fit.",
      "Intended imperfection. First category: tees.",
      "A brand prototype translating the manifesto’s ‘beauty of inefficiency’ into experience.",
    ],
  },
  palette: [
    { hex: "#F5F3EE", name: "Off-white" },
    { hex: "#FAFAFA", name: "Cold white" },
    { hex: "#8A8A8A", name: "Brushed metal" },
    { hex: "#1A1A1A", name: "Deep ink" },
  ],
  site: {
    title: "IOVE brand site",
    description:
      "The link below is the live IOVE brand prototype — the same texture as this portfolio: margin, cold tone, intended imperfection, built as a first brand experience.",
    cta: "Visit iove.vercel.app",
    url: IOVE_SITE_URL,
  },
  collection: {
    title: "First collection — text sketch",
    items: [
      "Tee 01 — One-shoulder patch",
      "Tee 02 — Asymmetric collar polo",
      "Tee 03 — See-through polo",
    ],
  },
  closing: "This is a virtual brand.",
};

export const ioveContent: Record<Lang, IoveContent> = { ko, en };
