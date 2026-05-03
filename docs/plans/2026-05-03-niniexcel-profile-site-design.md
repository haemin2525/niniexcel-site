# 장혜민(니니엑셀) 프로필 사이트 — Design Doc

**작성일**: 2026-05-03
**작성자**: 노상래 (남편) + Claude Code
**대상자**: 장혜민 (haemin2525@gmail.com)
**상태**: ✅ 사용자 승인 완료 (퀵앤고 모드)

---

## 1. 목적과 성공 기준

### 목적
강의 의뢰자(기업 교육 담당자, 공공기관, 강의 플랫폼)가 사이트를 보고 **3초 안에** "이 강사에게 연락하면 되겠다"는 확신을 갖고 직접 컨택하도록 유도.

### 성공 기준 (1차 출시 기준)
1. 의뢰자가 메인 페이지를 끝까지 스크롤했을 때 **강의 영역·이력·연락처**를 모두 확인 가능.
2. 혜민님이 **JSON 파일 1~4개만 수정**해도 사이트 콘텐츠를 갱신할 수 있다 (학습/운영성).
3. **GitHub Pages**에 자동 배포된다 (push → 1~2분 내 라이브).
4. **Stitch에서 만든 디자인**을 코드로 옮기는 작업이 어렵지 않다.

### 명시적 비목표 (Non-Goals, 1차)
- 다국어 지원
- 다크모드
- 블로그/CMS
- 자동화된 후기/Testimonial 수집
- A/B 테스트, 분석 대시보드
- 결제/예약 시스템

---

## 2. 페이지 / 라우트

| 라우트 | 역할 | 1차 출시 |
|---|---|---|
| `/` (Home, 원페이지) | Hero · About · Topics · Talks · YouTube · Products · Contact | ✅ |
| `/talks` | 강의 이력 상세 (회사/기관별 풀 리스트) | ✅ |
| `/products` | 디지털 플래너 모음 (텀블벅/스마트스토어 카드) | ✅ |
| `/404` | 안내 페이지 | ✅ |

라우터: **HashRouter** (GitHub Pages SPA 라우팅 호환성 보장 — `?` 트릭이나 `404.html` 우회 불필요).

---

## 3. 메인 페이지 섹션 구조

| # | 섹션 | 데이터 소스 | 1차 콘텐츠 |
|---|---|---|---|
| ① | **Hero** | `profile.json` | 카피·CTA·신뢰 라인 |
| ② | **About** | `profile.json` | 이력 요약 + Key Strength 3줄 |
| ③ | **Topics (강의 영역)** | `topics.json` | 카드 4~6장 (Excel/데이터/AI/시각화/클로드엑셀) |
| ④ | **Talks (강의 이력)** | `talks.json` | 대표 6~8개 + "더보기 → /talks" |
| ⑤ | **YouTube** | `profile.json` | @niniexcel 채널 임베드 1개 + 채널 링크 |
| ⑥ | **Products** | `products.json` | 텀블벅·스마트스토어 카드 2장 + "더보기 → /products" |
| ⑦ | **Contact** | `profile.json` | 이메일 / SNS / "강의 문의하기" mailto CTA |

Testimonial(⑧) 은 2차 확장으로 보류.

---

## 4. Hero 카피 (확정)

- **메인 한 줄**: "현업에서 부딪힌 만큼만, 비전공자도 쓸 수 있게 가르칩니다."
- **서브 한 줄**: 마켓컬리·모두싸인 출신 데이터 분석가 · 6년+ 대기업·공공기관 출강 · Excel · SQL · Claude
- **Primary CTA**: "강의 문의하기" → Contact 섹션 스크롤 + mailto
- **Secondary CTA**: "강의 보러 가기" → `/talks`
- **신뢰 라인 (텍스트)**: 현대자동차 · 한샘 · 광주은행 · OK저축은행 · 하남시청 · 인프런 · 패스트캠퍼스

