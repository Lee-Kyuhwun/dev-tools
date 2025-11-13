import JSONTool from '@/components/JSONTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JSON 포맷터/검증기',
  description: 'JSON을 예쁘게 포맷하고, 압축하고, 유효성을 검증합니다. 무료 온라인 JSON 포맷터 및 검증 도구입니다.',
  keywords: ['JSON', 'JSON 포맷터', 'JSON formatter', 'JSON 검증', 'JSON validator', 'JSON minify', 'JSON 압축'],
  openGraph: {
    title: 'JSON 포맷터/검증기 - Developer Tools',
    description: 'JSON을 포맷하고 검증하는 무료 온라인 도구',
  },
}

export default function JSONPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <JSONTool />
    </div>
  )
}
