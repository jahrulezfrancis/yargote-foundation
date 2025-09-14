import { BlogCategory } from "./types"


export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  category: "workshop" | "fundraiser" | "community" | "training"
  status: "upcoming" | "past"
  attendees?: number
  maxAttendees?: number
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  category: "success-story" | "program-update" | "community-news" | "impact-report"
  readTime: number
  likes?: number
}

export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  category: "education" | "mentorship" | "life-skills" | "community"
  status: "active" | "completed" | "upcoming"
  acceptingDonations: boolean
  targetAmount: number
  raisedAmount: number
  participantsServed: number
  targetParticipants: number
  startDate: string
  endDate?: string
  impact: string[]
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Annual Mentorship Gala",
    description:
      "Join us for our biggest fundraising event of the year, celebrating the achievements of our mentors and participants.",
    date: "2024-03-15",
    time: "6:00 PM",
    location: "Grand Ballroom, Community Center",
    image: "/placeholder.svg?height=400&width=600&text=Mentorship+Gala",
    category: "fundraiser",
    status: "upcoming",
    attendees: 150,
    maxAttendees: 200,
  },
  {
    id: "2",
    title: "Life Skills Workshop: Financial Literacy",
    description: "Teaching young men essential financial skills including budgeting, saving, and understanding credit.",
    date: "2024-02-28",
    time: "2:00 PM",
    location: "Yargote Foundation Training Center",
    image: "/placeholder.svg?height=400&width=600&text=Financial+Literacy+Workshop",
    category: "workshop",
    status: "upcoming",
    attendees: 45,
    maxAttendees: 50,
  },
  {
    id: "3",
    title: "Community Service Day",
    description: "Boys and mentors come together to give back to the community through various service projects.",
    date: "2024-02-10",
    time: "9:00 AM",
    location: "Various Community Locations",
    image: "/placeholder.svg?height=400&width=600&text=Community+Service+Day",
    category: "community",
    status: "upcoming",
    attendees: 120,
    maxAttendees: 150,
  },
  {
    id: "4",
    title: "Mentor Training Intensive",
    description: "Comprehensive training program for new mentors joining our programs.",
    date: "2024-01-20",
    time: "10:00 AM",
    location: "Yargote Foundation Headquarters",
    image: "/placeholder.svg?height=400&width=600&text=Mentor+Training",
    category: "training",
    status: "past",
    attendees: 25,
    maxAttendees: 30,
  },
  {
    id: "5",
    title: "Holiday Celebration & Awards",
    description: "Celebrating the achievements of our participants and recognizing outstanding mentors.",
    date: "2023-12-15",
    time: "4:00 PM",
    location: "Community Recreation Center",
    image: "/placeholder.svg?height=400&width=600&text=Holiday+Celebration",
    category: "community",
    status: "past",
    attendees: 200,
    maxAttendees: 200,
  },
  {
    id: "6",
    title: "Career Development Fair",
    description: "Connecting our participants with local employers and educational opportunities.",
    date: "2023-11-08",
    time: "1:00 PM",
    location: "City Convention Center",
    image: "/placeholder.svg?height=400&width=600&text=Career+Fair",
    category: "workshop",
    status: "past",
    attendees: 180,
    maxAttendees: 200,
  },
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Transforming Lives Through Education: Maria's Journey from Poverty to Purpose",
    excerpt: "When Maria first walked through our doors three years ago, she carried the weight of uncertainty and the dreams of her entire family. Follow her incredible transformation from single mother to software engineer.",
    content: `When Maria first walked through our doors three years ago, she carried the weight of uncertainty and the dreams of her entire family. As a single mother of two, working multiple jobs just to make ends meet, she never imagined that education could be her pathway to a completely different life.

Growing up in a underserved community, Maria had always been curious about technology but never had the opportunity to explore it. The digital divide seemed insurmountable, and the idea of pursuing higher education felt like a distant dream reserved for others.

Our scholarship program didn't just provide financial support – it offered something much more valuable: belief. When Maria received her acceptance letter, she cried not just tears of joy, but tears of possibility. For the first time, someone was investing in her potential.

The journey wasn't easy. Balancing coursework with parenting and work required incredible discipline. There were nights when she studied until dawn, fueled by determination and the unwavering support of our mentorship program. Her children would often fall asleep to the sound of her typing, creating a beautiful soundtrack of perseverance.

What started as basic computer literacy classes evolved into advanced programming courses. Maria discovered she had a natural aptitude for software development, and more importantly, a passion for using technology to solve real-world problems.

Today, Maria works as a software engineer at a leading tech company, earning more in a month than she used to make in six months of her previous jobs. But the transformation goes beyond financial stability. She's become a mentor herself, volunteering with our program to guide other women who see their own struggles reflected in her story.

Her children, now teenagers, speak proudly of their mother's achievements. They've witnessed firsthand that barriers can be broken, that circumstances don't define destiny, and that education truly is the great equalizer.

Maria's success story isn't just about one person's triumph – it's about the ripple effect of investment in human potential. She's hired three other program graduates at her company, creating a network of opportunity that continues to expand.

This is why we do what we do. Every scholarship awarded, every mentorship hour logged, every barrier removed creates possibilities we may never fully see. Maria's journey reminds us that when we invest in education, we're not just changing individual lives – we're transforming entire communities, one success story at a time.`,
    author: "Sarah Johnson",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "success-story",
    readTime: 8,
  },
  {
    id: "2",
    title: "Expanding Our Reach: New Community Partnership Announced",
    excerpt: "We're excited to announce our partnership with Riverside Community Center to serve 200 more boys.",
    content: `We're thrilled to announce our newest partnership with Riverside Community Center, which will allow us to extend our programs to an additional 200 boys in the Riverside neighborhood.

This partnership represents a significant milestone in our mission to reach underserved communities. The Riverside area has been identified as having a high need for youth mentorship and support services.

"This partnership is a game-changer for our community," says Community Center Director Maria Rodriguez. "The Yargote Foundation's proven track record and comprehensive approach will make a real difference in the lives of our young people."

The new program will launch in March 2024 with an initial cohort of 50 participants.`,
    author: "Michael Chen",
    date: "2024-01-10",
    image: "/placeholder.svg?height=400&width=600&text=Community+Partnership",
    category: "program-update",
    readTime: 3,
  },
  {
    id: "3",
    title: "2023 Impact Report: Celebrating Our Achievements",
    excerpt: "A comprehensive look at our impact in 2023, including key metrics and success stories.",
    content: `As we reflect on 2023, we're proud to share the incredible impact our programs have had on the lives of young men in our communities.

Key Achievements:
- Served 1,200 boys across 8 communities
- 95% program completion rate
- 85% improvement in academic performance
- 200+ volunteer mentors engaged
- $500,000 in scholarships awarded

These numbers tell a story of transformation, hope, and community support. Behind each statistic is a young man whose life has been positively impacted by our programs.

We're grateful to our donors, volunteers, and community partners who make this work possible.`,
    author: "Dr. Amara Okafor",
    date: "2023-12-20",
    image: "/placeholder.svg?height=400&width=600&text=2023+Impact+Report",
    category: "impact-report",
    readTime: 7,
  },
  {
    id: "4",
    title: "Community Spotlight: Eastside Neighborhood Transformation",
    excerpt: "How our programs have contributed to positive changes in the Eastside community.",
    content: `The Eastside neighborhood has seen remarkable changes since we began our programs there three years ago. What was once considered a challenging area has become a model of community transformation.

Local business owner Janet Williams notes, "The change in the young men in our neighborhood has been incredible. They're more respectful, engaged, and many are now working part-time jobs while staying in school."

The transformation isn't just individual—it's community-wide. Crime rates have decreased by 30%, and high school graduation rates have increased by 40% in the area.

This success story demonstrates the ripple effect of investing in young people and the power of community-based mentorship programs.`,
    author: "James Rodriguez",
    date: "2023-11-28",
    image: "/placeholder.svg?height=400&width=600&text=Eastside+Community",
    category: "community-news",
    readTime: 4,
  },
  {
    id: "5",
    title: "Meet Our Mentor of the Year: Robert Thompson",
    excerpt: "Celebrating Robert Thompson, whose dedication has impacted over 50 young men in five years.",
    content: `Robert Thompson has been volunteering with the Yargote Foundation for five years, and in that time, he has mentored over 50 young men. His dedication and impact have earned him our Mentor of the Year award.

"Robert brings a unique combination of wisdom, patience, and genuine care to his mentoring relationships," says Program Director Michael Chen. "The young men he works with consistently show remarkable growth and development."

Robert, a retired teacher, says mentoring gives him purpose in retirement. "These young men have taught me as much as I've taught them. It's been one of the most rewarding experiences of my life."

Several of Robert's former mentees have gone on to college, with three currently pursuing degrees in education, inspired by his example.`,
    author: "Sarah Johnson",
    date: "2023-10-15",
    image: "/placeholder.svg?height=400&width=600&text=Robert+Thompson+Mentor",
    category: "success-story",
    readTime: 4,
  },
]
export const mockProjects: Project[] = [
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
    alt: "Founder with kids",
    caption: "Inpiring young minds with hope and opportunity",
    category: "Outreach",
    tags: ["Outreach", "Help"],
    featured: true,
    date: "2024-03-15"
  },
  {
    id: 2,
    src: "https://i.ibb.co/JwHPFKQR/about-child-Ceho-PQk-P.jpg?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/JwHPFKQR/about-child-Ceho-PQk-P.jpg?w=400&h=300&fit=crop",
    alt: "Fine moments with the boys",
    caption: "Investing in the well being of the boy child",
    category: "Happy Moments",
    tags: ["Inspirationa;", "livelihood"],
    featured: true,
    date: "2024-03-10"
  },
  {
    id: 3,
    src: "https://i.ibb.co/4RV4hNsc/hero-children.png?w=1200&h=800&fit=crop",
    thumbnail: "https://i.ibb.co/4RV4hNsc/hero-children.png?w=400&h=300&fit=crop",
    alt: "Fine moments with the boy child",
    caption: "Investing in the well being of the boy child.",
    category: "Happy Moments",
    tags:  ["Inspirationa;", "livelihood"],
    featured: true,
    date: "2024-03-08"
  },
];


