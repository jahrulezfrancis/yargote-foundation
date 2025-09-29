"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Heart, 
  Users, 
  Clock, 
  MapPin, 
  Star,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Briefcase,
  Home,
  Utensils,
  Shield,
  Calendar,
  Award,
  Target,
  BookOpen,
  Handshake,
  Globe,
  Phone,
  Mail,
  Play,
  Quote,
  Camera,
  Coffee
} from "lucide-react"

const volunteerOpportunities = [
  {
    id: 1,
    title: "Education Mentor",
    category: "Education",
    description: "Help children with homework, reading, and academic support in our after-school programs.",
    location: "Victoria Island, Lagos",
    timeCommitment: "4 hours/week",
    schedule: "Mon-Fri, 3:00-7:00 PM",
    requirements: ["High school diploma", "Patience with children", "Basic computer skills"],
    skills: ["Teaching", "Communication", "Patience"],
    urgency: "High",
    spots: 8,
    filled: 5,
    icon: GraduationCap,
    image: "/api/placeholder/400/250",
    color: "blue"
  },
  {
    id: 2,
    title: "Meal Preparation Assistant",
    category: "Community Service",
    description: "Help prepare and serve nutritious meals for families in need at our community kitchen.",
    location: "Ikeja, Lagos",
    timeCommitment: "3 hours/week",
    schedule: "Weekends, 9:00 AM-12:00 PM",
    requirements: ["Food safety awareness", "Physical ability to stand", "Team player"],
    skills: ["Cooking", "Teamwork", "Organization"],
    urgency: "Medium",
    spots: 12,
    filled: 8,
    icon: Utensils,
    image: "/api/placeholder/400/250",
    color: "green"
  },
  {
    id: 3,
    title: "Job Skills Trainer",
    category: "Career Development",
    description: "Train adults in digital literacy, resume writing, and interview skills for better employment opportunities.",
    location: "Abuja, FCT",
    timeCommitment: "6 hours/week",
    schedule: "Tue & Thu, 6:00-9:00 PM",
    requirements: ["Professional experience", "Teaching ability", "Computer proficiency"],
    skills: ["Training", "Technology", "Leadership"],
    urgency: "High",
    spots: 4,
    filled: 2,
    icon: Briefcase,
    image: "/api/placeholder/400/250",
    color: "purple"
  },
  {
    id: 4,
    title: "Youth Sports Coach",
    category: "Recreation",
    description: "Coach football, basketball, or athletics for young people in our sports development program.",
    location: "Surulere, Lagos",
    timeCommitment: "5 hours/week",
    schedule: "Wed & Sat, 4:00-6:30 PM",
    requirements: ["Sports background", "Youth coaching experience", "First aid certification preferred"],
    skills: ["Sports", "Leadership", "Motivation"],
    urgency: "Medium",
    spots: 6,
    filled: 4,
    icon: Target,
    image: "/api/placeholder/400/250",
    color: "orange"
  },
  {
    id: 5,
    title: "Community Garden Manager",
    category: "Environment",
    description: "Manage our urban farming project, teaching sustainable agriculture to community members.",
    location: "Kano, Kano State",
    timeCommitment: "8 hours/week",
    schedule: "Flexible weekdays",
    requirements: ["Agricultural knowledge", "Project management", "Community engagement"],
    skills: ["Agriculture", "Management", "Teaching"],
    urgency: "Low",
    spots: 2,
    filled: 1,
    icon: Globe,
    image: "/api/placeholder/400/250",
    color: "emerald"
  },
  {
    id: 6,
    title: "Administrative Support",
    category: "Operations",
    description: "Assist with data entry, filing, phone calls, and general office tasks to keep our programs running smoothly.",
    location: "Remote/Office - Lagos",
    timeCommitment: "4 hours/week",
    schedule: "Flexible",
    requirements: ["Computer skills", "Attention to detail", "Reliability"],
    skills: ["Administration", "Communication", "Organization"],
    urgency: "Medium",
    spots: 10,
    filled: 6,
    icon: BookOpen,
    image: "/api/placeholder/400/250",
    color: "gray"
  }
]

const testimonials = [
  {
    name: "Adaeze Okafor",
    role: "Education Mentor",
    duration: "2 years",
    image: "/api/placeholder/80/80",
    quote: "Volunteering here has been one of the most rewarding experiences of my life. Seeing the children I mentor succeed in school and gain confidence has filled my heart with so much joy. It's amazing how much you can learn while teaching others.",
    rating: 5,
    location: "Lagos"
  },
  {
    name: "Ibrahim Mohammed",
    role: "Job Skills Trainer",
    duration: "1.5 years",
    image: "/api/placeholder/80/80",
    quote: "The impact we make on adults seeking better employment opportunities is incredible. I've helped over 50 people improve their computer skills and land better jobs. It's transformed not just their lives, but mine too.",
    rating: 5,
    location: "Abuja"
  },
  {
    name: "Grace Nwosu",
    role: "Community Kitchen Volunteer",
    duration: "8 months",
    image: "/api/placeholder/80/80",
    quote: "Every weekend, I help serve meals to families in need. The gratitude in their eyes and the sense of community we've built is beyond words. This work has given me a new perspective on what really matters in life.",
    rating: 5,
    location: "Lagos"
  },
  {
    name: "Samuel Adebayo",
    role: "Youth Sports Coach",
    duration: "3 years",
    image: "/api/placeholder/80/80",
    quote: "Coaching these young athletes has been incredible. I've watched shy kids become confident leaders, and seen the positive impact sports has on their academics and social skills. It's coaching that goes far beyond the field.",
    rating: 5,
    location: "Lagos"
  }
]

