"use client"

import { useState } from "react"
import { Code2, Brain, Network, Database, Terminal, Zap, CheckCircle2, Cpu } from "lucide-react"
import clsx from "clsx" // Make sure to run 'npm install clsx' or 'yarn add clsx'

// Data structure with colored logos from Simple Icons CDN for that extra professional look
const skills = [
  {
    category: "Programming",
    icon: <Code2 className="h-6 w-6" />,
    color: "text-blue-500",
    accent: "blue",
    items: [
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C" },
    ],
  },
  {
    category: "Machine Learning",
    icon: <Brain className="h-6 w-6" />,
    color: "text-purple-500",
    accent: "purple",
    items: [
      { name: "Scikit-Learn", logo: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "Feature Eng.", logo: "" },
    ],
    details: "Supervised Learning, Classification, Regression, Evaluation Metrics",
  },
  {
    category: "Deep Learning",
    icon: <Network className="h-6 w-6" />,
    color: "text-orange-500",
    accent: "orange",
    items: [
      { name: "PyTorch", logo: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "CNNs", logo: "" },
    ],
    details: "Neural Networks, CNN Architectures, fundamental DL",
  },
  {
    category: "NLP & IR",
    icon: <Zap className="h-6 w-6" />,
    color: "text-yellow-500",
    accent: "yellow",
    items: [
      { name: "TF-IDF", logo: "" },
      { name: "Sentiment Analysis", logo: "" },
    ],
    details: "Text Preprocessing, BoW, Text Similarity",
  },
  {
    category: "Data Handling",
    icon: <Database className="h-6 w-6" />,
    color: "text-emerald-500",
    accent: "emerald",
    items: [
      { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "NumPy", logo: "https://cdn.simpleicons.org/numpy/013243" },
    ],
  },
  {
    category: "Systems & Deployment",
    icon: <Terminal className="h-6 w-6" />,
    color: "text-pink-500",
    accent: "pink",
    items: [
      { name: "Flask", logo: "https://cdn.simpleicons.org/flask/000000/ffffff" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Jupyter", logo: "https://cdn.simpleicons.org/jupyter/F37626" },
    ],
  },
]

export function TechStack() {
  // 1. Initialize State for Click Interaction (The 'Active' state)
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Helper to get accent color classes dynamically
  const getAccent = (colorName: string, state: 'base' | 'hover' | 'active') => {
    switch(state) {
      case 'active': return `border-${colorName}-400 bg-${colorName}-900/40`;
      case 'hover': return `group-hover:border-${colorName}-500 group-hover:bg-${colorName}-900/20`;
      default: return `border-border/60 bg-secondary/60 text-${colorName}-500`;
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradients for Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/2 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />
      </div>

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

        {/* 2. The Bento Grid (6 cards) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const isSelected = selectedSkill === skill.category;

            return (
              <div 
                key={skill.category}
                // 3. Click handler with state update
                onClick={() => setSelectedSkill(isSelected ? null : skill.category)}
                className={clsx(
                  // Base Styles (The "Glassmorphism" effect)
                  "group relative cursor-pointer rounded-2xl border transition-all duration-300 p-8",
                  "dark:bg-card/50 dark:backdrop-blur-sm dark:border-border/50",
                  "bg-white/80 backdrop-blur-sm border-neutral-200",
                  
                  // Hover Styles (Border lightens, outer glow appears)
                  "hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10",

                  // 4. Clicked (Selected/Active) State (Strong colored glow & border)
                  isSelected && [
                    `dark:border-${skill.accent}-400 border-${skill.accent}-400`,
                    "dark:bg-card/90 bg-white/90 shadow-[0_0_40px_rgba(34,211,238,0.2)]",
                    // Dynamic coloring for elements on selected state handled in inner divs
                  ]
                )}
              >
                {/* Checkmark indicator for selected state */}
                <div className={clsx(
                  "absolute top-5 right-5 h-6 w-6 transition-all duration-500",
                  isSelected ? "opacity-100 scale-100" : "opacity-0 scale-50"
                )}>
                  <CheckCircle2 className={`h-6 w-6 text-${skill.accent}-400 fill-background`} />
                </div>

                {/* 5. The Colored Icon & Label Section */}
                <div className="flex items-center gap-5 mb-6">
                  <div className={clsx(
                      "p-3 rounded-xl border transition-all duration-300",
                      getAccent(skill.accent, isSelected ? 'active' : 'base'),
                      getAccent(skill.accent, 'hover')
                  )}>
                    {skill.icon}
                  </div>
                  <h3 className={`text-xl font-bold text-foreground tracking-tight group-hover:text-${skill.accent}-400`}>{skill.category}</h3>
                </div>
                
                {/* 6. The Individual Skill Tags Section */}
                <div className="flex flex-wrap gap-3 mb-5">
                  {skill.items.map((item) => (
                    <div 
                      key={item.name} 
                      className={clsx(
                        "flex items-center gap-2 px-3.5 py-2 rounded-xl text-[13px] font-medium transition-colors",
                        "bg-background/50 border border-border/50 group-hover:border-primary/30",
                        isSelected && `border-${skill.accent}-400 bg-${skill.accent}-900/30` // Accent coloring on active state
                      )}
                    >
                      {item.logo ? (
                        <img src={item.logo} alt={item.name} className="h-4 w-4 object-contain" />
                      ) : (
                        <Zap className="h-3 w-3 text-primary/50" />
                      )}
                      {item.name}
                    </div>
                  ))}
                </div>
                
                {/* 7. Detailed Description (If available) */}
                {skill.details && (
                  <div className="pt-5 border-t border-border/30">
                    <p className="text-xs text-muted-foreground leading-relaxed italic">
                      {skill.details}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
