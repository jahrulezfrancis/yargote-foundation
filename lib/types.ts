export type BlogCategory = "success-story" | "program-update" | "community-news" | "impact-report";

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  category: BlogCategory
  readTime: number
  views: number
  likes: number
}

export interface EventType {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  images?: string[]
  category: "workshop" | "fundraiser" | "community" | "training"
  status: "upcoming" | "past"
  attendees?: number
  maxAttendees?: number
}

export interface ProjectType {
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

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  email: string
  linkedin: string
}