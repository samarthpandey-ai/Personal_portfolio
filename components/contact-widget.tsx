"use client"

import { useState, useEffect } from "react"
import { Copy, Check, Zap } from "lucide-react"

interface ContactWidgetProps {
  email?: string;
  label?: string;
  className?: string;
}

export function ContactWidget({ 
  email = "your.actual.email@gmail.com", // Make sure to replace this!
  label = "Let's Talk",
  className = "w-full py-3.5" 
}: ContactWidgetProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  // Timer 1: Auto-close after 8 seconds of inactivity if they don't copy
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isRevealed && !hasCopied) {
      timeout = setTimeout(() => {
        setIsRevealed(false);
      }, 8000);
    }
    return () => clearTimeout(timeout);
  }, [isRevealed, hasCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setHasCopied(true);
      
      // Timer 2: Show checkmark for 2 seconds, then close the whole widget
      setTimeout(() => {
        setHasCopied(false);
        setIsRevealed(false);
      }, 2000);
      
    } catch (err) {
      console.error("Failed to copy email");
    }
  };

  // State 2: Revealed Email + Copy Button
  if (isRevealed) {
    return (
      <div className={`flex items-center justify-between gap-3 rounded-xl border border-primary/30 bg-primary/5 px-4 ${className.includes('py-') ? className : 'py-2'} backdrop-blur-sm animate-in fade-in zoom-in-95 duration-300`}>
        <span className="text-sm font-mono text-foreground tracking-tight truncate select-all">
          {email}
        </span>
        <button
          onClick={handleCopy}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-card border border-border transition-all hover:border-primary/50 hover:bg-primary/10 active:scale-90"
          title="Copy Email"
          aria-label="Copy Email Address to clipboard"
        >
          {hasCopied ? (
            <Check className="h-4 w-4 text-emerald-500 animate-in zoom-in" />
          ) : (
            <Copy className="h-4 w-4 text-primary animate-in zoom-in" />
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
