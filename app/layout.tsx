import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  metadataBase: new URL('https://dev-tools.example.com'), // 실제 배포 URL로 변경 필요
  title: {
    default: 'Developer Tools - 개발자를 위한 필수 도구 모음',
    template: '%s | Developer Tools'
  },
  description: '개발자를 위한 15가지 필수 온라인 도구 모음. Base64, URL 인코딩, JSON 포맷터, JWT 디코더, 정규식 테스터, QR 코드 생성기 등 개발에 필요한 모든 유틸리티를 한 곳에서 무료로 사용하세요.',
  keywords: [
    '개발자 도구',
    'developer tools',
    'Base64 인코더',
    'URL 인코더',
    'JSON 포맷터',
    'JWT 디코더',
    '정규식 테스터',
    'regex tester',
    'QR 코드 생성기',
    'UUID 생성기',
    '해시 생성기',
    '타임스탬프 변환기',
    '컬러 변환기',
    'Jasypt 암호화',
    'HTML 포맷터',
    'Lorem Ipsum 생성기',
    '온라인 개발 도구',
    '무료 개발 도구',
    'web developer tools'
  ],
  authors: [{ name: 'Developer Tools Team' }],
  creator: 'Developer Tools',
  publisher: 'Developer Tools',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://dev-tools.example.com',
    title: 'Developer Tools - 개발자를 위한 필수 도구 모음',
    description: '개발자를 위한 15가지 필수 온라인 도구 모음. Base64, JSON, JWT, 정규식, QR 코드 등 개발에 필요한 모든 유틸리티',
    siteName: 'Developer Tools',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Developer Tools - 개발자 도구 모음',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Tools - 개발자를 위한 필수 도구 모음',
    description: '개발자를 위한 15가지 필수 온라인 도구 모음',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://dev-tools.example.com',
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console에서 발급받은 코드로 변경
    // yandex: 'yandex-verification-code',
    // bing: 'bing-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6853743390551388"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Developer Tools',
              description: '개발자를 위한 15가지 필수 온라인 도구 모음',
              url: 'https://dev-tools.example.com',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'KRW',
              },
              featureList: [
                'Base64 인코더/디코더',
                'URL 인코더/디코더',
                'JSON 포맷터',
                'JWT 디코더',
                '정규식 테스터',
                'QR 코드 생성기',
                'UUID 생성기',
                '해시 생성기',
                '타임스탬프 변환기',
                '컬러 변환기',
                'Jasypt 암호화',
                'HTML/XML 포맷터',
                'Lorem Ipsum 생성기',
                'Diff Checker',
                '케이스 변환기'
              ],
              inLanguage: 'ko-KR',
            }),
          }}
        />
      </head>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="mt-auto py-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>Developer Tools © 2025</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
