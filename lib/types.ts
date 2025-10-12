export type BlogCategory = "success-story" | "program-update" | "community-news" | "impact-report";

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  images?: string[]
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
  videos?: string[]
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

export interface GalleryImage {
  id: string
  src: string
  thumbnail?: string
  alt: string
  caption?: string
  category?: string
  featured?: boolean
  date: string
  tags: string[]
}

export interface programType {
id: string
title: string
description: string
image: string
status: "active" | "completed" | "upcoming"
duration: string
outcomes: string[]
}