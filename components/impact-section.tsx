import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"

export function ImpactSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <FadeInSection>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">The Empower the Boy Child Project</h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Our flagship initiative is dedicated to restoring hope, dignity, and purpose to boys in underserved
                  communities by equipping them with the values, skills, and opportunities they need to thrive.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Approach</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mentorship programs connecting boys with positive role models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Life skills training to build confidence and resilience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Educational support and scholarship opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Community engagement and family support programs</span>
                  </li>
                </ul>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                <Link href="/programs" className="flex items-center gap-2">
                  Learn More About Our Programs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </FadeInSection>

          {/* Image */}
          <FadeInSection delay={200}>
            <div className="relative">
              <Card className="overflow-hidden hover:scale-105 transition-transform duration-500 p-2">
                <CardContent className="p-0">
                  <img
                    src="https://i.ibb.co/zhSM4X3F/happy-boys.jpg?height=400&width=600&text=Boys+in+life+skills+workshop"
                    alt="Boys participating in life skills workshop"
                    className="w-full h-80 object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
