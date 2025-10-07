import { Card, CardContent } from "@/components/ui/card"
import { Quote,  } from "lucide-react"



export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The mentorship program gave me direction when I felt lost. My mentor helped me believe in myself and showed me that my background doesn't define my future. I'm now in college pursuing engineering.",
      author: "Michael O.",
      role: "Program Beneficiary",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      quote: "Volunteering as a mentor has been one of the most rewarding experiences of my life. Watching these young men grow in confidence and achieve their goals reminds me why this work matters.",
      author: "James T.",
      role: "Volunteer Mentor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      quote: "As a parent, I've seen my son transform from a struggling teenager to a confident young man with goals and purpose. This foundation gave him the support and guidance he needed.",
      author: "Sarah M.",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Stories of Change</h2>
            <p className="text-xl text-gray-600 text-pretty max-w-2xl mx-auto leading-relaxed">
              Hear from the people whose lives have been touched by our programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-emerald-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8 space-y-6">
                  <Quote className="w-10 h-10 text-emerald-600 opacity-50" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-emerald-100">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}