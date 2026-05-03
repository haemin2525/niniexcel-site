# 장혜민 프로필 사이트

엑셀·데이터·AI 강사 장혜민님의 강의 의뢰용 프로필 사이트입니다.

## 콘텐츠 수정하기 (코드 몰라도 OK)

모든 텍스트·링크는 `src/content/` 아래 4개 JSON 파일에 모여 있습니다.

| 파일 | 내용 |
|---|---|
| `profile.json` | Hero 카피, About, 연락처, SNS |
| `topics.json` | 강의 영역 카드 |
| `talks.json` | 강의 이력 |
| `products.json` | 디지털 플래너 |

수정 흐름:
1. 위 파일을 열어 텍스트 수정
2. 저장 후 터미널에서 `git add . && git commit -m "content: ..."`
3. `git push` → GitHub Actions가 자동으로 배포 (1~2분)

## 로컬에서 미리 보기

```bash
npm install   # 최초 1회
npm run dev   # http://localhost:5173/
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 빌드 후 `gh-pages` 브랜치로 자동 배포합니다.

배포 URL 형식: `https://<github-username>.github.io/<repo-name>/`

## Stitch와 함께 디자인 바꾸기

1. <https://stitch.withgoogle.com/> 에서 화면 디자인 생성
2. 디자인 결과를 Claude Code에 보여주고 "이 디자인으로 바꿔줘" 요청
3. 위 콘텐츠 수정 흐름과 동일하게 push → 자동 배포

## 폴더 구조

```
src/
├── components/   화면을 구성하는 부품들 (Hero, About, Topics 등)
├── pages/        페이지(라우트): Home, Talks, Products, NotFound
├── content/      텍스트·링크 데이터 ← 여기만 수정하면 됨
├── types/        TypeScript 타입 정의
└── styles/       Tailwind 진입점

public/
└── products/     플래너 썸네일 이미지
```

## 자주 하는 작업

### 강의 이력 한 줄 추가
`src/content/talks.json` 배열 맨 위에:
```json
{ "year": "2026", "client": "신규고객", "topic": "AI 자동화", "type": "기업 출강" }
```
저장 → `git add` → `commit` → `push`. 끝.

### Hero 카피 변경
`src/content/profile.json` 의 `hero.headline` / `hero.subheadline` 수정.

### 프로필 사진 추가
1. `public/photos/profile.jpg` 추가
2. `src/components/Hero.tsx` (또는 About) 에 `<img src="/photos/profile.jpg" />` 삽입
3. push.

## 트러블슈팅

| 증상 | 해결 |
|---|---|
| 배포 후 흰 화면 | `.github/workflows/deploy.yml` 의 `VITE_BASE` 경로가 `/<repo-name>/` 인지 확인 |
| 새로고침 시 404 | App.tsx 가 HashRouter 인지 확인 |
| 한글 폰트 안 보임 | Pretendard CDN 차단 가능성 — 회사 네트워크라면 system-ui로 fallback |

## 참고 문서

- `docs/plans/2026-05-03-niniexcel-profile-site-design.md` — 디자인 결정 근거
- `docs/plans/2026-05-03-niniexcel-profile-site-implementation.md` — 26 Task 구현 단계
- `CLAUDE.md` — 작업 운영 규칙 (대화 로그 등)
