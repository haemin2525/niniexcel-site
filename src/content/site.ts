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
  topics: [
    {
      slug: "excel-basic",
      head: "엑셀 기본 — 일머리부터",
      sub: "단축키·클렌징·함수·피벗 첫걸음 — AI한테 시키려면 나도 알아야",
      duration: "약 4시간",
      sections: [
        {
          title: "핵심 모듈",
          items: [
            "업무 속도를 2배로 만드는 실무 단축키",
            "지저분한 데이터 정리하기 (데이터 클렌징·가공)",
            "안 쓰면 손해 보는 실무 함수 BEST",
            "3초 만에 보고서 만드는 피벗테이블 첫걸음",
          ],
        },
      ],
    },
    {
      slug: "excel-intermediate",
      head: "엑셀 중급 — 막히던 업무를 스스로",
      sub: "중첩 함수·시각화·보고서 자동화 + AI에게 일 시키기",
      duration: "약 6~8시간",
      sections: [
        {
          title: "핵심 모듈",
          items: [
            "데이터 분석에 필요한 다양한 시각화",
            "VLOOKUP·XLOOKUP, ifs / countifs / sumifs 활용한 중첩 함수 로직",
            "피벗테이블로 보고서 끝내기",
            "클로드와 함께하는 실무 엑셀 — AI에게 똑똑하게 일 시키기 (수식 프롬프트, 분석·보고서 활용, AI 한계)",
          ],
        },
      ],
    },
    {
      slug: "pivot-table",
      head: "피벗테이블 단독 클래스",
      sub: "수작업 보고서 끝내기 — 계산 필드·슬라이서·파워쿼리까지",
      duration: "약 4시간",
      sections: [
        {
          title: "핵심 모듈",
          items: [
            "피벗테이블 기본기 다지기",
            "계산 필드·그룹화·슬라이서 등 심화 기능",
            "상황별 보고서 만들기 (월별 매출, 부서별 실적, 추세 분석)",
            "피벗 차트로 데이터 시각화",
            "파워쿼리 + 피벗테이블 연계 맛보기",
          ],
        },
      ],
    },
    {
      slug: "claude-in-excel",
      head: "클로드인엑셀",
      sub: "셀·시트 안에서 단발 AI 호출 — 엑셀에 AI 데려오기",
      duration: "약 4시간",
      sections: [
        {
          title: "1. 엑셀 안에 AI 데려오기",
          items: ["클로드 인 엑셀 설치 → 첫 사용", "셀 안에서 AI 호출", "시트 통째로 분석"],
        },
        {
          title: "2. 기본 활용 — 매일 하던 엑셀 업무를 AI에게",
          items: ["함수 작성·오류 디버깅", "데이터 클렌징 (날짜·숫자 포맷)", "조건부 서식으로 시각화"],
        },
        {
          title: "3. 응용 활용",
          items: ["텍스트 자동 분류 (카테고리·긍부정)", "피벗테이블·차트 + AI 인사이트", "보고서 초안 작성"],
        },
        {
          title: "4. 한계와 다음 단계",
          items: ["여러 파일 넘나드는 작업의 한계", "클로드 웹·코워크가 더 적합한 영역"],
        },
      ],
    },
    {
      slug: "claude-cowork-automation",
      head: "클로드코워크로 엑셀 자동화",
      sub: "엑셀 잘 다루는 사람 → 엑셀을 시키는 사람",
      duration: "약 8시간 (1day)",
      sections: [
        {
          title: "1부. 클로드 웹 — AI 비서 처음 만나기",
          items: [
            "프롬프트 원칙 (좋은 예시 vs 나쁜 예시)",
            "Claude vs Gemini 결과 품질 비교",
            "여러 파일·시트 통합, HTML 대시보드, PDF·이미지 → 엑셀",
            "Gmail·캘린더·슬랙 커넥터 실무 활용",
          ],
        },
        {
          title: "2부. 클로드 코워크 — 내 컴퓨터를 AI에게 맡기기",
          items: [
            "로컬 파일을 직접 읽고 작업하는 구조",
            "월별 매출 통합, 지점별 파일 정리, 폴더 자동화",
            "자주 쓰는 작업을 '스킬'로 저장 + 스케줄 반복 실행",
            "풀 워크플로우 자동화 (파일 감지 → 통합 → 분석 → 리포트 → 메일·슬랙 발송)",
          ],
        },
      ],
    },
  ],
  talks: [
    { period: "2026.05", org: "한국경제진흥원", topic: "중장년 대상 고객관리 엑셀 × AI 자동화", category: "공공" },
    { period: "2026.04", org: "도봉구청", topic: "엑셀 활용 데이터분석 실무", category: "공공" },
    { period: "2026.03", org: "패스트캠퍼스", topic: "클로드웹·인엑셀·코워크 통합 자동화", category: "플랫폼" },
    { period: "2026.02", org: "한밭대학교", topic: "대학생 엑셀 실무", category: "공공" },
    { period: "2025.05", org: "철도노조", topic: "실무자 엑셀 활용", category: "공공" },
    { period: "2025.04", org: "광주은행", topic: "실무자 엑셀 활용", category: "기업" },
    { period: "2023", org: "서울장학재단", topic: "", category: "공공" },
    { period: "2023", org: "군포시청", topic: "", category: "공공" },
    { period: "2023", org: "하남시청", topic: "", category: "공공" },
    { period: "2023", org: "OK금융그룹", topic: "", category: "기업" },
    { period: "2022", org: "롯데케미칼", topic: "", category: "기업" },
    { period: "2021", org: "현대자동차", topic: "", category: "기업" },
    { period: "2020", org: "한샘", topic: "", category: "기업" },
  ],
  products: [
    {
      slug: "wedding-planner",
      channel: "TUMBLBUG · 펀딩",
      title: "세상에 없던, 꼭 필요한 웨딩 플래너",
      sub: "결혼 준비, 어디서부터 시작할지 모르는 예비부부를 위해",
      image: "products/wedding-planner.png",
      link: "https://tumblbug.com/mondaykeeper_wedding",
      cta: "텀블벅에서 보기",
      availableUntil: "2026-05-31",
    },
    {
      slug: "monthly-tracker",
      channel: "SMARTSTORE · 상시",
      title: "2026 월간 목표 트래커",
      sub: "달성률·일정·체크리스트를 한 시트에 — 매달 새로 시작",
      image: "products/monthly-tracker.png",
      link: "https://smartstore.naver.com/mondaykeeper",
      cta: "스마트스토어에서 보기",
      availableUntil: null,
    },
  ],
  inquiry: {
    endpoint: "https://script.google.com/macros/s/AKfycbxwBPyfForzV57VCnDtpLMtiCSpJlajXqskPftLXF2TZAL2hcComf_ZZDofXXSu_BcO/exec",
    title: "강의 의뢰하기",
    intro: "아래 항목을 채워 보내주시면 2영업일 이내에 회신드립니다.",
    note: "상세 커리큘럼은 의뢰자 청중·시간·예산에 맞춰 조율 가능합니다.",
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
