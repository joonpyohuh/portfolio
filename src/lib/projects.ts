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
    tagline: "B2B SaaS — 포지셔닝·피치·피벗, 그리고 ‘누구에게 어떤 말로’를 다시 쓴 16개월",
    period: "2024.11 — 2026.04",
    role: "Founder & CEO",
    status: "ended",
    logoImage: "/projects/syna-logo.png",
    logoAlt: "Syna 로고",
    summary:
      "제품 변경 인텔리전스 B2B SaaS. 기술만이 아니라 ‘이 제품이 누구에게, 어떤 결의 말을 하는가’를 피벗마다 다시 썼습니다. 사업계획서·피치덱·지원 프로그램 대응까지 — 브랜드 마케팅처럼 결을 정하고, 그 결이 닿는지 검증하는 16개월이었습니다.",
    highlights: [
      "4인 팀 — 포지셔닝·내러티브를 팀 안에서 맞추는 일 (CEO, TPM, 디자이너, 개발자)",
      "피벗마다 ICP·메시지·피치 스토리 재작성",
      "두어스 · 모두의창업 — 브랜드·사업 스토리로 심사 대응",
      "Living Spec → 건축 인허가 AI로 피벗, 4주 검증 스프린트",
      "2026.04 종료 — ‘닿지 않는 결’을 스스로 끊는 결정",
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
      {
        title: "Brand marketing lens",
        paragraphs: [
          "Syna에서 제가 가장 많이 한 일은 코드보다 말이었습니다. ‘누구의 pain인지’, ‘왜 지금인지’, ‘왜 우리 팀인지’ — 피벗할 때마다 이 세 문장을 다시 썼고, 그 문장이 팀·투자자·프로그램 심사위원 앞에서 통하는지 확인했습니다.",
          "패션 브랜드 마케팅도 같다고 느꼈습니다. 컬렉션의 결을 정하고, 그 결이 편집샵·바이어·고객에게 같은 말로 닿는지 검증하는 일. Syna는 그 연습이 가장 거칠었던 16개월이었습니다.",
        ],
      },
    ],
    learning:
      "‘기술을 만들 수 있다’와 ‘이 메시지가 지금 이 사람에게 닿는다’는 별개라는 걸 배웠습니다. 브랜드 마케팅에서도 결을 아름답게 쓰는 것만으로는 부족하고, 그 결이 실제 구매·협의·PoC의 문 앞에서 통하는지가 갈림길입니다. Syna를 접었지만, 피벗마다 내러티브를 다시 쓴 경험은 이후 모든 브랜드·캠페인 작업의 기준이 됩니다.",
  },
  "on-eum": {
    slug: "on-eum",
    name: "온이음",
    tagline: "헬스케어 AI — 보수적 B2B에서 결을 그들의 언어로 전달, PoC 최종 검토까지",
    period: "2024 — Present",
    role: "Founder",
    status: "active",
    statusLabel: "PoC Discussion",
    logoImage: "/projects/on-eum-logo.png",
    logoAlt: "온이음 ONIIUM 로고",
    summary:
      "요양병원 AI 챗봇. 데모보다 먼저 한 일은 ‘병원이 왜 우리 서비스를 사용해야 하는가’를 그들의 언어로 설명하는 것이었습니다. 아주대학교요양병원 팀장급과 직접 미팅했고, 내부 PoC 최종 검토 단계까지 왔습니다.",
    highlights: [
      "보수적 B2B — 팀장급 의사결정권자 대상 스토리·제안서 작성",
      "미팅마다 제안 자료를 다시 쓰며 메시지 정교화",
      "AI 챗봇 프로토타입 (Next.js + OpenAI API) — 말 뒤에 온 증거",
      "아주대학교요양병원 총무팀·기획팀 팀장 미팅",
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
        title: "Brand marketing lens",
        paragraphs: [
          "온이음에서 ‘제품’은 챗봇이었지만, ‘마케팅’은 매 미팅 앞에 놓는 한 줄이었습니다. 병원 입장에서의 리스크, 보호자 입장에서의 안심, 의료진 입장에서의 시간 — 같은 서비스를 세 가지 말로 나눠 썼습니다.",
          "패션 브랜드가 백화점 바이어에게 ‘이 시즌 왜 이 결인가’를 설명하는 것과 구조가 같다고 느꼈습니다. 도메인만 다를 뿐, 결을 지키면서 상대의 언어로 번역하는 일은 같습니다.",
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
      "대학병원 앞에서 배운 건, 브랜드 마케팅의 B2B면과 가장 가깝다는 것이었습니다. 기술 데모는 뒤에 두고, ‘병원이 왜 우리 서비스를 사용해야 하는가’를 먼저 설명하는 일. PoC까지 오기 위해 제안서를 여러 번 다시 만들었고, 그 과정이 지금 패션 브랜드 마케팅을 지망하는 이유와 직결됩니다.",
  },
  kmong: {
    slug: "kmong",
    name: "크몽 웹사이트 제작 서비스",
    tagline: "공식 입점 + B2C 거래 + likerain 예시 페이지",
    period: "2025",
    role: "Service provider",
    status: "active",
    logoImage: "/projects/kmong-logo.png",
    logoAlt: "크몽 로고",
    image: "/projects/kmong-likerain.png",
    imageAlt: "likerain 예시 페이지 — A study in stillness",
    externalUrl: "https://kmong-5qwd.vercel.app/",
    externalLabel: "kmong-5qwd.vercel.app",
    summary:
      "크몽 공식 입점 웹사이트 제작 서비스. B2B형 제안·패키징 경험과 함께, 크몽 플랫폼을 통한 B2C — 개인 고객에게 직접 소통하고 거래하는 경험도 했습니다.",
    highlights: [
      "크몽 공식 입점 심사 통과",
      "B2C — 개인·소규모 클라이언트 대상 제안·소통·거래",
      "예시 페이지 likerain 직접 제작 (Next.js)",
      "향 브랜드 랜딩 — 정적이고 여백 중심의 UI",
      "서비스 패키징 · 가격 책정 · 타겟 제안 사이클",
    ],
  },
};

export function isProjectSlug(s: string): s is ProjectSlug {
  return s in projects;
}
