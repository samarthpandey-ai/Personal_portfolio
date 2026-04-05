"use client"

import { 
  ArrowRight, Github, Linkedin, Mail, Cpu, Download, 
  ChevronDown, Layers, Network, Copy, Check, Sparkles,
  School, BookOpen, Code 
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { StatusBadge } from "./status-badge"
import { LlmBackground } from "./llm-background"

const roles = [
  "Neural Architectures",
  "Natural Language Processing", 
  "Deep Learning Systems",
  "Computer Vision",
  "Transformer Models"
]

const fullName = "Samarth Kr Pandey"

export function HeroSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedName, setDisplayedName] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

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
    <section className="relative min-h-screen w-full transition-colors duration-500 overflow-x-hidden">
      
      {/* The Dynamic Background Component */}
      <LlmBackground />
      
      {/* UPDATED: Reduced pt (padding-top) values to remove the gap */}
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-32 lg:pt-28 lg:pb-40 z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              Available for Research & Industry Roles
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
                <Cpu className="h-4 w-4" />
                <span className="h-px w-6 bg-primary/40" />
                Machine Learning Engineer
                <span className="h-px w-6 bg-primary/40" />
                <Network className="h-4 w-4" />
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="text-gradient">{displayedName}</span>
                <span className={`inline-block w-[4px] h-[0.85em] bg-primary ml-2 align-middle rounded-sm ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
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
              <Link href="/projects" className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary via-primary to-cyan-400 px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02] overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  <Cpu className="h-4 w-4" />
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link href="/about" className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:scale-[1.02] shadow-sm">
                <Network className="h-4 w-4 text-primary" />
                About Me
              </Link>
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0">
            <div className="relative aspect-square w-80 sm:w-96 lg:w-[420px]">
              <div className="absolute -inset-4 rounded-3xl border border-primary/10 animate-pulse-glow" />
              
              <div className="absolute inset-0 rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-500 flex items-center justify-center p-4 shadow-xl">
                <div className="relative h-full w-full">
                  <Image 
                    src="/avatar-dark.png"
                    alt="Dark Theme Avatar"
                    fill
                    className={`object-contain transition-opacity duration-500 ${
                      mounted && resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority
                  />
                  <Image 
                    src="/avatar-light.png"
                    alt="Light Theme Avatar"
                    fill
                    className={`object-contain transition-opacity duration-500 ${
                      mounted && resolvedTheme === 'light' ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-2 md:-top-6 md:-right-6 z-20">
                <StatusBadge />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
