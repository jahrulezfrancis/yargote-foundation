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
    title: "Marcus's Journey: From Struggling Student to College Graduate",
    excerpt:
      "Follow Marcus's inspiring transformation through our mentorship program and his path to academic success.",
    content: `Marcus joined our program at age 14, struggling with academic performance and lacking direction. Through consistent mentorship and educational support, he not only improved his grades but discovered his passion for engineering.

    Today, Marcus is a college graduate working as a junior engineer at a local firm. He credits the Yargote Foundation with giving him the tools and confidence to pursue his dreams.

    "The mentorship program didn't just help me with school," Marcus says. "It taught me how to believe in myself and set goals for the future. My mentor, Mr. Johnson, became like a father figure to me."

    Marcus now volunteers as a mentor himself, giving back to the next generation of young men who need guidance and support.`,
    author: "Sarah Johnson",
    date: "2024-01-15",
    image: "/placeholder.svg?height=400&width=600&text=Marcus+Success+Story",
    category: "success-story",
    readTime: 5,
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
      "Our flagship comprehensive mentorship and education program that transforms lives through personalized support, academic assistance, and life skills development.",
    shortDescription: "Comprehensive mentorship program transforming young lives through education and support",
    image: "/diverse-group-of-young-boys-in-mentorship-program-.jpg",
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
      "200+ boys mentored successfully",
    ],
  },
  {
    id: "2",
    title: "Digital Literacy Initiative",
    description:
      "Bridging the digital divide by providing computer skills training, coding workshops, and technology access to underserved youth.",
    shortDescription: "Teaching essential digital skills and coding to prepare boys for the future",
    image: "/boys-in-educational-workshop-learning-life-skills-.jpg",
    category: "education",
    status: "active",
    acceptingDonations: true,
    targetAmount: 75000,
    raisedAmount: 45200,
    participantsServed: 120,
    targetParticipants: 200,
    startDate: "2023-06-01",
    impact: ["120 boys gained computer literacy", "30 boys learned basic coding", "15 internship placements secured"],
  },
  {
    id: "3",
    title: "Leadership Development Program",
    description:
      "Cultivating the next generation of community leaders through workshops, public speaking training, and community service projects.",
    shortDescription: "Building confident leaders through skills training and community engagement",
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
      "25 community service projects led",
      "90% increase in self-confidence scores",
    ],
  },
  {
    id: "4",
    title: "College Readiness Scholarship Fund",
    description:
      "Providing financial assistance and college preparation support to help deserving students pursue higher education.",
    shortDescription: "Supporting college dreams through scholarships and preparation programs",
    image: "/boys-reading-books-in-library.jpg",
    category: "education",
    status: "active",
    acceptingDonations: true,
    targetAmount: 100000,
    raisedAmount: 67300,
    participantsServed: 45,
    targetParticipants: 80,
    startDate: "2023-03-01",
    impact: ["45 scholarships awarded", "95% college acceptance rate", "$500,000 in total scholarships distributed"],
  },
]
