# 장혜민(니니엑셀) 프로필 사이트 — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task.

**Goal:** 6년+ 강의 경력의 강사 장혜민님 프로필 사이트를 React + Vite + Tailwind로 빠르게 만들고 GitHub Pages에 배포한다. 콘텐츠는 JSON 분리, 라우팅은 HashRouter, 디자인 톤은 화이트+Indigo 600.

**Architecture:** Vite + React 18 + TS 단일 SPA. `src/content/*.json` 4개로 모든 텍스트/링크를 관리(혜민님 학습/운영용). HashRouter로 `/`(원페이지), `/talks`, `/products` 라우팅. GitHub Actions로 `gh-pages` 자동 배포.

**Tech Stack:** Vite 5 · React 18 · TypeScript · Tailwind v3 · react-router-dom · ESLint · Prettier · GitHub Actions

**Design Doc:** `docs/plans/2026-05-03-niniexcel-profile-site-design.md`

**Test Policy (1차 출시):** 사용자 지시대로 자동화 unit/e2e 테스트는 SKIP. 매 컴포넌트 후 **눈으로 확인**(`npm run dev` → 브라우저)을 의무 단계로 둠. 빌드 에러 0, 콘솔 에러 0이 통과 기준.

---

## Phase 1 — Scaffold

### Task 1: ProfileWebsite를 자체 git repo로 초기화

**Files:**
- Modify: `/Users/sangrae/workspace/project/ProfileWebsite/.git/`
- Create: `/Users/sangrae/workspace/project/ProfileWebsite/.gitignore`

**Step 1: git init**

```bash
cd /Users/sangrae/workspace/project/ProfileWebsite && git init
```

Expected: `Initialized empty Git repository in .../ProfileWebsite/.git/`

**Step 2: 기본 .gitignore 생성** (Vite 표준 + .DS_Store)

`.gitignore`:
```
# Dependencies
node_modules
.pnpm-debug.log*

# Build
dist
dist-ssr
*.local

# Editor
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store

# Env
.env
.env.local
.env.*.local

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
```

**Step 3: 첫 커밋**

```bash
git add CLAUDE.md conversation.md docs/ .gitignore
git commit -m "init: project scaffolding + design/implementation plans"
```

Expected: `[main (root-commit) ...] init: project scaffolding + design/implementation plans`

---

### Task 2: Vite + React + TS 스캐폴드

**Files:**
- Create: `package.json`, `index.html`, `tsconfig.json`, `tsconfig.node.json`, `vite.config.ts`, `src/main.tsx`, `src/App.tsx`, `src/styles/index.css`

**Step 1: Vite 스캐폴드 (현재 폴더 사용)**

```bash
cd /Users/sangrae/workspace/project/ProfileWebsite && npm create vite@latest . -- --template react-ts
```

선택 프롬프트:
- "Current directory is not empty" → `Ignore files and continue`

**Step 2: 의존성 설치 (백그라운드)**

```bash
npm install
```

→ `run_in_background: true`로 실행. 완료 후 `node_modules/` 생성 확인.

**Step 3: dev 서버 1회 검증**

```bash
npm run dev
```

→ `run_in_background: true`로 실행. 출력에 `Local: http://localhost:5173/` 노출 확인. 브라우저 열어 기본 Vite 페이지 표시되는지 확인. 그 다음 dev 서버 stop.

**Step 4: 커밋**

```bash
git add -A && git commit -m "feat(scaffold): Vite + React 18 + TypeScript baseline"
```

---

### Task 3: Tailwind v3 + Pretendard/Inter 폰트 설정

**Files:**
- Create: `tailwind.config.js`, `postcss.config.js`
- Modify: `src/styles/index.css`, `index.html`, `src/main.tsx`

**Step 1: Tailwind 설치**

```bash
npm install -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

**Step 2: `tailwind.config.js` content 경로 설정**

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#4F46E5" } },  // Indigo 600
      fontFamily: {
        sans: ["Pretendard", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

**Step 3: `src/styles/index.css` 작성**

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root { height: 100%; }
body { @apply font-sans text-slate-800 bg-white antialiased; }
```

