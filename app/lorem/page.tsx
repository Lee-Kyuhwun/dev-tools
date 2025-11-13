import LoremTool from '@/components/LoremTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lorem Ipsum 생성기',
  description: '더미 텍스트를 무료로 생성합니다. 문단, 문장, 단어 단위로 Lorem Ipsum을 생성할 수 있는 온라인 도구입니다.',
  keywords: ['Lorem Ipsum', '더미 텍스트', 'dummy text', 'placeholder text', 'lorem ipsum generator', 'text generator', 'filler text'],
  openGraph: {
    title: 'Lorem Ipsum 생성기 - Developer Tools',
    description: '더미 텍스트를 생성하는 무료 온라인 도구',
  },
}

export default function LoremPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <LoremTool />
    </div>
  )
}
