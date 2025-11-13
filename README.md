# 🛠️ Developer Tools

개발자를 위한 필수 도구 모음 웹 애플리케이션입니다. Next.js와 TypeScript로 구축되었습니다.

## ✨ 기능

### Encoding & Decoding

#### 🔤 Base64 Encoder/Decoder
- 텍스트를 Base64로 인코딩
- Base64 문자열을 텍스트로 디코딩
- UTF-8 지원

#### 🔗 URL Encoder/Decoder
- URL을 안전한 형식으로 인코딩
- URL 인코딩된 문자열 디코딩

### Security & Encryption

#### 🔐 Jasypt-style Encryption/Decryption
- AES 암호화를 사용한 텍스트 암호화
- 암호화된 텍스트 복호화
- Jasypt와 유사한 방식

#### 🔒 Hash Generator
- MD5 해시 생성
- SHA-1 해시 생성
- SHA-256 해시 생성
- SHA-512 해시 생성

### Data Format

#### 📋 JSON Formatter/Validator
- JSON 포맷팅 (Pretty Print)
- JSON 압축 (Minify)
- JSON 유효성 검증

#### 🎫 JWT Decoder
- JWT 토큰 디코딩
- Header와 Payload 분석
- 토큰 구조 시각화

#### 🏷️ HTML/XML Formatter
- HTML/XML 코드 포맷팅
- HTML/XML 코드 압축
- 코드 가독성 향상

### Generators

#### 🆔 UUID Generator
- UUID v4 생성
- 대량 생성 지원 (최대 100개)
- 개별/전체 복사 기능

#### 📱 QR Code Generator
- 텍스트/URL을 QR 코드로 변환
- 크기 조절 가능 (100-500px)
- QR 코드 다운로드 기능

#### 📄 Lorem Ipsum Generator
- 더미 텍스트 생성
- 문단/문장/단어 단위 생성
- 개수 조절 가능

### Converters

#### ⏰ Timestamp Converter
- 실시간 타임스탬프 표시
- 타임스탬프 → 날짜 변환
- 날짜 → 타임스탬프 변환
- 한국 시간대 지원

#### 🎨 Color Converter
- HEX ↔ RGB ↔ HSL 변환
- 실시간 색상 프리뷰
- 색상 피커 지원

#### 📝 Case Converter
- camelCase
- PascalCase
- snake_case
- kebab-case
- CONSTANT_CASE
- dot.case
- Title Case

### Tools

#### 🔍 Regex Tester
- 정규식 패턴 테스트
- 매칭 결과 확인
- 자주 사용하는 패턴 제공
- 플래그 지원 (g, i, m)

#### 📊 Diff Checker
- 두 텍스트 비교
- 줄 단위 차이점 표시
- 추가/삭제/변경 하이라이트

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🛠️ 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Encryption**: crypto-js
- **Runtime**: React 18

## 📦 프로젝트 구조

```
dev-tools/
├── app/                    # Next.js 앱 라우터
│   ├── base64/            # Base64 인코더/디코더 페이지
│   ├── url/               # URL 인코더/디코더 페이지
│   ├── jasypt/            # Jasypt 암호화 페이지
│   ├── json/              # JSON 포맷터 페이지
│   ├── jwt/               # JWT 디코더 페이지
│   ├── hash/              # 해시 생성기 페이지
│   ├── timestamp/         # 타임스탬프 변환기 페이지
│   ├── uuid/              # UUID 생성기 페이지
│   ├── regex/             # 정규식 테스터 페이지
│   ├── color/             # 컬러 변환기 페이지
│   ├── diff/              # Diff Checker 페이지
│   ├── qrcode/            # QR 코드 생성기 페이지
│   ├── case/              # 케이스 변환기 페이지
│   ├── html/              # HTML/XML 포맷터 페이지
│   ├── lorem/             # Lorem Ipsum 생성기 페이지
│   ├── layout.tsx         # 레이아웃 컴포넌트
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 글로벌 스타일
├── components/            # React 컴포넌트
│   ├── Navigation.tsx     # 네비게이션 컴포넌트
│   ├── ToolCard.tsx       # 도구 카드 컴포넌트
│   ├── TextAreaWithCopy.tsx # 복사 기능이 있는 텍스트 영역
│   ├── Base64Tool.tsx
│   ├── URLTool.tsx
│   ├── JasyptTool.tsx
│   ├── JSONTool.tsx
│   ├── JWTTool.tsx
│   ├── TimestampTool.tsx
│   ├── UUIDTool.tsx
│   ├── HashTool.tsx
│   ├── RegexTool.tsx
│   ├── ColorTool.tsx
│   ├── DiffTool.tsx
│   ├── QRCodeTool.tsx
│   ├── CaseTool.tsx
│   ├── HTMLTool.tsx
│   └── LoremTool.tsx
└── package.json
```

## 🎨 특징

- 🌓 다크 모드 자동 지원
- 📱 완전한 반응형 디자인 (모바일/태블릿/데스크톱)
- 🧭 직관적인 네비게이션 메뉴
- 📋 원클릭 복사 기능
- ⚡ 클라이언트 사이드 처리로 빠른 성능
- 🔒 데이터 서버 전송 없음 (완전한 프라이버시)
- 🎯 깔끔하고 직관적인 UI/UX
- 🚀 15개의 유용한 개발자 도구

## 🔍 SEO 최적화

이 프로젝트는 검색 엔진 최적화를 위한 모든 설정이 완료되어 있습니다:

### 구현된 SEO 기능

- ✅ **완벽한 메타데이터**: 모든 페이지에 title, description, keywords 설정
- ✅ **Open Graph & Twitter Card**: 소셜 미디어 공유 최적화
- ✅ **구조화된 데이터 (JSON-LD)**: Schema.org WebApplication 타입
- ✅ **Sitemap.xml**: 모든 페이지 자동 생성
- ✅ **Robots.txt**: 검색 엔진 크롤링 최적화
- ✅ **PWA 지원**: Progressive Web App manifest
- ✅ **성능 최적화**: GZIP 압축, 이미지 최적화, 보안 헤더
- ✅ **모바일 최적화**: 완전한 반응형 디자인

### 배포 후 설정

배포 후 다음 작업을 수행하세요:

1. **URL 변경**: `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`의 URL을 실제 도메인으로 변경
2. **Google Search Console**: 사이트 등록 및 sitemap 제출
3. **네이버 서치어드바이저**: 사이트 등록 및 sitemap 제출
4. **이미지 생성**: `og-image.png`, `icon-192x192.png`, `icon-512x512.png` 추가

자세한 내용은 [SEO_GUIDE.md](./SEO_GUIDE.md)를 참고하세요.

### SEO 체크

배포 후 다음 도구로 SEO를 확인하세요:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

## 📄 라이선스

MIT License
