'use client'
import { useState } from 'react'
import { X } from 'lucide-react'

const colors = {
  info: {
    bg: 'bg-blue-50 border-blue-300 text-blue-800 dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400',
    ring: 'focus:ring-blue-400',
    hover: 'hover:bg-blue-200',
  },
  success: {
    bg: 'bg-green-50 border-green-300 text-green-800 dark:bg-gray-800 dark:border-green-800 dark:text-green-400',
    ring: 'focus:ring-green-400',
    hover: 'hover:bg-green-200',
  },
  error: {
    bg: 'bg-red-50 border-red-300 text-red-800 dark:bg-gray-800 dark:border-red-800 dark:text-red-400',
    ring: 'focus:ring-red-400',
    hover: 'hover:bg-red-200',
  },
  warning: {
    bg: 'bg-yellow-50 border-yellow-300 text-yellow-800 dark:bg-gray-800 dark:border-yellow-800 dark:text-yellow-300',
    ring: 'focus:ring-yellow-400',
    hover: 'hover:bg-yellow-200',
  },
  neutral: {
    bg: 'bg-gray-50 border-gray-300 text-gray-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300',
    ring: 'focus:ring-gray-400',
    hover: 'hover:bg-gray-200',
  },
}

export default function AlertNotification({
  type = 'info',
  message = '',
  onClose = () => {},
  link = null,
}) {
  const [show, setShow] = useState(true)
  const style = colors[type] || colors.info

  if (!show) return null

  return (
    <div
      className={`flex items-center p-4 mb-4 border-t-4 ${style.bg}`}
      role="alert"
    >
      <svg
        className="shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div className="ms-3 text-sm font-medium">
        {message}
        {link && (
          <a href={link.href} className="font-semibold underline hover:no-underline ml-1">
            {link.text}
          </a>
        )}
      </div>
      <button
        onClick={() => {
          setShow(false)
          onClose()
        }}
        type="button"
        className={`ms-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 ${style.ring} ${style.hover}`}
        aria-label="Close"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  )
}