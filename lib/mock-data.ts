import { Heart, Target, User, UserPlus, } from "lucide-react"
import { BlogPost, EventType, ProjectType } from "./types"


export const mockProjects = [
  {
    id: "education",
    title: "Education Support Program",
    category: "Education",
    shortDescription: "Providing school supplies, books, and educational resources to underprivileged boys",
    raisedAmount: 2800000,
    targetAmount: 5000000,
    participantsServed: 150,
    status: "active",
    acceptingDonations: true
  },
  {
    id: "mentorship",
    title: "Youth Mentorship Initiative",
    category: "Mentorship",
    shortDescription: "One-on-one mentoring sessions to guide young boys through life challenges",
    raisedAmount: 1200000,
    targetAmount: 3000000,
    participantsServed: 80,
    status: "active",
    acceptingDonations: true
  },
  {
    id: "skills",
    title: "Life Skills Development",
    category: "Skills Training",
    shortDescription: "Teaching practical life skills including financial literacy and career guidance",
    raisedAmount: 950000,
    targetAmount: 2500000,
    participantsServed: 120,
    status: "active",
    acceptingDonations: true
  }
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
