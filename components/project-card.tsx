"use client"

import { Github, ExternalLink, Brain, Sparkles, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export function ProjectCard({ 
  title, overview, model, tags, githubUrl, liveUrl 
}: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      /* CHANGED: bg-[#0A0F1C]/60 -> bg-card | border-white/5 -> border-border | added text-card-foreground */
      className="group relative flex flex-col h-full rounded-2xl border border-border bg-card/60 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 text-card-foreground"
    >
      <div className="relative p-6 md:p-8 flex flex-col h-full space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-transform duration-300 group-hover:scale-110">
              <Brain className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <div>
              {/* CHANGED: text-white -> text-foreground (or keep text-card-foreground inheritance) */}
              <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                {title}
              </h3>
              <p className="text-[10px] md:text-xs font-mono text-primary/70 flex items-center gap-1.5 mt-1 uppercase tracking-wider">
                <Sparkles className="h-3 w-3" />
                {model}
              </p>
            </div>
          </div>
          <ArrowUpRight className={`h-5 w-5 text-muted-foreground transition-all duration-300 ${isHovered ? 'translate-x-1 -translate-y-1 text-primary' : ''}`} />
        </div>

        {/* Overview */}
        {/* CHANGED: text-slate-400 -> text-muted-foreground */}
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow line-clamp-3">
          {overview}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag: string) => (
            /* CHANGED: bg-white/5 -> bg-secondary | border-white/10 -> border-border | text-slate-300 -> text-secondary-foreground */
            <span key={tag} className="px-2.5 py-1 text-[10px] font-medium bg-secondary border border-border rounded-full text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        {/* CHANGED: border-white/5 -> border-border */}
        <div className="flex gap-3 pt-5 border-t border-border">
          {/* CHANGED: bg-white/5 -> bg-secondary | border-white/10 -> border-border | text-xs -> text-secondary-foreground */}
          <a href={githubUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-secondary border border-border text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-all">
            <Github className="h-4 w-4" /> Source
          </a>
          {/* View Model Button usually stays Primary color for brand consistency */}
          <a href={liveUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-all">
            <ExternalLink className="h-4 w-4" /> View Model
          </a>
        </div>
      </div>
    </article>
  )
}