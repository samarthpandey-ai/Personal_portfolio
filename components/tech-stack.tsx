"use client"

import { useState } from "react"
import { Code2, Brain, Network, Database, Terminal, Zap, CheckCircle2, Cpu } from "lucide-react"

// Explicit Tailwind classes are required so the compiler doesn't strip them out in Dark Mode!
const skills = [
  {
    category: "Programming",
    icon: <Code2 className="h-6 w-6" />,
    styles: {
      iconText: "text-blue-500 dark:text-blue-400",
      iconBgActive: "bg-blue-500/10",
      titleHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
      glow: "from-blue-100/80 dark:from-blue-500/20", // Increased dark mode base glow slightly
      borderActive: "border-blue-500/60 dark:border-blue-400/60 shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      tagActive: "border-blue-500/40 bg-blue-500/10 text-blue-700 dark:text-blue-300",
    },
    items: [
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C" },
    ],
  },
  {
    category: "Machine Learning",
    icon: <Brain className="h-6 w-6" />,
    styles: {
      iconText: "text-purple-500 dark:text-purple-400",
      iconBgActive: "bg-purple-500/10",
      titleHover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
      glow: "from-purple-100/80 dark:from-purple-500/20",
      borderActive: "border-purple-500/60 dark:border-purple-400/60 shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      tagActive: "border-purple-500/40 bg-purple-500/10 text-purple-700 dark:text-purple-300",
    },
    items: [
      { name: "Scikit-Learn", logo: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "Feature Eng.", logo: "" },
    ],
    details: "Supervised Learning, Classification, Regression, Evaluation Metrics",
  },
  {
    category: "Deep Learning",
    icon: <Network className="h-6 w-6" />,
    styles: {
      iconText: "text-orange-500 dark:text-orange-400",
      iconBgActive: "bg-orange-500/10",
      titleHover: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
      glow: "from-orange-100/80 dark:from-orange-500/20",
      borderActive: "border-orange-500/60 dark:border-orange-400/60 shadow-[0_0_30px_rgba(249,115,22,0.15)]",
      tagActive: "border-orange-500/40 bg-orange-500/10 text-orange-700 dark:text-orange-300",
    },
    items: [
      { name: "PyTorch", logo: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "CNNs", logo: "" },
    ],
    details: "Neural Networks, CNN Architectures, fundamental DL",
  },
  {
    category: "NLP & IR",
    icon: <Zap className="h-6 w-6" />,
    styles: {
      iconText: "text-amber-500 dark:text-amber-400",
      iconBgActive: "bg-amber-500/10",
      titleHover: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
      glow: "from-amber-100/80 dark:from-amber-500/20",
      borderActive: "border-amber-500/60 dark:border-amber-400/60 shadow-[0_0_30px_rgba(245,158,11,0.15)]",
      tagActive: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300",
    },
    items: [
      { name: "TF-IDF", logo: "" },
      { name: "Sentiment Analysis", logo: "" },
    ],
    details: "Text Preprocessing, BoW, Text Similarity",
  },
  {
    category: "Data Handling",
    icon: <Database className="h-6 w-6" />,
    styles: {
      iconText: "text-emerald-500 dark:text-emerald-400",
      iconBgActive: "bg-emerald-500/10",
      titleHover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
      glow: "from-emerald-100/80 dark:from-emerald-500/20",
      borderActive: "border-emerald-500/60 dark:border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      tagActive: "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    },
    items: [
      { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "NumPy", logo: "https://cdn.simpleicons.org/numpy/013243" },
    ],
  },
  {
    category: "Systems & Deployment",
    icon: <Terminal className="h-6 w-6" />,
    styles: {
      iconText: "text-rose-500 dark:text-rose-400",
      iconBgActive: "bg-rose-500/10",
      titleHover: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
      glow: "from-rose-100/80 dark:from-rose-500/20",
      borderActive: "border-rose-500/60 dark:border-rose-400/60 shadow-[0_0_30px_rgba(244,63,94,0.15)]",
      tagActive: "border-rose-500/40 bg-rose-500/10 text-rose-700 dark:text-rose-300",
    },
    items: [
      { name: "Flask", logo: "https://cdn.simpleicons.org/flask/000000/ffffff" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Jupyter", logo: "https://cdn.simpleicons.org/jupyter/F37626" },
    ],
  },
]

export function TechStack() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
            <Cpu className="h-3 w-3" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            My <span className="text-gradient">Skill Stack</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            A comprehensive overview of the tools and technologies I use to build intelligent systems.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const isSelected = selectedSkill === skill.category;

            return (
              <div 
                key={skill.category}
                onClick={() => setSelectedSkill(isSelected ? null : skill.category)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 p-8 
                  ${isSelected 
                    ? `bg-white dark:bg-zinc-900 ${skill.styles.borderActive}` 
                    : "bg-white/60 dark:bg-zinc-900/40 border-border/50 hover:border-border hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/50"
                  } backdrop-blur-md`}
              >
                {/* THE GLOW EFFECT 
                  Visible slightly all the time (opacity-20 in dark mode), brightens on hover/click.
                */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 bg-gradient-to-br to-transparent ${skill.styles.glow} ${isSelected ? 'opacity-100' : 'opacity-20 dark:opacity-30 group-hover:opacity-100'}`} />

                {/* Checkmark icon for active state */}
                <div className={`absolute top-6 right-6 h-5 w-5 transition-all duration-500 ${isSelected ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                  <CheckCircle2 className={`h-full w-full ${skill.styles.iconText}`} />
                </div>

                {/* Card Content (z-10 keeps it above the glow) */}
                <div className="relative z-10">
                  
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl border border-border/50 transition-colors duration-300 ${skill.styles.iconText} ${isSelected ? skill.styles.iconBgActive : 'bg-background/50 group-hover:bg-background/80'}`}>
                      {skill.icon}
                    </div>
                    <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isSelected ? skill.styles.iconText : `text-foreground ${skill.styles.titleHover}`}`}>
                      {skill.category}
                    </h3>
                  </div>
                  
                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2.5 mb-5">
                    {skill.items.map((item) => (
                      <div 
                        key={item.name} 
                        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-[13px] font-semibold transition-colors duration-300
                          ${isSelected 
                            ? skill.styles.tagActive 
                            : 'border-border/50 bg-background/50 text-foreground group-hover:border-border'
                          }`}
                      >
                        {item.logo ? (
                          // REMOVED grayscale class here! Logos will always be colored now.
                          <img src={item.logo} alt={item.name} className="h-4 w-4 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300" />
                        ) : (
                          <Zap className={`h-3.5 w-3.5 ${isSelected ? skill.styles.iconText : 'text-primary/70 group-hover:text-primary'}`} />
                        )}
                        {item.name}
                      </div>
                    ))}
                  </div>
                  
                  {/* Details Paragraph */}
                  {skill.details && (
                    <div className={`pt-5 border-t transition-colors duration-300 ${isSelected ? 'border-border' : 'border-border/50'}`}>
                      <p className={`text-xs leading-relaxed italic transition-colors duration-300 ${isSelected ? 'text-foreground/80' : 'text-muted-foreground group-hover:text-foreground/70'}`}>
                        {skill.details}
                      </p>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
