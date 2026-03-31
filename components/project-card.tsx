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
      // Updated: Uses bg-card/40 with heavy backdrop blur to let LlmBackground show through
      className="group relative flex flex-col h-full rounded-2xl border border-border bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 text-card-foreground overflow-hidden"
    >
      {/* Interactive Hover Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />

      <div className="relative p-6 md:p-8 flex flex-col h-full space-y-5 z-10">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-transform duration-300 group-hover:scale-110">
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
          <ArrowUpRight className={`h-5 w-5 text-muted-foreground transition-all duration-300 ${isHovered ? 'translate-x-1 -translate-y-1 text-primary' : ''}`} />
        </div>

        {/* Overview - Uses muted-foreground for professional contrast */}
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow line-clamp-3">
          {overview}
        </p>

        {/* Tags - Uses secondary colors for clean look */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2.5 py-1 text-[10px] font-medium bg-secondary/50 border border-border rounded-full text-secondary-foreground backdrop-blur-sm">
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
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-secondary border border-border text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-all active:scale-95"
          >
            <Github className="h-4 w-4" /> Source
          </a>
          
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 transition-all active:scale-95"
          >
            <ExternalLink className="h-4 w-4" /> View Model
          </a>
        </div>
      </div>
    </article>
  )
}
