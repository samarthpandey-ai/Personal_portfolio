"use client"

import { JourneyTimeline } from "@/components/journey-timeline"
import { SkillsSection } from "@/components/skills-section"
import { GoalsSection } from "@/components/goals-section"
import { ContactWidget } from "@/components/contact-widget"
import { Mail, MapPin, GraduationCap, Sparkles, Download, Brain, Code2, Briefcase } from "lucide-react"

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
            
            {/* Main Content (Left Side) */}
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
                  I am a B.Tech student in Computer Science at Thapar Institute of Engineering and Technology, 
                  focused on Machine Learning, Natural Language Processing, and applied AI systems.
                  My work centers on building practical solutions that combine solid engineering with modern machine learning techniques.
                </p>
                <p>
                 I have developed projects involving semantic search, medical recommendation systems, and intelligent research automation. 
                  These projects emphasize clean architecture, reproducible workflows, and real-world usability rather than experimental prototypes.
                </p>
                <p>
                  Currently, I am strengthening my foundation in Data Structures, Algorithms, and Machine Learning
                  fundamentals while preparing for GATE 2027. I am actively seeking internship opportunities where
                  I can contribute to real systems and learn from experienced engineers.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
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

            {/* Sidebar Info (Right Side) */}
            <div className="space-y-6">
              
              {/* Profile Image Card (Classic Photo Look) */}
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm aspect-square sm:aspect-[4/3] group">
                <img 
                  src="/samarth-profile_pic.jpg" /* Update this if your file is named differently in the public folder! */
                  alt="Samarth Pandey"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: 'center 20%' }} 
                />
                
                {/* Subtle gradient overlay to blend the bottom edge smoothly */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />
              </div>

              {/* Quick Info Card */}
              <div className="rounded-2xl border border-border/50 bg-card p-7 space-y-4 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-2">Quick Info</h3>
                
                {/* Education */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">B.Tech (Expected 2027)</p>
                    <p className="text-xs text-muted-foreground">TIET, Patiala, Punjab</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Patiala, India</p>
                    <p className="text-xs text-muted-foreground">Open to Relocation</p>
                  </div>
                </div>

                {/* Pulsing Status Indicator */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <Briefcase className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-foreground">Status</p>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    </div>
                    <p className="text-xs text-emerald-500 font-medium tracking-tight">Available for Internships</p>
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

      <JourneyTimeline />
      <SkillsSection />
      <GoalsSection />
    </div>
  )
}
