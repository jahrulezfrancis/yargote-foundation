import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, Users, Handshake, ArrowRight, Quote, Mail, Target, Eye, CheckCircle2 } from "lucide-react"


export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = () => {
    if (!email) return
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")
      
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-emerald-200 shadow-xl">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Stay Connected</h2>
                <p className="text-gray-600 leading-relaxed">
                  Subscribe to our newsletter for the latest updates, success stories, and upcoming events
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                />
                <Button 
                  onClick={handleSubmit}
                  disabled={isSubmitting || isSuccess || !email}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
                >
                  {isSuccess ? "Subscribed!" : isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>

              <p className="text-sm text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}