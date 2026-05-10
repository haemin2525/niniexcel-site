# Page Plan — niniexcel-site v1

> 페르소나 우선 인터뷰(2026-05-10, 6턴) 결과 정리. 사이트 콘텐츠·구조·CTA의 단일 진리원.

## 1. 페르소나

### 1순위 (균형 페어)

| | A. HRD/L&D 담당자 | B. 공공기관 교육 기획자 |
|---|---|---|
| 누구 | 기업 인사·교육팀 매니저 | 시청·재단·진흥원 인재개발팀 |
| 의사결정 | 분기·반기 외부 강사 섭외 | 시민·공무원·중장년 단발 특강 |
| 결정 시간 | 30초 ~ 3분 (사이트 첫 인상에서 판단) |
| 기대 신호 | 검증된 출강 이력 + 비즈니스 언어 친화 |

> ⚠️ **균형 원칙**: 한쪽으로 치우치지 않게. Talks 섹션은 기업·공공 두 줄 동등, Topics는 양쪽 모두 통하는 주제 우선, Hero·About 톤은 "기업·공공 양쪽 검증" 식.

### 2순위 (보조)

C. 강의 플랫폼 PD — 인프런·패스트캠퍼스 등 콘텐츠 디렉터. 별도 메시지 X. 1순위 신호로 자연 호환.

## 2. Top concern (우선순위)

```
신뢰 (1순위) > fit (2) > 소통 (3)
```

- 의뢰자 첫 망설임은 "이 사람 진짜 잘하나?". 사이트는 그걸 가장 빠르게 풀어야 함
- fit("우리 청중에 맞을까?")은 ProcessGrid·Topics가 풀어줌
- 소통은 ContactCard 안 "2영업일 회신" 한 줄로 해결

## 3. 의뢰자 여정 (5단계)

| 단계 | 의뢰자 머릿속 | 사이트의 응답 |
|---|---|---|
| 1. 도착 | "이 사람 누구?" | Hero 한 줄 메시지 |
| 2. 신뢰 게이트 | "검증된 사람?" | 명단 strip (가로 슬라이딩) — 즉시 안심 |
| 3. 적합도 검증 | "내 청중에 맞나?" | ProcessGrid 4단 + Topics 5 카테고리 |
| 4. 깊이 비교 | "다른 강사보다 나은가?" | Talks 이력 + Youtube 톤 + Products 깊이 |
| 5. 행동 | "메일 써볼까?" | 강의 의뢰하기 → /inquiry 폼 페이지 |

## 4. 단일 핵심 메시지 (thesis line)

> **"엑셀과 AI를 실무에서 바로 쓰도록 가르칩니다."**

Hero h1로 노출. About 별도 섹션 없음 (페이지 안 자기소개 narrative 제거).

### Brand keyword

**일머리 / 일머리 엑셀** — 강의 시리즈명에서 따온 시그니처. Topics·Talks 카드의 sub-copy에 자연스럽게 등장.

## 5. 페이지 구조 (8 섹션 + 1 별도 라우트)

```
ROUTE  /
├─ 1. Hero            (메시지 + Pill + ContactCard)
├─ 2. Clientele Strip (명단 가로 슬라이딩 — 신뢰 게이트)
├─ 3. ProcessGrid     (분야·경력·방식·응답 4단)
├─ 4. Topics          (5 카테고리 카드)
├─ 5. Talks           (출강 이력 timeline)
├─ 6. Youtube         (@niniexcel 임베드)
├─ 7. Products        (디지털 플래너)
└─ 8. Contact         (마지막 안전망 ContactCard)

ROUTE  /inquiry       (강의 의뢰 폼 페이지 — 신규)
ROUTE  /talks         (강의 이력 상세 — 추후)
ROUTE  /products      (플래너 모음 상세 — 추후)
ROUTE  /404
```

About 제거됨. 자기소개는 ProcessGrid + 명단 strip + Talks가 떠받침.

## 6. 섹션별 Brief

### 6.1 Hero

