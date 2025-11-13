'use client'

import React, { useState } from 'react'
import ToolCard from './ToolCard'
import TextAreaWithCopy from './TextAreaWithCopy'
import CryptoJS from 'crypto-js'

export default function JasyptTool() {
  const [input, setInput] = useState('')
  const [password, setPassword] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const handleEncrypt = () => {
    try {
      setError('')
      if (!password) {
        setError('암호화 키를 입력해주세요.')
        return
      }
      const encrypted = CryptoJS.AES.encrypt(input, password).toString()
      setOutput(encrypted)
    } catch (e) {
      setError('암호화 실패: 올바른 텍스트를 입력해주세요.')
      setOutput('')
    }
  }

  const handleDecrypt = () => {
    try {
      setError('')
      if (!password) {
        setError('복호화 키를 입력해주세요.')
        return
      }
      const decrypted = CryptoJS.AES.decrypt(input, password).toString(CryptoJS.enc.Utf8)
      if (!decrypted) {
        setError('복호화 실패: 올바른 암호문과 키를 입력해주세요.')
        setOutput('')
        return
      }
      setOutput(decrypted)
    } catch (e) {
      setError('복호화 실패: 올바른 암호문과 키를 입력해주세요.')
      setOutput('')
    }
  }

  const handleClear = () => {
    setInput('')
    setPassword('')
    setOutput('')
    setError('')
  }

  return (
    <ToolCard
      title="🔐 Jasypt-style Encryption/Decryption"
      description="AES 암호화를 사용하여 텍스트를 암호화하거나 복호화합니다 (Jasypt 스타일)"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            암호화 키 (Password)
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="암호화/복호화 키를 입력하세요..."
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-gray-200"
          />
        </div>

        <TextAreaWithCopy
          value={input}
          onChange={setInput}
          placeholder="암호화하거나 복호화할 텍스트를 입력하세요..."
          label="입력"
        />

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={handleEncrypt}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            Encrypt
          </button>
          <button
            onClick={handleDecrypt}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            Decrypt
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
        />
      </div>
    </ToolCard>
  )
}
