import URLTool from '@/components/URLTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'URL 인코더/디코더',
  description: 'URL을 안전한 형식으로 인코딩하거나 디코딩합니다. 무료 온라인 URL 인코딩 및 디코딩 도구입니다.',
  keywords: ['URL 인코더', 'URL 디코더', 'URL encoding', 'URL decoding', 'URI encode', 'URI decode', 'percent encoding'],
  openGraph: {
    title: 'URL 인코더/디코더 - Developer Tools',
    description: 'URL을 인코딩하거나 디코딩하는 무료 온라인 도구',
  },
}

export default function URLPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <URLTool />
    </div>
  )
}
