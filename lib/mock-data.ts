import { BookOpen, Building, Heart, Target, User, UserPlus, Users } from "lucide-react"
import { BlogPost, EventType, ProjectType } from "./types"



export const mockEvents: EventType[] = [
  {
    id: "empower-boy-child-summit-2",
    title: "Empower the Boy Child Summit 2.0",
    description:
      "The Yargote Foundation presents the second edition of the 'Empower the Boy Child Summit' — a two-day event dedicated to addressing the challenges faced by boys in today's society and preparing them to become responsible, confident, and empowered men of tomorrow. The summit will feature guest speakers, engaging discussions, and community-building activities aimed at creating a balanced approach to youth development.",
    date: "November 19 - November 20, 2025",
    time: "9:00 AM - 4:00 PM",
    location:
      "Day 1: Kabusa Community School, Abuja Day 2: GSTC, Garki, Abuja",
    image: "https://i.ibb.co/MDQGRdrT/empower-summit.jpg",
    images: ["https://i.ibb.co/YFXnYyW6/boy-child22.jpg", "https://i.ibb.co/MDQGRdrT/empower-summit.jpg"],
    category: "community",
    status: "upcoming",
    attendees: 2,
    maxAttendees: 300,
  },
  {
    id: "empower-boy-child-summit-1",
    title: "Empower the Boy Child Summit 1.0",
    description: "Addressing the challenges faced by boys in today's society and preparing them to become responsible, confident, and empowered men of tomorrow. The summit featured guest speakers, engaging discussions, and community-building activities aimed at creating a balanced approach to youth development.",
    date: "2024-02-28",
    time: "2:00 PM",
    location: "Yargote Foundation",
    image: "/placeholder.svg?height=400&width=600&text=Financial+Literacy+Workshop",
    category: "workshop",
    status: "past",
    attendees: 45,
    maxAttendees: 50,
  },
  {
    id: "international-day-of-the-boy-child-roadwork",
    title: "International Day Of The Boy Child Roadwork",
    description: "The International Day of the Boy Child Roadwalk brought together community members, educators, and advocates to raise awareness about the importance of supporting boys’ growth and development. The event highlighted issues affecting young boys, promoted mental well-being, and encouraged mentorship as a pathway to building responsible and confident men for the future.",
    date: "2024-02-10",
    time: "9:00 AM",
    location: "Various Community Locations",
    image: "https://i.ibb.co/YFXnYyW6/boy-child22.jpg?height=400&width=600&text=Community+Service+Day",
    images: [
      "https://i.ibb.co/j9YF8J6F/boy-child23.jpg",
      "https://i.ibb.co/YFXnYyW6/boy-child22.jpg",
      "https://i.ibb.co/20B0Xjxd/boy-child20.jpg",
      "https://i.ibb.co/SDtSyc77/boy-child13.jpg",
      "https://i.ibb.co/pjrThhpH/boy-child12.jpg",
      "https://i.ibb.co/8nsVBfd4/boy-child11.jpg",
      "https://i.ibb.co/DPqVp2dZ/boy-child10.jpg",
      "https://i.ibb.co/rRn3pjzg/boy-child4.jpg",
      "https://i.ibb.co/Mx5QbV7T/boy-child3.jpg",
      "https://i.ibb.co/2mV1pCZ/boy-child2.jpg",
      "https://i.ibb.co/n8CzmgqH/boy-child1.jpg"
    ],
    category: "community",
    status: "past",
    attendees: 120,
    maxAttendees: 150,
  },
  {
    id: "4",
    title: "Soft Skills Training",
    description: "Comprehensive training program for new mentors joining our programs.",
    date: "2025-12-20",
    time: "10:00 AM",
    location: "Yargote Foundation Headquarters",
    image: "/placeholder.svg?height=400&width=600&text=Mentor+Training",
    category: "training",
    status: "upcoming",
    attendees: 25,
    maxAttendees: 30,
  },

  {
    id: "fct-college-of-education-male-students-seminar",
    title: "FCT College of Education Seminar For Male Students",
    description: "Comprehensive training program for new mentors joining our programs.",
    date: "2025-12-20",
    time: "10:00 AM",
    location: "Yargote Foundation Headquarters",
    image: "/placeholder.svg?height=400&width=600&text=Mentor+Training",
    category: "training",
    status: "past",
    attendees: 25,
    maxAttendees: 30,
  },

  {
    id: "empower-the-boy-child-family-fun-fair",
    title: "Empower The Boy Child Family FunFair",
    description: "Comprehensive training program for new mentors joining our programs.",
    date: "2025-12-20",
    time: "10:00 AM",
    location: "Yargote Foundation Headquarters",
    image: "/placeholder.svg?height=400&width=600&text=Mentor+Training",
    category: "training",
    status: "past",
    attendees: 25,
    maxAttendees: 30,
  },
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "From Struggle to Strength: A Boy’s Journey with Yargote Foundation",
    excerpt: "Follow the inspiring story of James, a young boy who transformed his future through the Yargote Foundation’s 'Empower the Boy-Child Project,' gaining confidence and skills with the help of school bags and mentorship.",
    content: `Three years ago, James, a 14-year-old from an underserved community, joined the Yargote Foundation’s 'Empower the Boy-Child Project.' Facing challenges like limited access to educational resources and a lack of positive role models, his future seemed uncertain. The weight of his circumstances was heavy, but his dreams were bigger.

When James received a school bag emblazoned with the Yargote Foundation logo, it was more than just a tool—it was a symbol of opportunity. For the first time, he felt seen and supported. The foundation’s scholarship program provided him with access to quality education, while our mentorship initiatives connected him with inspiring role models who believed in his potential.

Balancing school with life’s challenges wasn’t easy. There were days when James felt overwhelmed, but the encouragement from his mentors and the resources provided—like textbooks and a sturdy school bag—kept him going. He spent evenings studying under streetlights, his determination fueled by the support of the Yargote community.

Through our programs, James discovered a passion for science and technology. He excelled in coding workshops offered by the foundation, developing skills that opened new doors. Today, James is a high school senior, preparing to apply for university scholarships to pursue a degree in computer science. He’s also become a peer mentor, helping younger boys in his community navigate their own challenges.

James’s story is a testament to the ripple effect of investing in boys. By providing tools like school bags, educational opportunities, and mentorship, the Yargote Foundation is helping boys like James rewrite their futures, one step at a time.`,
    author: "Sarah Johnson",
    date: "2025-09-10",
    image: "https://i.ibb.co/zV0Vb2nm/children-with-bags.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "success-story",
    readTime: 8,
    views: 120,
    likes: 23,
  },
  {
    id: "2",
    title: "Expanding Our Impact: Yargote Foundation’s New Partnership with Riverside Community",
    excerpt: "The Yargote Foundation partners with Riverside Community Center to empower 200 more boys with school bags, mentorship, and educational support, transforming lives in underserved neighborhoods.",
    content: `The Yargote Foundation is thrilled to announce a new partnership with Riverside Community Center, enabling us to extend our 'Empower the Boy-Child Project' to 200 additional boys in the Riverside neighborhood. This collaboration marks a significant step in our mission to uplift young boys in underserved communities through education, mentorship, and essential resources like school bags.

The Riverside area, known for its economic challenges, is a priority for our outreach efforts. By providing boys with school bags filled with supplies, access to after-school programs, and dedicated mentors, we aim to foster confidence and academic success. “This partnership with the Yargote Foundation is transformative,” says Community Center Director Maria Rodriguez. “Their commitment to empowering boys will create lasting change in our community.”

The program will launch in November 2025 with an initial cohort of 50 boys, offering workshops, tutoring, and life skills training. Each participant will receive a Yargote Foundation school bag, symbolizing our investment in their potential. This initiative is set to inspire a new generation of leaders in Riverside, proving that opportunity can change everything.`,
    author: "Michael Chen",
    date: "2025-10-01",
    image: "https://i.ibb.co/JwjHTBsc/boy-child-in-class.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "program-update",
    readTime: 3,
    views: 85,
    likes: 15,
  },
  {
    id: "3",
    title: "2025 Impact Report: Yargote Foundation’s Year of Empowering Boys",
    excerpt: "Discover how the Yargote Foundation transformed lives in 2025, equipping boys with school bags, scholarships, and mentorship to build brighter futures.",
    content: `As we reflect on 2025, the Yargote Foundation celebrates a year of profound impact in empowering young boys across our communities. Our 'Empower the Boy-Child Project' has reached new heights, providing boys with the tools and support they need to thrive.

Key Achievements:
- Empowered 1,500 boys across 10 communities
- Distributed 1,200 school bags filled with supplies
- Achieved a 96% program completion rate
- Recorded an 88% improvement in academic performance
- Engaged 250+ volunteer mentors
- Awarded $750,000 in scholarships

These numbers reflect the heart of our mission: transforming lives through education and mentorship. Each school bag distributed, each mentorship session held, and each scholarship awarded represents a boy whose future is brighter because of our work. We’re grateful to our donors, volunteers, and partners who make these achievements possible, creating a ripple effect of hope and opportunity.`,
    author: "Dr. Amara Okafor",
    date: "2025-12-15",
    image: "https://i.ibb.co/sJbLjgpR/Whats-App-Image-2025-09-24-at-11-45-53-PM.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "impact-report",
    readTime: 7,
    views: 152,
    likes: 30,
  },
  {
    id: "4",
    title: "Community Spotlight: Transforming Eastside Boys with Yargote Foundation",
    excerpt: "Explore how the Yargote Foundation’s programs, including school bag distributions, have revitalized the Eastside community by empowering its young boys.",
    content: `Three years ago, the Yargote Foundation launched its 'Empower the Boy-Child Project' in the Eastside neighborhood, a community once marked by economic hardship and limited opportunities. Today, Eastside is a beacon of hope, thanks to our efforts to empower young boys.

Through school bag distributions, mentorship programs, and educational workshops, we’ve seen remarkable changes. Boys who once struggled academically are now excelling, with a 45% increase in high school graduation rates. Local business owner Janet Williams shares, “The Yargote Foundation has given our boys confidence and purpose. They’re staying in school and dreaming bigger.”

Beyond individual success, the community has transformed. Crime rates have dropped by 35%, and community engagement has soared as boys take on leadership roles. The school bags, emblazoned with the Yargote logo, are a symbol of this change, reminding everyone that investing in boys transforms entire communities.`,
    author: "James Rodriguez",
    date: "2025-11-01",
    image: "https://i.ibb.co/5ggrTg0y/house-keeping.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    category: "community-news",
    readTime: 4,
    views: 98,
    likes: 18,
  },
  {
    id: "5",
    title: "Mentor of the Year: Robert Thompson’s Impact on Boys at Yargote Foundation",
    excerpt: "Meet Robert Thompson, whose mentorship has transformed the lives of over 50 boys through the Yargote Foundation’s programs.",
    content: `Robert Thompson, a dedicated volunteer with the Yargote Foundation for five years, has been named our Mentor of the Year for his transformative impact on over 50 young boys. Through the 'Empower the Boy-Child Project,' Robert has provided guidance, support, and inspiration, helping boys overcome challenges and pursue their dreams.

“Robert’s patience and genuine care make all the difference,” says Program Director Michael Chen. “He connects with boys on a personal level, helping them see their potential.” From assisting with homework to distributing school bags, Robert’s involvement has been a game-changer.

A retired teacher, Robert finds purpose in mentoring. “These boys teach me as much as I teach them,” he says. Several of his mentees have pursued higher education, with three studying to become teachers, inspired by his example. Robert’s work exemplifies the power of mentorship in shaping the next generation of confident, capable young men.`,
    author: "Sarah Johnson",
    date: "2025-10-20",
    image: "https://i.ibb.co/JwjHTBsc/boy-child-in-class.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "success-story",
    readTime: 4,
    views: 110,
    likes: 25,
  },
]
export const mockProjects: ProjectType[] = [
  {
    id: "1",
    title: "Empower the Boy Child Project",
    description:
      "The Empower the Boy Child Project of the Yargote Foundation is a groundbreaking initiative dedicated to restoring hope, dignity, and purpose to boys in underserved African communities. It equips them with the values, skills, and opportunities they need to thrive. Recognizing that boys are often overlooked in development conversations, the project seeks to nurture their untapped potential to transform not only their lives but also the future of their communities. Through mentorship, education, life skills training, advocacy, and community engagement, it shapes boys into disciplined, responsible, confident, and visionary young men who can rise above challenges such as neglect, substance abuse, poor self-image, and moral decay. By creating safe spaces, fostering positive role models, and championing their rights, the Yargote Foundation is ensuring that the boy child stands tall as a pillar of strength, leadership, and progress for generations to come.",
    shortDescription:
      "Restoring hope and shaping visionary young men through mentorship, education, and life skills in underserved communities",
    image: "https://i.ibb.co/JwHPFKQR/about-child-Ceho-PQk-P.jpg",
    category: "mentorship",
    status: "active",
    acceptingDonations: true,
    targetAmount: 150000,
    raisedAmount: 89500,
    participantsServed: 245,
    targetParticipants: 400,
    startDate: "2023-01-01",
    impact: [
      "95% improvement in academic performance",
      "85% program completion rate",
      "200+ boys mentored into responsible young men",
    ],
  },
  {
    id: "2",
    title: "Digital Literacy & Innovation Initiative",
    description:
      "This initiative bridges the digital divide by empowering boys from low-income African communities with computer skills, coding knowledge, and access to technology. By offering hands-on digital workshops, computer labs, and mentorship from African tech professionals, it helps young boys see themselves as creators and innovators who can solve real problems in their communities.",
    shortDescription:
      "Empowering boys with digital skills to become Africa’s next generation of tech innovators",
    image: "/boys-in-educational-workshop-learning-life-skills-.jpg",
    category: "education",
    status: "active",
    acceptingDonations: true,
    targetAmount: 75000,
    raisedAmount: 45200,
    participantsServed: 120,
    targetParticipants: 200,
    startDate: "2023-06-01",
    impact: [
      "120 boys gained basic computer literacy",
      "30 boys trained in introductory coding",
      "15 boys secured local tech internships",
    ],
  },
  {
    id: "3",
    title: "Leadership Development Program",
    description:
      "This program nurtures the next generation of African leaders by equipping boys with public speaking, civic responsibility, and community service skills. It instills discipline, self-confidence, and cultural pride through leadership bootcamps, youth parliaments, and mentorship from community elders and African role models.",
    shortDescription:
      "Building confident, culturally grounded leaders through training and community service",
    image: "/graduation-ceremony-for-program-participants.jpg",
    category: "life-skills",
    status: "active",
    acceptingDonations: true,
    targetAmount: 50000,
    raisedAmount: 32800,
    participantsServed: 85,
    targetParticipants: 150,
    startDate: "2023-09-01",
    impact: [
      "85 boys completed leadership training",
      "25 community-led service projects launched",
      "90% increase in self-confidence and civic engagement",
    ],
  },
  {
    id: "4",
    title: "College Readiness & Scholarship Fund",
    description:
      "This fund provides financial aid, career guidance, and college preparation to bright boys from low-income African households who dream of higher education. It removes barriers to learning and helps them transition from secondary school to universities where they can pursue their aspirations and uplift their families and communities.",
    shortDescription:
      "Supporting the dreams of young African scholars through scholarships and mentorship",
    image: "/boys-reading-books-in-library.jpg",
    category: "education",
    status: "active",
    acceptingDonations: true,
    targetAmount: 100000,
    raisedAmount: 67300,
    participantsServed: 45,
    targetParticipants: 80,
    startDate: "2023-03-01",
    impact: [
      "45 scholarships awarded to disadvantaged boys",
      "95% college acceptance rate",
      "Over $500,000 in scholarships facilitated to date",
    ],
  },
]

