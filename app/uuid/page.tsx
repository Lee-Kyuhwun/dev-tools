import UUIDTool from '@/components/UUIDTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UUID 생성기',
  description: 'UUID(Universally Unique Identifier) v4를 무료로 생성합니다. 대량 생성 지원(최대 100개). 온라인 UUID 생성 도구.',
  keywords: ['UUID', 'UUID 생성기', 'UUID generator', 'GUID', 'unique id', 'random uuid', 'uuid v4'],
  openGraph: {
    title: 'UUID 생성기 - Developer Tools',
    description: 'UUID를 무료로 생성하는 온라인 도구',
  },
}

export default function UUIDPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <UUIDTool />
    </div>
  )
}
