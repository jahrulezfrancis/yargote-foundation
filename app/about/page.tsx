import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Target, Users, Award, Mail, Linkedin, PersonStandingIcon, UserPlus, TargetIcon } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Executive Director",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Sarah+Johnson",
    bio: "With over 15 years in youth development, Dr. Johnson leads our mission with passion and expertise.",
    email: "sarah@yargotefoundation.org",
    linkedin: "#",
  },
  {
    name: "Michael Chen",
    role: "Program Director",
    image: "/placeholder.svg?height=300&width=300&text=Michael+Chen",
    bio: "Michael oversees our mentorship programs and has directly impacted over 1,000 young lives.",
    email: "michael@yargotefoundation.org",
    linkedin: "#",
  },
  {
    name: "Dr. Amara Okafor",
    role: "Community Outreach Manager",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Amara+Okafor",
    bio: "Dr. Okafor builds bridges between communities and ensures our programs reach those who need them most.",
    email: "amara@yargotefoundation.org",
    linkedin: "#",
  },
  {
    name: "James Rodriguez",
    role: "Youth Coordinator",
    image: "/placeholder.svg?height=300&width=300&text=James+Rodriguez",
    bio: "A former program participant, James now coordinates activities and serves as a role model for current participants.",
    email: "james@yargotefoundation.org",
    linkedin: "#",
  },
]

const values = [
  {
    icon: PersonStandingIcon,
    title: "Balance",
    description: "Restoring gender advocacy to include both boys and girls.",
  },
  {
    icon: UserPlus,
    title: "Responsibility",
    description: "Teaching boys accountability and leadership.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Raising boys with empathy for others.",
  },
  {
    icon: TargetIcon,
    title: "Discipline",
    description: "Instilling respect, values, and positive conduct..",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-background to-card overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://i.ibb.co/zhSM4X3F/happy-boys.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                About Us
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance text-white">
                Building Brighter Futures for Boys
              </h1>
              <p className="text-xl text-white/90 text-pretty leading-relaxed max-w-3xl mx-auto">
                Since our founding, Yargote Foundation has been dedicated to empowering boys in underserved communities
                through comprehensive support programs that address their unique challenges and unlock their potential.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              <Card className="text-center p-8">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    Our mission is to nurture and empower children, youth and women through advocacy, education, life skills, mentorship and community engagement thereby fostering resilience, responsible citizenship and sustainable growth
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    We envision a world where every child, youth and woman has the opportunity to live with dignity, fulfil their potential and contribute meaningfully to nation development.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Impact</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">
                    Over 200 boy children empowered, 40+ mentors engaged, and 10+ communities transformed through our dedicated programs focused on supporting and uplifting the boy child.
                    </p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">Our Core Values</h2>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                  These principles guide everything we do and shape how we serve our communities
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="space-y-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                        <value.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground text-pretty text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Yargote Foundation was born from a simple yet powerful observation: boys in underserved communities
                    face unique challenges that often go unaddressed. Founded in 2015, our organization emerged from
                    grassroots efforts to provide mentorship and support to young men who needed guidance the most.
                  </p>
                  <p>
                    What started as a small community initiative has grown into a comprehensive foundation serving
                    thousands of boys across multiple communities. Our approach combines traditional mentorship with
                    modern educational support, life skills training, and community engagement.
                  </p>
                  <p>
                    Today, we continue to expand our reach while maintaining the personal touch that makes our programs
                    so effective. Every boy we serve is not just a statistic—they're a future leader, innovator, and
                    positive force in their community.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://i.ibb.co/MyT9Fcvx/founder-kids-CBorbbrl.jpg?height=500&width=600&text=Foundation+History"
                  alt="Yargote Foundation history and growth"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Founder Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline" className="mb-2">
                Leadership
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">Our Founder</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Visionary leadership driving positive change for boys in underserved communities
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <img
                        src="https://i.ibb.co/0jZJpc9Q/anna-BAXXFp-PV.jpg?height=600&width=500&text=Anna+Hussaini+Pai"
                        alt="Anna Hussaini Pai - Founder & Executive Director"
                        className="w-full h-full object-cover min-h-[400px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl lg:text-3xl font-bold">Anna Hussaini Pai</h3>
                        <p className="text-lg font-medium text-accent">Founder & Executive Director</p>
                      </div>

                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          Anna Hussaini Pai is the visionary founder and Executive Director of Yargote Foundation. Her
                          professional journey spans various sectors, including government agencies, consultancy, and
                          education, bringing a wealth of diverse experience to her leadership role.
                        </p>
                        <p>
                          She exemplifies inclusive leadership, values input from all stakeholders, and fosters
                          collaboration. As the driving force behind the Empower the Boy Child Project, she believes
                          in empowering individuals to reach their full potential and encourages open communication
                          within her team.
                        </p>
                        <p>
                          Anna oversees all aspects of the organization's operations, including program development,
                          fundraising, advocacy, and strategic planning, working closely with stakeholders to ensure
                          the foundation's initiatives align with its vision and goals.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Education & Credentials</h4>
                        <div className="grid gap-2 text-sm text-muted-foreground">
                          <p>• MSc International Business - University of Hertfordshire</p>
                          <p>• BSc Business Administration - University of Abuja</p>
                          <p>• Certificate in Project Management - University of Oxford</p>
                          <p>• PGD in Education - FCT College of Education</p>
                          <p>• Fellow of the Chartered Institute of Mentoring and Coaching</p>
                          <p>• Associate Member of Chartered Institute of Personnel Management</p>
                          <p>• Centre for Management Development Accredited Trainer</p>
                          <p>• Registered Member of Teachers Registration Council of Nigeria</p>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <a
                          href="mailto:anna@yargotefoundation.org"
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          Contact
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Dedicated professionals committed to empowering the next generation of leaders
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-accent font-medium">{member.role}</p>
                      </div>
                      <p className="text-muted-foreground text-sm text-pretty leading-relaxed">{member.bio}</p>
                      <div className="flex justify-center gap-2">
                        <a
                          href={`mailto:${member.email}`}
                          className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <a
                          href={member.linkedin}
                          className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}