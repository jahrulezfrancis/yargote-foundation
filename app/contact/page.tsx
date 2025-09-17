import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Send, User, MessageSquare } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@yargotefoundation.org", "programs@yargotefoundation.org"],
    description: "Send us an email and we'll respond within 24 hours",
    color: "bg-blue-50 text-blue-600 border-blue-200",
    iconBg: "bg-blue-100"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+234 (0) 806 536 1349", "+234 (0) 803 123 4568"],
    description: "Speak with our team during business hours",
    color: "bg-green-50 text-green-600 border-green-200",
    iconBg: "bg-green-100"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["House 59 Zone C", " Apo Resettlement, FCT Abuja"],
    description: "Stop by our office for an in-person meeting",
    color: "bg-orange-50 text-orange-600 border-orange-200",
    iconBg: "bg-orange-100"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    description: "When you can reach us by phone or visit our office",
    color: "bg-purple-50 text-purple-600 border-purple-200",
    iconBg: "bg-purple-100"
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-blue-400" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
]

const quickContacts = [
  {
    title: "General Information",
    email: "info@yargotefoundation.org",
    description: "For general inquiries about our foundation"
  },
  {
    title: "Volunteer Opportunities",
    email: "volunteer@yargotefoundation.org",
    description: "Join our team of dedicated volunteers"
  },
  {
    title: "Program Information",
    email: "programs@yargotefoundation.org",
    description: "Learn about our programs and how to participate"
  },
  {
    title: "Media Inquiries",
    email: "media@yargotefoundation.org",
    description: "Press releases and media partnerships"
  },
]


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('/boys-playing-sports-together.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 px-4 py-2">
                Contact Us
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-balance text-white leading-tight">
                Get in <span className="text-blue-400">Touch</span>
              </h1>
              <p className="text-xl text-white/90 text-pretty leading-relaxed max-w-3xl mx-auto">
                Have questions about our programs? Want to volunteer or partner with us? We'd love to hear from you and
                explore how we can work together to empower young men in our communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                  <Phone className="w-6 h-6 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 bg-white relative -mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className={`text-center p-6 shadow-lg border-0 ${info.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  <CardContent className="space-y-4 p-0">
                    <div className={`w-16 h-16 ${info.iconBg} rounded-full flex items-center justify-center mx-auto shadow-sm`}>
                      <info.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="font-medium text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm opacity-80">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content - Form and Info */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              <div className="lg:col-span-2 space-y-6">
                {/* Map Placeholder */}
                <Card className="shadow-lg border-0">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                      {/* Map background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-transparent to-transparent"></div>
                      </div>
                      <div className="text-center space-y-3 z-10">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <MapPin className="w-8 h-8 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700">Our Location</p>
                          <p className="text-sm text-gray-600">House 59 Zone C, Apo Resettlement</p>
                          <p className="text-sm text-gray-600"> FCT Abuja</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <Button variant="outline" className="w-full">
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Options */}
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">Quick Contact</h3>
                      <p className="text-gray-600 text-sm">Choose the right department for your inquiry</p>
                    </div>
                    <div className="space-y-4">
                      {quickContacts.map((contact, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                          <h4 className="font-semibold text-gray-900 text-sm">{contact.title}</h4>
                          <p className="text-blue-600 text-sm font-medium">{contact.email}</p>
                          <p className="text-gray-500 text-xs mt-1">{contact.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="shadow-lg border-0 bg-red-50 border-red-200">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-bold text-red-900">Emergency Contact</h3>
                    </div>
                    <p className="text-red-800 text-sm leading-relaxed">
                      If you're experiencing a crisis or emergency situation, please contact the National Crisis Text
                      Line by texting HOME to 741741 or call 988 for the Suicide & Crisis Lifeline.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Follow Our Journey</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay connected with us on social media to see the latest updates, success stories, and ways you can get involved in our mission.
              </p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-2xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join us in our mission to empower young men and transform communities. Every conversation starts with a simple message.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              <Send className="w-4 h-4 mr-2" />
              Start the Conversation
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}