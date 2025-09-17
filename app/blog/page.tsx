import { Badge } from "@/components/ui/badge"
import { BlogCard } from "@/components/blog-card"
import { mockBlogPosts } from "@/lib/mock-data"

export default function BlogPage() {
  const featuredPost = mockBlogPosts[0]
  const otherPosts = mockBlogPosts.slice(1)

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-br from-background to-card py-24 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/boys-reading-books-in-library.jpg')" }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                Stories & Updates
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance text-white">
                Impact Stories and Community News
              </h1>
              <p className="text-xl text-white/90 text-pretty leading-relaxed max-w-3xl mx-auto">
                Read inspiring success stories, program updates, and community news that showcase the transformative
                power of mentorship and support.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Story</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <BlogCard post={featuredPost} />
            </div>
          </div>
        </section>

        {/* Other Posts */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Latest Stories</h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
                Discover more inspiring stories and important updates from our community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