**Step 4: `src/main.tsx` 에서 index.css import 변경**

기존 `import './index.css'` → `import './styles/index.css'`. 구 `src/index.css` 삭제. `App.css` 도 삭제.

**Step 5: `src/App.tsx` 임시 검증 컴포넌트로 교체**

```tsx
export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-brand">Tailwind OK</h1>
    </main>
  );
}
```

**Step 6: 검증**

`npm run dev` (백그라운드) → 브라우저에서 인디고색 "Tailwind OK" 큰 텍스트 확인.

**Step 7: 커밋**

```bash
git add -A && git commit -m "feat(style): Tailwind v3 + Pretendard/Inter + brand color"
```

---

### Task 4: React Router (HashRouter) 설정

**Files:**
- Create: `src/pages/Home.tsx`, `src/pages/Talks.tsx`, `src/pages/Products.tsx`, `src/pages/NotFound.tsx`
- Modify: `src/App.tsx`

**Step 1: 설치**

```bash
npm install react-router-dom
```

**Step 2: 페이지 스텁 4개 생성** (각 파일에 placeholder)

`src/pages/Home.tsx`:
```tsx
export default function Home() { return <div className="p-8">Home</div>; }
```

같은 패턴으로 `Talks.tsx`("Talks"), `Products.tsx`("Products"), `NotFound.tsx`("Not Found").

**Step 3: `src/App.tsx` 라우터 적용**

```tsx
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Talks from "./pages/Talks";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
```

**Step 4: 검증**

`npm run dev` → 브라우저에서 `/`, `#/talks`, `#/products`, `#/abc`(NotFound) 4개 라우트 모두 표시되는지 클릭/주소창으로 확인.

**Step 5: 커밋**

```bash
git add -A && git commit -m "feat(router): HashRouter with Home/Talks/Products/NotFound stubs"
```

---

## Phase 2 — Content Layer

### Task 5: 콘텐츠 타입 정의

**Files:**
- Create: `src/types/content.ts`

**Step 1: 타입 작성**

```ts
export type Cta = { label: string; href: string };

export type Profile = {
  name: string;
  nameEn: string;
  title: string;
  hero: {
    headline: string;
    subheadline: string;
    trustBar: string[];
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  about: {
    intro: string;
    strengths: string[];
    career: { period: string; company: string; role: string }[];
    certifications: string[];
  };
  youtube: { channel: string; url: string; featuredVideoId: string | null };
  contact: { email: string; altEmail?: string; phone?: string; sns?: { label: string; url: string }[] };
};

export type Topic = { id: string; title: string; summary: string; icon?: string; tags: string[] };

export type Talk = { year: string; client: string; topic: string; type: string; url?: string };

export type Product = { id: string; name: string; description?: string; url: string; thumbnail?: string };
```

**Step 2: 커밋**

```bash
git add -A && git commit -m "feat(content): TypeScript types for profile/topics/talks/products"
```

---

### Task 6: profile.json 작성 (혜민님 실제 자료 반영)

**Files:**
- Create: `src/content/profile.json`

**Step 1: PDF 자료 기반 작성**

