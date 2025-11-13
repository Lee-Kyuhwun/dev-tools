'use client'

import React, { useState } from 'react'
import ToolCard from './ToolCard'
import TextAreaWithCopy from './TextAreaWithCopy'

export default function HTMLTool() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const formatHTML = (html: string) => {
    let formatted = ''
    let indent = 0
    const tab = '  '

    html.split(/>\s*</).forEach((node) => {
      if (node.match(/^\/\w/)) indent--
      formatted += tab.repeat(Math.max(0, indent)) + '<' + node + '>\n'
      if (node.match(/^<?\w[^>]*[^\/]$/) && !node.startsWith('input')) indent++
    })

    return formatted.substring(1, formatted.length - 2)
  }

  const minifyHTML = (html: string) => {
    return html
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .trim()
  }

  const handleFormat = () => {
    try {
      setError('')
      const formatted = formatHTML(input)
      setOutput(formatted)
    } catch (e) {
      setError('포맷 실패: 올바른 HTML/XML을 입력해주세요.')
      setOutput('')
    }
  }

  const handleMinify = () => {
    try {
      setError('')
      const minified = minifyHTML(input)
      setOutput(minified)
    } catch (e) {
      setError('압축 실패: 올바른 HTML/XML을 입력해주세요.')
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
      title="🏷️ HTML/XML Formatter"
      description="HTML과 XML을 포맷하거나 압축합니다"
    >
      <div className="space-y-4">
        <TextAreaWithCopy
          value={input}
          onChange={setInput}
          placeholder="<div><p>HTML or XML content</p></div>"
          label="입력 HTML/XML"
          rows={10}
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
          rows={10}
        />
      </div>
    </ToolCard>
  )
}
