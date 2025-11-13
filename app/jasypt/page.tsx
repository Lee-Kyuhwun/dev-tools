import JasyptTool from '@/components/JasyptTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jasypt 암호화/복호화',
  description: 'AES 암호화를 사용하여 텍스트를 암호화하거나 복호화합니다. Jasypt 스타일의 무료 온라인 암호화 도구입니다.',
  keywords: ['Jasypt', '암호화', '복호화', 'AES', 'encryption', 'decryption', 'jasypt encryption', 'text encryption'],
  openGraph: {
    title: 'Jasypt 암호화/복호화 - Developer Tools',
    description: 'AES 암호화로 텍스트를 암호화하는 무료 도구',
  },
}

export default function JasyptPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <JasyptTool />
    </div>
  )
}
