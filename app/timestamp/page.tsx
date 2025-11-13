import TimestampTool from '@/components/TimestampTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '타임스탬프 변환기',
  description: '실시간 타임스탬프를 확인하고 Unix timestamp와 날짜를 상호 변환합니다. 한국 시간대를 지원하는 무료 온라인 타임스탬프 변환 도구입니다.',
  keywords: ['타임스탬프', 'timestamp', 'unix timestamp', '시간 변환', 'timestamp converter', 'epoch converter', 'unix time'],
  openGraph: {
    title: '타임스탬프 변환기 - Developer Tools',
    description: 'Unix timestamp와 날짜를 변환하는 무료 도구',
  },
}

export default function TimestampPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <TimestampTool />
    </div>
  )
}