| 항목 | 값 |
|---|---|
| 의도 | 한 호흡에 brand statement 전달 |
| eyebrow pill | "NINIEXCEL · INSTRUCTOR" (chip-gray pill) |
| h1 (메시지) | "엑셀과 AI를 실무에서 바로 쓰도록 가르칩니다." |
| 서브헤드 | **없음** — 한 줄로 임팩트 강화 (2026-05-10 확정) |
| Primary CTA | "**강의 의뢰하기**" → `/inquiry` (ink black pill) |
| Secondary CTA | "유튜브 둘러보기" → 외부 링크 (white border pill) |
| 노출 위치 | ContactCard 내부 (Hero 아래쪽) |

### 6.2 Clientele Strip — 신규 컴포넌트

| 항목 | 값 |
|---|---|
| 의도 | 신뢰 게이트 — 의뢰자 즉시 안심 ("이 분 진짜 의뢰받는 분이네") |
| 노출 | Hero 직후 |
| 구성 | 3개 가로 슬라이딩 줄 (라벨 + 명단) |
| 동작 | 가로 무한 marquee, 호버 시 정지, prefers-reduced-motion 시 정지, **기업명 단위 white-space: nowrap** |
| CTA | 없음 (시각적 신호만) |

**3 줄 콘텐츠**:

```
기업    | 현대자동차 · 한샘 · 광주은행 · OK저축은행 · 롯데케미칼
공공    | 한국경제진흥원 · 도봉구청 · 한밭대 · 군포시청 · 하남시청 · 철도노조 · 서울 장학 재단
플랫폼  | 인프런 · 패스트캠퍼스 · 탈잉 · 크몽 · 프립
```

### 6.3 ProcessGrid (이미 구현)

4단 카드 그대로 유지. (분야 / 경력 / 방식 / 응답)

### 6.4 Topics — 5 카드

| # | 카드 헤드 | 한 줄 | wiki 출처 |
|---|---|---|---|
| 1 | 엑셀 기본 — 일머리부터 | 단축키·클렌징·함수·피벗 첫걸음 | wiki/topics/excel-basic |
| 2 | 엑셀 중급 — 막히던 업무를 스스로 | 중첩 함수·시각화·보고서 + AI 활용 | wiki/topics/excel-intermediate |
| 3 | 피벗테이블 단독 클래스 | 계산 필드·슬라이서·파워쿼리 | wiki/topics/pivot-table |
| 4 | 클로드인엑셀 | 셀·시트 안에서 단발 AI 호출 | wiki/topics/claude-in-excel |
| 5 | 클로드코워크로 엑셀 자동화 | 엑셀 잘 다루는 사람 → 엑셀을 시키는 사람 | wiki/topics/claude-cowork-automation |

**카드 클릭 동작**: 페이지 안 모달이 열림. 모달 구성 = (1) 상세 커리큘럼 (2) 소요시간 약 N시간 (3) 안내문구 "상세 커리큘럼은 조율 가능합니다." 모달 하단 [이 강의 의뢰하기] 버튼 → `/inquiry?course=<slug>` 로 이동하며 드롭다운 자동 선택. (2026-05-10 확정)

### 6.5 Talks — 출강 이력

| 항목 | 값 |
|---|---|
| 의도 | 검증된 출강 이력 — 신뢰 강화 (명단 strip의 풀버전) |
| 구성 | **세로 timeline** (시간 역순) — 왼쪽 세로선 + 날짜 노드 + 기관명·주제. 카테고리(기업/공공/플랫폼) 라벨 (2026-05-10 확정) |
| 자료 | wiki/lectures/index.md |
| CTA | (선택) "전체 이력 보기" → `/talks` |

### 6.6 Youtube

| 항목 | 값 |
|---|---|
| 의도 | 강의 톤 미리보기 (fit 검증) |
| 구성 | @niniexcel 채널 임베드 1개 + **조회수 TOP 4 자동 노출** (Youtube Data API 또는 임베드 playlist) (2026-05-10 확정) |
| CTA | "유튜브에서 더 보기" → 외부 채널 |

### 6.7 Products — 디지털 플래너

| 항목 | 값 |
|---|---|
| 의도 | 콘텐츠 깊이 (집필·플래너 등 부수 활동) |
| 구성 | 디지털 플래너 카드 — **제품 사진 동반** (텀블벅 / 스마트스토어 링크). 사진 톤은 일관성 유지 (흑백·화이트 배경 권장) (2026-05-10 확정) |
| 비고 | 『클로드엑셀』(가안) 집필 중 — 출간 시 추가 |

