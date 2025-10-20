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
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 780
      setIsMobile(mobile)
      if (!mobile && isOpen) {
        setIsOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

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
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Responsive sizing */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 flex-shrink-0"
          >
            <div className="relative w-28 h-12 sm:w-36 sm:h-16 lg:w-40 lg:h-20">
              <Image
                src="/yargote-logo.png"
                alt="Yargote Foundation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Shows above 780px */}
          {!isMobile && (
            <>
              <div className="flex items-center space-x-1 lg:space-x-2">
                {navItems.map((item) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-3 lg:px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition-all duration-200 relative group ${isActive
                        ? "text-white bg-gradient-to-br from-emerald-600 to-gray-900 shadow-md font-semibold scale-105"
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

              {/* Desktop Donate Button */}
              <div className="flex items-center">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-4 lg:px-6 py-2 hover-lift shadow-lg text-sm lg:text-base"
                >
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </div>
            </>
          )}

          {/* Mobile Menu Button - Shows below 780px */}
          {isMobile && (
            <button
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200 flex-shrink-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && isOpen && (
          <div className="animate-fade-in">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-background/95 backdrop-blur border-t border-border/50">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 relative ${isActive
                      ? "text-white bg-gradient-to-r from-emerald-600 to-emerald-800 shadow-md font-semibold"
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
              <div className="px-2 pt-3">
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg text-sm"
                >
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