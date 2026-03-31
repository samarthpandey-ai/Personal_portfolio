"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function LlmBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const isDark = resolvedTheme === "dark"

  return (
    <div className="fixed inset-0 -z-50 min-h-screen w-full bg-background transition-colors duration-700">
      {/* Light Mode Orbs */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute -top-[10%] -left-[10%] h-[70vw] w-[70vw] rounded-full bg-cyan-200/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[60vw] w-[60vw] rounded-full bg-emerald-200/10 blur-[100px] animate-pulse" />
      </div>

      {/* Dark Mode Orbs */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute -top-[10%] -left-[10%] h-[70vw] w-[70vw] rounded-full bg-cyan-900/20 blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[60vw] w-[60vw] rounded-full bg-purple-900/20 blur-[150px] animate-pulse" />
      </div>

      {/* Grid with Radial Mask to prevent "boxy" edges */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.2]" 
        style={{
          backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
        }} 
      />
    </div>
  )
}
