import React from 'react'

interface ToolCardProps {
  title: string
  description: string
  children: React.ReactNode
}

export default function ToolCard({ title, description, children }: ToolCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
      {children}
    </div>
  )
}