export const galleryImages = [
  {
    id: 1,
    src: "https://i.ibb.co/wFCSBf4H/founder-kids-CBorbbrl.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/wFCSBf4H/founder-kids-CBorbbrl.jpg?w=400&h=300&fit=crop",
    alt: "Founder with boys",
    caption: "Inspiring young minds with hope and opportunity",
    category: "Outreach",
    tags: ["Outreach", "Mentorship"],
    featured: true,
    date: "2025-09-15"
  },
  {
    id: 2,
    src: "https://i.ibb.co/JwHPFKQR/about-child-Ceho-PQk-P.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/JwHPFKQR/about-child-Ceho-PQk-P.jpg?w=400&h=300&fit=crop",
    alt: "Moments with boys",
    caption: "Investing in the well-being of the boy child",
    category: "Happy Moments",
    tags: ["Inspiration", "Community"],
    featured: true,
    date: "2025-09-10"
  },
  {
    id: 3,
    src: "https://i.ibb.co/4RV4hNsc/hero-children.png?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/4RV4hNsc/hero-children.png?w=400&h=300&fit=crop",
    alt: "Joyful moments with boys",
    caption: "Empowering the boy child through education and support",
    category: "Happy Moments",
    tags: ["Inspiration", "Community"],
    featured: true,
    date: "2025-09-08"
  },
  {
    id: 4,
    src: "https://i.ibb.co/j9YF8J6F/boy-child23.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/j9YF8J6F/boy-child23.jpg?w=400&h=300&fit=crop",
    alt: "Boy with Yargote Foundation bag",
    caption: "Celebrating The International Boy Child Day with Yargote Foundation",
    category: "Empowerment",
    tags: ["Inspiration", "Education"],
    featured: false,
    date: "2025-10-01"
  },
  {
    id: 5,
    src: "https://i.ibb.co/YFXnYyW6/boy-child22.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/YFXnYyW6/boy-child22.jpg?w=400&h=300&fit=crop",
    alt: "Boys in Yargote Foundation program",
    caption: "Celebrating The International Boy Child Day with Yargote Foundation",
    category: "Mentorship",
    tags: ["Inspiration", "Empowerment"],
    featured: false,
    date: "2025-10-05"
  },
  {
    id: 6,
    src: "https://i.ibb.co/20B0Xjxd/boy-child20.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/20B0Xjxd/boy-child20.jpg?w=400&h=300&fit=crop",
    alt: "Boy child with school supplies",
    caption: "Celebrating The International Boy Child Day with Yargote Foundation",
    category: "Education",
    tags: ["Inspiration", "Education"],
    featured: false,
    date: "2025-10-10"
  },
  {
    id: 7,
    src: "https://i.ibb.co/SDtSyc77/boy-child13.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/SDtSyc77/boy-child13.jpg?w=400&h=300&fit=crop",
    alt: "Boys at Yargote Foundation event",
    caption: "Celebrating The International Boy Child Day with Yargote Foundation",
    category: "Community",
    tags: ["Inspiration", "Outreach"],
    featured: false,
    date: "2025-10-15"
  },
  {
    id: 8,
    src: "https://i.ibb.co/pjrThhpH/boy-child12.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/pjrThhpH/boy-child12.jpg?w=400&h=300&fit=crop",
    alt: "Boy with Yargote Foundation resources",
    caption: "Celebrating The International Boy Child Day with Yargote Foundation",
    category: "Empowerment",
    tags: ["Inspiration", "Education"],
    featured: false,
    date: "2025-10-20"
  },
  {
    id: 9,
    src: "https://i.ibb.co/8nsVBfd4/boy-child11.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/8nsVBfd4/boy-child11.jpg?w=400&h=300&fit=crop",
    alt: "Yargote Foundation outreach program",
    caption: "Transforming lives through education and mentorship",
    category: "Outreach",
    tags: ["Inspiration", "Education"],
    featured: false,
    date: "2025-10-25"
  },
  {
    id: 10,
    src: "https://i.ibb.co/DPqVp2dZ/boy-child10.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/DPqVp2dZ/boy-child10.jpg?w=400&h=300&fit=crop",
    alt: "Boys receiving Yargote Foundation bags",
    caption: "Distributing hope with school bags for boys",
    category: "Empowerment",
    tags: ["Inspiration", "Community"],
    featured: false,
    date: "2025-11-01"
  },
  {
    id: 11,
    src: "https://i.ibb.co/rRn3pjzg/boy-child4.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/rRn3pjzg/boy-child4.jpg?w=400&h=300&fit=crop",
    alt: "Boy child in classroom",
    caption: "Fostering academic growth with Yargote Foundation support",
    category: "Education",
    tags: ["Inspiration", "Community"],
    featured: false,
    date: "2025-11-05"
  },
  {
    id: 12,
    src: "https://i.ibb.co/Mx5QbV7T/boy-child3.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/Mx5QbV7T/boy-child3.jpg?w=400&h=300&fit=crop",
    alt: "Yargote Foundation community event",
    caption: "Bringing boys together for inspiration and growth",
    category: "Community",
    tags: ["Community", "Inspiration"],
    featured: false,
    date: "2025-11-10"
  },
  {
    id: 13,
    src: "https://i.ibb.co/2mV1pCZ/boy-child2.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/2mV1pCZ/boy-child2.jpg?w=400&h=300&fit=crop",
    alt: "Boy with Yargote Foundation school bag",
    caption: "Empowering young boys with essential school resources",
    category: "Empowerment",
    tags: ["Inspiration", "Community"],
    featured: false,
    date: "2025-11-15"
  },
  {
    id: 14,
    src: "https://i.ibb.co/n8CzmgqH/boy-child1.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/n8CzmgqH/boy-child1.jpg?w=400&h=300&fit=crop",
    alt: "Boys in Yargote Foundation workshop",
    caption: "Building skills and confidence through Yargote programs",
    category: "Mentorship",
    tags: ["Inspiration", "Community"],
    featured: false,
    date: "2025-11-20"
  }
]

