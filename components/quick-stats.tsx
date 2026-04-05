"use client"

import { 
  Code2, 
  Brain, 
  Target, 
  TrendingUp, 
  GitBranch, 
  ArrowRight, 
  Cpu, 
  Sparkles 
} from "lucide-react"
import { useEffect, useState, useRef, useMemo } from "react"
import Link from "next/link"
import { myProjects } from "@/lib/project-config"
import { ProjectCard } from "./project-card"

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const stepValue = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += stepValue
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function QuickStats() {
  const [dynamicStats, setDynamicStats] = useState({
    github: 1247, 
    leetcode: 69 // Default fallback
  })

  const latestTwo = useMemo(() => {
    return [...myProjects]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 2);
  }, []);

  useEffect(() => {
    let isMounted = true;
    async function getLiveStats() {
      try {
        // 1. Fetch GitHub with Cache Busting
        const ghRes = await fetch(`https://api.github.com/users/samarthpandey-ai/events?t=${Date.now()}`, {
          cache: 'no-store'
        })
        if (ghRes.ok) {
          const ghData = await ghRes.json()
          const recentCommits = ghData
            .filter((e: any) => e.type === "PushEvent")
            .reduce((acc: number, e: any) => acc + (e.payload?.commits?.length || 0), 0)
          
          if (isMounted) {
            setDynamicStats(prev => ({ ...prev, github: 1247 + recentCommits }))
          }
        }

        // 2. Call Internal API Route to bypass CORS and get real-time LeetCode stats
        const lcRes = await fetch(`/api/leetcode?t=${Date.now()}`, {
          cache: 'no-store'
        });

        if (lcRes.ok) {
          const data = await lcRes.json();
          if (isMounted && data.totalSolved) {
            setDynamicStats(prev => ({ ...prev, leetcode: data.totalSolved }));
          }
        }
      } catch (error) {
        console.error("Live fetch failed:", error)
      }
    }
    getLiveStats()
    return () => { isMounted = false }; 
  }, [])

  const statsList = [
    {
      title: "GitHub Commits",
      value: dynamicStats.github,
      subtitle: "Live API Fetch",
      icon: GitBranch,
      gradient: "from-primary to-cyan-400",
      bgGradient: "from-primary/20 to-cyan-400/5",
      isLive: true,
    },
    {
      title: "LeetCode Solved",
      value: dynamicStats.leetcode,
      subtitle: "Live API Fetch",
      icon: Code2,
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/5",
      isLive: true,
    },
    {
      title: "PROJECTS BUILT",
      value: myProjects.length, 
      subtitle: "Documented & Deployed",
      icon: Brain,
      gradient: "from-violet-400 to-purple-500",
      bgGradient: "from-violet-500/20 to-purple-500/5",
      isLive: false,
    }
  ]

  return (
    <section className="relative overflow-hidden py-24 border-y border-border/20 bg-muted/20 backdrop-blur-[2px]">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
            <TrendingUp className="h-4 w-4" />
            Performance Metrics
            <Cpu className="h-4 w-4" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Quantified</span> Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {statsList.map((stat, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md p-6 transition-all duration-500 ease-out hover:border-primary/40 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 shadow-sm cursor-default">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative h-10 w-10 mb-4 flex items-center justify-center rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors duration-500 z-10">
                <stat.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
              </div>
              
              <div className="relative space-y-1 z-10">
                <p className={`text-3xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                  <AnimatedCounter value={stat.value} />+
                </p>
                <p className="text-sm font-semibold text-card-foreground group-hover:text-foreground transition-colors">{stat.title}</p>
                
                <div className="flex items-center gap-1.5 pt-1">
                  {stat.isLive && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  )}
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 space-y-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-foreground">
                Latest <span className="text-gradient">Projects</span>
              </h3>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm text-primary hover:underline">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {latestTwo.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
