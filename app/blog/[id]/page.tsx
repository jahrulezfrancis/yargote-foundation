"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockBlogPost } from "@/lib/mock-data"
import { BlogCategory } from "@/lib/types"
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, Bookmark, Eye } from "lucide-react"
import { useState } from "react"


const categoryColors: Record<BlogCategory, string> = {
  "success-story": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "program-update": "bg-blue-100 text-blue-700 border-blue-200",
  "community-news": "bg-purple-100 text-purple-700 border-purple-200",
  "impact-report": "bg-orange-100 text-orange-700 border-orange-200",
}

const categoryLabels: Record<BlogCategory, string> = {
  "success-story": "Success Story",
  "program-update": "Program Update",
  "community-news": "Community News",
  "impact-report": "Impact Report",
}

export default function EnhancedBlogPostPage() {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(mockBlogPost.likes)

  const post = mockBlogPost

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  const handleShare = () => {
    navigator.share?.({
      title: post.title,
      text: post.title,
      url: window.location.href,
    }) || navigator.clipboard?.writeText(window.location.href)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            className="group hover:bg-slate-100 transition-all duration-300"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Stories
          </Button>
        </div>
      </nav>

      <main className="pb-20">
        {/* Hero Section with Parallax Effect */}
        <section className="relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
            <div className="max-w-4xl mx-auto text-white">
              <div className="space-y-8 animate-fade-in">
                {/* Category Badge */}
                <div className="inline-block">
                  <Badge className={`${categoryColors[post.category]} border text-sm font-medium px-4 py-2`}>
                    {categoryLabels[post.category]}
                  </Badge>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  {post.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    <span>{post.views.toLocaleString()} views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Action Bar */}
              <div className="flex items-center justify-between mb-12 p-6 bg-white rounded-2xl shadow-lg border border-slate-200/50 sticky top-24 z-40 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`group transition-all duration-300 ${
                      isLiked 
                        ? 'text-red-500 hover:text-red-600 bg-red-50' 
                        : 'text-slate-600 hover:text-red-500 hover:bg-red-50'
                    }`}
                    onClick={handleLike}
                  >
                    <Heart className={`w-5 h-5 mr-2 transition-all duration-300 ${
                      isLiked ? 'fill-current scale-110' : 'group-hover:scale-110'
                    }`} />
                    {likes}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className={`transition-all duration-300 ${
                      isBookmarked 
                        ? 'text-blue-500 hover:text-blue-600 bg-blue-50' 
                        : 'text-slate-600 hover:text-blue-500 hover:bg-blue-50'
                    }`}
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <Bookmark className={`w-5 h-5 transition-all duration-300 ${
                      isBookmarked ? 'fill-current' : ''
                    }`} />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-all duration-300"
                    onClick={handleShare}
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                <div className="text-sm text-slate-500">
                  {post.readTime} min read
                </div>
              </div>

              {/* Article Text */}
              <article className="prose prose-xl max-w-none">
                <div className="space-y-8">
                  {post.content.split("\n\n").map((paragraph, index) => (
                    <p 
                      key={index} 
                      className="text-slate-700 leading-relaxed text-lg"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </article>

              {/* Author Bio */}
              <div className="mt-16 p-8 bg-gradient-to-r from-slate-50 to-white rounded-3xl border border-slate-200/50 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{post.author}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Sarah is our Lead Program Coordinator with over 8 years of experience in educational outreach. 
                      She's passionate about sharing the transformative stories of our scholarship recipients and 
                      highlighting the impact of community-driven education initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-300 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Be Part of More Stories Like This
              </h2>
              <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
                Every donation, every share, every moment of support helps create more success stories. 
                Join us in transforming lives through education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Support Our Mission
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  Read More Stories
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}