import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Developer Tools - 개발자 도구 모음',
    short_name: 'Dev Tools',
    description: '개발자를 위한 15가지 필수 온라인 도구 모음',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3B82F6',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['productivity', 'utilities', 'developer tools'],
    screenshots: [
      {
        src: '/screenshot1.png',
        sizes: '1280x720',
        type: 'image/png',
      },
    ],
  }
}
