export const site = {
  brand: {
    kr: "니니의엑셀",
    en: "NINIEXCEL",
  },
  hero: {
    eyebrow: "NINIEXCEL · INSTRUCTOR",
    headline1: "엑셀과 AI를 실무에서",
    headline2: "바로 쓰도록 가르칩니다.",
  },
  contact: {
    email: "haemin2525@naver.com",
    inquiryRoute: "#/inquiry",
  },
  clientele: [
    {
      label: "기업",
      items: ["현대자동차", "한샘", "광주은행", "OK저축은행", "롯데케미칼"],
    },
    {
      label: "공공",
      items: ["한국경제진흥원", "도봉구청", "한밭대", "군포시청", "하남시청", "철도노조", "서울장학재단"],
    },
    {
      label: "플랫폼",
      items: ["인프런", "패스트캠퍼스", "탈잉", "크몽", "프립"],
    },
  ],
  inquiry: {
    formspreeEndpoint: "https://formspree.io/f/mvzlvdbp",
    title: "강의 의뢰하기",
    intro: "아래 항목을 채워 보내주시면 2영업일 이내에 회신드립니다.",
    topics: [
      { slug: "excel-basic", label: "엑셀 기본 — 일머리부터" },
      { slug: "excel-intermediate", label: "엑셀 중급 — 막히던 업무를 스스로" },
      { slug: "pivot-table", label: "피벗테이블 단독 클래스" },
      { slug: "claude-in-excel", label: "클로드인엑셀" },
      { slug: "claude-cowork-automation", label: "클로드코워크로 엑셀 자동화" },
      { slug: "undecided", label: "아직 미정" },
    ],
  },
  social: {
    youtube: "https://www.youtube.com/@niniexcel",
    tumblbug: "https://tumblbug.com/u/ewwfkjmcajgzmryk",
    smartstore: "https://smartstore.naver.com/mondaykeeper",
  },
  process: [
    { label: "01 · 분야", title: "엑셀과 데이터", body: "비전공자가 실무에서 쓰는 도구로" },
    { label: "02 · 경력", title: "출강 6년차", body: "기업·공공·플랫폼 강의 누적" },
    { label: "03 · 방식", title: "현장 맞춤 설계", body: "대상자에 맞춰 커리큘럼 조정" },
    { label: "04 · 응답", title: "2영업일 회신", body: "메일로 의뢰 내용을 정리해 주세요" },
  ],
} as const;
