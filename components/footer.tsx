import Link from "next/link"
import { Heart, Mail, Phone, MapPin, Twitter, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-bold text-xl">Yargote Foundation</span>
            </Link>
            <p className="text-primary-foreground/80 text-pretty leading-relaxed">
              Empowering boys through mentorship, education, and community support to create positive change.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Programs" },
                { href: "/events", label: "Events" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">yargotefoundation@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">+2348065361349</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-primary-foreground/80">House 59 Zone C, Apo Resettlement, FCT Abuja</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "https://x.com/yargote_f88015" },
                { icon: Instagram, href: "https://www.instagram.com/theyargote_foundation/" },
                { icon: Youtube, href: "https://www.youtube.com/@YargoteTV" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/50 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
              <div className="flex justify-center items-center w-10 h-10 bg-primary-foreground/10 rounded-full">
                <Link target="_blank" href={"https://www.tiktok.com/@the.yargote_foundation"}>
                  <Image height={20} width={20} alt="tiktok" src={"https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338432_1280.png"} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">© 2024 Yargote Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