### 6.8 Contact — 마지막 안전망

| 항목 | 값 |
|---|---|
| 의도 | Hero에서 의뢰 안 한 의뢰자를 다시 잡음 |
| 구성 | ContactCard 다시 (이메일 + 강의 의뢰하기 CTA) + "2영업일 회신" 명시 |

### 6.9 /inquiry — 강의 의뢰 폼 페이지 (신규 라우트)

| 항목 | 값 |
|---|---|
| 의도 | 의뢰자가 메일 작성 부담 없이 빈칸 채우게 → 1메일 = 1전환 효율↑ |
| 폼 항목 (확정 7개) | (1) 기업·기관명 (2) 담당자 이름 (3) 연락처(이메일) (4) 관심 강의 — 5개 카테고리 + "아직 미정" 드롭다운 (5) 희망 일정 (6) 수강 대상 정보 — 예시: "신입사원 50명, 입사 1년차 OT 교육" (7) 세부 문의 내용 (옵션). 1~6 필수, 7 선택. (2026-05-10 확정) |
| 제출 처리 | **Google Apps Script** web app 자체 endpoint. 제출 → 시트에 행 단위 누적 + haemin2525@naver.com 으로 자동 메일 알림. 무료 영구. 외부 SaaS 의존성 0. 페이지 안 fetch + JSON 응답 + 전송 완료 패널. (2026-05-10 확정, Formspree에서 전환) |

## 7. 디자인 컨트랙트 준수 (DESIGN.md = Uber)

- 모든 컴포넌트는 `ink/paper/hover-gray/chip-gray/body-gray/muted-gray` 토큰만 사용
- 버튼은 `rounded-pill-full` (999px)
- 카드는 `rounded-[8px]` (또는 12px) + `shadow-card-light`
- 폰트는 Inter (Google Fonts) + Pretendard (한글)
- card-in-card 금지, gradient 금지, mid-gray 금지

## 8. 미해결 / 다음 사이클 결정

1. ✅ ~~Hero 서브헤드~~ — **빼고 한 줄로 확정** (2026-05-10)
2. ✅ ~~Topics 카드 클릭~~ — **페이지 안 모달** (커리큘럼·소요시간·조율 안내) + [의뢰하기]→/inquiry prefill (2026-05-10)
3. ✅ ~~Talks timeline 스타일~~ — **세로 timeline 확정** (2026-05-10)
4. ✅ ~~Youtube 영상 4개~~ — **조회수 TOP 4 자동 노출** (2026-05-10)
5. ✅ ~~Products 카드 이미지~~ — **제품 사진 동반 확정**, 톤 일관성 유지 (2026-05-10)
6. ✅ ~~/inquiry 폼 서비스~~ — **Google Apps Script** 자체 endpoint, 시트 누적 + naver.com 메일 알림 (2026-05-10)

## 9. 구현 순서 (단계 5 진행 시)

```
1. /inquiry 라우트 신설 + 폼 (별도 페이지라 여기부터)
2. Hero 버튼 라벨 변경 + /inquiry 링크 연결
3. Clientele Strip 컴포넌트 신규 (가로 marquee)
4. Topics 5 카드 (현재 빈 영역, JSON content 추가 후 카드 컴포넌트)
5. Talks 섹션 (lectures/index 데이터 → 카드 또는 timeline)
6. Youtube 섹션 (임베드 + 추천 영상 4개)
7. Products 섹션 (플래너 카드)
8. Contact 섹션 (Hero ContactCard 재사용)
9. 모바일 헤드라인 잘림 fix (PhraseLine 보강)
```

## 10. 출처·근거

- 페르소나·우려사항: 2026-05-10 인터뷰 6턴
- 강사 자산: wiki/people/janghyemin.md
- 강의 카탈로그: wiki/topics/* (5개)
- 출강 이력: wiki/lectures/index.md
- 디자인 컨트랙트: DESIGN.md (Uber)
- 제품 정의: PRODUCT.md
