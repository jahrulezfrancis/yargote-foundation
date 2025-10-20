import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebase"
import type { BlogPost, EventType, GalleryImage, PartnerType, programType, ProjectType, TeamMember } from "@/lib/types"

export async function fetchBlogs(): Promise<BlogPost[]> {
  const snapshot = await getDocs(collection(db, "blogPosts"))
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as BlogPost[]
}

export async function fetchEvents(): Promise<EventType[]> {
  const snapshot = await getDocs(collection(db, "events"))
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as EventType[]
}

export async function fetchProjects(): Promise<ProjectType[]> {
  const snapshot = await getDocs(collection(db, "projects"))
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as ProjectType[]
}

export async function fetchTeam(): Promise<TeamMember[]> {
  const snapshot = await getDocs(collection(db, "team"))
  return snapshot.docs.map((doc) => ({ ...doc.data() })) as TeamMember[]
}

export async function fetchGallery(): Promise<GalleryImage[]> {
  const snapshot = await getDocs(collection(db, "gallery"))
  return snapshot.docs.map((doc) => ({ ...doc.data() })) as GalleryImage[]
}

export async function fetchPrograms(): Promise<programType[]> {
  const snapshot = await getDocs(collection(db, "programs"))
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as programType[]
}


export async function fetchPartners(): Promise<PartnerType[]> {
  const snapshot = await getDocs(collection(db, "partners"))
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as PartnerType[]
}