> 로고 이미지는 사용하지 않음 (강사 활동 표기는 일반 관행이지만 1차에서는 텍스트만 — 부담↓, 디자인 일관성↑).

---

## 5. 디자인 시스템

| 항목 | 값 |
|---|---|
| 베이스 색 | `bg-white`, 텍스트 `slate-800` |
| 액센트 | **Indigo 600 (`#4F46E5`)** — 신뢰 + AI 톤 |
| 보조 강조 | `slate-100` 배경, `slate-200` 보더 |
| 폰트 | 한글 **Pretendard**, 영문 **Inter** |
| 모서리 | `rounded-xl` 기본 |
| 그림자 | `shadow-sm` 기본, Hero 카드 `shadow-md` |
| 여백 | 섹션 간 `py-20`, 모바일 `py-12` |
| 최대 폭 | `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` |
| 다크모드 | 1차 SKIP |
| 애니메이션 | 진입 시 fade/slide 미세하게 (Tailwind 클래스만, 라이브러리 없음) |

---

## 6. 콘텐츠 관리 (학습용 핵심)

### 6.1 데이터 위치
모든 텍스트·링크는 `src/content/` 아래 JSON 4개에서 단일 소스 관리:

```
src/content/
├── profile.json     ← Hero 카피, About, Contact, SNS
├── topics.json      ← 강의 영역 카드
├── talks.json       ← 강의 이력
└── products.json    ← 디지털 플래너 카드
```

### 6.2 JSON 스키마 (요약)

**profile.json**
```json
{
  "name": "장혜민",
  "nameEn": "Hyemin Jang",
  "title": "엑셀 · 데이터 · AI 실무 강사",
  "hero": {
    "headline": "현업에서 부딪힌 만큼만, 비전공자도 쓸 수 있게 가르칩니다.",
    "subheadline": "마켓컬리·모두싸인 출신 데이터 분석가 · 6년+ 대기업·공공기관 출강",
    "trustBar": ["현대자동차", "한샘", "광주은행", "OK저축은행", "하남시청", "인프런", "패스트캠퍼스"],
    "primaryCta": { "label": "강의 문의하기", "href": "#contact" },
    "secondaryCta": { "label": "강의 보러 가기", "href": "#/talks" }
  },
  "about": {
    "intro": "...",
    "strengths": ["비전공자 맞춤형 전달력", "검증된 강의 레퍼런스 6년+", "AI 시대의 멀티 스킬 강사"],
    "career": [
      { "period": "2022.03 – 2025.07", "company": "모두싸인", "role": "데이터 분석가" },
      { "period": "2020.05 – 2021.05", "company": "팀블라인드", "role": "MD" }
    ],
    "certifications": ["SQLD", "ADsP"]
  },
  "youtube": { "channel": "니니의엑셀", "url": "https://www.youtube.com/@niniexcel", "featuredVideoId": null },
  "contact": {
    "email": "haemin2525@gmail.com",
    "altEmail": "haemin2525@naver.com",
    "phone": "010-4411-1025"
  }
}
```

**topics.json** — 강의 영역 카드 배열
```json
[
  { "id": "excel", "title": "엑셀 실무", "summary": "비즈니스 데이터 정리·자동화의 베이스", "icon": "📊", "tags": ["VLOOKUP", "피벗", "함수"] },
  { "id": "claude-excel", "title": "클로드 + 엑셀", "summary": "패스트캠퍼스 시그니처 강의", "icon": "🤖", "tags": ["Claude", "Gemini", "자동화"] }
]
```

**talks.json** — 강의 이력 배열
```json
[
  { "year": "2024", "client": "현대자동차", "topic": "엑셀 실무", "type": "기업 출강" },
  { "year": "2024", "client": "패스트캠퍼스", "topic": "클로드인엑셀", "type": "정규 강의", "url": "https://fastcampus.co.kr/..." }
]
```

