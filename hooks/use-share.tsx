"use client"

import { useState, useCallback } from "react"

interface ShareModalConfig {
  title?: string
  description?: string
}

export function useShareModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [config, setConfig] = useState<ShareModalConfig>({
    title: "Support Young Men, Transform Communities",
    description: "Join us in empowering young men across Nigeria through mentorship and education programs."
  })

  const openShareModal = useCallback((modalConfig?: ShareModalConfig) => {
    if (modalConfig) {
      setConfig(modalConfig)
    }
    setIsOpen(true)
  }, [])

  const closeShareModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return {
    isShareModalOpen: isOpen,
    shareModalConfig: config,
    openShareModal,
    closeShareModal,
  }
}