export const programs = [
  {
    id: "mentorship-circles",
    title: "Mentorship Circles",
    description:
      "Connecting boys with positive male role models from their communities who provide guidance in education, career pathways, and personal growth.",
    image: "/placeholder.svg?height=400&width=600&text=Mentorship+Circles",
    status: "Active",
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
    description: "Community centers where boys can freely express themselves, access counseling support, and develop essential life skills in a nurturing environment.",
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
    description: "Comprehensive training program teaching discipline, leadership, civic responsibility, financial management, and personal wellbeing.",
    image: "/placeholder.svg?height=400&width=600&text=Life+Skills+Curriculum",
    status: "Active",
    duration: "1 Month session",
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
    description: "Interactive outdoor camps featuring activities and workshops that rebuild trust, improve communication, and strengthen relationships between parents and their sons.",
    image: "/placeholder.svg?height=400&width=600&text=Parent+Boy+Bonding+Camps",
    status: "done",
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
    description: "Awareness campaigns, community walks, and town hall discussions that highlight the challenges facing boys and mobilize support for their development and wellbeing.",
    image: "/placeholder.svg?height=400&width=600&text=Community+Advocacy+Events",
    status: "Active",
    duration: "Monthly events",
    outcomes: [
      "Increased community awareness of boy child issues",
      "Enhanced visibility of challenges and potential",
      "Strengthened community dialogue and engagement",
      "Advocacy for policy and social change",
    ],
  },
]

