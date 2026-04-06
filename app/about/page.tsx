"use client"

import { Code2, Brain, Network, Database, Terminal, Zap } from "lucide-react"

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
      { name: "Feature Eng.", logo: "" }, // No logo for concepts
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
      { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/05998B" },
    ],
  },
]

export function TechStack() {
  return (
    <section className="py-20 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <Code2 className="h-3 w-3" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My <span className="text-gradient">Skill Stack</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div 
              key={skill.category}
              className="group relative rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-foreground">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-3">
                {skill.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/30 border border-border/50 text-xs font-medium">
                    {item.logo && (
                      <img src={item.logo} alt={item.name} className="h-3.5 w-3.5 object-contain" />
                    )}
                    {item.name}
                  </div>
                ))}
              </div>
              
              {skill.details && (
                <p className="text-xs text-muted-foreground leading-relaxed italic">
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
