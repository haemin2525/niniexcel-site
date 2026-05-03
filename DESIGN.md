# DESIGN.md — 니니의엑셀 디자인 시스템

본 문서는 사이트의 디자인 토큰과 크래프트 룰을 기록한다.
impeccable 원칙을 기반으로 하되, 한국어 비즈니스 톤에 맞춰 차분하게 운영한다.

## Type scale

### Families
- `font-sans` / `font-display` — **Manrope** (400/500/600/700/800), Pretendard fallback (KR), system-ui.
- `font-editorial` — **Instrument Serif Italic** (히어로의 강조 한 줄에만 사용).
- Inter는 사용하지 않는다.

### Sizes (Tailwind tokens)
| Role | Class | Notes |
|------|-------|-------|
| Eyebrow | `text-xs uppercase tracking-[0.22em]` | Caps + open tracking |
| Body | `text-base leading-relaxed` | 16px, 1.625 |
| Body small | `text-sm leading-relaxed` | 14px |
| Subhead | `text-lg font-semibold` | 18px |
| Section H2 | `text-2xl sm:text-3xl font-bold` | 24–30px |
| Page H1 | `text-3xl sm:text-4xl font-bold` | Talks/Products |
| Hero H1 | `text-5xl … xl:text-8xl font-black tracking-tight leading-[0.95]` | Massive, balance, ink-900 |

### Hierarchy rules
- H1 / H2 모두 `text-balance` 적용.
- Body 단락은 `max-w-prose` 또는 `max-w-2xl` 로 측정값(45–75ch) 유지.
- 한 페이지에서 동일 역할의 텍스트는 동일 토큰을 쓴다.

## Color tokens

브랜드 코어는 indigo + amber. 중립은 **순흑/순회색을 피하고 cool ink로 살짝 틴팅** 한다.

| Token | Hex | Use |
|-------|-----|-----|
| `brand` | `#4F46E5` | Primary action, link, hover border |
| `brand-50` | `#EEF2FF` | Soft surface, hover ring |
| `accent` | `#F59E0B` | Hero italic line, signature warmth |
| `accent-50` | `#FEF3C7` | (reserved) |
| `paper` | `#FAFAFB` | Sectional off-white surface |
| `ink-50` | `#F7F8FA` | Lightest surface |
| `ink-100` | `#EEF0F3` | Hairline divider, tag bg |
| `ink-200` | `#DCDFE4` | Card border, control border |
| `ink-300` | `#B9BFC9` | Disabled |
| `ink-400` | `#8B93A1` | De-emphasized meta |
| `ink-500` | `#5A6373` | Secondary text, captions |
| `ink-600` | `#3F4757` | Body text |
| `ink-700` | `#2C3340` | Strong body, label |
| `ink-800` | `#1F2531` | Default body (`<body>`) |
| `ink-900` | `#141926` | Headings, primary content |
| `ink-950` | `#0B0F1A` | Reserved |

`text-black`, `text-slate-900`, `#000`, `#fff` 사용 금지. Body bg만 순백(`bg-white`).

## Spacing & rhythm
- Container — `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical — `py-20` (homepage), `pt-20 pb-2 + section py-20` (sub pages).
- Grid gap — `gap-4` (cards), `gap-8`/`gap-12` (page sections).
- Card padding — `p-5` (compact) / `p-6` (standard) / `p-8` (hero contact).

## Motion language
- Tokens: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint) for entrance, `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) for snappier feedback.
- Durations: 150–200ms (hover/focus), 600ms (Hero entrance, gated by `prefers-reduced-motion`).
- Hero italic line — `hero-fade-up-delay` keyframe (translateY 8→0, opacity 0→1, 600ms, +120ms delay).
- Card hover — `scale-[1.005]` + `ring-1 ring-brand-50` + border swap. **No Y-translate, no shadow lift, no bounce.**

## Anti-patterns honored
- No Inter / Roboto / Open Sans / Arial.
- No pure black or pure gray text.
- No gray text on colored surfaces.
- No card-in-card nesting.
- No bounce/elastic easing.
- No side-stripe borders (>1px).
- No gradient text on body content.
- No glassmorphism beyond the header backdrop-blur.
- No emojis in user-visible UI strings.
- No em-dashes in copy.

## Accessibility floor
- Body text ≥ 16px, headings scale up.
- `focus-visible:ring-2` on every interactive element with `ring-offset-2`.
- Touch targets ≥ 44px on mobile (verify via `py-2.5+`).
- Contrast: `ink-900` on white ≈ 16:1; `ink-600` on white ≈ 8.6:1; `brand` on white ≈ 6.5:1 — all pass WCAG AA.
- `prefers-reduced-motion` honored on the only animation.
- All external links carry `aria-label` with "(새 창)" hint and `rel="noopener noreferrer"`.
