# DESIGN.md — niniexcel Profile Site

> Stage 2 (System) artifact. Token + spec lock.
> base_reference: stripe-like calm SaaS + editor-first delta
> created: 2026-05-03

## §1 Visual Theme

- **Tone**: 단정한 신뢰 + 따뜻한 교육자. cold SaaS 아님.
- **Density**: 여백 넉넉, 카드 라운딩 12-16px, 1px hairline border.
- **Voice**: confident-warm Korean (반말 X, 경어 O, "~합니다/세요" tone).

## §2 Color tokens

| Token | Hex | 사용처 |
|---|---|---|
| `brand` (indigo-600) | `#4F46E5` | 1차 CTA, 링크, 호버, focus ring |
| `brand-50` | `#EEF2FF` | brand chip background (existing `bg-brand/10`) |
| `accent` (amber-500) | `#F59E0B` | trust bar 좌측 라벨, About strengths 좌측 stroke, Hero underline |
| `accent-50` | `#FEF3C7` | (예약) achievement chip background |
| `slate-900` | `#0F172A` | 본문 heading |
| `slate-700` | `#334155` | 본문 텍스트 |
| `slate-600` | `#475569` | sub-heading |
| `slate-500` | `#64748B` | meta, footer |
| `slate-200` | `#E2E8F0` | hairline border |
| `slate-100` | `#F1F5F9` | section bg (About, TalkList, Products) |
| `slate-50` | `#F8FAFC` | card hover bg |
| `white` | `#FFFFFF` | card surface |

**Contrast 검증** (WCAG AA):
- brand on white: 8.59:1 ✅
- white on brand: 8.59:1 ✅
- amber-500 on white: 2.79:1 — **본문에 절대 사용 금지**, 4px 두께 stroke / 굵은 라벨에만
- slate-700 on white: 12.6:1 ✅

## §3 Typography

- **Family**: Pretendard (KR) → Inter (EN fallback) → system-ui
- **Scale** (existing + tweaks):
  - Hero H1: `text-3xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight` (was font-bold)
  - Page H1 (Talks/Products): `text-3xl sm:text-4xl font-bold`
  - Section H2: `text-2xl sm:text-3xl font-bold`
  - Card H3: `font-bold text-lg`
  - Body: `text-base sm:text-lg` (Hero 부제), `text-sm` 카드 내부
  - Eyebrow: `text-sm font-medium uppercase tracking-[0.18em]` (was `tracking-widest`)

## §4 Spacing

