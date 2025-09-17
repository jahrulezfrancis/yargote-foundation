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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Featured Project</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Make a direct impact today by supporting our current initiative that's transforming young lives in our community
          </p>
        </div>
        <Card className="overflow-hidden border-0 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-full min-h-[400px]">
              <img
                src={featuredProject.image || "/placeholder.svg"}
                alt={featuredProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-primary uppercase tracking-wide">
                    {featuredProject.category}
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                    {featuredProject.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {featuredProject.shortDescription}
                  </p>
                </div>

                {/* Progress Section */}
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-2xl font-bold">
                      {formatCurrency(featuredProject.raisedAmount)}
                    </span>
                    <span className="text-muted-foreground">
                      of {formatCurrency(featuredProject.targetAmount)}
                    </span>
                  </div>
                  
                  <Progress value={progressPercentage} className="h-3" />
                  
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{progressPercentage.toFixed(0)}% funded</span>
                    <span>{featuredProject.participantsServed} boys empowered</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button asChild size="lg" className="flex-1">
                    <Link href={`/donate?project=${featuredProject.id}`}>
                      <Heart className="w-5 h-5 mr-2" />
                      Support This Project
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
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