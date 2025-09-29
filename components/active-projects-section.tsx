"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { mockProjects } from "@/lib/mock-data"
import { Heart } from "lucide-react"
import Link from "next/link"

export function FeaturedProjectSection() {
  // Get the first active project accepting donations
  const featuredProject = mockProjects
    .find((project) => project.status === "active" && project.acceptingDonations)

  if (!featuredProject) {
    return null
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100)
  }

  const progressPercentage = getProgressPercentage(featuredProject.raisedAmount, featuredProject.targetAmount)

  return (
    <section className="py-8 md:py-12 lg:py-16 xl:py-20 bg-background min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 w-full">
        {/* Section Header */}
        <div className="text-center space-y-3 md:space-y-4 lg:space-y-6 mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
            Featured Project
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Make a direct impact today by supporting our current initiative that's transforming young lives in our community
          </p>
        </div>

        <Card className="overflow-hidden border-0 shadow-xl max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 xl:grid-cols-3 gap-0 min-h-[500px] md:min-h-[600px] lg:min-h-[500px]">
            {/* Image Section - More flexible sizing */}
            <div className="lg:col-span-2 xl:col-span-1 relative">
              <img
                src={featuredProject.image || "/placeholder.svg"}
                alt={featuredProject.title}
                className="w-full h-64 md:h-80 lg:h-full object-cover"
              />
            </div>

            {/* Content Section - Takes remaining space */}
            <CardContent className="lg:col-span-3 xl:col-span-2 p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
              <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-2xl mx-auto lg:mx-0">
                <div className="space-y-2 md:space-y-3 lg:space-y-4">
                  <p className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">
                    {featuredProject.category}
                  </p>
                  <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                    {featuredProject.title}
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">
                    {featuredProject.shortDescription}
                  </p>
                </div>

                {/* Progress Section - More adaptive spacing */}
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                      {formatCurrency(featuredProject.raisedAmount)}
                    </span>
                    <span className="text-muted-foreground text-sm md:text-base">
                      of {formatCurrency(featuredProject.targetAmount)}
                    </span>
                  </div>

                  <Progress value={progressPercentage} className="h-2 md:h-3 lg:h-4" />

                  <div className="flex justify-between items-center text-xs md:text-sm text-muted-foreground flex-wrap gap-2">
                    <span className="font-medium">{progressPercentage.toFixed(0)}% funded</span>
                    <span>{featuredProject.participantsServed} boys empowered</span>
                  </div>
                </div>

                {/* Action Buttons - More responsive */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 lg:pt-6">
                  <Button size="lg" className="flex-1 sm:flex-initial h-12 md:h-14 text-base md:text-lg py-3.5">
                    <Link className="flex items-center" href={`/donate?project=${featuredProject.id}`}>
                      <Heart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Support This Project
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1 sm:flex-initial hover:bg-emerald-700 sm:min-w-[160px] h-12 md:h-14 text-base md:text-lg py-3"
                  >
                    <Link href={`/programs#${featuredProject.id}`}>
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}