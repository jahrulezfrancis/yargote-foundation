"use client"

import { Badge } from "@/components/ui/badge"
import { BlogCard } from "@/components/blog-card"
import { mockBlogPosts } from "@/lib/mock-data"
import { BookOpen, Users, Heart, TrendingUp, PenTool, Calendar } from "lucide-react"

export default function BlogPage() {
  const featuredPost = mockBlogPosts[0]
  const otherPosts = mockBlogPosts.slice(1)

  return (
    <div className="min-h-screen">
      <main>
        {/* Enhanced Hero Section with Animations */}
        <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-12 md:py-16 overflow-hidden">
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
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                {/* Main content with staggered animations */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Animated badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-emerald-200 shadow-sm animate-slideInFromLeft">
                    <BookOpen className="w-4 h-4 text-emerald-500 animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">Stories & Updates</span>
                  </div>

                  {/* Animated title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight animate-slideInFromLeft" style={{ animationDelay: '0.2s' }}>
                    Impact Stories and
                    <span className="block text-emerald-600 animate-slideInFromRight" style={{ animationDelay: '0.4s' }}>
                      Community News
                    </span>
                  </h1>

                  {/* Animated description */}
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl animate-slideInFromLeft" style={{ animationDelay: '0.6s' }}>
                    Read inspiring success stories, program updates, and community news that showcase the transformative
                    power of mentorship and support in our communities.
                  </p>

                  {/* Animated content categories */}
                  <div className="flex flex-wrap items-center gap-6 pt-2 animate-slideInFromLeft" style={{ animationDelay: '0.8s' }}>
                    <div className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer group">
                      <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">Success <span className="font-semibold text-gray-900">Stories</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer group">
                      <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">Program <span className="font-semibold text-gray-900">Updates</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer group">
                      <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">Community <span className="font-semibold text-gray-900">News</span></span>
                    </div>
                  </div>

                  {/* Animated action buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 animate-slideInFromLeft" style={{ animationDelay: '1s' }}>
                    <button className="group px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <span className="flex items-center gap-2">
                        Read Stories
                        <BookOpen className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      </span>
                    </button>
                    <button className="group px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transform hover:-translate-y-1">
                      <span className="flex items-center gap-2">
                        Share Your Story
                        <PenTool className="w-4 h-4 group-hover:animate-pulse" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Animated stats and blog info */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Main blog stats card with animation */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 shadow-xl animate-slideInFromRight transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-emerald-500 animate-pulse" />
                      Blog Statistics
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Published Stories</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 group-hover:scale-110 transition-transform">
                          {mockBlogPosts.length}
                        </div>
                      </div>

                      <div className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                          <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Success Stories</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 group-hover:scale-110 transition-transform">
                          {Math.floor(mockBlogPosts.length * 0.6)}
                        </div>
                      </div>

                      <div className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-500"></div>
                          <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Monthly Readers</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 group-hover:scale-110 transition-transform">2.5K+</div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500 mb-2">Reading Engagement</div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">85%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Featured post preview card with animation */}
                  <div className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white rounded-2xl p-6 shadow-xl animate-slideInFromRight hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 animate-pulse" />
                      </div>
                      <h4 className="text-lg font-semibold">Featured Story</h4>
                    </div>

                    {featuredPost && (
                      <div className="space-y-2">
                        <p className="font-medium text-emerald-100 line-clamp-2">{featuredPost.title}</p>
                        <p className="text-sm text-emerald-200">
                          By {featuredPost.author} • {new Date(featuredPost.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <p className="text-sm text-emerald-100 line-clamp-2">{featuredPost.excerpt}</p>
                      </div>
                    )}

                    <button className="mt-4 text-sm text-emerald-100 hover:text-white font-medium flex items-center gap-2 transition-colors group">
                      Read Full Story
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Featured Post */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Featured Story</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Transformative Impact</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Discover how our programs are changing lives and building stronger communities
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-slideInFromLeft">
              <div className="transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                <BlogCard post={featuredPost} />
              </div>
            </div>
          </div>
        </section>

        {/* Animated Other Posts */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Latest Updates</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">More Stories</h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
                Discover more inspiring stories and important updates from our community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fadeInUp hover:scale-105 transition-transform duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>

            {/* Load more button with animation */}
            <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <button className="group px-8 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-700 hover:text-emerald-700 font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  Load More Stories
                  <TrendingUp className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
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