"use client"

import { BlogPost, EventType, GalleryImage, programType, ProjectType, TeamMember } from "@/lib/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"



interface AppState {
    blogs: BlogPost[]
    events: EventType[]
    projects: ProjectType[]
    team: TeamMember[]
    programs: programType[]
    galleryImages: GalleryImage[]

    // --- Loading & Error States ---
    loading: boolean
    error: string | null

    // --- Actions ---
    setGalleryImages: (images: GalleryImage[]) => void
    setBlogs: (blogs: BlogPost[]) => void
    setEvents: (events: EventType[]) => void
    setProjects: (projects: ProjectType[]) => void
    setTeam: (team: TeamMember[]) => void
    setPrograms: (programs: programType[]) => void
    addGalleryImage: (image: GalleryImage) => void
    addBlog: (blog: BlogPost) => void
    addEvent: (event: EventType) => void
    addProject: (project: ProjectType) => void
    addTeamMember: (member: TeamMember) => void
    addProgram: (program: programType) => void

    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void

    clearAll: () => void
}



export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            blogs: [],
            events: [],
            projects: [],
            team: [],
            galleryImages: [],
            programs: [],
            loading: false,
            error: null,

            setBlogs: (blogs) => set({ blogs }),

            setEvents: (events) => set({ events }),

            setGalleryImages: (images) => set({ galleryImages: images }),

            setProjects: (projects) => set({ projects }),

            setTeam: (team) => set({ team }),

            setPrograms: (programs) => set({ programs }),

            addBlog: (blog) =>
                set((state) => ({ blogs: [blog, ...state.blogs] })),

            addEvent: (event) =>
                set((state) => ({ events: [event, ...state.events] })),

            addGalleryImage: (image) =>
                set((state) => ({ galleryImages: [image, ...state.galleryImages] })),

            addProject: (project) =>
                set((state) => ({ projects: [project, ...state.projects] })),

            addTeamMember: (member) =>
                set((state) => ({ team: [member, ...state.team] })),

            addProgram: (program) =>
                set((state) => ({ programs: [program, ...state.programs] })),

            setLoading: (loading) => set({ loading }),
            setError: (error) => set({ error }),

            clearAll: () =>
                set({
                    blogs: [],
                    events: [],
                    projects: [],
                    team: [],
                    galleryImages: [],
                    programs: [],
                    loading: false,
                    error: null,
                }),
        }),
        {
            name: "app-storage",
            partialize: (state) => ({
                blogs: state.blogs,
                events: state.events,
                projects: state.projects,
                team: state.team,
                galleryImages: state.galleryImages,
                programs: state.programs,
            }),
        }
    )
)
