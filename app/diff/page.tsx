import DiffTool from '@/components/DiffTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diff Checker - 텍스트 비교',
  description: '두 텍스트의 차이점을 비교하고 변경사항을 하이라이트합니다. 무료 온라인 텍스트 비교 및 Diff 도구입니다.',
  keywords: ['diff', 'diff checker', '텍스트 비교', 'text compare', 'text difference', 'compare text', 'text diff'],
  openGraph: {
    title: 'Diff Checker - Developer Tools',
    description: '두 텍스트를 비교하는 무료 온라인 도구',
  },
}

export default function DiffPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <DiffTool />
    </div>
  )
}
