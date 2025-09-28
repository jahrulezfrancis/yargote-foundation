"use client"

import { useState, useEffect } from "react"
import { X, Share2, Copy, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Import next-share components (you'll need to install: npm install next-share)
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon,
    TelegramIcon,
    EmailIcon,
} from 'next-share'

interface ShareModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    description?: string
}

export default function ShareModal({
    isOpen,
    onClose,
    title = "Support Young Men, Transform Communities",
    description = "Join us in empowering young men across Nigeria through mentorship and education programs."
}: ShareModalProps) {
    const [currentUrl, setCurrentUrl] = useState("")
    const [copied, setCopied] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Get current URL dynamically
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href)
        }
    }, [])

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
            document.body.style.overflow = 'hidden'
        } else {
            setIsVisible(false)
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleCopyLink = async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                // Modern API
                await navigator.clipboard.writeText(currentUrl)
            } else {
                // Fallback for iOS and older browsers
                const textArea = document.createElement("textarea")
                textArea.value = currentUrl
                textArea.style.position = "fixed" // avoid scrolling to bottom
                textArea.style.opacity = "0"
                document.body.appendChild(textArea)
                textArea.focus()
                textArea.select()
                document.execCommand("copy")
                document.body.removeChild(textArea)
            }
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy:", err)
        }
    }
    const shareData = {
        url: currentUrl,
        title: title,
        summary: description,
        body: description,
        subject: title,
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${isVisible ? 'opacity-50' : 'opacity-0'
                    }`}
                onClick={onClose}
            />

            {/* Modal */}
            <Card className={`relative w-full max-w-md mx-4 transition-all duration-500 transform ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
                }`}>
                <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                <Share2 className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Share This Page</h3>
                                <p className="text-sm text-gray-600">Help spread our mission</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 group"
                        >
                            <X className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                        </button>
                    </div>

                    {/* Share Buttons Grid */}
                    <div className="space-y-6">
                        <div>
                            <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200 text-xs">
                                Share on Social Media
                            </Badge>
                            <div className="grid grid-cols-3 gap-4">
                                <FacebookShareButton
                                    url={shareData.url}
                                    quote={shareData.title}
                                    hashtag="#YouthEmpowerment"
                                >
                                    <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer group">
                                        <FacebookIcon size={40} round />
                                        <span className="text-xs text-gray-600 group-hover:text-gray-800">Facebook</span>
                                    </div>
                                </FacebookShareButton>

                                <TwitterShareButton
                                    url={shareData.url}
                                    title={shareData.title}
                                    hashtags={['YouthEmpowerment', 'Nigeria', 'Education']}
                                >
                                    <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer group">
                                        <TwitterIcon size={40} round />
                                        <span className="text-xs text-gray-600 group-hover:text-gray-800">Twitter</span>
                                    </div>
                                </TwitterShareButton>

                                <LinkedinShareButton
                                    url={shareData.url}
                                    title={shareData.title}
                                    summary={shareData.summary}
                                >
                                    <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer group">
                                        <LinkedinIcon size={40} round />
                                        <span className="text-xs text-gray-600 group-hover:text-gray-800">LinkedIn</span>
                                    </div>
                                </LinkedinShareButton>

                                <WhatsappShareButton
                                    url={shareData.url}
                                    title={shareData.title}
                                    separator=" - "
                                >
                                    <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer group">
                                        <WhatsappIcon size={40} round />
                                        <span className="text-xs text-gray-600 group-hover:text-gray-800">WhatsApp</span>
                                    </div>
                                </WhatsappShareButton>

                                <TelegramShareButton
                                    url={shareData.url}
                                    title={shareData.title}
                                >
                                    <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer group">
                                        <TelegramIcon size={40} round />
                                        <span className="text-xs text-gray-600 group-hover:text-gray-800">Telegram</span>
                                    </div>
                                </TelegramShareButton>

                                <EmailShareButton
                                    url={shareData.url}
                                    subject={shareData.subject}
                                    body={shareData.body}
                                >
                                    <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer group">
                                        <EmailIcon size={40} round />
                                        <span className="text-xs text-gray-600 group-hover:text-gray-800">Email</span>
                                    </div>
                                </EmailShareButton>
                            </div>
                        </div>

                        {/* Copy Link */}
                        <div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-600 truncate font-mono">
                                        {currentUrl}
                                    </p>
                                </div>
                                <div
                                    role="button"
                                    tabIndex={0}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        handleCopyLink()
                                    }}
                                    className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${copied
                                            ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                                        } border cursor-pointer`}
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-4 h-4" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            Copy
                                        </>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 text-center">
                            Thank you for helping us reach more people who can make a difference
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}