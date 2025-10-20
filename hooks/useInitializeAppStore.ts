"use client"

import { useEffect } from "react"
import { useAppStore } from "@/store/useAppStore"
import { fetchBlogs, fetchEvents, fetchGallery, fetchProjects, fetchTeam, fetchPrograms, fetchPartners } from "../lib/fetch-collections"

export function useInitializeAppStore() {
  const { setBlogs, setEvents, setProjects, setTeam, setLoading, setError, setGalleryImages, setPrograms, setPartners } = useAppStore()

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)

        const [blogs, events, projects, team, galleryImages, programs, partners] = await Promise.all([
          fetchBlogs(),
          fetchEvents(),
          fetchProjects(),
          fetchTeam(),
          fetchGallery(),
          fetchPrograms(),
          fetchPartners()
        ])

        setBlogs(blogs)
        setEvents(events)
        setProjects(projects)
        setTeam(team)
        setGalleryImages(galleryImages)
        setPrograms(programs)
        setPartners(partners)
      } catch (err) {
        console.error("Error loading data:", err)
        setError("Failed to load app data.")
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [setBlogs, setEvents, setProjects, setTeam, setLoading, setError, setGalleryImages, setPrograms, setPartners])
}
