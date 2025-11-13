import ColorTool from '@/components/ColorTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '컬러 변환기',
  description: 'HEX, RGB, HSL 색상 코드를 상호 변환합니다. 실시간 색상 프리뷰와 색상 피커를 제공하는 무료 온라인 컬러 변환 도구입니다.',
  keywords: ['컬러 변환기', 'color converter', 'HEX to RGB', 'RGB to HEX', 'HSL converter', '색상 변환', 'color picker'],
  openGraph: {
    title: '컬러 변환기 - Developer Tools',
    description: 'HEX, RGB, HSL 색상 코드를 변환하는 무료 도구',
  },
}

export default function ColorPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <ColorTool />
    </div>
  )
}