export const mockBlogPost = {
  id: "1",
  title: "Transforming Lives Through Education: Maria's Journey from Poverty to Purpose",
  content: `When Maria first walked through our doors three years ago, she carried the weight of uncertainty and the dreams of her entire family. As a single mother of two, working multiple jobs just to make ends meet, she never imagined that education could be her pathway to a completely different life.

Growing up in a underserved community, Maria had always been curious about technology but never had the opportunity to explore it. The digital divide seemed insurmountable, and the idea of pursuing higher education felt like a distant dream reserved for others.

Our scholarship program didn't just provide financial support – it offered something much more valuable: belief. When Maria received her acceptance letter, she cried not just tears of joy, but tears of possibility. For the first time, someone was investing in her potential.

The journey wasn't easy. Balancing coursework with parenting and work required incredible discipline. There were nights when she studied until dawn, fueled by determination and the unwavering support of our mentorship program. Her children would often fall asleep to the sound of her typing, creating a beautiful soundtrack of perseverance.

What started as basic computer literacy classes evolved into advanced programming courses. Maria discovered she had a natural aptitude for software development, and more importantly, a passion for using technology to solve real-world problems.

Today, Maria works as a software engineer at a leading tech company, earning more in a month than she used to make in six months of her previous jobs. But the transformation goes beyond financial stability. She's become a mentor herself, volunteering with our program to guide other women who see their own struggles reflected in her story.

Her children, now teenagers, speak proudly of their mother's achievements. They've witnessed firsthand that barriers can be broken, that circumstances don't define destiny, and that education truly is the great equalizer.

Maria's success story isn't just about one person's triumph – it's about the ripple effect of investment in human potential. She's hired three other program graduates at her company, creating a network of opportunity that continues to expand.

This is why we do what we do. Every scholarship awarded, every mentorship hour logged, every barrier removed creates possibilities we may never fully see. Maria's journey reminds us that when we invest in education, we're not just changing individual lives – we're transforming entire communities, one success story at a time.`,
  author: "Sarah Johnson",
  date: "2024-03-15",
  readTime: 8,
  category: "success-story" as BlogCategory,
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  views: 2847,
  likes: 156
}
