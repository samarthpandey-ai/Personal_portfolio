"use client"

import { useState } from "react"
import { Copy, Check, Zap } from "lucide-react"

interface ContactWidgetProps {
  email?: string;
  label?: string;
  className?: string;
}

export function ContactWidget({ 
  email = "your@email.com", // Replace with your actual email
  label = "Let's Talk",
  className = "w-full py-3.5" // Default matches your footer style
}: ContactWidgetProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setHasCopied(true);
      // Reset the checkmark back to a copy icon after 2 seconds
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email");
    }
  };

  // State 2: Revealed Email + Copy Button
  if (isRevealed) {
    return (
      <div className={`flex items-center justify-between gap-3 rounded-xl border border-primary/30 bg-primary/5 px-4 ${className.includes('py-') ? className : 'py-2'} backdrop-blur-sm animate-in fade-in zoom-in-95 duration-300`}>
        <span className="text-sm font-mono text-foreground tracking-tight truncate">
          {email}
        </span>
        <button
          onClick={handleCopy}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-card border border-border transition-all hover:border-primary/50 hover:bg-primary/10 active:scale-90"
          title="Copy Email"
        >
          {hasCopied ? (
            <Check className="h-4 w-4 text-emerald-500" />
          ) : (
            <Copy className="h-4 w-4 text-primary" />
          )}
        </button>
      </div>
    )
  }

  // State 1: Default Button
  return (
    <button
      onClick={() => setIsRevealed(true)}
      className={`group flex items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] ${className}`}
    >
      <Zap className="h-4 w-4 transition-transform group-hover:scale-110" />
      {label}
    </button>
  )
}