```json
{
  "name": "장혜민",
  "nameEn": "Hyemin Jang",
  "title": "엑셀 · 데이터 · AI 실무 강사",
  "hero": {
    "headline": "현업에서 부딪힌 만큼만, 비전공자도 쓸 수 있게 가르칩니다.",
    "subheadline": "마켓컬리·모두싸인 출신 데이터 분석가 · 6년+ 대기업·공공기관 출강 · Excel · SQL · Claude",
    "trustBar": ["현대자동차", "한샘", "광주은행", "OK저축은행", "하남시청", "인프런", "패스트캠퍼스"],
    "primaryCta": { "label": "강의 문의하기", "href": "#contact" },
    "secondaryCta": { "label": "강의 보러 가기", "href": "#/talks" }
  },
  "about": {
    "intro": "의류학 전공·MD 출신의 데이터 분석가가 현업에서 직접 부딪힌 만큼만, 비전공자도 쓸 수 있는 비즈니스 언어로 가르칩니다.",
    "strengths": [
      "비전공자 맞춤형 전달력 — 의류학 전공·MD 출신",
      "검증된 강의 레퍼런스 — 대기업·공공기관 6년+ 출강",
      "AI 시대 멀티 스킬 — SQL·R·Tableau + Claude·Gemini 활용 자동화"
    ],
    "career": [
      { "period": "2022.03 – 2025.07", "company": "모두싸인", "role": "데이터 분석가" },
      { "period": "2020.05 – 2021.05", "company": "팀블라인드", "role": "MD" },
      { "period": "2018.10 – 2019.04", "company": "29CM", "role": "MD" },
      { "period": "2016.10 – 2018.10", "company": "마켓컬리", "role": "MD" }
    ],
    "certifications": ["SQLD", "ADsP"]
  },
  "youtube": {
    "channel": "니니의엑셀",
    "url": "https://www.youtube.com/@niniexcel",
    "featuredVideoId": null
  },
  "contact": {
    "email": "haemin2525@gmail.com",
    "altEmail": "haemin2525@naver.com",
    "phone": "010-4411-1025",
    "sns": [
      { "label": "YouTube 니니의엑셀", "url": "https://www.youtube.com/@niniexcel" },
      { "label": "텀블벅", "url": "https://tumblbug.com/u/ewwfkjmcajgzmryk" },
      { "label": "스마트스토어 mondaykeeper", "url": "https://smartstore.naver.com/mondaykeeper" }
    ]
  }
}
```

**Step 2: 커밋**

```bash
git add -A && git commit -m "content(profile): seed profile.json with PDF data"
```

---

### Task 7: topics.json 작성

**Files:**
- Create: `src/content/topics.json`

**Step 1: 6개 카드 작성**

```json
[
  { "id": "excel", "title": "엑셀 실무", "summary": "비즈니스 데이터 정리·자동화의 베이스", "icon": "📊", "tags": ["VLOOKUP", "피벗", "함수", "자동화"] },
  { "id": "claude-excel", "title": "클로드 + 엑셀", "summary": "패스트캠퍼스 시그니처 강의 — AI로 1시간 작업을 5분에", "icon": "🤖", "tags": ["Claude", "Gemini", "AI 자동화"] },
  { "id": "data-viz", "title": "데이터 시각화", "summary": "인프런 정규 강의 — Tableau 기반 실무 시각화", "icon": "📈", "tags": ["Tableau", "대시보드"] },
  { "id": "sql", "title": "SQL", "summary": "비즈니스 데이터를 직접 다루는 첫걸음", "icon": "🗄️", "tags": ["SQL", "쿼리", "분석"] },
  { "id": "r", "title": "R", "summary": "통계·시각화·데이터 분석", "icon": "📐", "tags": ["R", "분석", "통계"] },
  { "id": "ai-workflow", "title": "AI 업무 자동화", "summary": "현업 워크플로우에 AI를 자연스럽게 끼워넣기", "icon": "⚙️", "tags": ["Claude", "Gemini", "워크플로우"] }
]
```

**Step 2: 커밋**

```bash
git add -A && git commit -m "content(topics): seed 6 lecture topic cards"
```

---

### Task 8: talks.json 작성 (대표 + 풀리스트)

**Files:**
- Create: `src/content/talks.json`

**Step 1: PDF 기반 + 카테고리 분리 작성**

```json
[
  { "year": "현재", "client": "패스트캠퍼스", "topic": "클로드인엑셀", "type": "정규 강의", "url": "https://fastcampus.co.kr/" },
  { "year": "현재", "client": "인프런", "topic": "데이터 시각화", "type": "정규 강의", "url": "https://www.inflearn.com/" },
  { "year": "최근", "client": "현대자동차", "topic": "엑셀 / 데이터 실무", "type": "기업 출강" },
  { "year": "최근", "client": "한샘", "topic": "엑셀 / 데이터 실무", "type": "기업 출강" },
  { "year": "최근", "client": "광주은행", "topic": "엑셀 / 데이터 실무", "type": "기업 출강" },
  { "year": "최근", "client": "OK저축은행", "topic": "엑셀 / 데이터 실무", "type": "기업 출강" },
  { "year": "최근", "client": "하남시청", "topic": "엑셀 / 데이터 실무", "type": "공공기관 강의" },
  { "year": "최근", "client": "군포시청", "topic": "엑셀 / 데이터 실무", "type": "공공기관 강의" },
  { "year": "상시", "client": "탈잉 / 크몽 / 프립", "topic": "엑셀 · 데이터 튜터링", "type": "플랫폼 튜터" }
]
```

