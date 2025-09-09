import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Heart } from "lucide-react"
import Link from "next/link"
import { AnimatedCounter } from "@/components/animated-counter"
import { FadeInSection } from "@/components/fade-in-section"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-card py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <FadeInSection>
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
                  Empowering Boys to
                  <span className="text-accent"> Transform Communities</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Through mentorship, education, and advocacy, we shape boys into disciplined, responsible, and
                  visionary young men who rise above challenges and lead positive change.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 py-4">
                <div className="text-center">
                  <AnimatedCounter end={5000} suffix="+" />
                  <div className="text-sm text-muted-foreground">Boys Reached</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={200} suffix="+" />
                  <div className="text-sm text-muted-foreground">Mentors</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={10} suffix="+" />
                  <div className="text-sm text-muted-foreground">Communities</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                >
                  <Link href="/donate" className="flex items-center gap-2">
                    Support Our Mission
                    <Heart className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Link href="/programs" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInSection>

          {/* Image */}
          <FadeInSection delay={200}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-card hover:scale-105 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=600&width=600&text=Boys+in+mentorship+program"
                  alt="Boys participating in mentorship program"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-full shadow-lg animate-bounce">
                <Users className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-full shadow-lg animate-pulse">
                <Target className="w-6 h-6" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