export const coreValues = [
  {
    icon: User,
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
    icon: Target,
    title: "Discipline",
    description: "Instilling respect, values, and positive conduct.",
  },
]

export const mockTeamMembers = [
  {
    name: "ANNA HUSSAINI PAI",
    role: "Executive Director",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Sarah+Johnson",
    bio: "With over 15 years in youth development, Dr. Johnson leads our mission with passion and expertise.",
    email: "yargotefoundation@gmail.com",
    linkedin: "#",
  },
  {
    name: "IBRAHIM DAN-MUSA",
    role: "Program Director",
    image: "https://i.ibb.co/V0fbLMzZ/Whats-App-Image-2025-10-05-at-12-35-55-AM.jpg?height=300&width=300&text=Michael+Chen",
    bio: "Ibrahim Gambo Dan-Musa is a dynamic lawyer and energy professional with a strong track record in Contract, Property, and Oil & Gas Law, as well as strategic management. A First Class graduate of Law  from the University of Hertfordshire, England, and holder of a Masters Degree in International Oil & Gas Management from the University of Dundee, Scotland. He combines legal expertise with deep industry insight. Passionate about driving innovation in Nigeria’s energy sector, Ibrahim has authored influential papers on Gas Flaring, Electricity Market Liberalization, and Culture Management in Multinational Acquisitions. He is also a key player in operations management in the upstream oil and gas sector.Beyond his professional achievements, Ibrahim is known for his dedication to volunteering and community development, earning several awards for outstanding service during his time in the UK. His work reflects a commitment not just to legal and energy excellence, but also to creating meaningful impact in society.",
    email: "michael@yargotefoundation.org",
    linkedin: "#",
  },
  {
    name: "EMMANUELLA ATIOMO",
    role: "Youth Coordinator",
    image: "/placeholder.svg?height=300&width=300&text=James+Rodriguez",
    bio: "A former program participant, James now coordinates activities and serves as a role model for current participants.",
    email: "james@yargotefoundation.org",
    linkedin: "#",
  },
  {
    name: "HUSSAINI HALILU PAI",
    role: "Community Outreach Manager",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Amara+Okafor",
    bio: "Dr. Okafor builds bridges between communities and ensures our programs reach those who need them most.",
    email: "amara@yargotefoundation.org",
    linkedin: "#",
  },
  {
    name: "TEMILADE DARAMOLA",
    role: "Youth Coordinator",
    image: "/placeholder.svg?height=300&width=300&text=James+Rodriguez",
    bio: "A former program participant, James now coordinates activities and serves as a role model for current participants.",
    email: "james@yargotefoundation.org",
    linkedin: "#",
  },
  {
    name: "JAMES VANDEFAN",
    role: "Community Outreach Manager",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Amara+Okafor",
    bio: "Dr. Okafor builds bridges between communities and ensures our programs reach those who need them most.",
    email: "amara@yargotefoundation.org",
    linkedin: "#",
  },
]

