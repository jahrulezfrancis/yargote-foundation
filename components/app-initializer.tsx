"use client"

import { useInitializeAppStore } from "@/hooks/useInitializeAppStore"

export function AppInitializer() {
  useInitializeAppStore()
  return null 
}
