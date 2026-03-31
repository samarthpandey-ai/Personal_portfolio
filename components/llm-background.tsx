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
    <>
      {/* Custom Keyframes for a smooth, dynamic floating effect */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 15s infinite alternate ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* FIXED container ensures it covers the entire screen, even when scrolling */}
      <div className="fixed inset-0 -z-50 w-screen h-screen overflow-hidden bg-background transition-colors duration-500">
        
        {/* Subtle Engineering Grid - Always present */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] z-0" />

        {/* LIGHT MODE: Dynamic Floating Aurora */}
        <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out ${isDark ? "opacity-0" : "opacity-100"}`}>
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-300/20 blur-[100px] animate-blob mix-blend-multiply" />
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-300/20 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" />
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-300/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply" />
        </div>

        {/* DARK MODE: Dynamic Deep Neural Nebulas */}
        <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out ${isDark ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/20 blur-[120px] animate-blob mix-blend-screen" />
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-900/30 blur-[150px] animate-blob animation-delay-4000 mix-blend-screen" />
        </div>
      </div>
    </>
  )
}
