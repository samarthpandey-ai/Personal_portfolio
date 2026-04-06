"use client"

import { Code2, Brain, Network, Database, Terminal, Zap, Cpu } from "lucide-react"

const skills = [
  {
    category: "Programming",
    icon: <Code2 className="h-5 w-5 text-blue-500" />,
    items: [
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C" },
    ],
  },
  {
    category: "Machine Learning",
    icon: <Brain className="h-5 w-5 text-purple-500" />,
    items: [
      { name: "Scikit-Learn", logo: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "Feature Eng.", logo: "" },
    ],
    details: "Supervised Learning, Classification, Regression, Evaluation Metrics",
  },
  {
    category: "Deep Learning",
    icon: <Network className="h-5 w-5 text-orange-500" />,
    items: [
      { name: "PyTorch", logo: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "CNNs", logo: "" },
    ],
    details: "Neural Networks, CNN Architectures, fundamental DL",
  },
  {
    category: "NLP & IR",
    icon: <Zap className="h-5 w-5 text-yellow-500" />,
    items: [
      { name: "TF-IDF", logo: "" },
      { name: "Sentiment Analysis", logo: "" },
    ],
    details: "Text Preprocessing, BoW, Text Similarity",
  },
  {
    category: "Data Handling",
    icon: <Database className="h-5 w-5 text-emerald-500" />,
    items: [
      { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "NumPy", logo: "https://cdn.simpleicons.org/numpy/013243" },
    ],
  },
  {
    category: "Systems & Deployment",
    icon: <Terminal className="h-5 w-5 text-pink-500" />,
    items: [
      { name: "Flask", logo: "https://cdn.simpleicons.org/flask/000000/ffffff" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Jupyter", logo: "https://cdn.simpleicons.org/jupyter/F37626" },
    ],
  },
]

export function TechStack() {
  return (
    <section className="py-16 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">
            <Cpu className="h-3 w-3" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            My <span className="text-gradient">Skill Stack</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div 
              key={skill.category}
              className="group relative rounded-xl border border-border/40 bg-card/40 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-card/60 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary/40 group-hover:bg-primary/10 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-sm font-bold text-foreground tracking-tight">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {skill.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-background/50 border border-border/40 text-[11px] font-medium text-muted-foreground group-hover:text-foreground group-hover:border-primary/20 transition-all">
                    {item.logo && (
                      <img src={item.logo} alt={item.name} className="h-3 w-3 object-contain opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all" />
                    )}
                    {item.name}
                  </div>
                ))}
              </div>
              
              {skill.details && (
                <p className="text-[11px] text-muted-foreground/80 leading-relaxed border-t border-border/20 pt-3 mt-1 group-hover:text-muted-foreground transition-colors">
                  {skill.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
