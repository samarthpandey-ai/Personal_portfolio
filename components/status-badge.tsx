export function StatusBadge() {
  return (
    <div className="group relative flex items-center gap-3 rounded-full border border-border/40 bg-background/60 px-5 py-3 backdrop-blur-md shadow-lg transition-all hover:scale-105 hover:border-primary/50 hover:bg-background/80 cursor-default">
      
      {/* Radar Ping Animation - Emerald Green for "Available" */}
      <div className="relative flex h-3.5 w-3.5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 duration-1000"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
      </div>
      
      {/* Stacked Text */}
      <div className="flex flex-col items-start justify-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 leading-none mb-1">
          Status
        </span>
        <span className="text-sm font-semibold text-foreground leading-none transition-colors group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
          Open to Work
        </span>
      </div>

    </div>
  )
}
