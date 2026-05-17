export type ProjectSlug = "syna" | "on-eum" | "kmong";

export type ProjectSection = {
  title: string;
  items?: string[];
  paragraphs?: string[];
};

export type ProjectDetail = {
  slug: ProjectSlug;
  name: string;
  tagline: string;
  period: string;
  role: string;
  status?: "ended" | "active";
  statusLabel?: string;
  summary?: string;
  highlights: string[];
  sections?: ProjectSection[];
  learning?: string;
  image?: string;
  imageAlt?: string;
  logoImage?: string;
  logoAlt?: string;
  externalUrl?: string;
  externalLabel?: string;
  placeholderNote?: string;
};

export const projects: Record<ProjectSlug, ProjectDetail> = {
  syna: {
    slug: "syna",
    name: "Syna",
    tagline: "제품 변경 인텔리전스 SaaS, 그리고 그 종료",
    period: "2024.11 — 2026.04",
    role: "Founder & CEO",
    status: "ended",
    logoImage: "/projects/syna-logo.png",
    logoAlt: "Syna 로고",
    summary:
      "빠르게 변하는 제품 스펙에서 ‘무엇이, 왜 바뀌었는지’를 팀이 공유하지 못하는 문제를 겨냥한 B2B SaaS. Living Spec Layer로 시작해 건축 인허가 검토 AI 에이전트로 피벗했고, 4주 검증 스프린트 이후 종료했습니다.",
    highlights: [
      "4인 팀 구성 — CEO, TPM, 디자이너, 개발자",
      "Living Spec Layer → 건축 인허가 검토 AI 에이전트로 피벗",
      "도메인 어드바이저 컨택 · 4주 검증 스프린트",
      "두어스 · 모두의창업 지원 프로그램 어플라이",
      "2026.04 종료 의사결정",
    ],
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "제품이 빠르게 변할수록 변경 이력과 영향 범위가 문서·슬랙·회의록에 흩어집니다. 팀은 ‘지금 스펙이 무엇인지’보다 ‘어제 무엇이 바뀌었는지’를 따라가지 못합니다.",
          "Syna는 이 컨텍스트 유실을 줄이는 제품 변경 인텔리전스(Product Change Intelligence)를 목표로 출발했습니다.",
        ],
      },
      {
        title: "Solution — Living Spec Layer",
        items: [
          "변경 사항을 구조화해 추적하는 Living Spec(살아있는 명세) 레이어",
          "기능·요구사항 변경의 영향 범위를 한곳에서 보는 B2B SaaS 프로토타입",
          "PM·개발·디자인이 같은 ‘현재 스펙’을 바라보게 하는 것이 1차 가설",
        ],
      },
      {
        title: "Pivot — 건축 인허가 검토 AI",
        items: [
          "초기 고객 인터뷰와 도메인 리서치 이후, 건축·인허가 검토 워크플로우로 피벗",
          "인허가 서류·규정 변경을 AI 에이전트가 보조 검토하는 방향으로 재정의",
          "도메인 어드바이저 확보 후 4주 검증 스프린트 설계·실행",
        ],
      },
      {
        title: "Team & programs",
        items: [
          "CEO(본인) · TPM · 디자이너 · 개발자 — 4인 코어 팀",
          "사업계획서 작성 · 투자/지원 프로그램 대응 (두어스, 모두의창업)",
          "짧은 주기로 가설 검증 → 피벗 → 다시 검증의 루프",
        ],
      },
    ],
    learning:
      "검증 스프린트 끝에서, ‘기술을 만들 수 있다’와 ‘지금 이 시장·타이밍에 이 팀이 이긴다’는 별개라는 걸 분명히 느꼈습니다. Living Spec은 흥미로운 문제였지만, 피벗 이후 도메인에서도 유료 전환까지 가는 경로가 팀 리소스 대비 충분히 빠르지 않았습니다. 다음에는 (1) 더 좁은 ICP와 첫 유료 고객 정의를 먼저 하고, (2) 4주 안에 ‘쓸 이유’가 있는지 숫자로 보여줄 지표를 스프린트 전에 고정하겠습니다. 접은 결정이지만, 팀을 끌고 간 경험과 피벗·종료를 스스로 내린 경험은 이후 브랜드·제품을 만들 때 기준이 됩니다.",
  },
  "on-eum": {
    slug: "on-eum",
    name: "온이음",
    tagline: "요양병원을 위한 헬스케어 AI 챗봇 — 대학병원 PoC 최종 검토까지",
    period: "2024 — Present",
    role: "Founder",
    status: "active",
    statusLabel: "PoC Discussion",
    logoImage: "/projects/on-eum-logo.png",
    logoAlt: "온이음 ONIIUM 로고",
    summary:
      "요양병원의 환자/보호자 커뮤니케이션 부담을 줄이기 위한 AI 챗봇 프로젝트. 프로토타입 개발과 도메인 리서치를 거쳐 아주대학교요양병원과 PoC 협의를 진행했고, 현재 내부 PoC 최종 검토 단계에 진입해 있습니다.",
    highlights: [
      "헬스케어 도메인 리서치 및 요양병원 운영 구조 파악",
      "AI 챗봇 프로토타입 개발 (Next.js + OpenAI API)",
      "아주대학교요양병원 총무팀 팀장 및 기획팀 팀장 미팅",
      "내부 PoC 최종 검토 단계 진입",
    ],
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "요양병원에 가족을 모신 보호자들은 환자 상태에 대한 정보 비대칭을 겪습니다. 의료진은 매번 같은 질문에 답하느라 본업 시간이 줄어듭니다.",
          "양쪽 모두 지쳐 있습니다.",
        ],
      },
      {
        title: "Approach",
        paragraphs: [
          "1차 응대를 AI 챗봇이 맡고, 의료진은 진짜로 사람의 판단이 필요한 영역에 집중하게 합니다.",
          "챗봇은 매니페스토적 의미에서 ‘사람을 대체’하는 게 아니라, ‘사람이 사람일 수 있도록 시간을 만드는’ 도구입니다.",
        ],
      },
      {
        title: "Process",
        items: [
          "2024 — 도메인 리서치 시작",
          "2024 — 프로토타입 개발 (Next.js, OpenAI API)",
          "2025 — 아주대학교요양병원 컨택",
          "2025 — 총무팀 / 기획팀 팀장 미팅",
          "2025 — 내부 PoC 최종 검토 단계 진입",
        ],
      },
      {
        title: "Status",
        paragraphs: [
          "프로젝트는 현재 진행 중이며, 이 페이지는 시점에 따라 업데이트됩니다.",
        ],
      },
    ],
    learning:
      "대학병원이라는 보수적 도메인에서, 24살의 학생 창업자가 팀장급 의사결정권자와 어떻게 신뢰를 만드는지에 대한 6개월. 기술 데모보다 더 중요한 건 그들의 언어로 가치를 번역해내는 일이었습니다. PoC 한 번에 도달하기까지 미팅마다 자료를 세 번씩 다시 만들었고, 그게 지금까지의 모든 학습 중 가장 값졌습니다.",
  },
  kmong: {
    slug: "kmong",
    name: "크몽 웹사이트 제작 서비스",
    tagline: "공식 입점 + 예시 페이지 (likerain)",
    period: "2025",
    role: "Service provider",
    status: "active",
    logoImage: "/projects/kmong-logo.png",
    logoAlt: "크몽 로고",
    image: "/projects/kmong-likerain.png",
    imageAlt: "likerain 예시 페이지 — A study in stillness",
    externalUrl: "https://kmong-5qwd.vercel.app/",
    externalLabel: "kmong-5qwd.vercel.app",
    highlights: [
      "크몽 공식 입점 심사 통과",
      "예시 페이지 likerain 직접 제작 (Next.js)",
      "향 브랜드 랜딩 — 정적이고 여백 중심의 UI",
      "거래 진행 중",
    ],
  },
};

export function isProjectSlug(s: string): s is ProjectSlug {
  return s in projects;
}
