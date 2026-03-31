"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function LlmBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === "dark"

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Base Layer: A subtle topographic contours texture, 
        extremely subtle in light mode and slightly more defined in dark.
        Crucially, no dots, just professional lines.
      */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-10 dark:opacity-20 transition-opacity duration-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 100 Q 250 150 500 100 Q 750 50 1000 100 T 2000 100 T 3000 100 Q 3250 150 3500 100 T 4000 100 T 5000 100 T 6000 100 Q 6250 150 6500 100"
            stroke="var(--primary)"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M 0 200 Q 250 150 500 200 Q 750 250 1000 200 T 2000 200 T 3000 200 Q 3250 150 3500 200 T 4000 200 T 5000 200 T 6000 200 Q 6250 150 6500 200"
            stroke="var(--primary)"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Add more contoured lines for complex depth, and so on... */}
        </svg>
      </div>

      {/* Light Mode specific Layer */}
      <div className={`absolute inset-0 z-10 transition-opacity duration-500 ${isDark ? "opacity-0" : "opacity-100"}`}>
        {/* Soft, opposing, larger glows */}
        <div className="absolute -top-[150px] -left-[250px] h-[800px] w-[800px] rounded-full bg-primary/10 blur-[180px] z-10" />
        <div className="absolute -bottom-[250px] -right-[150px] h-[700px] w-[700px] rounded-full bg-indigo-300/5 blur-[160px] z-10" />
      </div>

      {/* Dark Mode specific Layer */}
      <div className={`absolute inset-0 z-20 transition-opacity duration-500 ${isDark ? "opacity-100" : "opacity-0"}`}>
        {/* Enhanced, deeper, opposing large glows with richer colors and animation */}
        <div className="absolute -top-[80px] -left-[150px] h-[900px] w-[900px] rounded-full bg-primary/25 blur-[200px] opacity-90 animate-subtle-glow z-20" />
        <div className="absolute -bottom-[180px] -right-[80px] h-[800px] w-[800px] rounded-full bg-purple-500/20 blur-[180px] opacity-80 animate-subtle-glow z-20" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  )
}
