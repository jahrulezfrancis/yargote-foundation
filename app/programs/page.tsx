import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Building, CheckCircle, Clock, ArrowRight, BookOpen, Heart, Shield, MessageCircle, DollarSign, TreePine, Megaphone } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    id: "mentorship-circles",
    title: "Mentorship Circles",
    description:
      "Pairing boys with positive male role models who guide them in academics, career choices, and personal development.",
    image: "/placeholder.svg?height=400&width=600&text=Mentorship+Circles",
    status: "Active",
    participants: 800,
    duration: "Ongoing",
    outcomes: [
      "Improved academic performance through personalized guidance",
      "Enhanced career awareness and goal setting",
      "Strengthened personal development and confidence",
      "Positive male role model relationships established",
    ],
    components: [
      {
        icon: Users,
        title: "Role Models",
        description: "Positive male mentors from the community",
      },
      {
        icon: BookOpen,
        title: "Academic Guidance",
        description: "Support for educational achievement",
      },
      {
        icon: Building,
        title: "Career Mentoring",
        description: "Professional guidance and career planning",
      },
      {
        icon: Heart,
        title: "Personal Development",
        description: "Character building and life coaching",
      },
    ],
  },
  {
    id: "safe-spaces",
    title: "Safe Spaces for Boys",
    description: "Community hubs where boys can express themselves, receive counseling, and access life skills training.",
    image: "/placeholder.svg?height=400&width=600&text=Safe+Spaces+for+Boys",
    status: "Active",
    participants: 600,
    duration: "Ongoing",
    outcomes: [
      "Secure environment for self-expression",
      "Access to professional counseling services",
      "Life skills development and training",
      "Community support network established",
    ],
  },
  {
    id: "life-skills-curriculum",
    title: "Life Skills & Values Curriculum",
    description: "Structured lessons on discipline, leadership, patriotism, financial literacy, and personal hygiene.",
    image: "/placeholder.svg?height=400&width=600&text=Life+Skills+Curriculum",
    status: "Active",
    participants: 1200,
    duration: "12 weeks per cycle",
    outcomes: [
      "Enhanced leadership capabilities",
      "Improved financial literacy and management",
      "Strengthened discipline and self-control",
      "Better personal hygiene and health awareness",
    ],
  },
  {
    id: "parent-boy-bonding",
    title: "Parent–Boy Bonding Camps",
    description: "Outdoor and experiential activities designed to heal strained relationships and strengthen family bonds.",
    image: "/placeholder.svg?height=400&width=600&text=Parent+Boy+Bonding+Camps",
    status: "Active",
    participants: 400,
    duration: "3 days per camp",
    outcomes: [
      "Healed strained parent-child relationships",
      "Strengthened family bonds and communication",
      "Improved understanding between generations",
      "Enhanced family unity and support",
    ],
  },
  {
    id: "community-advocacy",
    title: "Community Advocacy Events",
    description: "Road walks, summits, and dialogues that bring visibility to the struggles and potential of the boychild.",
    image: "/placeholder.svg?height=400&width=600&text=Community+Advocacy+Events",
    status: "Active",
    participants: 2000,
    duration: "Monthly events",
    outcomes: [
      "Increased community awareness of boy child issues",
      "Enhanced visibility of challenges and potential",
      "Strengthened community dialogue and engagement",
      "Advocacy for policy and social change",
    ],
  },
]

const milestones = [
  {
    year: "2015",
    title: "Foundation Established",
    description: "Yargote Foundation officially launched with focus on empowering the boy child.",
  },
  {
    year: "2017",
    title: "First Mentorship Circles",
    description: "Launched our flagship Mentorship Circles program with community leaders.",
  },
  {
    year: "2019",
    title: "Safe Spaces Initiative",
    description: "Established community hubs providing safe spaces for boys to express themselves.",
  },
  {
    year: "2021",
    title: "Life Skills Curriculum Launch",
    description: "Introduced structured curriculum covering discipline, leadership, and financial literacy.",
  },
  {
    year: "2023",
    title: "Community Advocacy Expansion",
    description: "Expanded advocacy events to bring greater visibility to boy child issues.",
  },
]

