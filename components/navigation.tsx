"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Stories" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "glass-effect shadow-lg"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        } border-b border-border/50`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <div className="relative w-12 h-12">
              <Image src="/yargote-logo.png" alt="Yargote Foundation" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary">Yargote</span>
              <span className="text-xs text-foreground font-medium">FOUNDATION</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 relative group ${isActive
                      ? "text-white bg-primary shadow-md font-semibold scale-105"
                      : "text-foreground hover:text-primary hover:bg-primary/8 hover:scale-105"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rounded-full shadow-sm" />
                  )}
                  {!isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-200 group-hover:w-4" />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 hover-lift shadow-lg"
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-background/95 backdrop-blur border-t border-border/50">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 relative ${isActive
                        ? "text-white bg-primary shadow-md font-semibold"
                        : "text-foreground hover:text-primary hover:bg-primary/8"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-secondary rounded-full" />
                    )}
                  </Link>
                )
              })}
              <div className="px-4 pt-4">
                <Button onClick={() => setIsOpen(false)} asChild className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg">
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}