import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, MessageCircle } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Oman Developers Club" width={40} height={40} className="rounded-lg" />
          <div>
            <h1 className="font-bold text-lg">Oman Developers Club</h1>
            <p className="text-xs text-muted-foreground">Driving Digital Transformation</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#mission" className="text-sm font-medium hover:text-primary transition-colors">
            Mission
          </Link>
          <Link href="#groups" className="text-sm font-medium hover:text-primary transition-colors">
            Groups
          </Link>
          <Link href="#community" className="text-sm font-medium hover:text-primary transition-colors">
            Community
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/oman-developers" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://linkedin.com/company/oman-developers" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://discord.gg/oman-developers" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              <span className="sr-only">Discord</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
