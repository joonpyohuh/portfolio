export type Lang = "ko" | "en";

export type Dict = {
  // Top nav / language switch
  nav: {
    about: string;
    work: string;
    awards: string;
    certifications: string;
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
    outro: string;
  };

  // Experience timeline
  experience: {
    eyebrow: string;
    period: string;
    intro: string;
    items: {
      period: string;
      ongoing?: boolean;
      org: string;
      role: string;
      details: string[];
      href?: string;
      linkLabel?: string;
    }[];
  };

  // Certifications
  certifications: {
    eyebrow: string;
    title: string;
    items: {
      name: string;
      level: string;
      issuer: string;
      note: string;
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
    viewAwards: string;
    backExperience: string;
  };
};

const ko: Dict = {
  nav: {
    about: "About",
    work: "Work",
    awards: "Awards",
    certifications: "Certs",
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
      { label: "Certifications", value: "OPIC IH · ITQ 한글 파워포인트 B" },
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
          "Syna (B2B SaaS, 제품 변경 인텔리전스) — 4인 팀 빌딩, 피벗 의사결정, 사업계획서 작성, 모두의창업·두어스 어플라이.\n\n온이음 (헬스케어 AI, 요양병원) — 프로토타입 개발에서 멈추지 않고 아주대학교요양병원 팀장급과 직접 미팅, PoC 최종 검토 단계까지 진입.\n\n두 번 다 만족스럽게 끝나진 않았다. 하지만 사업이 종이 위가 아니라 사람과 사람 사이에서 만들어진다는 걸 두 번 다 배웠다.",
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
    outro:
      "AI 와 가장 가까운 곳에 있다가, 이제는 인간만의 비효율과 창의성, 그 집합소인 패션에 관심을 가지게 된 24살 청년입니다.",
  },
  experience: {
    eyebrow: "Experience",
    period: "2024 — 2026",
    intro:
      "창업과 빌딩만 한 건 아니다. 동아리와 소학회에서 사람을 모으고, 가르치고, 운영했다.",
    items: [
      {
        period: "2026.03 — Present",
        ongoing: true,
        org: "B-CUBE",
        role: "아주대학교 경영인텔리전스학과 소학회 / 운영진, 스터디 리더, 디자인 톤 리더",
        details: [
          "Vibe coding 스터디 직접 운영 및 강의",
          "소학회 시각 아이덴티티 및 디자인 톤 담당",
          "비전공 신입에게 AI 활용 풀스택 빌딩 교육",
        ],
      },
      {
        period: "2025",
        org: "경영인텔리전스학과 해커톤",
        role: "1등 (대상) · 팀 참가 · 기획 · 개발",
        details: [
          "학과 주최 해커톤에서 팀 프로젝트로 대상 수상",
          "문제 정의부터 Next.js 프로토타입·발표까지 담당",
        ],
        href: "/awards",
        linkLabel: "수상 경력 보기 →",
      },
      {
        period: "2025",
        org: "ASAP",
        role: "IT 기획 동아리 / 운영진",
        details: [
          "웹사이트 기획 및 개발 전반 진행",
          "신규 멤버 온보딩 및 프로젝트 매니징",
        ],
      },
      {
        period: "2025",
        org: "AD-BRAIN",
        role: "마케팅 동아리 / 멤버",
        details: [
          "지역 상권 살리기 프로젝트 참여",
          "상인회 회장과 직접 미팅 및 마케팅 제안",
          "오프라인 현장 기반 마케팅 실행 경험",
        ],
      },
    ],
  },
  certifications: {
    eyebrow: "Certifications",
    title: "자격증",
    items: [
      {
        name: "OPIC",
        level: "IH (Intermediate High)",
        issuer: "ACTFL · Oral Proficiency Interview-computerized",
        note: "영어 말하기 능력 평가. IH 등급은 일상·업무 맥락에서 실용적 의사소통이 가능한 수준입니다.",
      },
      {
        name: "ITQ",
        level: "한글 파워포인트 B등급",
        issuer: "한국생산성본부 · 정보기술자격 (ITQ)",
        note: "마케팅·기획 직무에서 중요하게 보는 MS Office 실무 역량. 파워포인트 기반 발표 자료, 브랜드 덱·기획서 제작에 활용합니다.",
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
        tagline: "요양병원을 위한 헬스케어 AI 챗봇 — 대학병원 PoC 최종 검토까지",
        period: "2024 — Present",
        role: "Founder",
        meta: "Healthcare AI · PoC Discussion",
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
        meta: "IOVE · iove.vercel.app",
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
    viewAwards: "수상 경력 보기",
    backExperience: "← Experience로 돌아가기",
  },
};

const en: Dict = {
  nav: {
    about: "About",
    work: "Work",
    awards: "Awards",
    certifications: "Certs",
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
      { label: "Certifications", value: "OPIC IH · ITQ PowerPoint B" },
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
          "Syna (B2B SaaS, product-change intelligence) — built a team of four, drove the pivot, wrote the deck, applied to MoDuEui-changup and Doors.\n\nOn-eum (healthcare AI for nursing hospitals) — went past the prototype, met department heads at Ajou University Hospital, reached the final stage of internal PoC review.\n\nNeither ended the way I wanted. But I learned, twice, that a business is built between people, not on paper.",
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
    outro:
      "As close to AI as one can be — now a 24-year-old drawn to the inefficiency and creativity only humans hold, and to fashion, where they gather.",
  },
  experience: {
    eyebrow: "Experience",
    period: "2024 — 2026",
    intro:
      "It wasn't only founding and building. I gathered, taught, and ran clubs and study societies on campus.",
    items: [
      {
        period: "2026.03 — Present",
        ongoing: true,
        org: "B-CUBE",
        role: "Business Intelligence Society, Ajou Univ. / Operator, Study Lead, Design Tone Lead",
        details: [
          "Run and lecture the Vibe coding study",
          "Own the visual identity and design tone of the society",
          "Teach AI-assisted full-stack building to non-CS newcomers",
        ],
      },
      {
        period: "2025",
        org: "Business Intelligence Dept. Hackathon",
        role: "1st place (Grand prize) · Team · Planning · Development",
        details: [
          "Won grand prize with a team project at the department hackathon",
          "Owned problem framing through Next.js prototype and final pitch",
        ],
        href: "/awards",
        linkLabel: "View award →",
      },
      {
        period: "2025",
        org: "ASAP",
        role: "IT planning club / Operator",
        details: [
          "Owned website planning and end-to-end development",
          "Onboarded new members, managed projects",
        ],
      },
      {
        period: "2025",
        org: "AD-BRAIN",
        role: "Marketing club / Member",
        details: [
          "Joined a local-economy revitalization project",
          "Met directly with the merchants' association president, proposed marketing",
          "Hands-on offline, on-site marketing execution",
        ],
      },
    ],
  },
  certifications: {
    eyebrow: "Certifications",
    title: "Certifications",
    items: [
      {
        name: "OPIC",
        level: "IH (Intermediate High)",
        issuer: "ACTFL · Oral Proficiency Interview-computerized",
        note: "English oral proficiency assessment. IH indicates practical communication in everyday and professional contexts.",
      },
      {
        name: "ITQ",
        level: "Korean PowerPoint · Grade B",
        issuer: "KPC · Information Technology Qualification (ITQ)",
        note: "MS Office skills valued in marketing and planning roles — decks, brand presentations, and planning documents in PowerPoint.",
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
        tagline: "Healthcare AI for nursing hospitals — into final PoC review with a university hospital",
        period: "2024 — Present",
        role: "Founder",
        meta: "Healthcare AI · PoC Discussion",
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
        meta: "IOVE · iove.vercel.app",
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
    viewAwards: "View award",
    backExperience: "← Back to Experience",
  },
};

export const dict: Record<Lang, Dict> = { ko, en };
