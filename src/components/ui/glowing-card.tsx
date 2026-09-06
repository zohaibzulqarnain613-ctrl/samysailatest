"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GridBackgroundProps {
  title: string
  description: string
  showAvailability?: boolean
  className?: string
}

export function GridBackground({
  title,
  description,
  showAvailability = true,
  className,
}: GridBackgroundProps) {
  return (
    <div
      className={cn(
        'p-10 md:p-16 flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a]/80 via-[#111111]/90 to-[#151515]/80 border border-cyan-500/20 rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.1)] backdrop-blur-md hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300 relative',
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    >
      <div
        className="w-3 h-3 rounded-full absolute shadow-[0_0_15px] shadow-current z-10 bg-current"
        style={{
          animation: `
            border-follow 6s linear infinite,
            color-change 6s linear infinite
          `
        }}
      />
      <div
        className="absolute inset-0 border-2 rounded-2xl"
        style={{
          animation: 'border-color-change 6s linear infinite'
        }}
      />

      <div className="relative z-20 text-center max-w-3xl mx-auto">
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-semibold text-3xl md:text-4xl text-center'>{title}</h1>
        {description && (
          <p className='text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mt-5'>{description}</p>
        )}

        {showAvailability && (
          <div className="available-now text-[#20bb5a] text-sm flex items-center justify-center mt-5">
            <div className="w-2 h-2 bg-[#20bb5a] rounded-full inline-block mr-2 animate-pulse shadow-[0_0_8px_#20bb5a]" />
            Call Now
          </div>
        )}
      </div>
    </div>
  )
}
