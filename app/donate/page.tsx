import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { DonationForm } from "@/components/donation-form"
import { Heart, Users, GraduationCap, Building, CheckCircle } from "lucide-react"

const impactStories = [
  {
    amount: 25,
    impact: "Provides school supplies for one boy for a month",
    icon: GraduationCap,
  },
  {
    amount: 50,
    impact: "Funds a mentorship session for 4 boys",
    icon: Users,
  },
  {
    amount: 100,
    impact: "Sponsors a life skills workshop for 8 boys",
    icon: Building,
  },
  {
    amount: 250,
    impact: "Provides educational materials for 10 boys for a semester",
    icon: GraduationCap,
  },
  {
    amount: 500,
    impact: "Supports comprehensive mentorship for 5 boys for a month",
    icon: Heart,
  },
]

const donationBenefits = [
  "100% of your donation goes directly to programs",
  "Tax-deductible receipt provided immediately",
  "Regular updates on program impact",
  "Invitation to exclusive donor events",
  "Recognition in our annual report (unless anonymous)",
]

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-br from-background to-card py-24 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/graduation-ceremony-for-program-participants.jpg')" }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                Make a Donation
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance text-white">
                Transform Lives with Your Generosity
              </h1>
              <p className="text-xl text-white/90 text-pretty leading-relaxed max-w-3xl mx-auto">
                Every donation, no matter the size, creates ripple effects of positive change in the lives of young men
                and their communities. Join us in building brighter futures.
              </p>
            </div>
          </div>
        </section>

        {/* Why Donate Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Your Donation Matters</h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Boys in underserved communities face unique challenges that can derail their futures. Your support
                  provides the mentorship, education, and opportunities they need to overcome obstacles and reach their
                  full potential.
                </p>
                <div className="space-y-4">
                  {donationBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=600&text=Boys+in+mentorship+program"
                  alt="Boys participating in mentorship program"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Your Impact in Action</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                See exactly how your donation creates meaningful change in the lives of young men
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {impactStories.map((story, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <story.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-accent">${story.amount}</div>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{story.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Make Your Donation Today</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Choose your donation amount and help us continue our mission of empowering young men
              </p>
            </div>

            <DonationForm />
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Other Ways to Support Us</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                There are many ways to make a difference beyond monetary donations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Volunteer Your Time</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    Become a mentor or volunteer at our events and programs to directly impact young lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <Building className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Corporate Partnership</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    Partner with us to create employee volunteer opportunities and corporate giving programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">Spread the Word</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    Share our mission with friends and family to help us reach more young men who need support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