**Step 2: 커밋**

```bash
git add -A && git commit -m "content(talks): seed lecture history (corp/public/online)"
```

---

### Task 9: products.json 작성

**Files:**
- Create: `src/content/products.json`

```json
[
  {
    "id": "tumblbug",
    "name": "텀블벅 디지털 플래너",
    "description": "니니의엑셀 디지털 플래너 펀딩",
    "url": "https://tumblbug.com/u/ewwfkjmcajgzmryk",
    "thumbnail": "/products/tumblbug.svg"
  },
  {
    "id": "smartstore-mondaykeeper",
    "name": "스마트스토어 mondaykeeper",
    "description": "디지털 플래너 상시 판매 채널",
    "url": "https://smartstore.naver.com/mondaykeeper",
    "thumbnail": "/products/smartstore.svg"
  }
]
```

**Step 2: 썸네일 placeholder 2개 생성**

`public/products/tumblbug.svg`, `public/products/smartstore.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240"><rect fill="#EEF2FF" width="400" height="240"/><text x="200" y="120" text-anchor="middle" font-family="Pretendard, Inter, sans-serif" font-size="28" fill="#4F46E5" font-weight="700">[제품명]</text></svg>
```

(파일별로 텍스트 내용 교체)

**Step 3: 커밋**

```bash
git add -A && git commit -m "content(products): seed product cards + placeholder thumbnails"
```

---

## Phase 3 — Layout & Shared

### Task 10: Header / Footer 컴포넌트

**Files:**
- Create: `src/components/Header.tsx`, `src/components/Footer.tsx`

**Step 1: Header 작성**

```tsx
import { Link } from "react-router-dom";
import profile from "../content/profile.json";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">{profile.name} <span className="text-slate-400 font-medium text-sm">{profile.nameEn}</span></Link>
        <nav className="flex gap-6 text-sm text-slate-600">
          <Link to="/talks" className="hover:text-brand">강의</Link>
          <Link to="/products" className="hover:text-brand">플래너</Link>
          <a href="#contact" className="hover:text-brand">문의</a>
        </nav>
      </div>
    </header>
  );
}
```

**Step 2: Footer 작성**

```tsx
import profile from "../content/profile.json";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-500 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} {profile.name} · {profile.title}</p>
        <p>{profile.contact.email}</p>
      </div>
    </footer>
  );
}
```

**Step 3: 커밋**

```bash
git add -A && git commit -m "feat(layout): Header (sticky nav) + Footer"
```

---

## Phase 4 — Home 섹션 컴포넌트 (각 컴포넌트 후 시각 검증 필수)

각 Task의 검증은 동일 패턴: `npm run dev` 백그라운드 → 브라우저에서 해당 섹션이 의도대로 보이는지 확인 → 콘솔 에러 0.

### Task 11: Hero 컴포넌트

**Files:**
- Create: `src/components/Hero.tsx`

**Step 1: 작성**

```tsx
import profile from "../content/profile.json";

export default function Hero() {
  const { headline, subheadline, trustBar, primaryCta, secondaryCta } = profile.hero;
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <p className="text-sm font-medium text-brand uppercase tracking-widest mb-4">{profile.title}</p>
      <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-900">
        {headline}
      </h1>
      <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl">{subheadline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={primaryCta.href} className="inline-flex items-center px-5 py-3 rounded-xl bg-brand text-white font-semibold shadow-md hover:opacity-90 transition">
          {primaryCta.label}
        </a>
        <a href={secondaryCta.href} className="inline-flex items-center px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:border-brand hover:text-brand transition">
          {secondaryCta.label}
        </a>
      </div>
      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
        <span className="font-semibold text-slate-700">출강·강의</span>
        {trustBar.map((c) => <span key={c}>{c}</span>)}
      </div>
    </section>
  );
}
```

