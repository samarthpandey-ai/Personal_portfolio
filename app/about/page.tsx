"use client"

import { JourneyTimeline } from "@/components/journey-timeline"
import { SkillsSection } from "@/components/skills-section"
import { GoalsSection } from "@/components/goals-section"
import { ContactWidget } from "@/components/contact-widget" // Reusing your new widget
import { Mail, MapPin, GraduationCap, Sparkles, Download, Brain, Code2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  About Me
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Building Intelligence <br />
                  <span className="text-gradient">with Purpose</span>
                </h1>
              </div>

              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  I&apos;m a **Deep Learning Researcher** and **ML Engineer** currently pursuing my B.Tech 
                  at Thapar Institute of Engineering and Technology. My work is focused on the 
                  intersection of **Natural Language Processing** and **Multi-modal Systems**, 
                  where I strive to build AI that doesn&apos;t just predict, but understands.
                </p>
                <p>
                  From architecting hybrid search engines using **BM25 and Semantic Reranking** to developing medical diagnostic tools like **DermIntel**, I treat every project 
                  as an opportunity to solve a real-world friction point. I believe that the 
                  strongest models are those built on clean data and robust engineering.
                </p>
                <p>
                  Outside of training models on my **M3 Mac**, I focus on academic excellence 
                  as I prepare for **GATE 2027**, ensuring my practical skills are backed by a 
                  deep understanding of fundamental Computer Science.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                {/* Integrated your new Widget here */}
                <div className="w-full sm:w-auto min-w-[200px]">
                  <ContactWidget 
                    email="samarth.ai.official@gmail.com" 
                    label="Get in Touch" 
                    className="py-4"
                  />
                </div>
                
                <a 
                  href="/Samarth_Pandey_Resume.pdf" 
                  download 
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-card group"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="rounded-2xl border border-border/50 bg-card p-7 space-y-5 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">B.Tech (Expected 2027)</p>
                      <p className="text-xs text-muted-foreground">TIET, Punjab</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Patiala, India</p>
                      <p className="text-xs text-muted-foreground">Open to Relocation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Current Status</p>
                      <p className="text-xs text-muted-foreground">Seeking Internships</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages Card */}
              <div className="rounded-2xl border border-border/50 bg-card p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-5">Languages</h3>
                <div className="space-y-4">
                  {[
                    { lang: "English", level: "Professional", percent: 95 },
                    { lang: "Hindi", level: "Native", percent: 100 },
                    { lang: "German", level: "Learning (A2)", percent: 30 },
                  ].map((item) => (
                    <div key={item.lang} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground font-medium">{item.lang}</span>
                        <span className="text-primary font-mono text-xs">{item.level}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-700"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components from your sub-files */}
      <JourneyTimeline />
      <SkillsSection />
      <GoalsSection />
    </div>
  )
}
