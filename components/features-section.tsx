import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Megaphone, Building } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"

const features = [
  {
    icon: Users,
    title: "Mentorship Programs",
    description:
      "Connecting boys with positive role models who guide them through life challenges and help them develop strong character and leadership skills.",
  },
  {
    icon: GraduationCap,
    title: "Educational Support",
    description:
      "Providing academic assistance, scholarships, and educational resources to ensure boys have access to quality learning opportunities.",
  },
  {
    icon: Megaphone,
    title: "Advocacy & Awareness",
    description:
      "Raising awareness about the unique challenges facing boys and advocating for policies that support their development and wellbeing.",
  },
  {
    icon: Building,
    title: "Community Engagement",
    description:
      "Building strong community networks that support boys and their families while creating lasting positive change in neighborhoods.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">How We Make a Difference</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Our comprehensive approach addresses the unique challenges facing boys in underserved communities
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <Card className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
