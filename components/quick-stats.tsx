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

  useEffect(() => {
    if (hasAnimated) setCount(value)
  }, [value, hasAnimated])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function QuickStats() {
  const [dynamicStats, setDynamicStats] = useState({
    github: 1247, 
    leetcode: 69
  })

  const latestTwo = useMemo(() => {
    return [...myProjects]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 2);
  }, []);

  useEffect(() => {
    async function getLiveStats() {
      try {
        const ghRes = await fetch('https://api.github.com/users/samarthpandey-ai/events')
        if (ghRes.ok) {
          const ghData = await ghRes.json()
          const recentCommits = ghData
            .filter((e: any) => e.type === "PushEvent")
            .reduce((acc: number, e: any) => acc + (e.payload?.commits?.length || 0), 0)
          setDynamicStats(prev => ({ ...prev, github: 1247 + recentCommits }))
        }

        const lcRes = await fetch('https://leetcode-stats-api.herokuapp.com/samp123')
        if (lcRes.ok) {
          const lcData = await lcRes.json()
          if (lcData.totalSolved) {
            setDynamicStats(prev => ({ ...prev, leetcode: lcData.totalSolved }))
          }
        }
      } catch (error) {
        console.error("Live fetch failed")
      }
    }
    getLiveStats()
  }, [])

  const statsList = [
    {
      title: "GitHub Commits",
      value: dynamicStats.github,
      subtitle: "Live contributions",
      icon: GitBranch,
      gradient: "from-primary to-cyan-400",
      bgGradient: "from-primary/15 to-cyan-400/5",
    },
    {
      title: "LeetCode Solved",
      value: dynamicStats.leetcode,
      subtitle: "Live DSA Progress",
      icon: Code2,
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-500/15 to-red-500/5",
    },
    {
      title: "PROJECTS BUILT",
      value: myProjects.length, 
      subtitle: "Documented & Deployed",
      icon: Brain,
      gradient: "from-violet-400 to-purple-500",
      bgGradient: "from-violet-500/15 to-purple-500/5",
    }
  ]

  return (
    /* STRATEGIC UPDATE: Added a very subtle frosted band (bg-muted/20) and 
       backdrop-blur to create hierarchy while keeping the background orbs visible.
    */
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
            <div key={index} className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md p-6 transition-all hover:border-primary/40 shadow-sm">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <stat.icon className="h-6 w-6 text-primary mb-4 relative z-10" />
              <div className="relative space-y-1 z-10">
                <p className={`text-3xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                  <AnimatedCounter value={stat.value} />+
                </p>
                <p className="text-sm font-semibold text-card-foreground">{stat.title}</p>
                <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
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
                Latest <span className="text-gradient">Innovations</span>
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
