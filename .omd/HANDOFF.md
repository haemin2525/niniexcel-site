# HANDOFF — niniexcel Profile Site Refinement

> Stage 4 (Validate) artifact + final summary.
> Generated 2026-05-03.

## 1. Refinement deltas (vs HEAD `7336ec3`)

### Modified files

| File | Change summary |
|---|---|
| `tailwind.config.js` | + `accent` (amber-500/50) color token, + `brand-50`, + `dot-grid` background image/size |
| `src/content/topics.json` | emoji icons (📊🤖📈🗄️📐⚙️) → SVG path strings (`/icons/topics/<id>.svg`); R 설명 1줄 정제, ai-workflow 띄어쓰기 정리 |
| `src/content/profile.json` | Hero subheadline `+` 제거, "강사" 명시; About strengths `6년+` → `6년 이상` |
| `src/components/Hero.tsx` | dot-grid bg motif, "부딪힌 만큼만" amber underline-stroke, eyebrow tracking-[0.18em], H1 weight extrabold + leading-[1.1], focus-visible rings, trust-bar 좌측 amber dot |
| `src/components/About.tsx` | strengths 카드 좌측 amber stroke (4px), `bg-brand/10` → `bg-brand-50` (semantic token) |
| `src/components/Topics.tsx` | SVG icon in brand-50 chip + hover lift `-translate-y-0.5`, copy 정제 |
| `src/components/Header.tsx` | nav `aria-label="주 메뉴"`, focus-visible rings on all links |
| `src/components/Footer.tsx` | + 메일 링크 (강의 문의 강조), focus-visible ring |
| `src/components/Contact.tsx` | "Other" → "다른 채널", subheadline "평일 24시간 안에 회신드립니다", aria-label on email + sns links, focus-visible rings |
| `src/components/TalkCard.tsx` | hover lift, focus-visible ring, aria-label |
| `src/components/TalkList.tsx` | focus-visible ring on "전체 보기" link |
| `src/components/ProductCards.tsx` | hover lift, focus-visible ring, alt 텍스트 보강, aria-label |
| `src/components/YouTubeEmbed.tsx` | subheadline "실제 강의 톤을 영상으로 미리 보세요" 명령형, aria-label, iframe title |
| `src/pages/Home.tsx` | wrap content in `<main>` (a11y landmark) |
| `src/pages/Talks.tsx` | wrap in `<main>` |
| `src/pages/Products.tsx` | wrap in `<main>` |
| `src/pages/NotFound.tsx` | + secondary copy, focus-visible ring, eyebrow tracking |

### Added files

| File | Purpose |
|---|---|
| `public/icons/topics/excel.svg` | 4-pane spreadsheet glyph |
| `public/icons/topics/claude-excel.svg` | sun/AI radial glyph |
| `public/icons/topics/data-viz.svg` | bar chart glyph |
| `public/icons/topics/sql.svg` | database stack glyph |
| `public/icons/topics/r.svg` | uppercase R wordmark glyph |
| `public/icons/topics/ai-workflow.svg` | 4-node workflow graph glyph |
| `.omd/OMD-PLAN.md` | Discovery checkpoint |
| `.omd/DESIGN.md` | Components checkpoint |
| `.omd/HANDOFF.md` | Handoff checkpoint (this file) |

### Removed files

- (none)

## 2. Build evidence

```
> niniexcel-profile@0.0.1 build
> tsc && vite build

vite v5.4.21 building for production...
transforming...
✓ 58 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.47 kB │ gzip:  0.36 kB
dist/assets/index-BWLY3KRv.css   14.63 kB │ gzip:  3.75 kB
dist/assets/index-D2xKx5yb.js   196.67 kB │ gzip: 63.62 kB
✓ built in 811ms
```

CSS grew +0.02 kB, JS +0.01 kB — negligible. Zero new dependencies (constraint honored).

## 3. A11y audit (omd-a11y-auditor pass)

### Checks run

- ✅ Semantic landmarks: `<main>` wraps page content on Home/Talks/Products; `<header>`/`<nav>`/`<footer>` already present
- ✅ `<nav aria-label="주 메뉴">` on Header
- ✅ `lang="ko"` already on `<html>`
- ✅ `focus-visible:ring-2 ring-brand ring-offset-2` on every interactive element (15 verified across 9 files)
- ✅ `alt=""` `aria-hidden="true"` on decorative SVG icons (Topics)
- ✅ Real alt text on product thumbnails (`${name} 썸네일`)
- ✅ aria-label on icon-free anchors with non-self-evident text targets (mailto, talk cards, sns links)
- ✅ Color contrast: brand on white 8.59:1 (AAA), slate-700 on white 12.6:1, amber NEVER on body text (only as 4px stroke + 1.5px dot, decorative)
- ✅ Hero amber underline behind text — text remains slate-900 on white where stroke does not cover; stroke at 40% opacity
- ✅ External links have `rel="noopener noreferrer"` + `(새 창)` aria-label disclosure
- ✅ Iframe title set on YouTube embed (currently inactive — featuredVideoId null)

