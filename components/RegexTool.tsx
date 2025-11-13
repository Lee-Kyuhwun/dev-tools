'use client'

import React, { useState } from 'react'
import ToolCard from './ToolCard'

export default function RegexTool() {
  const [pattern, setPattern] = useState('')
  const [flags, setFlags] = useState('g')
  const [testString, setTestString] = useState('')
  const [matches, setMatches] = useState<string[]>([])
  const [error, setError] = useState('')

  const handleTest = () => {
    try {
      setError('')
      if (!pattern) {
        setError('정규식 패턴을 입력해주세요.')
        return
      }

      const regex = new RegExp(pattern, flags)
      const foundMatches = testString.match(regex)

      if (foundMatches) {
        setMatches(foundMatches)
      } else {
        setMatches([])
        setError('매칭되는 문자열이 없습니다.')
      }
    } catch (e) {
      setError(`정규식 오류: ${e instanceof Error ? e.message : '올바른 정규식을 입력해주세요.'}`)
      setMatches([])
    }
  }

  const handleClear = () => {
    setPattern('')
    setFlags('g')
    setTestString('')
    setMatches([])
    setError('')
  }

  const commonPatterns = [
    { name: '이메일', pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}' },
    { name: 'URL', pattern: 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)' },
    { name: '전화번호', pattern: '01[0-9]-?[0-9]{3,4}-?[0-9]{4}' },
    { name: 'IP 주소', pattern: '\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b' },
    { name: '16진수 컬러', pattern: '#[0-9A-Fa-f]{6}' },
  ]

  return (
    <ToolCard
      title="🔍 Regex Tester"
      description="정규식 패턴을 테스트하고 매칭 결과를 확인합니다"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3 space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              정규식 패턴
            </label>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="예: [a-z]+"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-gray-800 dark:text-gray-200"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              플래그
            </label>
            <input
              type="text"
              value={flags}
              onChange={(e) => setFlags(e.target.value)}
              placeholder="g, i, m"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-gray-800 dark:text-gray-200"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            자주 사용하는 패턴
          </label>
          <div className="flex flex-wrap gap-2">
            {commonPatterns.map((p) => (
              <button
                key={p.name}
                onClick={() => setPattern(p.pattern)}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm rounded-md transition-colors"
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            테스트 문자열
          </label>
          <textarea
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            placeholder="테스트할 문자열을 입력하세요..."
            rows={6}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm text-gray-800 dark:text-gray-200"
          />
        </div>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={handleTest}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            Test
          </button>
          <button
            onClick={handleClear}
            className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="p-3 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 rounded-lg text-sm">
            {error}
          </div>
        )}

        {matches.length > 0 && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              매칭 결과 ({matches.length}개)
            </label>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {matches.map((match, index) => (
                <div
                  key={index}
                  className="p-3 bg-green-50 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-700 dark:text-green-200">Match {index + 1}:</span>
                    <code className="font-mono text-sm font-bold text-green-900 dark:text-green-100">
                      {match}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolCard>
  )
}
