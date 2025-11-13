'use client'

import React, { useState } from 'react'
import ToolCard from './ToolCard'
import TextAreaWithCopy from './TextAreaWithCopy'

export default function URLTool() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const handleEncode = () => {
    try {
      setError('')
      const encoded = encodeURIComponent(input)
      setOutput(encoded)
    } catch (e) {
      setError('인코딩 실패: 올바른 텍스트를 입력해주세요.')
      setOutput('')
    }
  }

  const handleDecode = () => {
    try {
      setError('')
      const decoded = decodeURIComponent(input)
      setOutput(decoded)
    } catch (e) {
      setError('디코딩 실패: 올바른 URL 인코딩 문자열을 입력해주세요.')
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
      title="🔗 URL Encoder/Decoder"
      description="URL을 인코딩하거나 디코딩합니다"
    >
      <div className="space-y-4">
        <TextAreaWithCopy
          value={input}
          onChange={setInput}
          placeholder="변환할 URL을 입력하세요..."
          label="입력"
          rows={4}
        />

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={handleEncode}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            Encode
          </button>
          <button
            onClick={handleDecode}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            Decode
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
          rows={4}
        />
      </div>
    </ToolCard>
  )
}
