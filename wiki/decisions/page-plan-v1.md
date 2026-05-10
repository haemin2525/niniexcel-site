---
title: Page Plan v1 — niniexcel-site 콘텐츠 설계 결정 (2026-05-10)
slug: page-plan-v1
created: 2026-05-10
updated: 2026-05-10
sources:
  - docs/PAGE_PLAN.md
related:
  - people/janghyemin
  - topics/excel-basic
  - topics/excel-intermediate
  - topics/pivot-table
  - topics/claude-in-excel
  - topics/claude-cowork-automation
  - lectures/index
tags: [page-plan, 페르소나, 신뢰, 의뢰자여정, hero카피, topics-5, decision, ADR]
---

# Page Plan v1 — niniexcel-site 콘텐츠 설계 결정

> 페르소나 우선 인터뷰 6턴(2026-05-10) 결과의 ADR 요약. 본문은 [docs/PAGE_PLAN.md](../../docs/PAGE_PLAN.md).

## 결정 요약

| 결정 | 내용 |
|---|---|
| **페르소나 1순위** | HRD/L&D 담당자 + 공공기관 교육 기획자 (균형) |
| **Top concern 우선순위** | 신뢰 > fit > 소통 |
| **단일 핵심 메시지** | "엑셀과 AI를 실무에서 바로 쓰도록 가르칩니다." |
| **About 섹션** | 제거 (자기소개 narrative 안 둠) |
| **신뢰 신호** | 명단 strip (가로 슬라이딩, 기업·공공·플랫폼 3줄) |
| **Topics 카테고리** | 5개 — 엑셀 기본 / 엑셀 중급 / 피벗테이블 / 클로드인엑셀 / 클로드코워크 자동화 |
| **Primary CTA** | "강의 의뢰하기" → `/inquiry` 별도 페이지 |
| **Secondary CTA** | "유튜브 둘러보기" → 외부 |
| **섹션 순서** | Hero → 명단 strip → ProcessGrid → Topics → Talks → Youtube → Products → Contact |
| **Brand keyword** | "일머리 / 일머리 엑셀" (강의 시리즈명 시그니처) |

## 근거

- HRD+공공 균형: 출강 이력 다수가 양쪽 다 — 한쪽으로 기울 이유 없음
- 신뢰 1순위: 첫 방문자는 강사 모름. 신뢰 게이트 통과 못 하면 다음 단계로 못 감
- About 제거: PRODUCT.md "본명 노출 금지" + "Premium but not luxury" 톤과 정합. 30초 결정 의뢰자에게 자기소개 narrative는 사치
- Topics 5개: sources/진행 강의.md의 실제 클래스 단위와 정합

## 미해결

`docs/PAGE_PLAN.md` 8번 항목 참고 — Hero 서브헤드, Topics 카드 클릭 동작, Talks timeline 스타일, Youtube 영상 4개 선정, Products 이미지, /inquiry 폼 서비스 선택.