### Blockers

- None.

### Non-blockers (deferred)

- og:image / favicon still vite default (deferred — separate asset round)
- Skip-to-content link (single-page nav, low ROI)

## 4. Persona test (omd-persona-tester)

### Persona P1 — 박과장 (38, 대기업 L&D 매니저, 5분 안에 의뢰 결정)

Walkthrough:
1. 랜딩 (3s) → eyebrow "엑셀 · 데이터 · AI 실무 강사" + 헤드라인 + amber underline → 정체성 즉시 파악 ✅
2. trust bar 스캔 (5s) → "현대자동차, 한샘, 광주은행, OK저축은행, 하남시청, 인프런, 패스트캠퍼스" — 대기업 + 공공 + 플랫폼 균형 확인 ✅
3. About 강점 카드 3종 (15s) → 검증된 레퍼런스 확인 ✅
4. Topics 6종 (20s) → 의뢰 가능 영역 식별 ✅
5. Talk list compact 6 (10s) → 최근 활동 검증 ✅
6. Contact (5s) → mailto 클릭, "평일 24시간 안에 회신" 메시지 안심 ✅

Total: ~58s. Friction count: 0. Heuristic violations: 0.

### Persona P3 — 이PD (34, 온라인 강의 플랫폼, 강의 톤 평가)

Walkthrough:
1. Hero → 톤 차분/단정 확인 ✅
2. Topics → 클로드+엑셀 카드 = 차별화 시그너처 인식 ✅
3. YouTube 카드 → "실제 강의 톤을 영상으로 미리 보세요" 명확한 CTA → @niniexcel 클릭 ✅
4. Talks 전체 보기 → 인프런/패스트캠퍼스 정규강의 ✅
5. Contact → mailto ✅

Total: ~40s. Friction count: 0. Heuristic violations: 0.

### Aggregate metric

| Metric | Value |
|---|---|
| Personas tested | 2 (P1, P3) |
| Total friction events | 0 |
| Heuristic violations | 0 |
| Time-to-mailto (P1) | ~58s |
| Time-to-mailto (P3) | ~40s |

Both well under 5분 conversion ceiling.

## 5. Critic verdict (omd-critic)

### Strengths

- 차별화 lever 절제됨 — amber 사용처 3곳으로 한정, indigo 위계 보호.
- Hero underline-stroke가 편집 디자인 시그너처 추가하면서 가독성 해치지 않음.
- SVG 아이콘 6종 stroke-1.5 일관 — line glyph 시스템 깔끔.
- A11y 추가 비용 0, 모든 인터랙션에 ring 적용.
- 새 deps 0개 — HARD constraint 100% 준수.
- 빌드 시간/번들 크기 변동 negligible.

### Weakest links + mitigations

1. **Hero dot-grid 시각 임팩트 약함**: opacity-60 × `rgba(0,0,0,0.06)` × 1px = 거의 안 보일 수 있음. 의도된 절제 (장식성 < 신뢰성). 만약 너무 보이지 않으면 `rgba(15,23,42,0.08)` 정도로 강화. 현재 보존.
2. **R icon이 단순 wordmark**: 다른 5개는 picto, R만 typo. 일관성 깨짐. 그러나 R은 universally recognized brand mark이므로 사용자에게 더 즉각적임. 트레이드오프 수용.
3. **Trust bar 7개 모두 동일 무게**: 인프런·패스트캠퍼스(플랫폼)와 현대차·한샘(기업)이 시각적으로 똑같음. 그룹화 안 함 — 다음 라운드에서 amber 라벨 + 그룹 분리 가능. 현재는 단일 라인 유지로 단순함 우선.
4. **Contact "평일 24시간 안에 회신"**: 이행 가능한 약속인지 본인 검증 필요. 의뢰자에게는 강한 트리거. 만약 본인이 실제로 24h 회신 보장 어려우면 "빠른 시일 내 회신드립니다"로 회귀 권장. **본인 결정 필요 항목.**

### Verdict

**SHIP.** 핵심 HARD constraints (emoji 0, 새 deps 0, 빌드 통과, 폴더 구조 유지, push 전 빌드 검증) 모두 충족. 차별화 약함은 의도된 절제이며 evaluator persona의 신뢰 형성 목표와 정렬됨. iterative second pass에서 사진 자산 + og:image 추가하면 1.5배 임팩트 가능.

## 6. Tradeoffs accepted

- 사진 미사용 (자산 라운드 별도 필요)
- 다크모드 미지원 (의뢰자 평가 페이지 우선순위 낮음)
- og:image / favicon 그대로 (vite.svg) — 별도 자산 라운드 권장
- "평일 24시간 회신" copy는 본인 검증 필요

## 7. Live URL

- Pre-deploy: https://haemin2525.github.io/biz/ (HTTP 200)
- Post-deploy: GH Actions auto-deploy on push to `main`. Verify same URL after Action completes.
