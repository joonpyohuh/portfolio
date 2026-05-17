import type { Lang } from "./dict";

export const IOVE_CODENAME = "IOVE";

export type IoveContent = {
  eyebrow: string;
  codename: string;
  status: string;
  concept: { title: string; body: string[] };
  palette: { hex: string; name: string }[];
  serial: {
    prompt: string;
    placeholder: string;
    cta: string;
    result: (n: number) => string;
    hint: string;
  };
  collection: { title: string; items: string[] };
  closing: string;
};

const ko: IoveContent = {
  eyebrow: "A future project",
  codename: IOVE_CODENAME,
  status: "Concept",
  concept: {
    title: "컨셉",
    body: [
      "Off-white base. Brushed metal accent.",
      "젠더리스 정핏. 의도된 결핍.",
      "첫 카테고리는 티셔츠.",
    ],
  },
  palette: [
    { hex: "#F5F3EE", name: "Off-white" },
    { hex: "#FAFAFA", name: "Cold white" },
    { hex: "#8A8A8A", name: "Brushed metal" },
    { hex: "#1A1A1A", name: "Deep ink" },
  ],
  serial: {
    prompt: "Find out your number",
    placeholder: "soojeen20000@gmail.com",
    cta: "확인",
    result: (n) =>
      `당신은 ${IOVE_CODENAME}의 ${n}번째 관심자입니다. 각각의 옷에 시리얼이 새겨지듯, 각각의 사람도 다릅니다.`,
    hint: "이메일은 저장되지 않습니다. 브라우저에만 번호가 기록됩니다.",
  },
  collection: {
    title: "첫 컬렉션 — 텍스트 스케치",
    items: [
      "Tee 01 — One-shoulder patch",
      "Tee 02 — Asymmetric collar polo",
      "Tee 03 — See-through polo",
    ],
  },
  closing:
    "이 페이지는 아직 존재하지 않는 브랜드의 첫 흔적이다. 언제 시작될지는 모른다. 다만 시작될 것이다.",
};

const en: IoveContent = {
  eyebrow: "A future project",
  codename: IOVE_CODENAME,
  status: "Concept",
  concept: {
    title: "Concept",
    body: [
      "Off-white base. Brushed metal accent.",
      "Genderless slim fit. Intended imperfection.",
      "First category: tees.",
    ],
  },
  palette: [
    { hex: "#F5F3EE", name: "Off-white" },
    { hex: "#FAFAFA", name: "Cold white" },
    { hex: "#8A8A8A", name: "Brushed metal" },
    { hex: "#1A1A1A", name: "Deep ink" },
  ],
  serial: {
    prompt: "Find out your number",
    placeholder: "your@email.com",
    cta: "Reveal",
    result: (n) =>
      `You are the ${n}th person drawn to ${IOVE_CODENAME}. Like a serial pressed into cloth, every person is different.`,
    hint: "Your email is not sent anywhere. The number is stored only in this browser.",
  },
  collection: {
    title: "First collection — text sketch",
    items: [
      "Tee 01 — One-shoulder patch",
      "Tee 02 — Asymmetric collar polo",
      "Tee 03 — See-through polo",
    ],
  },
  closing:
    "This page is the first trace of a brand that does not exist yet. When it begins is unknown. That it will begin is not.",
};

export const ioveContent: Record<Lang, IoveContent> = { ko, en };

/** Deterministic serial 1–500 from email string */
export function serialFromEmail(email: string): number {
  const normalized = email.trim().toLowerCase();
  let h = 0;
  for (let i = 0; i < normalized.length; i++) {
    h = (Math.imul(31, h) + normalized.charCodeAt(i)) | 0;
  }
  return (Math.abs(h) % 500) + 1;
}

export function formatSerial(n: number): string {
  return `#${String(n).padStart(3, "0")} / 500`;
}
