import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, MessageCircle, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Oman Developers Club"
                width={32}
                height={32}
                className="rounded-lg brightness-0 invert"
              />
              <div>
                <h3 className="font-bold">Oman Developers Club</h3>
                <p className="text-xs opacity-80">Driving Digital Transformation</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {"Building a stronger tech community in Oman through collaboration, learning, and innovation."}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{"Community"}</h4>
            <div className="space-y-2 text-sm">
              <Link href="#mission" className="block opacity-80 hover:opacity-100 transition-opacity">
                {"Our Mission"}
              </Link>
              <Link href="#groups" className="block opacity-80 hover:opacity-100 transition-opacity">
                {"Groups"}
              </Link>
              <Link href="#community" className="block opacity-80 hover:opacity-100 transition-opacity">
                {"Join Us"}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{"Groups"}</h4>
            <div className="space-y-2 text-sm">
              <div className="opacity-80">{"Localhost"}</div>
              <div className="opacity-80">{"Learn Together"}</div>
              <div className="opacity-80">{"Jobs"}</div>
              <div className="opacity-80">{"Open Source"}</div>
              <div className="opacity-80">{"Business Integration"}</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{"Connect"}</h4>
            <div className="flex gap-3">
              <Link
                href="https://discord.gg/oman-developers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/oman-developers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com/company/oman-developers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://chat.whatsapp.com/oman-developers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>{"© 2024 Oman Developers Club. Building the future of tech in Oman."}</p>
        </div>
      </div>
    </footer>
  )
}