const impactStats = [
  { label: "Active Volunteers", value: "450+", icon: Users, color: "text-blue-600" },
  { label: "Hours Contributed", value: "15,000+", icon: Clock, color: "text-emerald-600" },
  { label: "People Helped", value: "8,500+", icon: Heart, color: "text-red-600" },
  { label: "Programs Supported", value: "25", icon: Target, color: "text-purple-600" }
]

const benefits = [
  {
    title: "Personal Growth",
    description: "Develop new skills, gain experience, and build confidence while making a difference.",
    icon: Award,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Professional Development",
    description: "Enhance your resume, network with professionals, and gain valuable work experience.",
    icon: Briefcase,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Community Connection",
    description: "Meet like-minded people, build lasting friendships, and strengthen community bonds.",
    icon: Handshake,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Meaningful Impact",
    description: "See the direct results of your efforts and know you're making a real difference.",
    icon: Heart,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Flexible Scheduling",
    description: "Choose opportunities that fit your schedule with flexible timing options.",
    icon: Calendar,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Training & Support",
    description: "Receive comprehensive training and ongoing support from our experienced team.",
    icon: Shield,
    color: "bg-green-50 text-green-600"
  }
]

const categories = ["All", "Education", "Community Service", "Career Development", "Recreation", "Environment", "Operations"]

const urgencyColors = {
  "High": "bg-red-100 text-red-800 border-red-200",
  "Medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Low": "bg-green-100 text-green-800 border-green-200"
}

const categoryColors = {
  "Education": "bg-blue-100 text-blue-800",
  "Community Service": "bg-emerald-100 text-emerald-800",
  "Career Development": "bg-purple-100 text-purple-800",
  "Recreation": "bg-orange-100 text-orange-800",
  "Environment": "bg-green-100 text-green-800",
  "Operations": "bg-gray-100 text-gray-800"
}

export default function VolunteerPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  const filteredOpportunities = volunteerOpportunities.filter(opp => 
    selectedCategory === "All" || opp.category === selectedCategory
  )

  const handleApplyNow = () => {
    setShowApplicationForm(true)
  }

  if (showApplicationForm) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in volunteering with us! Click the button below to start your application.
            </p>
            <button className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Start Application
            </button>
            <button 
              onClick={() => setShowApplicationForm(false)}
              className="ml-4 px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back to Opportunities
            </button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-10 h-10 text-emerald-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Volunteer With Us</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Join our community of passionate volunteers and help create positive change. Whether you have 
          a few hours a week or can commit to a regular schedule, there's a perfect opportunity waiting for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <button 
            onClick={handleApplyNow}
            className="px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Apply to Volunteer
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium flex items-center justify-center gap-2">
            <Play className="w-5 h-5" />
            Watch Our Story
          </button>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {impactStats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <div className={`w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Categories Filter */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect way to contribute your time and skills. Filter by category to discover opportunities that match your interests.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Volunteer Opportunities Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {filteredOpportunities.map((opportunity) => {
          const IconComponent = opportunity.icon
          const spotsLeft = opportunity.spots - opportunity.filled
          const progress = (opportunity.filled / opportunity.spots) * 100

          return (
            <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-r from-emerald-400 to-blue-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className={categoryColors[opportunity.category as keyof typeof categoryColors]}>
                      {opportunity.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${urgencyColors[opportunity.urgency as keyof typeof urgencyColors]} border`}>
                      {opportunity.urgency} Priority
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{opportunity.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{opportunity.description}</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      {opportunity.timeCommitment} • {opportunity.schedule}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Skills Needed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill, index) => (
                        <Badge key={index} className="bg-gray-100 text-gray-700 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Volunteers Needed</span>
                      <span className="font-medium text-gray-900">{opportunity.filled}/{opportunity.spots}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-600">
                      {spotsLeft} spots remaining
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button 
                      onClick={handleApplyNow}
                      className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                    >
                      Apply Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Benefits Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Volunteer With Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Volunteering offers incredible benefits for both you and the community. Here's what you can expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className={`w-16 h-16 rounded-full ${benefit.color} flex items-center justify-center mx-auto`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Volunteers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our amazing volunteers about their experiences and the impact they've made.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center gap-1 text-emerald-600 mb-4">
                  <Quote className="w-5 h-5" />
                </div>
                
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4 pt-4 border-t">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.duration} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="bg-emerald-50 rounded-2xl p-8 lg:p-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join hundreds of volunteers who are already making a difference in their communities. 
            The application process is simple, and we'll guide you every step of the way.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Apply Online</h3>
              <p className="text-gray-600 text-sm">Complete our simple application form with your interests and availability.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Get Matched</h3>
              <p className="text-gray-600 text-sm">We'll match you with opportunities that align with your skills and schedule.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Start Helping</h3>
              <p className="text-gray-600 text-sm">Attend orientation and begin making a positive impact in your community.</p>
            </div>
          </div>
          
          <div className="pt-8">
            <button 
              onClick={handleApplyNow}
              className="px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium text-lg flex items-center gap-2 mx-auto"
            >
              <Heart className="w-5 h-5" />
              Start Your Volunteer Journey
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-600 mt-4">
              Questions? Contact us at <span className="text-emerald-600 font-medium">volunteers@yourorg.com</span> or call <span className="text-emerald-600 font-medium">+234 123 456 7890</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}