"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Network, Mail, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactWidget } from "./contact-widget"

const navItems = [
  { href: "/", label: "Home" }, 
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/about", label: "About" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "border-b border-border/40 bg-background/80 backdrop-blur-2xl shadow-xl shadow-background/20" 
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo Section */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 transition-all hover:opacity-90"
        >
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 border border-primary/40 transition-all group-hover:border-primary/60 group-hover:shadow-lg group-hover:shadow-primary/25">
            <Network className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground leading-none">Samarth</span>
            <span className="text-sm font-bold tracking-tight text-primary leading-none">.ai</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-1 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-1.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  pathname === item.href
                    ? "bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground shadow-lg shadow-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/80"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />

          {/* Desktop Widget */}
          <ContactWidget 
            email="samarth.ai.official@gmail.com" // Update this
            label="Let's Connect" 
            className="hidden md:flex w-auto py-2.5 px-6 text-sm" 
          />

          {/* Mobile Menu Trigger */}
          <button
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl border transition-all md:hidden",
              mobileMenuOpen 
                ? "border-primary/50 bg-primary/15 text-primary" 
                : "border-border/60 bg-card/50 text-foreground hover:bg-card hover:border-primary/40"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={cn(
          "md:hidden overflow-hidden transition-all duration-400 ease-out",
          mobileMenuOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-2xl px-6 py-6 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-5 py-4 text-sm font-medium transition-all",
                pathname === item.href
                  ? "bg-gradient-to-r from-primary/15 to-cyan-400/10 text-primary border border-primary/30"
                  : "text-muted-foreground hover:bg-card hover:text-foreground border border-transparent"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
              {pathname === item.href && (
                <span className="h-2 w-2 rounded-full bg-primary" />
              )}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-border/40">
            {/* Mobile Widget */}
            <ContactWidget 
              email="samarth.ai.official@gmail.com" // Update this
              label="Let's Connect" 
              className="flex w-full py-4 text-sm" 
            />
          </div>
        </div>
      </div>
    </header>
  )
}