**Step 2: Home 페이지에 끼워 검증** (임시)

`src/pages/Home.tsx`:
```tsx
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
```

**Step 3: 시각 검증** + 커밋

```bash
git add -A && git commit -m "feat(hero): headline + CTAs + trust bar"
```

---

### Task 12: About 컴포넌트

**Files:**
- Create: `src/components/About.tsx`

**Step 1: 작성**

```tsx
import profile from "../content/profile.json";

export default function About() {
  const { intro, strengths, career, certifications } = profile.about;
  return (
    <section id="about" className="bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">강사 소개</h2>
        <p className="mt-4 max-w-3xl text-slate-600">{intro}</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {strengths.map((s, i) => (
            <div key={i} className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-sm text-slate-700 leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">경력</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {career.map((c) => (
                <li key={c.company} className="flex justify-between gap-4 border-b border-slate-100 py-2">
                  <span>{c.company} <span className="text-slate-500">· {c.role}</span></span>
                  <span className="text-slate-400 whitespace-nowrap">{c.period}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">자격</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span key={c} className="inline-flex px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Home에 추가, 시각 검증, 커밋**

```bash
git add -A && git commit -m "feat(about): intro + strengths + career + certifications"
```

---

### Task 13: Topics 컴포넌트

**Files:**
- Create: `src/components/Topics.tsx`

**Step 1: 작성**

```tsx
import topics from "../content/topics.json";

export default function Topics() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">강의 영역</h2>
      <p className="mt-3 text-slate-600">엑셀·데이터·AI를 비즈니스 현장의 언어로.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((t) => (
          <article key={t.id} className="rounded-xl border border-slate-200 p-6 bg-white hover:border-brand hover:shadow-md transition">
            <div className="text-2xl">{t.icon}</div>
            <h3 className="mt-3 font-bold text-lg text-slate-900">{t.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{t.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {t.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
```

**Step 2: Home 추가 + 시각 검증 + 커밋**

```bash
git add -A && git commit -m "feat(topics): 6 lecture topic cards"
```

---

### Task 14: TalkList / TalkCard 컴포넌트 (메인 요약본)

**Files:**
- Create: `src/components/TalkCard.tsx`, `src/components/TalkList.tsx`

**Step 1: TalkCard**

```tsx
import type { Talk } from "../types/content";

export default function TalkCard({ talk }: { talk: Talk }) {
  const Tag = talk.url ? "a" : "div";
  return (
    <Tag {...(talk.url ? { href: talk.url, target: "_blank", rel: "noopener noreferrer" } : {})}
         className="block rounded-xl border border-slate-200 p-5 bg-white hover:border-brand transition">
      <p className="text-xs text-slate-500">{talk.year} · {talk.type}</p>
      <p className="mt-1 font-semibold text-slate-900">{talk.client}</p>
      <p className="mt-1 text-sm text-slate-600">{talk.topic}</p>
    </Tag>
  );
}
```

**Step 2: TalkList (메인용 압축, prop으로 풀/압축 분기)**

```tsx
import { Link } from "react-router-dom";
import talks from "../content/talks.json";
import TalkCard from "./TalkCard";

export default function TalkList({ compact = false }: { compact?: boolean }) {
  const items = compact ? talks.slice(0, 6) : talks;
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">강의 이력</h2>
          {compact && <Link to="/talks" className="text-sm font-medium text-brand hover:underline">전체 보기 →</Link>}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((t, i) => <TalkCard key={i} talk={t} />)}
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Home 추가 (`<TalkList compact />`) + 시각 검증 + 커밋**

```bash
git add -A && git commit -m "feat(talks): TalkCard + TalkList (compact / full)"
```

---

### Task 15: YouTubeEmbed 컴포넌트

**Files:**
- Create: `src/components/YouTubeEmbed.tsx`

**Step 1: 작성** (featuredVideoId 없으면 채널 카드만)

```tsx
import profile from "../content/profile.json";

export default function YouTubeEmbed() {
  const { channel, url, featuredVideoId } = profile.youtube;
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">YouTube</h2>
      <p className="mt-3 text-slate-600">강의 스타일 미리 보기 · {channel}</p>

      <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 bg-white">
        {featuredVideoId ? (
          <div className="aspect-video">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${featuredVideoId}`} title={channel} allowFullScreen />
          </div>
        ) : (
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 hover:bg-slate-50">
            <div>
              <p className="font-semibold text-slate-900">{channel}</p>
              <p className="text-sm text-slate-500 mt-1">YouTube 채널에서 영상 보기</p>
            </div>
            <span className="text-brand font-medium">바로가기 →</span>
          </a>
        )}
      </div>
    </section>
  );
}
```

**Step 2: Home 추가 + 시각 검증 + 커밋**

```bash
git add -A && git commit -m "feat(youtube): channel embed/card with fallback"
```

---

### Task 16: ProductCards 컴포넌트

**Files:**
- Create: `src/components/ProductCards.tsx`

**Step 1: 작성**

```tsx
import { Link } from "react-router-dom";
import products from "../content/products.json";

