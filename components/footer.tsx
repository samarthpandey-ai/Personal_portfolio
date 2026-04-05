"use client"

import { Github, Linkedin, Mail, Twitter, Cpu, Heart, ArrowUpRight, Network, Briefcase, Zap } from "lucide-react"
import Link from "next/link"
import { ContactWidget } from "./contact-widget"

const socialLinks = [
  { href: "https://github.com/samarthpandey-ai", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "mailto:your.actual.email@gmail.com", icon: Mail, label: "Email" },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/about", label: "About" },
]

const quickLinks = [
  { 
    // UPDATE THIS: Use the exact filename of the PDF in your 'public' folder
    // For example: "/Samarth_Pandey_Resume.pdf"
    href: "/Samarth_Pandey_Resume.pdf", 
    label: "Resume" 
  },
  { href: "https://leetcode.com/samp123", label: "LeetCode" },
  { href: "#", label: "Google Scholar" },
  { href: "#", label: "HuggingFace" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-muted/30 backdrop-blur-md transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-sm transition-all group-hover:bg-primary/20 group-hover:scale-105">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground transition-colors leading-tight">Samarth Kr</span>
                <p className="text-sm font-bold text-primary tracking-tighter mt-[-2px]">Pandey</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">ML Engineer</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Engineering intelligent AI systems at the intersection of deep learning and NLP.
            </p>
            
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/50 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.2em] flex items-center gap-2">
              <Network className="h-3 w-3 text-primary" />
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Links Column - UPDATED FOR RESUME */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.2em] flex items-center gap-2">
              <Cpu className="h-3 w-3 text-primary" />
              Resources
            </h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                </a>
              ))}
            </nav>
          </div>

          {/* Availability Column */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.2em] flex items-center gap-2">
              <Briefcase className="h-3 w-3 text-primary" />
              Current Status
            </h3>
            
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <span className="relative flex h-3 w-3 mt-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground leading-tight">
                    Seeking Summer 2026 Internships
                  </p>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Currently in 6th sem of B.Tech. Open to ML & NLP roles.
                  </p>
                </div>
              </div>
            </div>

            <ContactWidget 
              email="your.actual.email@gmail.com" 
              label="Let's Talk" 
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Designed & Developed with <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" /> by Samarth Pandey
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
