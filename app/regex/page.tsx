import RegexTool from '@/components/RegexTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '정규식 테스터',
  description: '정규식 패턴을 테스트하고 매칭 결과를 실시간으로 확인할 수 있는 무료 온라인 Regex 테스터입니다. 자주 사용하는 패턴 제공.',
  keywords: ['정규식', 'regex', 'regular expression', '정규표현식', 'regex tester', '정규식 테스터', '패턴 매칭'],
  openGraph: {
    title: '정규식 테스터 - Developer Tools',
    description: '정규식 패턴을 테스트하는 무료 온라인 도구',
  },
}

export default function RegexPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <RegexTool />
    </div>
  )
}