export default function ProductCards({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">디지털 플래너</h2>
          {compact && <Link to="/products" className="text-sm font-medium text-brand hover:underline">전체 보기 →</Link>}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {products.map((p) => (
            <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer"
               className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-brand transition">
              {p.thumbnail && <img src={p.thumbnail} alt={p.name} className="w-full aspect-[5/3] object-cover" />}
              <div className="p-5">
                <p className="font-semibold text-slate-900 group-hover:text-brand">{p.name}</p>
                {p.description && <p className="text-sm text-slate-600 mt-1">{p.description}</p>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Home 추가 (`<ProductCards compact />`) + 시각 검증 + 커밋**

```bash
git add -A && git commit -m "feat(products): product cards section with thumbnails"
```

---

### Task 17: Contact 컴포넌트

**Files:**
- Create: `src/components/Contact.tsx`

**Step 1: 작성**

```tsx
import profile from "../content/profile.json";

export default function Contact() {
  const { email, altEmail, phone, sns } = profile.contact;
  const subject = encodeURIComponent("[강의 문의] " + profile.name + "님");
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">강의 문의</h2>
      <p className="mt-3 text-slate-600">기업 출강·정규 강의·콘텐츠 협업 환영합니다. 메일이 가장 빠릅니다.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <a href={`mailto:${email}?subject=${subject}`}
           className="rounded-xl bg-brand text-white p-6 shadow-md hover:opacity-90 transition">
          <p className="text-sm uppercase tracking-widest opacity-80">Email</p>
          <p className="mt-2 font-semibold text-lg">{email}</p>
          <p className="mt-3 text-sm opacity-90">메일 쓰기 →</p>
        </a>
        <div className="rounded-xl border border-slate-200 p-6 bg-white">
          <p className="text-sm uppercase tracking-widest text-slate-500">Other</p>
          {altEmail && <p className="mt-2 text-slate-700">대체 이메일 · {altEmail}</p>}
          {phone && <p className="mt-1 text-slate-700">연락처 · {phone}</p>}
          {sns && (
            <div className="mt-4 flex flex-wrap gap-2">
              {sns.map((s) => (
                <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer"
                   className="text-sm px-3 py-1 rounded-full border border-slate-200 hover:border-brand hover:text-brand">
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Home 추가 + 시각 검증 + 커밋**

```bash
git add -A && git commit -m "feat(contact): mailto CTA + alt contacts + SNS"
```

---

### Task 18: Home 페이지 최종 조립

**Files:**
- Modify: `src/pages/Home.tsx`

**Step 1: 모든 섹션 연결**

```tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Topics from "../components/Topics";
import TalkList from "../components/TalkList";
import YouTubeEmbed from "../components/YouTubeEmbed";
import ProductCards from "../components/ProductCards";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Topics />
      <TalkList compact />
      <YouTubeEmbed />
      <ProductCards compact />
      <Contact />
      <Footer />
    </>
  );
}
```

**Step 2: 시각 검증 (전체 페이지 풀스크롤)** + 콘솔 에러 0 확인

**Step 3: 커밋**

```bash
git add -A && git commit -m "feat(home): assemble all 7 sections in order"
```

---

## Phase 5 — Sub Pages

### Task 19: /talks 페이지

**Files:**
- Modify: `src/pages/Talks.tsx`

```tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import TalkList from "../components/TalkList";

export default function Talks() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">전체 강의 이력</h1>
      </div>
      <TalkList />
      <Footer />
    </>
  );
}
```

**Step 2: 시각 검증** (`#/talks` 풀리스트) + 커밋

```bash
git add -A && git commit -m "feat(page): /talks full lecture list"
```

---

### Task 20: /products 페이지

**Files:**
- Modify: `src/pages/Products.tsx`

```tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCards from "../components/ProductCards";

export default function Products() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">디지털 플래너</h1>
      </div>
      <ProductCards />
      <Footer />
    </>
  );
}
```

**Step 2: 시각 검증** + 커밋

```bash
git add -A && git commit -m "feat(page): /products full plannner list"
```

---

### Task 21: NotFound 페이지

**Files:**
- Modify: `src/pages/NotFound.tsx`

```tsx
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <p className="text-brand font-semibold">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">페이지를 찾을 수 없습니다</h1>
      <Link to="/" className="mt-6 inline-flex px-4 py-2 rounded-xl bg-brand text-white font-medium">홈으로</Link>
    </main>
  );
}
```

**Step 2: 시각 검증** (`#/asdf`) + 커밋

```bash
git add -A && git commit -m "feat(page): NotFound 404"
```

---

## Phase 6 — Deploy (GitHub Pages)

### Task 22: vite.config.ts에 base path

**Files:**
- Modify: `vite.config.ts`

**Step 1: 환경변수로 base 분기**

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
});
```

> 실제 GH Pages 배포 시 `VITE_BASE=/<repo-name>/` 로 빌드. 워크플로에서 주입.

**Step 2: 커밋**

```bash
git add -A && git commit -m "chore(build): vite base path via VITE_BASE env"
```

---

### Task 23: GitHub Actions 자동 배포 워크플로

**Files:**
- Create: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - name: Build
        env:
          VITE_BASE: /${{ github.event.repository.name }}/
        run: npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

**Step 2: 커밋**

```bash
git add -A && git commit -m "ci: GitHub Actions auto-deploy to gh-pages"
```

---

### Task 24: GitHub repo 생성 + 첫 push

**Files:** (none — repo 생성)

**Step 1: 사용자 가이드** (혜민 또는 상래가 직접 실행)

```bash
# GitHub CLI 사용 (권장)
gh repo create niniexcel-profile --public --source=. --remote=origin --push
```

또는 GitHub 웹에서 빈 repo 생성 후:
```bash
git remote add origin https://github.com/<USERNAME>/niniexcel-profile.git
git branch -M main
git push -u origin main
```

**Step 2: GitHub Pages 활성화 (Settings → Pages → Branch: gh-pages, root)**

**Step 3: Actions 빌드 성공 확인**, `https://<USERNAME>.github.io/niniexcel-profile/` 접속.

