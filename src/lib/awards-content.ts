import type { Lang } from "./dict";

export type AwardSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type AwardsContent = {
  label: string;
  meta: string;
  rank: string;
  event: string;
  org: string;
  period: string;
  role: string;
  tagline: string;
  summary: string;
  sections: AwardSection[];
  takeaway: string;
};

const ko: AwardsContent = {
  label: "Awards",
  meta: "2025 / Ajou University",
  rank: "1등 (대상)",
  event: "경영인텔리전스학과 해커톤",
  org: "아주대학교 경영인텔리전스학과",
  period: "2025",
  role: "팀 참가 · 기획 · 개발",
  tagline: "학과 안에서, 짧은 시간에 문제를 정의하고 결과까지 만든 기록",
  summary:
    "아주대학교 경영인텔리전스학과에서 주최한 학과 해커톤에 팀으로 참가해 1등(대상)을 수상했습니다. 제한된 시간 안에 문제를 정의하고, 데이터·AI를 활용한 솔루션을 기획부터 구현까지 끝까지 밀어붙인 경험입니다.",
  sections: [
    {
      title: "Context",
      paragraphs: [
        "경영인텔리전스학과 해커톤은 학과생이 한 팀이 되어 실제 비즈니스·데이터 문제를 다루는 장입니다. 발표와 시연까지 포함된 짧은 스프린트 형식이었습니다.",
      ],
    },
    {
      title: "What I did",
      items: [
        "팀 아이디어 구체화 및 발표 스토리라인 정리",
        "프로토타입 기획 — 사용자 흐름, 핵심 가설, 데모 시나리오",
        "Next.js 기반 프로토타입 개발 및 발표용 데모 완성",
        "심사위원·학과 교수진 앞 최종 발표",
      ],
    },
    {
      title: "Why it mattered",
      paragraphs: [
        "창업 이전, ‘아이디어를 말로만 끝내지 않고 하루 만에 보여줄 수 있는가’를 학과 안에서 처음 증명한 순간이었습니다.",
        "이후 B-CUBE 스터디 운영, ASAP 웹사이트, 크몽 서비스로 이어지는 빌딩 자신감의 출발점이기도 합니다.",
      ],
    },
  ],
  takeaway:
    "대상은 결과이지만, 더 기억에 남는 건 팀이 같은 언어로 문제를 정의하고 밤새까지 맞춰 간 시간입니다. 그 경험이 지금의 Founder·Builder 카드 안에도 남아 있습니다.",
};

const en: AwardsContent = {
  label: "Awards",
  meta: "2025 / Ajou University",
  rank: "1st place (Grand prize)",
  event: "Business Intelligence Dept. Hackathon",
  org: "Dept. of Business Intelligence, Ajou University",
  period: "2025",
  role: "Team · Planning · Development",
  tagline: "Defining a problem and shipping an outcome — inside the department, on a deadline",
  summary:
    "Our team entered the department hackathon at Ajou University’s Business Intelligence program and won first place (grand prize). In a tight window we defined the problem, built a data- and AI-informed solution, and carried it from planning through demo and final presentation.",
  sections: [
    {
      title: "Context",
      paragraphs: [
        "The hackathon brings students together on real business and data problems. It runs as a short sprint — idea, build, present, and demo — in front of faculty judges.",
      ],
    },
    {
      title: "What I did",
      items: [
        "Sharpened the team idea and presentation narrative",
        "Planned the prototype — user flow, core hypothesis, demo script",
        "Built the Next.js prototype and finished the presentation demo",
        "Final pitch to faculty judges",
      ],
    },
    {
      title: "Why it mattered",
      paragraphs: [
        "Before founding, it was the first proof inside the department that I could finish in a day — not only talk.",
        "It became the starting confidence for later work: running B-CUBE studies, ASAP’s website, and the Kmong service.",
      ],
    },
  ],
  takeaway:
    "The prize is the headline; what stays is the night the team aligned on one problem definition. That texture still lives in how I build today.",
};

export const awardsContent: Record<Lang, AwardsContent> = { ko, en };
