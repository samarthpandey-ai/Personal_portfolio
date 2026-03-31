export function StatusBadge() {
  return (
    <div className="group inline-flex items-center gap-3 rounded-full border border-border/50 bg-background/70 px-4 py-2.5 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:shadow-emerald-500/10 dark:border-white/10 dark:bg-black/60 dark:hover:border-emerald-400/40 dark:hover:bg-emerald-400/10 cursor-default">
      
      {/* Live Radar Dot */}
      <span className="relative flex h-3 w-3 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60 duration-1000" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>

      {/* Stacked Typography */}
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-emerald-600/70 dark:group-hover:text-emerald-400/70">
          Available
        </span>
        <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
          Open to Work
        </span>
      </span>
      
    </div>
  );
}
