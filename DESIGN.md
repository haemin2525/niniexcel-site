# Design Contract — Warm Dark, Airy, Operational

> v2 (zero-base rebuild). Replaces all prior indigo/amber/ink/paper systems entirely.

## Palette

Warm dark canvas. Never pure black, never pure white. Single accent.

| Token | Hex | Use |
|---|---|---|
| canvas | #14110D | page base, warm near-black |
| surface-1 | #1A1612 | frame fill |
| surface-2 | #221C16 | panel surface |
| surface-3 | #2C251D | panel hover |
| hairline | #3A3127 | dividers, borders (very low contrast) |
| muted | #7A6E5C | de-emphasized meta |
| body | #C9BEA6 | body text on warm dark |
| head | #F0E8D5 | headings (warm off-white) |
| accent | #D4A063 | single accent — warm amber-bronze |
| accent-soft | #5C4528 | accent ring/glow |

## Typography

Single sans family. No editorial italic, no serif accent.

- Display/body: Space Grotesk 400/500/600/700 (Google Fonts, display=swap).
- Korean: Pretendard Variable (jsdelivr).
- Fallback: system-ui, sans-serif.

| Role | Spec |
|---|---|
| Hero pill | 11px uppercase tracking-[0.20em] font-medium muted |
| Hero H1 | clamp(40px, 7vw, 96px) font-semibold tracking-[-0.02em] leading-[1.05] head |
| Hero subhead | clamp(16px, 1.6vw, 20px) body tracking-[-0.005em] leading-[1.4] |
| Panel label | 11px uppercase tracking-[0.18em] muted |
| Panel title | 18px font-medium head |
| Panel body | 14px leading-[1.5] body |
| Button | 14px font-medium tracking-[-0.005em] |

## Spacing / Rhythm (시원함 정량)

- Outer page padding: px-6 sm:px-10 lg:px-16
- Frame max-width: max-w-[1200px] mx-auto
- Hero vertical: py-32 sm:py-40 lg:py-48
- Section gap: mt-32 sm:mt-40
- Stack: space-y-6 (pill→H1) → space-y-3 (H1→subhead) → pt-12 (→ContactCard)

## Background

`body` painted radial wash:

```
radial-gradient(120% 80% at 50% -10%, #221C16 0%, #14110D 60%)
```

Ultra-slow drift 30s linear infinite (±2% position) gated by `prefers-reduced-motion`.

## Motion

- Mount: 600ms cubic-bezier(0.22, 1, 0.36, 1) opacity 0→1 + translateY 6→0.
  - Stagger: pill 0ms → H1.1 120ms → H1.2 240ms → subhead 360ms → CTA 480ms → grid 640ms.
- Masked text reveal: H1 phrase span clip-path inset(0 100% 0 0)→inset(0 0 0 0) 700ms.
- Hover: transition-colors duration-200 only. NO translate/scale/shadow lift.
- All animations gated by `@media (prefers-reduced-motion: no-preference)`.
- Bounce/elastic easing forbidden.

## Single-line phrase enforcement

Every phrase = a `<PhraseLine>` component. Mechanism (3 layers):

1. Atomic phrase: `display: inline-block; white-space: nowrap; word-break: keep-all; overflow-wrap: normal;`
2. Fluid type with floor: `font-size: clamp(min, vw, max)` calibrated so the longest expected phrase (≤14 KR chars) fits at 390px.
3. Runtime overflow guard: ResizeObserver detects `scrollWidth > clientWidth`, sets `data-overflow="true"`, applies `font-size: 0.92em`.

## Buttons

- Default: rounded-[6px], border border-hairline, bg-surface-2 hover:bg-surface-3 text-head, px-5 py-2.5.
- Primary: bg-accent text-canvas border-transparent hover:bg-accent/90.
- No filled-color secondary. No gradient buttons.

## Anti-patterns (forbidden)

- Pure black (#000), pure white (#FFF), pure gray (any of the slate-* / zinc-* on warm-dark canvas).
- Card-in-card: a card or rounded-* container nested inside another rounded-* container.
- Heavy shadows, drop-shadow, saturated indigo/amber/violet/blue accents.
- Bounce/elastic easing.
- Common SaaS fonts (Inter, Arial, system defaults as primary — system-ui only as fallback).

## Accessibility floor

- focus-visible:ring-2 ring-accent ring-offset-2 ring-offset-canvas on every interactive element.
- color contrast on warm-dark: head #F0E8D5 on canvas #14110D ≥ 14.0:1, body #C9BEA6 on canvas ≥ 9.0:1.
- `<html lang="ko">` mandatory.
- External links: `rel="noopener noreferrer"` + descriptive `aria-label`.
- Keyboard reachable in DOM order, no positive tabindex.
