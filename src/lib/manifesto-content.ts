import type { Lang } from "./dict";

export type ManifestoChapter = {
  number: string;
  title: string;
  body: string[];
};

export type ManifestoContent = {
  label: string;
  meta: string;
  chapters: ManifestoChapter[];
  signoff: string;
  enNote: string;
};

const ko: ManifestoContent = {
  label: "Manifesto",
  meta: "2026.05 / Draft 01 / #001",
  chapters: [
    {
      number: "01",
      title: "비효율의 아름다움",
      body: [
        "AI 시대에는 효율이 가장 먼저 측정되는 기준이 되었습니다. 빠르고, 정확하고, 완전한 것이 좋은 것으로 읽힙니다.",
        "그런데 사람이 만드는 비효율—손끝의 흔들림, 의도적으로 남긴 여백, 완벽하지 않은 결—은 대체되지 않는다고 믿습니다. 그 아름다움은 대체될 수 없습니다.",
      ],
    },
    {
      number: "02",
      title: "의도된 결핍",
      body: [
        "AI는 의도적으로 결핍을 내지 않습니다. 완전함이 기본값이기 때문입니다.",
        "하지만 모든 것이 완벽할 필요는 없다고 생각합니다. AI가 의도하지 않는, 사람만이 의도할 수 있는 결핍—한 끝이 살짝 짧은 선, baseline이 어긋난 한 글자, 시리얼이 새겨진 옷감—그 미학을 브랜드의 언어로 만들고 싶습니다.",
      ],
    },
    {
      number: "03",
      title: "IOVE",
      body: [
        "지금 구상 중인 브랜드의 이름은 IOVE입니다. 젠더리스 정핏, off-white와 brushed metal, 첫 카테고리는 티셔츠.",
        "아직 존재하지 않는 브랜드의 첫 흔적입니다. 이 포트폴리오와 /project/future-brand 페이지가 그 시작점입니다.",
      ],
    },
  ],
  signoff: "— Junpyo Heo",
  enNote:
    "The manifesto is written in Korean. An English summary lives on this page when you switch to EN.",
};

const en: ManifestoContent = {
  label: "Manifesto",
  meta: "2026.05 / Draft 01 / #001",
  chapters: [
    {
      number: "—",
      title: "Summary (English)",
      body: [
        "In an age that rewards efficiency, I care about what only people can intend: margins left on purpose, textures that aren't flawless, brands that admit a flaw.",
        "I'm building IOVE — a genderless, off-white and metal-toned label starting with tees. The full manifesto is in Korean; switch to KR to read it.",
      ],
    },
  ],
  signoff: "— Junpyo Heo",
  enNote: "Read the original in Korean — switch to KR above.",
};

export const manifestoContent: Record<Lang, ManifestoContent> = { ko, en };
