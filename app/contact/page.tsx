"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Heart, BookOpen, MessageCircle } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { WhatsappIcon } from "next-share"
import Link from "next/link"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["yargotefoundation@gmail.com"],
    description: "Send us an email and we'll respond within 24 hours",
    link: "mailto:yargotefoundation@gmail.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+234 (0) 806 536 1349"],
    description: "Speak with our team during business hours",
    link: "tel:+2348065361349"
  },

  {
    icon: MapPin,
    title: "Visit Us",
    details: ["House 59 Zone C", " Apo Resettlement, FCT Abuja"],
    description: "Stop by our office for an in-person meeting"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    description: "When you can reach us by phone or visit our office"
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/yargote_f88015", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const quickContacts = [
  {
    title: "General Information",
    email: "yargotefoundation@gmail.com",
    description: "For general inquiries about our foundation"
  },
  {
    title: "Volunteer Opportunities",
    email: "volunteer@theyargotefoundation.org",
    description: "Join our team of dedicated volunteers"
  },
]

const ContactFormWrapper = () => {
  return (
    <div className="animate-slideInFromLeft contact-form">
      <ContactForm />
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 py-16 md:py-20 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-full animate-pulse -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full animate-pulse delay-1000 translate-y-1/3 -translate-x-1/3" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-50/20 to-emerald-100/20 rounded-full animate-pulse delay-500 -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-emerald-300 rounded-full animate-bounce" />
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-bounce delay-300" />
          <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-700" />

          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-emerald-200 shadow-sm animate-slideInFromLeft">
                <Mail className="w-4 h-4 text-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Get in Touch</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight animate-slideInFromLeft" style={{ animationDelay: '0.2s' }}>
                Let's Connect and
                <span className="block text-emerald-600 animate-slideInFromRight" style={{ animationDelay: '0.4s' }}>
                  Make a Difference
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-slideInFromLeft" style={{ animationDelay: '0.6s' }}>
                Have questions about our programs? Want to volunteer or partner with us? We'd love to hear from you and
                explore how we can work together to empower young men in our communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 md:w-[200px]"
                  asChild
                >
                  <a href="mailto:yargotefoundation@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 md:w-[200px] hover:text-white"
                  asChild
                >
                  <a href="tel:+2348065361349">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">Contact Information</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">How to Reach Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Multiple ways to connect with our team and get the support you need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="text-center p-6 shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="space-y-4 p-0">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto shadow-sm border border-emerald-100">
                      <info.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="font-medium text-sm text-gray-700">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{info.description}</p>
                    {info.link && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white mt-2"
                      >
                        <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                          Contact Now
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content - Form and Info */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <ContactFormWrapper />
              </div>

              <div className="lg:col-span-2 space-y-6 animate-slideInFromRight">
                {/* Quick Contact Options */}
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 text-sm">
                        <Heart className="w-3 h-3" />
                        <span className="font-medium">Quick Contact</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Choose Your Department</h3>
                      <p className="text-gray-600 text-sm">Get connected with the right team member</p>
                    </div>
                    <div className="space-y-3">
                      {quickContacts.map((contact, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer border border-gray-100 hover:border-emerald-200">
                          <h4 className="font-semibold text-gray-900 text-sm">{contact.title}</h4>
                          <p className="text-emerald-600 text-sm font-medium">{contact.email}</p>
                          <p className="text-gray-500 text-xs mt-1">{contact.description}</p>
                        </div>
                      ))}

                      <div className="">
                        <div className="p-4 bg-gray-50 rounded-lg flex items-center gap-2 hover:bg-emerald-50 transition-colors cursor-pointer border border-gray-100 hover:border-emerald-200">
                          <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center shadow-sm border border-emerald-100">
                            <WhatsappIcon className="w-8 h-8 text-emerald-600" />
                          </div>

                          <div>
                            <p className="text-gray-500 text-sm mt-1">Chat with us on WhatsApp for quick responses</p>
                            <Button
                              asChild
                              size="sm"
                              className="bg-emerald-600 hover:bg-emerald-700 text-white mt-2"
                            >
                              <a href={"https://wa.me/2348065361349"} target={'_blank'} rel={'noopener noreferrer'}>
                                Message Now
                              </a>
                            </Button>
                          </div>

                        </div>
                      </div>
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

        {/* Map Placeholder */}
        <Card className="shadow-lg border-0 my-16">
          <CardContent className="p-0">
            <div className="h-100 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-t-lg flex items-center justify-center relative overflow-hidden">
              {/* <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent"></div>
              </div> */}
              <div className="text-center w-full h-full space-y-3 z-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.949863713974!2d7.497096074144363!3d8.976760968089247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0db594ca0017%3A0x9ae4c3d302e204c9!2sAPO%20RESETTLEMENT%20AREA!5e0!3m2!1sen!2sng!4v1759860099206!5m2!1sen!2sng" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="p-4 bg-white flex justify-center">
              <Link href={"https://maps.app.goo.gl/DXw2LDrJeThEoUpWA"} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-auto border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Social Media Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-6 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Stay Connected</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Follow Our Journey</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay connected with us on social media to see the latest updates, success stories, and ways you can get involved in our mission.
              </p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-emerald-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Custom CSS for animations and theme integration */}
      <style jsx global>{`
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

        /* Theme integration for ContactForm component */
        .contact-form input:focus,
        .contact-form textarea:focus,
        .contact-form [role="combobox"]:focus {
          border-color: rgb(5 150 105) !important;
          box-shadow: 0 0 0 2px rgb(5 150 105 / 0.2) !important;
        }

        .contact-form button[type="submit"] {
          background-color: rgb(5 150 105) !important;
        }

        .contact-form button[type="submit"]:hover {
          background-color: rgb(4 120 87) !important;
        }
      `}</style>
    </div>
  )
}