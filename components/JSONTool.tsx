'use client'

import React, { useState } from 'react'
import ToolCard from './ToolCard'
import TextAreaWithCopy from './TextAreaWithCopy'

export default function JSONTool() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const handleFormat = () => {
    try {
      setError('')
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, 2)
      setOutput(formatted)
    } catch (e) {
      setError(`포맷 실패: ${e instanceof Error ? e.message : '올바른 JSON을 입력해주세요.'}`)
      setOutput('')
    }
  }

  const handleMinify = () => {
    try {
      setError('')
      const parsed = JSON.parse(input)
      const minified = JSON.stringify(parsed)
      setOutput(minified)
    } catch (e) {
      setError(`압축 실패: ${e instanceof Error ? e.message : '올바른 JSON을 입력해주세요.'}`)
      setOutput('')
    }
  }

  const handleValidate = () => {
    try {
      setError('')
      JSON.parse(input)
      setOutput('✅ 유효한 JSON입니다!')
    } catch (e) {
      setError(`❌ 유효하지 않은 JSON: ${e instanceof Error ? e.message : ''}`)
      setOutput('')
    }
  }

  const handleClear = () => {
    setInput('')
    setOutput('')
    setError('')
  }

  return (
    <ToolCard
      title="📋 JSON Formatter/Validator"
      description="JSON을 포맷하고, 압축하고, 검증합니다"
    >
      <div className="space-y-4">
        <TextAreaWithCopy
          value={input}
          onChange={setInput}
          placeholder='{"key": "value"}'
          label="입력 JSON"
          rows={8}
        />

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={handleFormat}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            Format
          </button>
          <button
            onClick={handleMinify}
            className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
          >
            Minify
          </button>
          <button
            onClick={handleValidate}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            Validate
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

        <TextAreaWithCopy
          value={output}
          placeholder="결과가 여기에 표시됩니다..."
          readOnly
          label="결과"
          rows={8}
        />
      </div>
    </ToolCard>
  )
}