**products.json** — 디지털 플래너 카드 배열
```json
[
  { "id": "tumblbug", "name": "텀블벅 디지털 플래너", "url": "https://tumblbug.com/u/ewwfkjmcajgzmryk", "thumbnail": "/products/tumblbug.png" },
  { "id": "smartstore", "name": "스마트스토어 mondaykeeper", "url": "https://smartstore.naver.com/mondaykeeper", "thumbnail": "/products/smartstore.png" }
]
```

### 6.3 운영 흐름
혜민님 입장에서 사이트 갱신:
1. `src/content/talks.json` 열어서 새 강의 한 줄 추가
2. `git commit` + `git push`
3. GitHub Actions가 자동 빌드/배포 → 1~2분 후 라이브 반영

---

## 7. 기술 스택

| 영역 | 선택 | 이유 |
|---|---|---|
| 빌드 도구 | **Vite 5** | 빠른 dev server, GH Pages base path 단순 설정 |
| 프레임워크 | **React 18** | 사용자 명시 + 학습 곡선 |
| 언어 | **TypeScript** | 콘텐츠 JSON 스키마 보호, 학습용으로도 안정적 |
| 스타일 | **Tailwind v3 (PostCSS 빌드)** | CDN 아닌 빌드 통합으로 운영성↑ |
| 라우터 | **react-router-dom (HashRouter)** | GH Pages SPA 호환 |
| 폰트 | Pretendard (CDN) + Inter (CDN) | 별도 빌드 부담 없음 |
| Linter | ESLint + Prettier | 표준 |
| 테스트 | **1차 SKIP** | 퀵앤고 |
| 배포 | GitHub Pages + GitHub Actions | 무료, 자동화 |

### 7.1 vite.config.ts 핵심
```ts
export default defineConfig({
  base: '/profile-website/',  // GH Pages repo path에 맞춤
  plugins: [react()],
})
```

### 7.2 GitHub Actions 워크플로 (요지)
- `main` 브랜치 push 시 빌드 → `gh-pages` 브랜치에 자동 배포.
- Job: checkout → setup-node → npm ci → npm run build → JamesIves/github-pages-deploy-action.

---

## 8. 폴더 구조 (1차)

```
ProfileWebsite/
├── CLAUDE.md                          ← 운영 규칙 (대화 로그 등)
├── conversation.md                    ← 대화 누적 로그
├── README.md                          ← 혜민님용 운영 가이드 (콘텐츠 수정/배포)
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
├── .gitignore
├── .eslintrc.cjs
├── .prettierrc
├── index.html
├── .github/workflows/deploy.yml
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   └── products/                      ← 플래너 썸네일 이미지
├── src/
│   ├── main.tsx
│   ├── App.tsx                        ← 라우터
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Talks.tsx
│   │   └── Products.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Topics.tsx
│   │   ├── TalkList.tsx
│   │   ├── TalkCard.tsx
│   │   ├── YouTubeEmbed.tsx
│   │   ├── ProductCards.tsx
│   │   └── Contact.tsx
│   ├── content/
│   │   ├── profile.json
│   │   ├── topics.json
│   │   ├── talks.json
│   │   └── products.json
│   ├── types/
│   │   └── content.ts                 ← JSON 스키마 타입 정의
│   └── styles/
│       └── index.css                  ← Tailwind directives + base
└── docs/
    └── plans/
        └── 2026-05-03-niniexcel-profile-site-design.md   ← 본 문서
```

---

## 9. Stitch 연계 워크플로

1. **Stitch에서 디자인** — 메인 페이지(원페이지) 1개, `/talks`, `/products` 각 1개씩 와이어프레임/디자인 생성.
2. **Stitch 출력물 받기** — Stitch에서 마크업 또는 Figma-like 스크린샷 export.
3. **Claude Code가 변환** — Stitch 출력물을 보고 `src/components/*.tsx`로 React + Tailwind 코드 작성.
4. **데이터 분리** — 모든 텍스트는 JSON에서 읽도록 컴포넌트가 props/import.
5. **Vite dev server** — `npm run dev`로 즉시 확인.