**Step 4: 검증 체크리스트**
- [ ] `/`, `#/talks`, `#/products`, `#/abc`(NotFound) 모두 동작
- [ ] 새로고침 시 404 없음
- [ ] 모바일 360px 폭에서 깨짐 없음
- [ ] 폰트(Pretendard/Inter) 로드
- [ ] mailto 링크 동작
- [ ] 콘솔 에러 0

---

## Phase 7 — Operations

### Task 25: README.md (혜민님 운영 가이드)

**Files:**
- Create: `README.md`

**Step 1: 작성** (콘텐츠 갱신 → 자동 배포 흐름 + Stitch 연계 안내)

```markdown
# 장혜민 프로필 사이트

엑셀·데이터·AI 강사 장혜민님의 강의 의뢰용 프로필 사이트.

## 콘텐츠 수정하기 (코드 몰라도 OK)

모든 텍스트·링크는 `src/content/` 아래 4개 JSON에 있습니다.

| 파일 | 내용 |
|---|---|
| `profile.json` | Hero 카피, About, 연락처, SNS |
| `topics.json` | 강의 영역 카드 |
| `talks.json` | 강의 이력 |
| `products.json` | 디지털 플래너 |

수정 흐름:
1. 파일 열어 텍스트 수정
2. 저장 → `git add . && git commit -m "content: ..."`
3. `git push` → GitHub Actions가 자동으로 배포 (1~2분)

## 로컬에서 미리 보기
\`\`\`bash
npm install   # 최초 1회
npm run dev   # http://localhost:5173/
\`\`\`

## 배포 URL
\`https://<github-username>.github.io/niniexcel-profile/\`

## Stitch와 함께 디자인 바꾸기
1. https://stitch.withgoogle.com/ 에서 화면 디자인
2. 디자인을 Claude Code에 보여주고 "이 디자인 적용해줘" 요청
3. 변경 후 위 콘텐츠 수정 흐름과 동일하게 push → 자동 배포

## 폴더 안내
- `src/components/` 화면을 구성하는 부품들
- `src/pages/` 페이지(라우트)
- `src/content/` 텍스트·링크 데이터 ← 여기만 수정하면 됨
- `public/products/` 플래너 썸네일 이미지

## 참고
- 디자인 결정 근거: `docs/plans/2026-05-03-niniexcel-profile-site-design.md`
- 구현 단계: `docs/plans/2026-05-03-niniexcel-profile-site-implementation.md`
\`\`\`
```

