import HTMLTool from '@/components/HTMLTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HTML/XML 포맷터',
  description: 'HTML과 XML 코드를 예쁘게 포맷하거나 압축합니다. 코드 가독성을 향상시키는 무료 온라인 HTML/XML 포맷터 도구입니다.',
  keywords: ['HTML 포맷터', 'XML 포맷터', 'HTML formatter', 'XML formatter', 'HTML beautifier', 'XML beautifier', 'code formatter'],
  openGraph: {
    title: 'HTML/XML 포맷터 - Developer Tools',
    description: 'HTML/XML을 포맷하는 무료 온라인 도구',
  },
}

export default function HTMLPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <HTMLTool />
    </div>
  )
}
