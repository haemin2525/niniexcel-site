# OMD-PLAN — niniexcel Profile Site Refinement

> Stage 1 (Plan) artifact. Autonomous fast-track mode — no user gate.
> Generated 2026-05-03.

## 1. Brief understanding

- **Surface**: live React + Tailwind landing at https://haemin2525.github.io/biz/.
- **Owner**: 장혜민 — 엑셀·데이터·AI 실무 강사, 콘텐츠 크리에이터.
- **Audience**: 한국 기업 L&D 담당자 / 정부 교육 기획자 / 온라인 강의 플랫폼 PM.
- **Goal**: 3초 안에 신뢰 형성 → "강의 문의하기" mailto 클릭.
- **Existing tone**: 차분한 indigo SaaS. 충분히 단정하지만 educator/creator 색이 옅음.

## 2. Refinement scope (refinement-only, no rewrite)

| 영역 | 현 상태 | 개선 방향 |
|---|---|---|
| Topic 카드 아이콘 | 이모지 6종 (📊🤖📈🗄️📐⚙️) | 인라인 SVG 6종 (`public/icons/topics/*.svg`), 1.5px stroke, brand indigo |
| 브랜드 차별화 | 단색 indigo SaaS | 주조색 indigo + 강조색 amber(#F59E0B) — trust bar / 강점 chips |
| Hero 타이포 | 기본 SaaS H1 | H1 weight 800, leading-[1.1], eyebrow tracking-[0.18em], 핵심구 underline-stroke |
| Hero 배경 | flat white | 옅은 dot-grid motif (radial-gradient pattern) — 크리에이터 톤 |
| Trust bar | 단순 나열 | 좌측 "출강·강의" 라벨 + amber 좌측 액센트 |
| 카드 호버 | border + shadow | hover translate-y-[-2px] + shadow lift |
| Microcopy | 무난 | 확신·따뜻함 톤으로 5개 string 정제 |
| A11y | 기본 | focus-visible 링, aria-label, lang 확인 |

## 3. Decisions taken (autonomous)

### D1 — Icon system: inline SVG file (NOT lucide/CSS-only)

Trade-off:
- ✅ zero new deps (per HARD constraint), reusable, designer-editable, alt-able
- ✅ matches existing `/products/*.svg` convention
- ❌ vs CSS-only: less brand-flex, but 6 hand-crafted glyphs feel more editorial than CSS shapes

→ Pick: SVG file. Files saved to `public/icons/topics/{excel,claude-excel,data-viz,sql,r,ai-workflow}.svg`. Schema: `topics.json[].icon` becomes path string `/icons/topics/<id>.svg`. `Topics.tsx` renders `<img src={t.icon} alt="" />` (decorative, alt empty since title already says it).

### D2 — Accent color: amber-500 (#F59E0B), tightly scoped

Used **only** on:
- Trust-bar 좌측 라벨 (text + small dot)
- About strengths card 좌측 액센트 바 (4px wide, gradient amber→transparent)
- Achievement chip "6년+ 출강" type micro-stats (없으면 추가)

Indigo는 모든 CTA·링크·강조 그대로 유지. amber는 절대 CTA에 안 씀 (위계 보호).

### D3 — Hero 핵심 emphasis underline

"부딪힌 만큼만" 위에 amber 1px wavy stroke. 인라인 SVG underline 사용 (CSS text-decoration-style 브라우저 호환 이슈 회피). Tailwind `before:` 가상요소 + bg-image SVG.

### D4 — Numbered trust ticker

기존: `현대자동차 한샘 광주은행 OK저축은행 하남시청 인프런 패스트캠퍼스` 일렬.
→ 변경 안 함 (label만 amber, 본문 그대로). 숫자 prefix는 카드형으로 만들면 시각적 잡음 → 보류.

### D5 — Microcopy fix list

| 위치 | Before | After | 이유 |
|---|---|---|---|
| Hero 부제 | `마켓컬리·모두싸인 출신 데이터 분석가 · 6년+ 대기업·공공기관 출강 · Excel · SQL · Claude` | `마켓컬리·모두싸인 출신 데이터 분석가 · 6년 이상 대기업·공공기관 출강 · Excel · SQL · Claude로 일하는 강사` | "+" 기호 거부감, 끝에 강사 명시 |
| Topics 부제 | `엑셀·데이터·AI를 비즈니스 현장의 언어로.` | `엑셀·데이터·AI를 비즈니스 현장의 언어로 옮깁니다.` | 더 액티브 |
| YouTube 부제 | `강의 스타일 미리 보기 · 니니의엑셀` | `실제 강의 톤을 영상으로 미리 보세요 · 니니의엑셀` | 명령형 클리어 |
| Contact 부제 | `기업 출강·정규 강의·콘텐츠 협업 환영합니다. 메일이 가장 빠릅니다.` | `기업 출강·정규 강의·콘텐츠 협업 환영합니다. 평일 24시간 안에 회신드립니다.` | 약속이 더 강함 |
| Contact secondary 카드 라벨 | `Other` | `다른 채널` | 영문/한글 혼재 정리 |
| Footer | (단순 © 라인) | + `강의 문의 · haemin2525@gmail.com` 한 줄 강조 | 사이트 끝에서도 conversion 유도 |
| Topic R 설명 | `통계·시각화·데이터 분석` | `통계 분석과 시각화의 베이스` | 동격 나열보다 한 문장 |

### D6 — A11y fixes

- 모든 button/anchor에 focus-visible ring 추가 (Tailwind `focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2`)
- Header `<nav>` 이미 있음 — `aria-label="주 메뉴"` 추가
- Home에 `<main>` 추가 (Header/Footer 외 본문 래핑) — 현재 `<>` fragment만 있어 landmark 없음
- Contact 메일 카드에 aria-label 명시 (`aria-label={"이메일 보내기 — " + email}`)
- TalkCard external link에 `aria-label` (스크린리더용)

### D7 — Build/deploy validation

- `npm run build` 로컬 통과 확인 후에만 commit
- 새 deps 추가 없음 (constraint)
- public/icons/* 는 vite copy됨 자동
- GH Actions auto-deploy

## 4. Deltas from existing design doc

원래 implementation plan 대비 변경점:
- emoji 제거 → SVG icon (HARD constraint 추가)
- accent color 추가 (단색 → 2색 시스템)
- hero underline-stroke 추가 (편집 디자인 요소)
- microcopy 7곳 정제

## 5. Out of scope (intentionally)

- 사진 추가 (별도 사진 자산 필요 — 현 라운드에서는 본인 결정 필요)
- 다크모드 (현재 light only, 의뢰자 평가 페이지에 다크모드 우선순위 낮음)
- og:image / favicon 갱신 (vite.svg → 별 자산 큐레이션 라운드)
- i18n EN 페이지 (현재 한국어 단일, 적합)
- 비디오 자동재생 hero (3초 컨버전 방해 가능성 — 추후 별도 검증)

## 6. Next stages

- Stage 2 (System) → DESIGN.md 토큰 lock
- Stage 3 (Make) → SVG 6종 + Topics 리팩 + Hero/About/Footer 강화 + microcopy 적용
- Stage 4 (Validate) → a11y audit + persona test + critic, 빌드/푸시