> Stitch 결과를 코드로 옮길 때, **카피·이미지·링크는 절대 코드에 하드코딩하지 않고** JSON으로 분리하는 것이 학습/운영의 핵심.

---

## 10. 배포

- **Repo 이름**: `niniexcel-profile` (가안, 사용자가 GitHub에서 결정)
- **URL**: `https://<github-username>.github.io/niniexcel-profile/` (커스텀 도메인은 2차 확장)
- **CI**: GitHub Actions, `main` push → 자동 빌드/배포
- **첫 배포 검증**:
  - [ ] 메인/`/talks`/`/products` 모두 라우팅 정상
  - [ ] HashRouter 새로고침 시 404 없음
  - [ ] 이미지·폰트 모두 로드
  - [ ] 모바일 360px 폭에서 깨짐 없음
  - [ ] mailto CTA 정상 동작

---

## 11. 1차 출시 체크리스트 (Definition of Done)

### 코드/빌드
- [ ] `npm run dev` 정상 구동
- [ ] `npm run build` 에러 0
- [ ] 모든 텍스트가 JSON에서 옴 (코드 하드코딩 0)
- [ ] HashRouter로 3개 라우트 동작

### 콘텐츠
- [ ] Hero 카피·신뢰 라인 적용
- [ ] About 자기소개 + Key Strength 3줄
- [ ] Topics 카드 4~6장
- [ ] Talks 6~8개 (대표) + `/talks` 풀리스트
- [ ] YouTube 채널 링크 + 영상 1개 임베드 (또는 채널 카드)
- [ ] Products 카드 2장 + `/products` 풀리스트
- [ ] Contact 이메일/SNS/CTA

### 운영
- [ ] README.md에 "콘텐츠 수정 → 배포" 흐름 명시
- [ ] GitHub Actions 자동 배포 1회 성공
- [ ] `https://<user>.github.io/...` 라이브 URL 확보

### 디자인
- [ ] 모바일/태블릿/데스크탑 반응형
- [ ] 폰트 로드 정상 (Pretendard/Inter)
- [ ] 액센트 컬러 일관 (Indigo 600)

---

## 12. 향후 확장 (2차 이후 — 본 문서 범위 밖)

- Testimonial 섹션 (수강생/주최사 후기 카드)
- 다크모드
- 커스텀 도메인 (예: `niniexcel.com`)
- 강의 의뢰 폼(서버리스 — Formspree / Cloudflare Forms 등)
- 블로그 / 강의 후기 글
- 다국어 (영문 페이지)
- og-image 자동 생성

---

## 13. 위험 / 가정

### 위험
- **GH Pages base path 실수** → 상대경로/이미지 깨짐. → `vite.config.ts` `base` + `<Router basename>` 동기 점검으로 완화.
- **로고/회사명 표기** → 텍스트만 사용하여 분쟁 가능성↓, 그래도 의뢰자가 요청 시 빠르게 제거 가능 (JSON에서 trustBar 항목 삭제만).
- **Pretendard CDN 차단** → fallback `system-ui` 명시.

### 가정
- 혜민님이 GitHub 계정·git 기본 사용에 익숙해질 의지가 있음 (학습용 목적과 일치).
- 이메일 mailto가 1차 컨택 채널로 충분함 (의뢰자는 보통 메일을 선호).
- 이미지 자료(프로필 사진 등)는 추후 `프로필/haemin/Photos/` 에 추가될 예정.

---

## 14. 다음 단계

이 design doc 승인 후 → `superpowers:writing-plans` 스킬로 **구현 plan**(태스크 단위 분해, 테스트 가능한 마일스톤) 작성 → 코드 작성 진입.
