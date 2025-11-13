import Base64Tool from '@/components/Base64Tool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base64 인코더/디코더',
  description: '텍스트를 Base64로 인코딩하거나 Base64 문자열을 디코딩합니다. UTF-8을 지원하는 무료 온라인 Base64 변환 도구입니다.',
  keywords: ['Base64', 'Base64 인코더', 'Base64 디코더', 'Base64 변환', 'base64 encode', 'base64 decode'],
  openGraph: {
    title: 'Base64 인코더/디코더 - Developer Tools',
    description: '텍스트를 Base64로 인코딩하거나 디코딩하는 무료 온라인 도구',
  },
}

export default function Base64Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <Base64Tool />
    </div>
  )
}
