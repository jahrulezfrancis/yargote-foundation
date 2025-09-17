import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ImpactSection } from "@/components/impact-section"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { FeaturedProjectSection } from "@/components/active-projects-section"
import { RecentImagesGallery } from "@/components/recent-images-gallery"
import { FadeInSection } from "@/components/fade-in-section"

export default function HomePage() {
  return (
    <div className="min-h-screen scroll-smooth">
      <main>
        <HeroSection />
        <FeaturesSection />
        <ImpactSection />

        <FadeInSection>
          <FeaturedProjectSection />
        </FadeInSection>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">Featured Events & Stories</h2>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                  Stay updated with our latest events and inspiring success stories from our community
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <FeaturedCarousel />
            </FadeInSection>
          </div>
        </section>

        <RecentImagesGallery />
      </main>
    </div>
  )
}
