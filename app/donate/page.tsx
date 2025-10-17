"use client"

import DonationForm from "@/components/donation-form"
import ShareModal from "@/components/shareModal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useShareModal } from "@/hooks/use-share"
import scrollToSection from "@/utils/scrollTo"
import { Heart, Users, GraduationCap, CheckCircle, ArrowRight } from "lucide-react"
import { useState } from "react"

const impactLevels = [
  {
    amount: 10000,
    impact: "School supplies for one boy for a month",
    icon: GraduationCap,
  },
  {
    amount: 50000,
    impact: "Mentorship program for 5 boys",
    icon: Users,
  },
  {
    amount: 100000,
    impact: "Educational materials for 10 boys per semester",
    icon: GraduationCap,
  },
]

const keyBenefits = [
  "100% of donations go directly to programs",
  "Tax-deductible receipt provided",
  "Regular impact updates",
]

export default function DonatePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const { isShareModalOpen, openShareModal, closeShareModal } = useShareModal()

  const handleShareClick = () => {
    openShareModal({
      title: "Custom Title",
      description: "Custom description for this specific page"
    })
  }


  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50">
                Make a Difference
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Support Young Men,{" "}
                <span className="text-emerald-600">
                  Transform Communities
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Your donation provides mentorship, education, and opportunities that help young men
                in underserved communities reach their full potential.
              </p>

              <div className="pt-4">
                <button onClick={() => scrollToSection("donation-section")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Levels */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                Impact Calculator
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                See Your Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every donation creates meaningful change in young lives
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {impactLevels.map((level, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-lg border-gray-200 hover:border-emerald-200"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-emerald-200 transition-colors">
                      <level.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">
                      ₦{level.amount.toLocaleString()}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{level.impact}</p>
                    <div className={`transition-all ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                      <ArrowRight className="w-4 h-4 text-emerald-600 mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-20 bg-white donation-section">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-emerald-600 text-white">
                Give with Confidence
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Start Changing Lives Today
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your generosity fuels mentorship, education, and brighter futures for young men in need. Every contribution counts.
              </p>
            </div>

            <ShareModal
              isOpen={isShareModalOpen}
              onClose={closeShareModal}
            />

            <DonationForm />
          </div>
        </section>

        {/* Other Ways to Help */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">
                Other Ways to Support
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Volunteer</h3>
                  <p className="text-gray-600">
                    Become a mentor and directly impact young lives through our programs.
                  </p>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Learn More →
                  </button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Share Our Mission</h3>
                  <p className="text-gray-600">
                    Help us reach more young men by spreading the word about our work.
                  </p>
                  <button onClick={handleShareClick} className="text-emerald-600 hover:cursor-pointer hover:text-emerald-700 font-medium">
                    Share Now →
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}