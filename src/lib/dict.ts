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

  // Hero — statement of intent
  hero: {
    metaName: string;     // "JUNPYO HEO — 2026"
    headline: string[];   // multi-line statement
    sub: string[];        // sub-statement lines
    scroll: string;
  };

  // About — "Why I'm here"
  about: {
    eyebrow: string;
    body: string[];          // paragraphs
    signature: string[];     // two short signature lines
  };

  // Why Me — 3 cards (kicker + headline + body + bullets + link)
  whyMe: {
    eyebrow: string;
    title: string;
    cards: {
      kicker: string;
      headline: string;
      body: string;
      bullets: string[];
      link: { href: string; label: string };
    }[];
    outro: string;
  };

  // On Brand Marketing — essay
  onBrandMarketing: {
    eyebrow: string;
    paragraphs: string[];
    date: string;
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
      takeaway?: string;
    }[];
    cta: string;
    takeawayLabel: string;
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
    metaName: "JUNPYO HEO — 2026",
    headline: [
      "브랜드의 결을 쓰는 일,",
      "그 결을 사람들에게 닿게 하는 일.",
      "",
      "이 둘이 같은 일이라고 믿는 사람.",
    ],
    sub: [
      "브랜드 마케팅을 지망합니다.",
      "글과 코드를 같이 다루고, 두 번의 창업에서 사업이 어떻게 만들어지는지 봤습니다.",
    ],
    scroll: "스크롤",
  },
  about: {
    eyebrow: "Why I'm here",
    body: [
      "패션을 전공하지 않았습니다. 비즈니스 인텔리전스를 전공하고, 두 번의 창업을 했고, 그 안에서 사업이 종이 위가 아니라 사람과 사람 사이에서 만들어진다는 걸 배웠습니다.",
      "지금은 한국 디자이너 브랜드들이 만들어내는 결을 가장 가까이서 보고 싶습니다. 어떻게 컬렉션이 결을 가지고, 그 결이 어떻게 사람들에게 닿는지. 브랜드 마케팅이 그 과정의 가장 가운데 있다고 생각합니다.",
    ],
    signature: [
      "— 24 / Junior at Ajou Univ",
      "— Building: this site, and the manifesto behind it",
    ],
  },
  whyMe: {
    eyebrow: "Why me",
    title: "세 가지 결",
    cards: [
      {
        kicker: "결을 글로 쓸 수 있는 사람",
        headline: "매니페스토를 쓰는 일.",
        body:
          "브랜드 마케팅의 출발은 결국 ‘이 브랜드는 어떤 결의 말을 하는가’ 입니다. 저는 글로 결을 정의하는 일에 익숙합니다.",
        bullets: [
          "본인 브랜드 iove. 매니페스토 작성",
          "이 사이트의 모든 카피 직접 작성",
          "B-CUBE 소학회의 톤 가이드 담당",
        ],
        link: { href: "/manifesto", label: "Read manifesto →" },
      },
      {
        kicker: "결을 현실로 만드는 사람",
        headline: "글에서 멈추지 않는 일.",
        body:
          "매니페스토만 쓰고 끝내는 사람이 아닙니다. 그 결을 작동하는 사이트로, 실행 가능한 캠페인으로 옮길 수 있습니다. 직접.",
        bullets: [
          "Next.js / TypeScript 풀스택 (이 사이트도 직접 빌드)",
          "Cursor + Claude Code 기반 AI-assisted 빌딩",
          "B-CUBE에서 후배들에게 직접 가르치는 중",
        ],
        link: { href: "/#work", label: "See projects →" },
      },
      {
        kicker: "사람과 부딪혀본 사람",
        headline: "어른과 거래해본 24살.",
        body:
          "대부분의 학생은 캠페인 리서치는 해봤어도 의사결정권자 앞에 서본 적이 없습니다. 저는 두 번의 창업에서 그 자리에 있었습니다.",
        bullets: [
          "아주대학교요양병원 총무팀·기획팀 팀장 미팅 / PoC 최종 검토 진입",
          "지역 상권 살리기 프로젝트에서 상인회장 직접 미팅",
          "Syna 4인 팀 운영 및 두어스 어플라이",
        ],
        link: { href: "/#experience", label: "See experience →" },
      },
    ],
    outro:
      "AI 와 가장 가까운 곳에 있다가, 이제는 인간만의 비효율과 창의성, 그 집합소인 패션에 관심을 가지게 된 24살 청년입니다.",
  },
  onBrandMarketing: {
    eyebrow: "On brand marketing",
    paragraphs: [
      "브랜드 마케팅은 결국 두 가지 일을 동시에 하는 직무라고 생각합니다.",
      "하나는 브랜드의 결을 매번 다시 정의하는 일. 매 시즌, 매 캠페인, 매 콘텐츠에서 같은 결을 다른 모습으로 변주하는 일.",
      "다른 하나는 그 결을 사람들에게 닿게 하는 일. 결을 잃지 않으면서도 사람들이 발견하고, 입어보고, 사랑하게 만드는 일.",
      "이 두 가지가 자주 충돌합니다. 결을 지키려면 닿기 어렵고, 닿으려면 결이 흐려집니다. 그 사이에서 매번 새로운 균형을 찾는 일이 브랜드 마케팅이라고 생각합니다.",
      "저는 글로 결을 쓰는 일과 코드로 결을 작동시키는 일을 동시에 할 수 있고, 그 사이의 균형을 찾는 일에 흥미를 느낍니다.",
    ],
    date: "— 2026.05",
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
        takeaway:
          "시장이 원하는 걸 검증하지 않은 채로 만들면 어떻게 되는지를 4인 팀과 16개월에 걸쳐 배웠습니다. 마케팅의 출발이 결국 ‘누구의 어떤 needs에 답하는가’라는 걸 가장 비싼 수업료로.",
      },
      {
        slug: "on-eum",
        index: "02",
        name: "온이음",
        tagline: "요양병원을 위한 헬스케어 AI 챗봇 — 대학병원 PoC 최종 검토까지",
        period: "2024 — Present",
        role: "Founder",
        meta: "Healthcare AI · PoC Discussion",
        takeaway:
          "보수적 도메인의 의사결정권자에게 가치를 그들의 언어로 번역하는 일. 패션 브랜드의 B2B 영역 — 편집샵, 백화점, 글로벌 바이어 — 와 크게 다르지 않다고 생각합니다.",
      },
      {
        slug: "kmong",
        index: "03",
        name: "크몽 웹사이트 제작 서비스",
        tagline: "공식 입점 + likerain 예시 페이지",
        period: "2025",
        meta: "Service · kmong-5qwd.vercel.app",
        takeaway:
          "서비스를 패키징하고 가격을 정하고 타겟에게 제안하는 일련의 사이클을 직접 굴려본 경험.",
      },
      {
        index: "04",
        name: "This Portfolio Site",
        tagline: "이 사이트 자체가 작품이다",
        period: "2026.05",
        meta: "IOVE · iove.vercel.app",
        takeaway:
          "매니페스토에 적은 톤을 실제로 작동하는 페이지로 옮기는 일이 얼마나 디테일한 작업인지. 톤은 폰트 굵기와 여백 사이에 산다는 걸.",
      },
      {
        href: "/project/future-brand",
        index: "05",
        name: "iove.",
        tagline: "Atelier of Cold Light — 가상이지만 진지한 브랜드 프로토타입",
        period: "2026",
        meta: "Brand prototype · iove.vercel.app",
        takeaway:
          "가상이지만 진지한 브랜드 프로토타입을 만드는 일이 브랜드 마케팅의 가장 좋은 훈련이라고 생각합니다.",
      },
    ],
    cta: "자세히 보기",
    takeawayLabel: "What I took from this",
  },
  contact: {
    eyebrow: "Let's talk",
    title: "LET'S TALK",
    intro:
      "브랜드 마케팅 자리, 인턴/주니어 자리에 관심 많습니다. 간단한 미팅이든 이메일이든 환영합니다.",
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
    metaName: "JUNPYO HEO — 2026",
    headline: [
      "Writing the texture of a brand,",
      "and carrying that texture to people.",
      "",
      "I believe these are the same work.",
    ],
    sub: [
      "Aiming for brand marketing.",
      "I work in both words and code, and I've seen — through two startups — how a business actually gets built.",
    ],
    scroll: "Scroll",
  },
  about: {
    eyebrow: "Why I'm here",
    body: [
      "I didn't major in fashion. I study Business Intelligence, founded two startups, and learned along the way that a business is built between people, not on paper.",
      "Now I want to be closest to the texture that Korean designer brands carry. How a collection holds a texture, and how that texture reaches people. I think brand marketing sits at the center of that.",
    ],
    signature: [
      "— 24 / Junior at Ajou Univ",
      "— Building: this site, and the manifesto behind it",
    ],
  },
  whyMe: {
    eyebrow: "Why me",
    title: "Three textures",
    cards: [
      {
        kicker: "Someone who can write the texture",
        headline: "Writing the manifesto.",
        body:
          "Brand marketing starts from ‘what kind of voice does this brand speak in’. I'm used to defining that texture in writing.",
        bullets: [
          "Wrote the manifesto for my own brand iove.",
          "Wrote every line of copy on this site",
          "Lead the tone guide of the B-CUBE society",
        ],
        link: { href: "/manifesto", label: "Read manifesto →" },
      },
      {
        kicker: "Someone who can make the texture real",
        headline: "Not stopping at the page.",
        body:
          "I'm not the kind of person who writes a manifesto and walks away. I can move that texture into a working site, a runnable campaign. Hands on.",
        bullets: [
          "Next.js / TypeScript full-stack (this site, shipped solo)",
          "AI-assisted building with Cursor + Claude Code",
          "Teaching juniors directly at B-CUBE right now",
        ],
        link: { href: "/#work", label: "See projects →" },
      },
      {
        kicker: "Someone who has actually sat across from people",
        headline: "A 24-year-old who has negotiated with adults.",
        body:
          "Most students have done campaign research, but few have sat across from a real decision-maker. Through two startups, I have.",
        bullets: [
          "Meetings with Ajou Univ. Hospital General Affairs / Strategy heads — into final PoC review",
          "Met the merchants' association president for a local-economy project",
          "Ran Syna's team of four and applied to Doors",
        ],
        link: { href: "/#experience", label: "See experience →" },
      },
    ],
    outro:
      "As close to AI as one can be — now a 24-year-old drawn to the inefficiency and creativity only humans hold, and to fashion, where they gather.",
  },
  onBrandMarketing: {
    eyebrow: "On brand marketing",
    paragraphs: [
      "I think brand marketing is, in the end, two jobs done at once.",
      "One is redefining the texture of the brand every time. Every season, every campaign, every piece of content — the same texture worn in a different shape.",
      "The other is carrying that texture to people. Letting them discover it, try it on, love it — without losing the texture along the way.",
      "These two often pull against each other. Keep the texture and it's hard to reach. Reach and the texture goes blurry. I think brand marketing is finding a new balance between them, again and again.",
      "I can write that texture in words, and make it run in code. Finding the balance between the two is the kind of work I'm most drawn to.",
    ],
    date: "— 2026.05",
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
        takeaway:
          "Sixteen months with a team of four taught me what happens when you build before validating demand. Marketing starts from one question — ‘whose needs are you answering, and to what’ — and I learned it the most expensive way.",
      },
      {
        slug: "on-eum",
        index: "02",
        name: "On-eum",
        tagline: "Healthcare AI for nursing hospitals — into final PoC review with a university hospital",
        period: "2024 — Present",
        role: "Founder",
        meta: "Healthcare AI · PoC Discussion",
        takeaway:
          "Translating value into a decision-maker's language inside a conservative domain. Not so different, I think, from a fashion brand's B2B side — concept stores, department buyers, global accounts.",
      },
      {
        slug: "kmong",
        index: "03",
        name: "Kmong website service",
        tagline: "Official listing + likerain example site",
        period: "2025",
        meta: "Service · kmong-5qwd.vercel.app",
        takeaway:
          "Packaging a service, pricing it, pitching it to the right audience — running that full cycle, by myself.",
      },
      {
        index: "04",
        name: "This portfolio site",
        tagline: "The site itself is the work",
        period: "May 2026",
        meta: "IOVE · iove.vercel.app",
        takeaway:
          "How detailed it is to move the tone written in a manifesto into a working page. Tone lives in the gap between font weight and whitespace.",
      },
      {
        href: "/project/future-brand",
        index: "05",
        name: "iove.",
        tagline: "Atelier of Cold Light — a serious prototype of a fictional brand",
        period: "2026",
        meta: "Brand prototype · iove.vercel.app",
        takeaway:
          "Building a serious prototype for a fictional brand is, I think, the best training there is for brand marketing.",
      },
    ],
    cta: "Read more",
    takeawayLabel: "What I took from this",
  },
  contact: {
    eyebrow: "Let's talk",
    title: "LET'S TALK",
    intro:
      "Open to brand marketing roles — intern or junior. A short meeting or an email, both welcome.",
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
