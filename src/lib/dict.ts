export type Lang = "ko" | "en";

export type Dict = {
  // Top nav / language switch
  nav: {
    about: string;
    work: string;
    manifesto: string;
    contact: string;
  };

  // Hero
  hero: {
    eyebrow: string;
    name: string;            // "Junpyo Heo"
    nameKo: string;          // "허준표"
    role: string;            // tagline under the name
    intro: string;           // short hero intro paragraph
  };

  // About
  about: {
    eyebrow: string;
    body: string[];          // paragraphs
    meta: { label: string; value: string }[];
  };

  // Why Me
  whyMe: {
    eyebrow: string;
    title: string;
    cards: {
      tag: string;
      title: string;
      body: string;
      meta: string;
    }[];
  };

  // Selected Work
  work: {
    eyebrow: string;
    title: string;
    items: {
      slug?: string;
      href?: string;
      index: string;
      name: string;
      tagline: string;
      period: string;
      role?: string;
      meta: string;
    }[];
    cta: string;
  };

  // Contact
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { label: string; value: string; href: string }[];
  };

  // Footer
  footer: {
    line1: string;
    line2: string;
    serial: string;
  };

  // Common UI bits
  common: {
    readMore: string;
    placeholder: string;
    backHome: string;
    inProgress: string;
    viewSite: string;
  };
};

