import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AppInitializer } from "@/components/app-initializer"

export const metadata: Metadata = {
  title: "Yargote Foundation - Empowering Boys to Transform Communities",
  description:
    "Through mentorship, education, and advocacy, we shape boys into disciplined, responsible, and visionary young men who rise above challenges and lead positive change.",
  generator: "v0.app",
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {


  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <Navigation />
          <AppInitializer />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