- Section vertical: `py-20`
- Hero: `pt-16 pb-20 sm:pt-24 sm:pb-28`
- Page top (sticky header offset): `pt-20 pb-2`
- Card inner: `p-5` (compact) / `p-6` (topics) — keep existing
- Grid gap: `gap-4` (cards), `gap-6` (products)
- Container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`

## §5 Radius

- Card / button / chip-large: `rounded-xl` (12px)
- Pill / chip-small: `rounded-full` / `rounded-md`
- 변경 없음.

## §6 Depth (shadow)

- Card resting: border-only, no shadow
- Card hover: `shadow-md` + `-translate-y-0.5` (subtle lift)
- CTA primary (brand): `shadow-md hover:opacity-90`
- 모션 라이브러리 X. Tailwind `transition` only.

## §7 States (5-state-per-component)

### Button (primary)
| State | Class delta |
|---|---|
| resting | `bg-brand text-white shadow-md` |
| hover | `opacity-90` |
| focus-visible | `ring-2 ring-brand ring-offset-2 outline-none` |
| active | `opacity-95 translate-y-px` |
| disabled | (해당 없음 — mailto만) |

### Button (secondary)
| State | Class delta |
|---|---|
| resting | `border border-slate-200 text-slate-700` |
| hover | `border-brand text-brand` |
| focus-visible | `ring-2 ring-brand ring-offset-2` |
| active | `bg-slate-50` |
| disabled | n/a |

### Card (Topic / Talk / Product)
| State | Class delta |
|---|---|
| resting | `border border-slate-200 bg-white` |
| hover | `border-brand shadow-md -translate-y-0.5` |
| focus-visible (anchor) | `ring-2 ring-brand ring-offset-2` |
| active | `translate-y-0` |
| empty | placeholder block (해당 없음 — 모든 데이터 채워짐) |

### Nav link (Header)
| State | Class delta |
|---|---|
| resting | `text-slate-600` |
| hover | `text-brand` |
| focus-visible | `ring-2 ring-brand ring-offset-2 rounded-md` |
| active (current route) | `text-brand` (수동 적용 안 함, 1차 출시 단순 유지) |
| visited | n/a |

### Chip (cert badge / tag)
| State | Class delta |
|---|---|
| resting | `bg-brand/10 text-brand` (cert) / `bg-slate-100 text-slate-600` (tag) |
| hover | n/a (decorative) |
| focus-visible | n/a |
| active | n/a |
| selected | n/a |

## §8 Components

| Name | File | Purpose |
|---|---|---|
| Header | components/Header.tsx | sticky nav + brand wordmark |
| Hero | components/Hero.tsx | 3초 후크 + 2 CTA + trust bar |
| About | components/About.tsx | 강점 3종 + 경력 + 자격 |
| Topics | components/Topics.tsx | 강의 영역 6 cards (SVG 아이콘) |
| TalkList | components/TalkList.tsx | 강의 이력 (compact 6 / 전체) |
| TalkCard | components/TalkCard.tsx | 단일 강의 카드 |
| YouTubeEmbed | components/YouTubeEmbed.tsx | 채널 링크 카드 |
| ProductCards | components/ProductCards.tsx | 디지털 플래너 (compact 2 / 전체) |
| Contact | components/Contact.tsx | mailto 카드 + 보조 채널 |
| Footer | components/Footer.tsx | © + 빠른 메일 |

## §9 Templates

- Home: Header > Hero > About > Topics > TalkList(compact) > YouTube > ProductCards(compact) > Contact > Footer
- Talks: Header > Page-H1 > TalkList > Footer
- Products: Header > Page-H1 > ProductCards > Footer
- NotFound: 404 centered

## §10 Voice (preserved + sharpened)

- "현업에서 부딪힌 만큼만, 비전공자도 쓸 수 있게 가르칩니다."
- 약속하지 않음을 약속하지 않는다 ("최고", "1위" X)
- 숫자는 항상 사실 (6년+, 강사 SQLD/ADsP — 모두 CV 검증됨)
- 영문 라벨 최소화 (Email/Other → 한국어)

## §11 Brand Narrative

- **출신**: 의류학 전공 + 마켓컬리/29CM/팀블라인드 MD 4사 → 모두싸인 데이터 분석가 → 강사
- **차별점**: 비전공자 출신이 비전공자에게 가르침. AI 시대 멀티 스킬 (SQL+R+Tableau+Claude+Gemini)
- **신뢰 자산**: 현대자동차/한샘/광주은행/OK저축은행 출강, 인프런/패스트캠퍼스 정규 강의

## §12 Principles

1. 3초 안에 어떤 사람인지 보여라
2. 약속할 수 있는 것만 약속하라 (마케팅 부풀리기 금지)
3. 메일을 가장 가까운 곳에 두라 (Hero CTA + Footer)
4. 한국 기업 담당자 시선에서 검증 가능한 사실만 노출

## §13 Personas

- **P1 — 박과장 (38, 대기업 L&D)**: 5분 안에 의뢰 결정. 신뢰 자산 (출강 이력) 빠르게 스캔.
- **P2 — 김주임 (29, 정부 교육 기획)**: 공공기관 강의 경험 확인. 단가/일정 메일로 빠른 회신 기대.
- **P3 — 이PD (34, 온라인 강의 플랫폼)**: 영상 톤 미리 보고 싶음. YouTube 임베드/링크 활용.
- **P4 — 황대표 (45, 교육 콘텐츠 회사)**: 책 집필·플래너 같은 콘텐츠 능력 확인. Products/스마트스토어 클릭.

## §14 States (page level)

- **default**: 본문 그대로 노출
- **loading**: SPA 로컬 데이터, no loading state needed
- **empty**: 모든 콘텐츠 정적 채워짐
- **error**: 잘못된 라우트 → NotFound
- **offline**: GH Pages — 브라우저 기본 처리

## §15 Motion

- Tailwind `transition` (200ms 기본)
- 카드 호버: `transition-all duration-200`
- Hero CTA: `transition-opacity`
- 모션 라이브러리 / Framer / GSAP 사용 안 함 (HARD constraint)

## Token export (for Tailwind extend)

```js
// tailwind.config.js extend
colors: {
  brand: { DEFAULT: "#4F46E5", 50: "#EEF2FF" },
  accent: { DEFAULT: "#F59E0B", 50: "#FEF3C7" }
}
```

## Icon system spec

- 6 inline SVG, 24×24 viewBox, stroke-1.5, currentColor
- Color: `text-brand` on white card
- File: `public/icons/topics/{excel|claude-excel|data-viz|sql|r|ai-workflow}.svg`
- Render: `<img src={icon} alt="" className="w-6 h-6" aria-hidden />`
- 카드 좌상단, 24px 영역 (was: text-2xl emoji)
