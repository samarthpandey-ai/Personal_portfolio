"use client"

import { useState, useMemo } from "react"
import { ProjectCard } from "@/components/project-card"
import { myProjects } from "@/lib/project-config"
import { Sparkles, Archive, Filter } from "lucide-react"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const sortedAll = useMemo(() => {
    return [...myProjects].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  }, [])

  const recentlyAdded = sortedAll.slice(0, 2)
  const remainingPool = sortedAll.slice(2)

  const filteredRemaining = useMemo(() => {
    if (activeFilter === "All") return remainingPool
    return remainingPool.filter(p => p.tags.includes(activeFilter))
  }, [activeFilter, remainingPool])

  return (
    /* CHANGED: bg-[#030711] -> bg-background | text-slate-50 -> text-foreground */
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION 1: RECENTLY ADDED */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Recently <span className="text-gradient">Added</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentlyAdded.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>

        {/* SECTION 2: THE ARCHIVE (REMAINING) */}
        {/* CHANGED: border-white/5 -> border-border */}
        <div className="pt-20 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-3">
              {/* CHANGED: bg-white/5 -> bg-muted | border-white/10 -> border-border */}
              <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center border border-border">
                <Archive className="h-4 w-4 text-muted-foreground" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Project <span className="text-muted-foreground">Archive</span></h2>
            </div>

            {/* Filter Bar */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0">
              <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
              {["All", "NLP", "LLM", "ML", "Python"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  /* CHANGED: text-slate-500 -> text-muted-foreground | border-white/10 -> border-border */
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    activeFilter === cat 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Archive Grid */}
          {filteredRemaining.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRemaining.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          ) : (
            /* CHANGED: border-white/10 -> border-border */
            <div className="py-20 text-center border border-dashed border-border rounded-3xl">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}