const programComponents = [
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure spaces for expression and growth",
  },
  {
    icon: MessageCircle,
    title: "Counseling Support",
    description: "Professional guidance and emotional support",
  },
  {
    icon: DollarSign,
    title: "Financial Literacy",
    description: "Essential money management skills",
  },
  {
    icon: TreePine,
    title: "Outdoor Activities",
    description: "Experiential learning through nature",
  },
  {
    icon: Megaphone,
    title: "Community Advocacy",
    description: "Raising awareness and driving change",
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('/diverse-group-of-young-boys-in-mentorship-program-.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gray-900/70" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                Our Unique Programs
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance text-white">
                Empowering Boys Through Comprehensive Support
              </h1>
              <p className="text-xl text-white/90 text-pretty leading-relaxed max-w-3xl mx-auto">
                Five specialized programs designed to address the unique challenges facing boys in our communities,
                providing holistic support that creates lasting positive change.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Program - Mentorship Circles */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="bg-gray-900 text-white">Flagship Program</Badge>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Active
                  </Badge>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-balance text-gray-900">Mentorship Circles</h2>
                <p className="text-lg text-gray-600 text-pretty leading-relaxed">
                  Our cornerstone program pairing boys with positive male role models who provide guidance in academics, 
                  career choices, and personal development, creating lasting impact through meaningful relationships.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">800+</div>
                    <div className="text-sm text-gray-500">Boys Mentored</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-500">Male Mentors</div>
                  </div>
                </div>

                <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
                  <Link href="/contact" className="flex items-center gap-2">
                    Become a Mentor
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <img
                  src={"https://i.ibb.co/4RV4hNsc/hero-children.png"}
                  alt="Mentorship Circles"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Program Components */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {programs[0].components?.map((component, index) => (
                <Card key={index} className="text-center p-6 border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <component.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{component.title}</h3>
                    <p className="text-gray-600 text-sm text-pretty">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Outcomes */}
            <Card className="p-8 border-gray-200 shadow-sm">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold text-center text-gray-900">Program Impact</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {programs[0].outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-600">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Five Core Programs</h2>
              <p className="text-xl text-gray-600 text-pretty max-w-2xl mx-auto">
                Comprehensive support addressing every aspect of a boy's development and growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {programComponents.map((component, index) => (
                <Card key={index} className="text-center p-6 border-gray-200 bg-white hover:shadow-md transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <component.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{component.title}</h3>
                    <p className="text-gray-600 text-sm text-pretty">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Programs Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">All Programs</h2>
              <p className="text-xl text-gray-600 text-pretty max-w-2xl mx-auto">
                Specialized initiatives working together to empower the boy child
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.slice(1).map((program, index) => (
                <Card key={index} className="overflow-hidden border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {program.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {program.duration}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                      <p className="text-gray-600 text-pretty leading-relaxed">{program.description}</p>

                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-gray-900" />
                          <span className="text-gray-600">{program.participants} participants</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Key Outcomes:</h4>
                        <div className="space-y-1">
                          {program.outcomes.slice(0, 2).map((outcome, outcomeIndex) => (
                            <div key={outcomeIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-gray-600">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Journey</h2>
              <p className="text-xl text-gray-600 text-pretty max-w-2xl mx-auto">
                Key milestones in our mission to empower boys and transform communities
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        <Badge variant="outline" className="border-gray-300">{milestone.year}</Badge>
                      </div>
                      <p className="text-gray-600 text-pretty leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-300 text-pretty max-w-2xl mx-auto">
              Join us in empowering the next generation of leaders. Every contribution, big or small, creates lasting
              impact in a young person's life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/donate" className="flex items-center gap-2">
                  Support Our Programs
                  <Heart className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Volunteer With Us
                  <Users className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}