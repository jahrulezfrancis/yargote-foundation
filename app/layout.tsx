import type { Metadata } from "next"
import { Suspense } from "react"
import { Toaster } from "sonner"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AppInitializer } from "@/components/app-initializer"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Yargote Foundation - Empowering Boys to Transform Communities",
    template: "%s | Yargote Foundation",
  },
  description:
    "Through mentorship, education, and advocacy, we shape boys into disciplined, responsible, and visionary young men who rise above challenges and lead positive change.",
  generator: "Next.js",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Yargote Foundation",
    description:
      "Empowering boys through mentorship, education, and leadership development to build stronger communities.",
    url: "https://theyargotefoundation.org",
    siteName: "Yargote Foundation",
    images: [
      {
        url: "/og-image.png", // optional — create this image for social media sharing
        width: 1200,
        height: 630,
        alt: "Yargote Foundation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yargote Foundation",
    description:
      "Empowering boys through mentorship, education, and leadership development to build stronger communities.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen font-sans antialiased bg-white text-gray-900">
        <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading...</div>}>
          <AppInitializer />

          <Navigation />

          <main className="min-h-[70vh]">{children}</main>

          <Footer />

          <Toaster
            richColors
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: { fontSize: "14px" },
            }}
          />
        </Suspense>
      </body>
    </html>
  )
}
