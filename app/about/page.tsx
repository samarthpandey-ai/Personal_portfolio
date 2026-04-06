"use client"

import { useState } from "react"
import Image from "next/image"

import { ContactWidget } from "@/components/contact-widget"
import { TechStack } from "@/components/tech-stack" 
import { MapPin, GraduationCap, Sparkles, Download, Briefcase, Copy } from "lucide-react"

export default function AboutPage() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [isEmailPopupVisible, setIsEmailPopupVisible] = useState(false);
  const emailId = "samarth.ai.official@gmail.com";

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000); 
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleEmailClick = () => {
    setIsEmailPopupVisible(true);
    setTimeout(() => {
      setIsEmailPopupVisible(false);
    }, 5000);
  };

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
                  Engineering Models. <br />
                  <span className="text-gradient">Building Systems.</span>
                </h1>
              </div>

              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  I am a B.Tech student in Computer Science at{" "}
                  <span className="font-semibold text-foreground">
                    Thapar Institute of Engineering and Technology
                  </span>
                  , with a strong focus on{" "}
                  <span className="font-semibold text-foreground">Machine Learning</span>,{" "}
                  <span className="font-semibold text-foreground">Natural Language Processing</span>, 
                  and applied AI systems. I build software that combines modern machine learning principles 
                  with clean, reliable engineering practices.
                </p>

                <p>
                  I have worked on practical projects involving{" "}
                  <span className="font-semibold text-foreground">semantic search</span>,{" "}
                  <span className="font-semibold text-foreground">
                    medical recommendation systems
                  </span>
                  , and{" "}
                  <span className="font-semibold text-foreground">
                    intelligent research automation
                  </span>
                  . My work focuses on constructing robust data pipelines, model integration, 
                  and user interfaces that make AI systems usable and impactful in real-world scenarios.
                </p>

                <p>
                  Currently, I am deepening my foundation in{" "}
                  <span className="font-semibold text-foreground">
                    Data Structures, Algorithms</span>, and{" "}
                  <span className="font-semibold text-foreground">
                    Machine Learning fundamentals</span> while preparing for GATE 2027. I am actively seeking 
                    internship opportunities where I can apply my skills to real-world systems and grow alongside 
                    experienced engineers.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="w-full sm:w-auto min-w-[200px]">
                  <ContactWidget 
                    email={emailId} 
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

              {/* === SOCIAL LINKS SECTION === */}
              <div className="pt-10 mt-10 border-t border-border/30">
                <h4 className="text-xl font-semibold text-foreground mb-6 tracking-tight">Connect with me online</h4>
                <div className="flex flex-wrap gap-4 relative">
                  
                  <a 
                    href="https://github.com/samarthkrpandey" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border/50 bg-card text-sm font-medium text-foreground transition-all hover:bg-secondary/40 hover:border-border"
                  >
                    <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" className="h-4 w-4 dark:invert transition-transform hover:scale-110" />
                    GitHub
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/samarthkrpandey" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border/50 bg-card text-sm font-medium text-foreground transition-all hover:bg-blue-50/50 dark:hover:bg-blue-950/30 hover:border-blue-500/30"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform hover:scale-110" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>

                  <a 
                    href="https://twitter.com/samarthkrpandey" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border/50 bg-card text-sm font-medium text-foreground transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-400/30"
                  >
                    <img src="https://cdn.simpleicons.org/x/000000" alt="X" className="h-3.5 w-3.5 dark:invert transition-transform hover:scale-110" />
                    X (formerly Twitter)
                  </a>

                  <button 
                    onClick={handleEmailClick}
                    className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border/50 bg-card text-sm font-medium text-foreground transition-all hover:bg-red-50 dark:hover:bg-red-950/20 hover:border-red-500/30"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="h-3.5 w-3.5 object-contain transition-transform hover:scale-110" />
                    Email
                  </button>
                  
                  {isEmailPopupVisible && (
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-6 py-5 min-w-[320px] rounded-2xl border border-border/80 bg-background/95 shadow-2xl backdrop-blur-md z-50 animate-in fade-in slide-in-from-left-2 duration-300">
                      <p className="text-xs text-muted-foreground mb-2">My official email</p>
                      <p className="text-sm font-semibold text-foreground font-mono mb-4 break-all">{emailId}</p>
                      <div className="flex justify-end">
                        <button 
                          onClick={() => copyToClipboard(emailId)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${emailCopied ? 'bg-green-500/15 text-green-700 dark:text-green-300' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
                        >
                          <Copy className="h-3.5 w-3.5" />
                          {emailCopied ? 'Copied!' : 'Copy to Clipboard'}
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
              {/* === END SOCIAL LINKS SECTION === */}

            </div>

            {/* Sidebar Info (Right Side) */}
            <div className="space-y-6">
              
              {/* Profile Image Card */}
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm aspect-square sm:aspect-[4/3] group">
                <Image 
                  src="/samarth-profile_pic.jpg" 
                  alt="Samarth Pandey"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: 'center 20%' }} 
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />
              </div>

              {/* Quick Info Card */}
              <div className="rounded-2xl border border-border/50 bg-card p-7 space-y-4 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-2">Quick Info</h3>
                
                <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">B.Tech (Expected 2027)</p>
                    <p className="text-xs text-muted-foreground">TIET, Patiala, Punjab</p>
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
            </div> {/* Sidebar closing */}
          </div> {/* Grid closing */}
        </div> {/* Container closing */}
      </section>

      {/* === TECH STACK === */}
      <TechStack />
      
    </div>
  )
}
