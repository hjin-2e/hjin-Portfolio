# Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### 배포하기

#### 1. 먼저 프로젝트를 깨끗하게 빌드합니다. (CNAME 파일도 dist로 복사)
```
npm run build && npx shx cp CNAME dist/
```
#### 2. 빌드가 완성된 dist 폴더 안으로 이동합니다.
```
cd dist
```
#### 3. 이 dist 폴더 내부를 별도의 독립된 깃 저장소로 초기화합니다.
```
git init
git add .
git commit -m "강제 배포 진행"
```
#### 4. 내 저장소의 gh-pages 브랜치로 이 내용물들을 강제로 덮어씁니다.
```
git push -f https://github.com/hjin-2e/hjin-Portfolio.git master:gh-pages

npm run deploy
```
## 이력서 · 경력기술서 · 포트폴리오

첨부 디자인의 다크 배경, 민트/보라 그라데이션, 카드 구성을 반영한 개편입니다.

- `/#/`: 소개, 경력 요약, 교육, 기술, 문서 링크를 담은 이력서
- `/#/career`: 회사별 담당 업무와 사용 기술을 담은 경력기술서. **인쇄 · PDF 저장** 버튼으로 브라우저에서 저장할 수 있습니다.
- `/#/portfolio`: 클라우드 2건과 웹 퍼블리싱 5건. 분류 필터와 프로젝트 상세 이미지, 기존 Notion/GitHub 링크를 제공합니다.

GitHub Pages에서 하위 페이지를 새로고침해도 열리도록 `HashRouter`를 사용합니다. 기존 커스텀 도메인과 배포 명령은 유지합니다.

```sh
npm ci
npm run dev
npm run build
npm run lint
npx tsc --noEmit
```

기본 소개와 회사별 경력 데이터는 `src/App.tsx`, 프로젝트 상세 데이터는 `src/sections/Work.tsx`와 `src/sections/Project.tsx`, 스타일은 `src/index.css`에서 수정합니다. 성과 수치나 확인되지 않은 역할은 추가하지 않았습니다. 메가스터디 러셀의 기존 프로젝트 기간은 재직 기간과 달라, 이력서에 기재된 **2023.04–2025.10 재직 기간**으로 표시했습니다. 정확한 프로젝트 수행 기간은 별도 확인 후 수정해야 합니다.
