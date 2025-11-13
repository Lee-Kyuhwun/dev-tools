import CaseTool from '@/components/CaseTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '케이스 변환기',
  description: '문자열을 camelCase, PascalCase, snake_case, kebab-case 등 다양한 케이스 스타일로 변환합니다. 무료 온라인 문자열 케이스 변환 도구입니다.',
  keywords: ['케이스 변환', 'case converter', 'camelCase', 'PascalCase', 'snake_case', 'kebab-case', 'string case', 'text case'],
  openGraph: {
    title: '케이스 변환기 - Developer Tools',
    description: '문자열을 다양한 케이스로 변환하는 무료 도구',
  },
}

export default function CasePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <CaseTool />
    </div>
  )
}
