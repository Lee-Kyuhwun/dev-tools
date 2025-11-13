import QRCodeTool from '@/components/QRCodeTool'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QR 코드 생성기',
  description: '텍스트나 URL을 QR 코드로 무료 변환합니다. 크기 조절 가능하고 다운로드할 수 있는 온라인 QR 코드 생성기입니다.',
  keywords: ['QR 코드', 'QR code', 'QR 생성기', 'QR code generator', 'QR 만들기', '무료 QR 코드'],
  openGraph: {
    title: 'QR 코드 생성기 - Developer Tools',
    description: '텍스트나 URL을 QR 코드로 변환하는 무료 도구',
  },
}

export default function QRCodePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <QRCodeTool />
    </div>
  )
}
