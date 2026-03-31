"use client"

import { 
  ArrowRight, Github, Linkedin, Mail, Cpu, Download, 
  ChevronDown, Layers, Network, Copy, Check, Sparkles,
  School, BookOpen, Code 
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const roles = [
  "Neural Architectures",
  "Natural Language Processing", 
  "Deep Learning Systems",
  "Computer Vision",
  "Transformer Models"
]

const fullName = "Samarth Kr Pandey"

const neuralNodes = [
  { x: 10, y: 20, size: 4 },
  { x: 25, y: 35, size: 3 },
  { x: 15, y: 55, size: 5 },
  { x: 30, y: 70, size: 3 },
  { x: 85, y: 15, size: 4 },
  { x: 90, y: 40, size: 3 },
  { x: 80, y: 60, size: 5 },
  { x: 75, y: 80, size: 4 },
  { x: 50, y: 10, size: 3 },
  { x: 55, y: 85, size: 4 },
]

export function HeroSection() {
  const [showEmail, setShowEmail] = useState(false)
  const [copied, setCopied] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedName, setDisplayedName] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isTyping && displayedName.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(fullName.slice(0, displayedName.length + 1))
      }, 120)
      return () => clearTimeout(timeout)
    } else if (displayedName.length === fullName.length) {
      setIsTyping(false)
    }
  }, [displayedName, isTyping])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    /* UPDATED: Added bg-background transition */
    <section className="relative min-h-screen overflow-hidden bg-background transition-colors duration-500">
      <div className="absolute inset-0">
        {/* UPDATED: Adjusted opacity of glows for light mode visibility */}
        <div className="absolute top-1/4 -left-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-[120px] animate-neural-pulse opacity-60 dark:opacity-100" />
        <div className="absolute bottom-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-purple-500/15 via-primary/5 to-transparent blur-[100px] animate-neural-pulse opacity-50 dark:opacity-100" style={{ animationDelay: '1.5s' }} />
        
        {/* UPDATED: Grid pattern now uses theme border color */}
        <div className="absolute inset-0 ai-grid-pattern [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_30%,transparent_100%)] opacity-20 dark:opacity-100" />
        
        {mounted && (
          <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1={`${10 + i * 8}%`}
                y1="0%"
                x2={`${85 - i * 6}%`}
                y2="100%"
                stroke="url(#lineGrad)"
                strokeWidth="0.5"
              />
            ))}
            {neuralNodes.map((node, i) => (
              <g key={i}>
                <circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r={node.size}
                  fill="url(#nodeGrad)"
                  className="animate-pulse-glow"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              </g>
            ))}
          </svg>
        )}
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 lg:py-44">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              Available for Research & Industry Roles
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
                <Cpu className="h-4 w-4" />
                <span className="h-px w-6 bg-primary/40" />
                Machine Learning Engineer
                <span className="h-px w-6 bg-primary/40" />
                <Network className="h-4 w-4" />
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="text-gradient">
                  {displayedName}
                </span>
                <span 
                  className={`inline-block w-[4px] h-[0.85em] bg-primary ml-2 align-middle rounded-sm ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
                />
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 text-xl sm:text-2xl">
                <span className="text-muted-foreground">Building</span>
                <span className="relative">
                  <span key={currentRole} className="text-gradient font-semibold animate-fade-in inline-flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    {roles[currentRole]}
                  </span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {[
                  { icon: School, text: "Thapar Institute" },
                  { icon: BookOpen, text: "6th Semester" },
                  { icon: Code, text: "ML & NLP Focus" },
                ].map((tag, i) => (
                  <div key={i} className="group flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/80 shadow-sm">
                    <tag.icon className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors" />
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">{tag.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Engineering intelligent systems at the intersection of <span className="text-foreground font-medium">deep learning</span> and <span className="text-foreground font-medium">natural language processing</span>. 
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary via-primary to-cyan-400 px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Cpu className="h-4 w-4" />
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:scale-[1.02] shadow-sm"
              >
                <Network className="h-4 w-4 text-primary" />
                About Me
              </Link>
            </div>

            {/* Social Links Updated for Theme */}
            <div className="flex items-center gap-6 pt-2">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Connect</span>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent max-w-24" />
              <div className="flex items-center gap-1">
                {[
                  { href: "https://github.com/samarthpandey-ai", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/samarth-pandey-137137293/", icon: Linkedin, label: "LinkedIn" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl p-3 text-muted-foreground transition-all hover:bg-card hover:text-primary border border-transparent hover:border-border"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Photo Frame Updated for Theme */}
          <div className="relative mx-auto lg:mx-0">
            <div className="relative aspect-[4/5] w-80 sm:w-96 lg:w-[420px]">
              <div className="absolute inset-0 rounded-2xl border border-border bg-card overflow-hidden shadow-2xl transition-colors duration-500">
                <div className="absolute inset-0 dot-pattern opacity-10 dark:opacity-30" />
                
                <div className="absolute inset-4 rounded-xl bg-secondary/30 flex items-center justify-center overflow-hidden border border-border/40">
                  <div className="text-center space-y-6 p-8">
                    <div className="mx-auto h-32 w-32 rounded-full border-2 border-dashed border-primary/50 bg-primary/5 flex items-center justify-center">
                      <Cpu className="h-12 w-12 text-primary/70" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Samarth Kr Pandey</p>
                      <p className="text-xs text-muted-foreground">Professional headshot</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -top-6 -right-6 rounded-2xl border border-primary/40 bg-card px-5 py-4 shadow-xl glow-primary-soft">
                <div className="text-center">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</p>
                  <p className="text-lg font-bold text-primary flex items-center gap-2 justify-center">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    Open to Work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}