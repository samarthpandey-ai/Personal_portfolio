"use client"

// 1. ADD 'Star' to your lucide-react imports
import { Github, ExternalLink, Brain, Sparkles, ArrowUpRight, Star } from "lucide-react"
import { useState } from "react"
import { featuredProjectTitles } from "@/lib/project-config"

export function ProjectCard({ 
  title, overview, model, tags, githubUrl, liveUrl 
}: any) {
  const [isHovered, setIsHovered] = useState(false)
  
  const isFeatured = featuredProjectTitles.includes(title)

  return (
    <article 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative flex flex-col h-full rounded-2xl border 
        ${isFeatured ? 'border-primary/40 bg-card/60' : 'border-border bg-card/40'} 
        backdrop-blur-xl transition-all duration-500 ease-out
        hover:border-primary/50 hover:-translate-y-2 hover:scale-[1.01]
        ${isHovered ? 'shadow-2xl shadow-primary/20' : 'shadow-sm'}
        text-card-foreground overflow-hidden
      `}
    >
      {/* 2. THE UPGRADED FEATURED BADGE */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-20 animate-fade-in">
          <div className="group/badge flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur-md shadow-[0_0_15px_rgba(45,212,191,0.15)] transition-all hover:bg-primary/10">
            {/* Added fill to the star and a subtle pulse for a high-tech feel */}
            <Star className="h-3.5 w-3.5 fill-primary/30 text-primary animate-pulse duration-3000" />
            Featured
          </div>
        </div>
      )}

      {/* Interactive Hover Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />

      <div className="relative p-6 md:p-8 flex flex-col h-full space-y-5 z-10">
        
        {/* Header */}
        <div className={`flex items-start justify-between ${isFeatured ? 'pr-24' : ''}`}>
          <div className="flex items-center gap-4">
            <div className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 ${isFeatured ? 'bg-primary/20 border-primary/40 shadow-inner shadow-primary/20' : 'bg-primary/10 border-primary/20 group-hover:bg-primary/20'}`}>
              <Brain className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                {title}
              </h3>
              <p className="text-[10px] md:text-xs font-mono text-primary/70 flex items-center gap-1.5 mt-1 uppercase tracking-wider">
                <Sparkles className="h-3 w-3" />
                {model}
              </p>
            </div>
          </div>
          {!isFeatured && (
            <ArrowUpRight className={`h-5 w-5 text-muted-foreground transition-all duration-500 ${isHovered ? 'translate-x-1 -translate-y-1 text-primary' : ''}`} />
          )}
        </div>

        {/* Overview */}
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow line-clamp-3">
          {overview}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2.5 py-1 text-[10px] font-medium bg-secondary/50 border border-border rounded-full text-secondary-foreground backdrop-blur-sm transition-colors group-hover:border-primary/30">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-5 border-t border-border/50">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-secondary border border-border text-xs font-medium text-secondary-foreground hover:bg-secondary/80 hover:border-primary/30 transition-all active:scale-95"
          >
            <Github className="h-4 w-4" /> Source
          </a>
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40 hover:scale-[1.02] transition-all active:scale-95"
          >
            <ExternalLink className="h-4 w-4" /> View Model
          </a>
        </div>
      </div>
    </article>
  )
}
