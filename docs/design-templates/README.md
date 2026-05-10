# Design Templates — 시안 보관 라이브러리

> 이 폴더는 사이트에 적용할 수 있는 **디자인 시스템 시안들의 아카이브**.
> 현재 활성 시안은 항상 루트 `DESIGN.md`. 여기는 후보·롤백용 보관소.

## 구조

각 폴더 = 하나의 디자인 시안. 각 시안은 자체 `DESIGN.md` (Layer 3 — 룰)를 가진다.

```
docs/design-templates/
├── README.md (이 문서)
├── warm-dark/
│   └── DESIGN.md  ← 상래씨 v2 워밍 다크 (#14110D + amber #D4A063)
└── uber/
    └── DESIGN.md  ← Uber 스타일 (pure black/white + 999px pill, 2026-05-10 적용)
```

## 시안 교체 방법

1. 새 시안을 `docs/design-templates/<brand>/DESIGN.md` 로 추가
2. 마음에 들면 루트 `DESIGN.md`로 복사
3. tailwind.config.js + src/styles + 컴포넌트들의 토큰을 새 시안으로 갱신
4. playwright로 캡처 검수
5. commit ("design(<brand>): switch to <brand> design contract")

## 출처

- **warm-dark**: 상래씨(kimchicadny)가 zero-base rebuild로 작성한 v2 (2026-05-03 commits 참고)
- **uber**: voltagent/awesome-design-md (https://github.com/voltagent/awesome-design-md/blob/main/design-md/uber/DESIGN.md)

## 이력

| 시점 | 활성 시안 | 비고 |
|---|---|---|
| 2026-05-03 | warm-dark | 상래씨 zero-base rebuild |
| 2026-05-10 | uber | 혜민님 + 상래씨 합의로 변경 |