**Step 2: 커밋**

```bash
git add -A && git commit -m "docs(readme): operator guide for haemin"
```

---

### Task 26: 최종 회고 — 1차 출시 Definition of Done 체크

**Step 1: design doc Section 11 체크리스트** 따라 모든 항목 ✅ 확인.

**Step 2: 마무리 커밋** (필요시)

```bash
git add -A && git commit -m "release: v0.1 — niniexcel profile site live"
```

---

## 부록 A — 변경 시 자주 쓰는 패턴

### "강의 이력 한 줄 추가하고 싶을 때"
`src/content/talks.json` 배열 맨 위에 한 줄 추가:
```json
{ "year": "2026", "client": "신규고객", "topic": "AI 자동화", "type": "기업 출강" }
```
→ commit + push.

### "Hero 카피 바꾸고 싶을 때"
`src/content/profile.json` 의 `hero.headline` / `hero.subheadline` 수정 → commit + push.

### "프로필 사진 넣고 싶을 때 (2차)"
1. `public/photos/profile.jpg` 추가
2. `src/components/Hero.tsx` 또는 About에 `<img src="/photos/profile.jpg" />` 삽입
3. commit + push.

---

## 부록 B — 위험 / 트러블슈팅

| 증상 | 원인 후보 | 해결 |
|---|---|---|
| 배포 후 페이지 흰 화면 | `vite.config.ts` `base` 와 repo 이름 불일치 | Workflow의 `VITE_BASE` env 가 `/<repo>/`인지 확인 |
| 새로고침 시 404 | HashRouter 안 씀 | `App.tsx`가 HashRouter인지 |
| 한글 폰트 안 보임 | Pretendard CDN 차단 | `index.css` fallback 잘 동작하는지 (Inter, system-ui) |
| 이미지 안 나옴 | 절대경로/상대경로 혼용 | `public/` 안 자원은 `/path` 가 아니라 `/photos/...` 처럼 base 적용됨. Vite가 자동 처리 |

---

## 부록 C — 다음 단계 (1차 이후)

design doc Section 12 참조: Testimonial · 다크모드 · 커스텀 도메인 · 강의 의뢰 폼(Formspree/CF Forms) · 블로그 · 다국어 · og-image 자동.
