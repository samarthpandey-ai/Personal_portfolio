"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function LlmBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before checking theme to avoid hydration mismatch flashes
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === "dark"

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Base topographical engineering lines - professional, not buggy dots. 
        Subtly different opacity for each theme.
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
          {/* Add more contoured lines for a complex topographical network... */}
        </svg>
      </div>

      {/* Light Mode Dynamic Layer: 
        Base of pristine white with slow,vast, shifting electric cyan and indogo diffused lights.
        Uses cross-fading (transition-opacity) for invisible dynamic effect.
      */}
      <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ${isDark ? "opacity-0" : "opacity-100"}`}>
        <div className="absolute top-[100px] left-[150px] h-[700px] w-[700px] rounded-full bg-primary/10 blur-[160px] animate-cosmic-drift z-10" />
        <div className="absolute -bottom-[200px] right-[100px] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[140px] animate-cosmic-drift z-10" style={{ animationDelay: '2s' }} />
      </div>

      {/* Dark Mode Dynamic Layer: 
        Base of deep slate-black with deeper, richer, slowly pulsating cyan and purple nebulae.
        These are vast, diffused light sources that "breathe".
      */}
      <div className={`absolute inset-0 z-20 transition-opacity duration-1000 ${isDark ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute top-[80px] left-[120px] h-[800px] w-[800px] rounded-full bg-primary/25 blur-[180px] animate-cosmic-drift z-20" />
        <div className="absolute bottom-[150px] right-[80px] h-[700px] w-[700px] rounded-full bg-purple-600/20 blur-[160px] animate-cosmic-drift z-20" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Engineering grid and topographical pattern layered on top */}
      <div className="absolute inset-0 ai-grid-pattern opacity-10 dark:opacity-20 transition-opacity duration-500" />
    </div>
  )
}
