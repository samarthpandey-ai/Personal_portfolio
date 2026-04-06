"use client"

import { useState } from "react"
import { Code2, Brain, Network, Database, Terminal, Zap, CheckCircle2, Cpu } from "lucide-react"

// Explicit Tailwind classes to ensure Dark Mode borders and outer glows work perfectly
const skills = [
  {
    category: "Programming",
    icon: <Code2 className="h-6 w-6" />,
    styles: {
      iconText: "text-blue-500 dark:text-blue-400",
      iconBgActive: "bg-blue-500/10",
      glowActive: "border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/30 dark:shadow-blue-400/30 -translate-y-1",
      glowHover: "hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 hover:-translate-y-1",
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
      glowActive: "border-purple-500 dark:border-purple-400 shadow-lg shadow-purple-500/30 dark:shadow-purple-400/30 -translate-y-1",
      glowHover: "hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-purple-400/30 hover:-translate-y-1",
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
      glowActive: "border-orange-500 dark:border-orange-400 shadow-lg shadow-orange-500/30 dark:shadow-orange-400/30 -translate-y-1",
      glowHover: "hover:border-orange-500 dark:hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/30 dark:hover:shadow-orange-400/30 hover:-translate-y-1",
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
      glowActive: "border-amber-500 dark:border-amber-400 shadow-lg shadow-amber-500/30 dark:shadow-amber-400/30 -translate-y-1",
      glowHover: "hover:border-amber-500 dark:hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/30 dark:hover:shadow-amber-400/30 hover:-translate-y-1",
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
      glowActive: "border-emerald-500 dark:border-emerald-400 shadow-lg shadow-emerald-500/30 dark:shadow-emerald-400/30 -translate-y-1",
      glowHover: "hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/30 dark:hover:shadow-emerald-400/30 hover:-translate-y-1",
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
      glowActive: "border-rose-500 dark:border-rose-400 shadow-lg shadow-rose-500/30 dark:shadow-rose-400/30 -translate-y-1",
      glowHover: "hover:border-rose-500 dark:hover:border-rose-400 hover:shadow-lg hover:shadow-rose-500/30 dark:hover:shadow-rose-400/30 hover:-translate-y-1",
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
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 p-8 bg-card
                  ${isSelected 
                    ? skill.styles.glowActive 
                    : `border-border/50 ${skill.styles.glowHover}`
                  }`}
              >
                {/* Checkmark icon for active state */}
                <div className={`absolute top-6 right-6 h-5 w-5 transition-all duration-300 ${isSelected ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                  <CheckCircle2 className={`h-full w-full ${skill.styles.iconText}`} />
                </div>

                <div className="relative z-10">
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl border border-border/50 transition-colors duration-300 ${skill.styles.iconText} ${isSelected ? skill.styles.iconBgActive : 'bg-background/50 group-hover:bg-background/80'}`}>
                      {skill.icon}
                    </div>
                    <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isSelected ? skill.styles.iconText : 'text-foreground'}`}>
                      {skill.category}
                    </h3>
                  </div>
                  
                  {/* Skill Pills (Logos are always colored now) */}
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
                          <img src={item.logo} alt={item.name} className="h-4 w-4 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
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
                      <p className={`text-xs leading-relaxed italic transition-colors duration-300 ${isSelected ? 'text-foreground/90' : 'text-muted-foreground group-hover:text-foreground/80'}`}>
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
