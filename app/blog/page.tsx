"use client"

import { Badge } from "@/components/ui/badge"
import { BlogCard } from "@/components/blog-card"
import { mockBlogPosts } from "@/lib/mock-data"
import { BookOpen, Heart, Calendar, TrendingUp } from "lucide-react"
import { VideoTestimonialsSection } from "@/components/sections/video-stories-section"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const featuredPost = mockBlogPosts[0]
  const [numberOfPosts, setNumberOfPosts] = useState(3);
  const otherPosts = mockBlogPosts.slice(1)

  const loadMorePosts = () => {
    setNumberOfPosts((prev) => prev + 3);
  }

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Simplified Hero Section with Animations */}
        <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16 md:py-20 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-full animate-pulse -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-100/60 to-transparent rounded-full animate-pulse delay-1000 translate-y-1/3 -translate-x-1/3" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-purple-50/40 to-pink-50/40 rounded-full animate-pulse delay-500 -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Floating story-themed elements */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-emerald-300 rounded-full animate-bounce" />
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-300 rounded-full animate-bounce delay-300" />
          <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-700" />

          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              {/* Animated badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-emerald-200 shadow-sm animate-slideInFromLeft">
                <BookOpen className="w-4 h-4 text-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Stories & Updates</span>
              </div>

              {/* Animated title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight animate-slideInFromLeft" style={{ animationDelay: '0.2s' }}>
                Impact Stories and
                <span className="block text-emerald-600 animate-slideInFromRight" style={{ animationDelay: '0.4s' }}>
                  Community News
                </span>
              </h1>

              {/* Animated description */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-slideInFromLeft" style={{ animationDelay: '0.6s' }}>
                Read inspiring success stories, program updates, and community news that showcase the transformative
                power of mentorship and support in our communities.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12 md:mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Featured Story</span>
              </div>
            </div>

            <div className="max-w-5xl mx-auto animate-slideInFromLeft">
              <div className="transform hover:scale-[1.02] transition-transform duration-300 hover:shadow-2xl">
                <BlogCard post={featuredPost} />
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <VideoTestimonialsSection />
          </div>
        </section>

        {/* Other Posts Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12 md:mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Latest Updates</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">More Stories</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover more inspiring stories and important updates from our community
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {otherPosts.slice(0, numberOfPosts).map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fadeInUp hover:scale-[1.03] transition-transform duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>

            {/* Load more button */}
            <div className="text-center mt-12 md:mt-16 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <Button
                disabled={numberOfPosts >= otherPosts.length}
                style={{ cursor: numberOfPosts >= otherPosts.length ? "wait" : "pointer" }}
                onClick={loadMorePosts} className="group px-8 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  Load More Stories
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInFromLeft {
          from { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes slideInFromRight {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}