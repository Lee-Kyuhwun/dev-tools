'use client'

import React, { useState } from 'react'
import ToolCard from './ToolCard'
import TextAreaWithCopy from './TextAreaWithCopy'

export default function JWTTool() {
  const [input, setInput] = useState('')
  const [header, setHeader] = useState('')
  const [payload, setPayload] = useState('')
  const [error, setError] = useState('')

  const handleDecode = () => {
    try {
      setError('')
      const parts = input.split('.')

      if (parts.length !== 3) {
        setError('유효하지 않은 JWT 형식입니다. JWT는 3개의 부분으로 구성되어야 합니다.')
        setHeader('')
        setPayload('')
        return
      }

      const decodedHeader = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')))
      const decodedPayload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')))

      setHeader(JSON.stringify(decodedHeader, null, 2))
      setPayload(JSON.stringify(decodedPayload, null, 2))
    } catch (e) {
      setError('JWT 디코딩 실패: 올바른 JWT 토큰을 입력해주세요.')
      setHeader('')
      setPayload('')
    }
  }

  const handleClear = () => {
    setInput('')
    setHeader('')
    setPayload('')
    setError('')
  }

  return (
    <ToolCard
      title="🎫 JWT Decoder"
      description="JWT (JSON Web Token)을 디코딩합니다"
    >
      <div className="space-y-4">
        <TextAreaWithCopy
          value={input}
          onChange={setInput}
          placeholder="JWT 토큰을 입력하세요..."
          label="JWT Token"
          rows={4}
        />

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={handleDecode}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
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

        {(header || payload) && (
          <div className="grid md:grid-cols-2 gap-4">
            <TextAreaWithCopy
              value={header}
              placeholder="Header"
              readOnly
              label="Header"
              rows={6}
            />
            <TextAreaWithCopy
              value={payload}
              placeholder="Payload"
              readOnly
              label="Payload"
              rows={6}
            />
          </div>
        )}
      </div>
    </ToolCard>
  )
}
