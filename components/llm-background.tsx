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
    <>
      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-float {
          animation: float 20s infinite ease-in-out;
        }
      `}</style>

      {/* Fixed ensures it stays behind everything during scroll */}
      <div className="fixed inset-0 -z-50 h-screen w-screen bg-background overflow-hidden transition-colors duration-700">
        
        {/* LIGHT MODE: Soft Cyan & Emerald Aurora */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
          <div className="animate-float absolute -top-[10%] -left-[10%] h-[70vw] w-[70vw] rounded-full bg-cyan-200/20 blur-[120px]" />
          <div className="animate-float absolute top-[20%] -right-[10%] h-[60vw] w-[60vw] rounded-full bg-emerald-200/15 blur-[100px]" style={{ animationDelay: '-5s' }} />
          <div className="animate-float absolute -bottom-[10%] left-[15%] h-[50vw] w-[50vw] rounded-full bg-blue-200/20 blur-[120px]" style={{ animationDelay: '-10s' }} />
        </div>

        {/* DARK MODE: Deep Cyan & Purple Nebula */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-float absolute -top-[10%] -left-[10%] h-[70vw] w-[70vw] rounded-full bg-cyan-900/20 blur-[150px]" />
          <div className="animate-float absolute top-[25%] -right-[10%] h-[60vw] w-[60vw] rounded-full bg-purple-900/20 blur-[130px]" style={{ animationDelay: '-5s' }} />
          <div className="animate-float absolute -bottom-[10%] left-[20%] h-[50vw] w-[50vw] rounded-full bg-blue-900/30 blur-[150px]" style={{ animationDelay: '-10s' }} />
        </div>

        {/* THE FIX: Professional Grid with Radial Fade */}
        {/* This mask-image makes the grid disappear toward the edges */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.2]" 
          style={{
            backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
          }} 
        />
      </div>
    </>
  )
}
