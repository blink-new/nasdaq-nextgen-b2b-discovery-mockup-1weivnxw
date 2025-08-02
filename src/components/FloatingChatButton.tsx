import React from 'react'
import { MessageCircle, Sparkles } from 'lucide-react'

interface FloatingChatButtonProps {
  onClick: () => void
}

export function FloatingChatButton({ onClick }: FloatingChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Open AI Assistant"
    >
      {/* Main Button */}
      <div className="relative">
        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-active:scale-95">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 w-14 h-14 bg-blue-600 rounded-full animate-ping opacity-20"></div>
        
        {/* AI Sparkle Indicator */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-sm">
          <Sparkles className="w-2.5 h-2.5 text-white" />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Ask our AI Assistant
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </button>
  )
}