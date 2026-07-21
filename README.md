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