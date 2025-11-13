import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Developer Tools',
  description: 'Essential tools for developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="mt-auto py-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>Developer Tools © 2025</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
