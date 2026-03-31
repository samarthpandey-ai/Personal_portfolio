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
      
      {/* Light Mode: Soft Floating Orbs - Provides depth without distraction */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute -top-[10%] -left-[10%] h-[70vw] w-[70vw] rounded-full bg-cyan-200/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[60vw] w-[60vw] rounded-full bg-emerald-200/10 blur-[100px] animate-pulse" />
      </div>

      {/* Dark Mode: Deep Neural Orbs - Rich colors for high-end feel */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute -top-[10%] -left-[10%] h-[70vw] w-[70vw] rounded-full bg-cyan-900/20 blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[60vw] w-[60vw] rounded-full bg-purple-900/20 blur-[150px] animate-pulse" />
      </div>

      {/* FINAL POLISH: The Vertical Fade Grid 
          This solves the hierarchy issue. The grid is prominent in the Hero 
          section (technical vibe) and fades out smoothly to allow 
          easier reading of your projects and stats below.
      */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.07] dark:opacity-[0.1] transition-opacity duration-500" 
        style={{
          backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          // Mask logic: Visible at top (0-30%), invisible by 70% height
          maskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 70%)'
        }} 
      />
    </div>
  )
}
