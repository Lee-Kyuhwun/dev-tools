import JWTTool from '@/components/JWTTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JWT 디코더',
  description: 'JWT(JSON Web Token)을 디코딩하고 Header와 Payload를 확인할 수 있는 무료 온라인 JWT 디코더 도구입니다.',
  keywords: ['JWT', 'JWT 디코더', 'JWT decoder', 'JSON Web Token', 'JWT 분석', 'token decoder'],
  openGraph: {
    title: 'JWT 디코더 - Developer Tools',
    description: 'JWT 토큰을 디코딩하는 무료 온라인 도구',
  },
}

export default function JWTPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <JWTTool />
    </div>
  )
}