const ko: Dict = {
  nav: {
    about: "About",
    work: "Work",
    manifesto: "Manifesto",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Portfolio 2026 / Draft 01",
    name: "Junpyo Heo",
    nameKo: "허준표",
    role: "Founder · Builder · Brand thinker",
    intro:
      "AI 시대에, 사람만이 의도할 수 있는 결을 만드는 일에 관심이 있습니다. 이 사이트는 그 첫 번째 prototype입니다.",
  },
  about: {
    eyebrow: "About",
    body: [
      "창업을 두 번 했고, 두 번 다 만족스럽지 못하게 끝났습니다.",
      "그 과정에서 배운 건 사업 메커니즘이 아니라, 내가 어떤 결의 브랜드를 만들고 싶은지에 대한 명확한 그림이었습니다.",
      "지금은 그 그림을 현실로 만들기 위한 다음 단계를 준비하고 있습니다.",
    ],
    meta: [
      { label: "Age / Sex", value: "24 / Male" },
      { label: "Based in",  value: "Seoul, South Korea" },
      { label: "Studying",  value: "Business Intelligence, Ajou Univ. (3rd grade)" },
      { label: "Currently", value: "포트폴리오 사이트 + IOVE 브랜드 prototype" },
    ],
  },
  whyMe: {
    eyebrow: "Why me",
    title: "세 가지 결",
    cards: [
      {
        tag: "01 — Founder",
        title: "두 번의 창업, 그리고 그 안에서 배운 것",
        body:
          "Syna — 제품 변경 인텔리전스 SaaS, Living Spec Layer, 건축 인허가 AI 피벗 후 종료. 온이음 — 요양병원 AI, PoC 후 2026년 종료.",
        meta: "2024 — 2026",
      },
      {
        tag: "02 — Builder",
        title: "AI와 풀스택으로 빠르게 만드는 사람",
        body:
          "Next.js / TypeScript / OpenAI API 풀스택 개발. Cursor + Claude Code 기반의 AI-assisted 개발. 크몽 공식 입점 (웹사이트 제작 서비스 심사 통과 + 예시 페이지). 다수 프로젝트 직접 빌드.",
        meta: "2023 — 현재",
      },
      {
        tag: "03 — Brand thinker",
        title: "결을 글로, 그리고 시각으로 만드는 사람",
        body:
          "의도된 결핍의 미학을 추구하는 브랜드 IOVE를 구상 중. 아더에러, 앤더슨벨, 르메르의 결을 좋아하고, 한국 패션 브랜드의 글로벌 성장 케이스에 깊이 관심 있음. 자세한 brand thinking은 매니페스토와 IOVE 페이지에서.",
        meta: "Ongoing",
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "지금까지 만든 것들",
    items: [
      {
        slug: "syna",
        index: "01",
        name: "Syna",
        tagline: "제품 변경 인텔리전스 · Living Spec → 피벗 · 종료",
        period: "2024.11 — 2026.04",
        role: "Founder & CEO",
        meta: "B2B SaaS · 4인 팀 · 검증 스프린트 · 종료",
      },
      {
        slug: "on-eum",
        index: "02",
        name: "온이음",
        tagline: "요양병원을 위한 헬스케어 AI 챗봇, 그리고 그 종료",
        period: "2024 — 2026",
        role: "Founder",
        meta: "Healthcare AI · PoC · 종료",
      },
      {
        slug: "kmong",
        index: "03",
        name: "크몽 웹사이트 제작 서비스",
        tagline: "공식 입점 + likerain 예시 페이지",
        period: "2025",
        meta: "Service · kmong-5qwd.vercel.app",
      },
      {
        index: "04",
        name: "This Portfolio Site",
        tagline: "이 사이트 자체가 작품이다",
        period: "2026.05",
        meta: "Next.js · Tailwind · IOVE prototype",
      },
    ],
    cta: "자세히 보기",
  },
  contact: {
    eyebrow: "Contact",
    title: "Want to talk?",
    intro:
      "브랜드, 인턴, 혹은 그냥 결이 맞는 사람과의 대화. 무엇이든 환영입니다.",
    items: [
      { label: "Email",     value: "soojeen20000@gmail.com",                       href: "mailto:soojeen20000@gmail.com" },
      { label: "Instagram", value: "@treelife0405",                                  href: "https://instagram.com/treelife0405" },
      { label: "LinkedIn",  value: "linkedin.com/in/junpyo-heo",                    href: "https://www.linkedin.com/in/junpyo-heo-978666365/" },
    ],
  },
  footer: {
    line1: "Designed and built by Junpyo Heo, 2026.",
    line2: "This site is the first prototype of a future brand.",
    serial: "#001 / 500",
  },
  common: {
    readMore: "Read more",
    placeholder: "상세 페이지는 곧 채워질 예정입니다.",
    backHome: "← Back to home",
    inProgress: "Work in progress",
    viewSite: "사이트 보기",
  },
};

const en: Dict = {
  nav: {
    about: "About",
    work: "Work",
    manifesto: "Manifesto",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Portfolio 2026 / Draft 01",
    name: "Junpyo Heo",
    nameKo: "허준표",
    role: "Founder · Builder · Brand thinker",
    intro:
      "In an age of AI, I'm interested in the texture only people can intend. This site is the first prototype of that pursuit.",
  },
  about: {
    eyebrow: "About",
    body: [
      "I founded two startups. Both ended in ways I wasn't satisfied with.",
      "What I took from them wasn't the mechanics of business — it was a clearer picture of what kind of brand I want to build.",
      "I'm now preparing the next step toward making that picture real.",
    ],
    meta: [
      { label: "Age / Sex", value: "24 / Male" },
      { label: "Based in",  value: "Seoul, South Korea" },
      { label: "Studying",  value: "Business Intelligence, Ajou Univ. (Junior)" },
      { label: "Currently", value: "This portfolio + IOVE brand prototype" },
    ],
  },
  whyMe: {
    eyebrow: "Why me",
    title: "Three textures",
    cards: [
      {
        tag: "01 — Founder",
        title: "Two startups, and what I took from them",
        body:
          "Syna — B2B SaaS: 4-person team, pivot, sunset. On-eum — healthcare AI for nursing hospitals: PoC with Ajou University Hospital, ended in 2026.",
        meta: "2024 — 2026",
      },
      {
        tag: "02 — Builder",
        title: "Shipping fast with AI and full-stack",
        body:
          "Next.js / TypeScript / OpenAI API full-stack. AI-assisted development with Cursor + Claude Code. Officially listed as a website-building service on Kmong. Many projects shipped solo.",
        meta: "2023 — present",
      },
      {
        tag: "03 — Brand thinker",
        title: "Translating texture into language and image",
        body:
          "Designing IOVE — a brand around intended imperfection. Drawn to ader error, Andersson Bell, and Lemaire, and to Korean fashion going global. The deeper thinking lives in the manifesto and the IOVE page.",
        meta: "Ongoing",
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "What I've built so far",
    items: [
      {
        slug: "syna",
        index: "01",
        name: "Syna",
        tagline: "A product-change intelligence SaaS, and how it ended",
        period: "Nov 2024 — Apr 2026",
        role: "Founder & CEO",
        meta: "B2B SaaS · team of 4 · pivot · sunset",
      },
      {
        slug: "on-eum",
        index: "02",
        name: "On-eum",
        tagline: "A healthcare AI chatbot for nursing hospitals, and how it ended",
        period: "2024 — 2026",
        role: "Founder",
        meta: "Healthcare AI · PoC · ended",
      },
      {
        slug: "kmong",
        index: "03",
        name: "Kmong website service",
        tagline: "Official listing + likerain example site",
        period: "2025",
        meta: "Service · kmong-5qwd.vercel.app",
      },
      {
        index: "04",
        name: "This portfolio site",
        tagline: "The site itself is the work",
        period: "May 2026",
        meta: "Next.js · Tailwind · IOVE prototype",
      },
    ],
    cta: "Read more",
  },
  contact: {
    eyebrow: "Contact",
    title: "Want to talk?",
    intro:
      "About a brand, an internship, or simply finding the same texture in conversation. Anything is welcome.",
    items: [
      { label: "Email",     value: "soojeen20000@gmail.com",                       href: "mailto:soojeen20000@gmail.com" },
      { label: "Instagram", value: "@treelife0405",                                  href: "https://instagram.com/treelife0405" },
      { label: "LinkedIn",  value: "linkedin.com/in/junpyo-heo",                    href: "https://www.linkedin.com/in/junpyo-heo-978666365/" },
    ],
  },
  footer: {
    line1: "Designed and built by Junpyo Heo, 2026.",
    line2: "This site is the first prototype of a future brand.",
    serial: "#001 / 500",
  },
  common: {
    readMore: "Read more",
    placeholder: "Detail page coming soon.",
    backHome: "← Back to home",
    inProgress: "Work in progress",
    viewSite: "View site",
  },
};

export const dict: Record<Lang, Dict> = { ko, en };
