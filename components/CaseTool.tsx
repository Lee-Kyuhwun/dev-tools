'use client'

import React, { useState } from 'react'
import ToolCard from './ToolCard'

export default function CaseTool() {
  const [input, setInput] = useState('')

  const toCamelCase = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
  }

  const toPascalCase = (str: string) => {
    const camel = toCamelCase(str)
    return camel.charAt(0).toUpperCase() + camel.slice(1)
  }

  const toSnakeCase = (str: string) => {
    return str
      .replace(/([A-Z])/g, '_$1')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_/, '')
      .replace(/_$/, '')
  }

  const toKebabCase = (str: string) => {
    return str
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-/, '')
      .replace(/-$/, '')
  }

  const toConstantCase = (str: string) => {
    return toSnakeCase(str).toUpperCase()
  }

  const toDotCase = (str: string) => {
    return str
      .replace(/([A-Z])/g, '.$1')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '.')
      .replace(/^\./, '')
      .replace(/\.$/, '')
  }

  const toTitleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const conversions = [
    { name: 'camelCase', fn: toCamelCase, example: 'myVariableName' },
    { name: 'PascalCase', fn: toPascalCase, example: 'MyVariableName' },
    { name: 'snake_case', fn: toSnakeCase, example: 'my_variable_name' },
    { name: 'kebab-case', fn: toKebabCase, example: 'my-variable-name' },
    { name: 'CONSTANT_CASE', fn: toConstantCase, example: 'MY_VARIABLE_NAME' },
    { name: 'dot.case', fn: toDotCase, example: 'my.variable.name' },
    { name: 'Title Case', fn: toTitleCase, example: 'My Variable Name' },
  ]

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
  }

  return (
    <ToolCard
      title="📝 Case Converter"
      description="문자열을 다양한 케이스 스타일로 변환합니다"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            입력 텍스트
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="변환할 텍스트를 입력하세요... (예: my variable name)"
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-800 dark:text-gray-200"
          />
        </div>

        {input && (
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              변환 결과
            </label>
            {conversions.map((conversion) => (
              <div
                key={conversion.name}
                className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {conversion.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                      (예: {conversion.example})
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(conversion.fn(input))}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-md transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <code className="block font-mono text-sm text-gray-800 dark:text-gray-200 break-all">
                  {conversion.fn(input)}
                </code>
              </div>
            ))}
          </div>
        )}

        {!input && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            텍스트를 입력하면 다양한 케이스로 변환된 결과를 볼 수 있습니다
          </div>
        )}
      </div>
    </ToolCard>
  )
}
