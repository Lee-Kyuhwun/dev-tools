'use client'

import React, { useState } from 'react'

interface TextAreaWithCopyProps {
  value: string
  onChange?: (value: string) => void
  placeholder?: string
  readOnly?: boolean
  label?: string
  rows?: number
}

export default function TextAreaWithCopy({
  value,
  onChange,
  placeholder,
  readOnly = false,
  label,
  rows = 6
}: TextAreaWithCopyProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (value) {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          rows={rows}
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm text-gray-800 dark:text-gray-200"
        />
        {value && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-md transition-colors"
          >
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        )}
      </div>
    </div>
  )
}
