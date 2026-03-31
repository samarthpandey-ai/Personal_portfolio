export function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-background/80 px-3 py-1.5 text-sm shadow-sm backdrop-blur-md transition-colors dark:border-emerald-400/20 dark:bg-black/40">
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/40 animate-ping [animation-duration:2.2s]" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
      </span>

      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
          Available
        </span>
        <span className="text-xs font-semibold text-foreground">
          Open to Work
        </span>
      </span>
    </div>
  );
}
