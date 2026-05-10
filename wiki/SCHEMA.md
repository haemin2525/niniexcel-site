# Wiki SCHEMA — Layer 3 (운영 규칙)

> 이 위키는 LLM-Wiki 패턴(Karpathy)의 Layer 2(AI 유지) 영역. 본 문서는 Layer 3 — **사람이 정의하는 규칙**.

## 1. 폴더 카테고리

| 폴더 | 무엇이 들어가나 | 단위 |
|---|---|---|
| `people/` | 사람·인물 페이지 | 1인 1파일 (예: `janghyemin.md`) |
| `topics/` | 강의 주제·도메인 지식 | 주제별 1파일 (예: `excel-fundamentals.md`) |
| `lectures/` | 개별 강의 (이력 + 예정) | 강의 단위 1파일, `index.md`로 통합 색인 |
| `design/` | 디자인 결정·인사이트 | 결정 단위 1파일 |
| `stack/` | 기술 스택·라이브러리 결정 | 스택 단위 1파일 |
| `inspirations/` | 외부 디자인 영감 (lazyweb 결과 등) | 캡처 + 분석 1파일 |
| `decisions/` | ADR-style "왜 그렇게 결정했나" | 의사결정 1파일 |

> Layer 1(`/sources/`)에서 가져온 원본은 절대 여기에 복사·수정하지 않는다. 위키는 **요약·연결·해석**의 층위.

## 2. 파일 작성 규약

### 2.1 모든 페이지의 머리글 (frontmatter)

\`\`\`yaml
---
title: 페이지 제목 (사람용)
slug: 파일명-slug
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources:
  - sources/원본파일.pdf
related:
  - people/janghyemin
tags: [엑셀, 강사, 6년차]
---
\`\`\`

- `sources`: Layer 1 원본 경로 (수정 금지) — 인용 출처
- `related`: 같은 wiki 내 cross-reference 페이지들 (slug, .md 생략)
- `tags`: 검색용 키워드 (3~10개)

### 2.2 본문 구조

페이지 한 줄 요약 → 핵심 사실 → 본문 → Cross-reference (\[\[폴더/slug\]\] 형식, Obsidian 호환).

## 3. 운영 동작 (Operations)

### 3.1 Ingest (흡수)
새 자료가 `sources/`에 추가되면 content-archivist 에이전트가 관련 wiki 페이지들을 동시 갱신, 새 페이지 필요 시 신규 생성, index/log 갱신, cross-reference 연결.

### 3.2 Query (질문)
질문 들어오면 wiki에서 답 합성 + 출처 명시. 답이 가치 있으면 `decisions/Q-<슬러그>.md`로 새 페이지화.

### 3.3 Lint (점검)
고아 페이지·모순·빈 페이지·오래된 페이지 점검.

## 4. index.md / log.md 운영

- **index.md**: 카테고리별 페이지 1줄 카탈로그. ingest 끝마다 자동 갱신.
- **log.md**: 시간순 append-only 일지. `YYYY-MM-DD HH:MM — [동작] 한 줄 요약` 형식.

## 5. 금기

1. Layer 1 원본 수정 금지
2. 본문 직접 인용(복붙) 금지 — 요약·해석으로 변환
3. 카테고리 임의 추가 금지 — SCHEMA.md 먼저 갱신 후 폴더 생성
4. cross-reference 깨짐 방치 금지 — lint에서 발견되면 즉시 보수
