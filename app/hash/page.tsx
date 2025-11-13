import HashTool from '@/components/HashTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '해시 생성기',
  description: 'MD5, SHA-1, SHA-256, SHA-512 해시를 무료로 생성합니다. 텍스트를 암호화 해시로 변환하는 온라인 해시 생성 도구입니다.',
  keywords: ['해시 생성기', 'hash generator', 'MD5', 'SHA-1', 'SHA-256', 'SHA-512', 'hash calculator', '암호화 해시'],
  openGraph: {
    title: '해시 생성기 - Developer Tools',
    description: 'MD5, SHA 해시를 생성하는 무료 온라인 도구',
  },
}

export default function HashPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <HashTool />
    </div>
  )
}
