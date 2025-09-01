import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, MessageCircle, MessageSquare } from "lucide-react"

const platforms = [
  {
    name: "Discord",
    description: "Real-time chat, voice channels, and community events",
    icon: MessageCircle,
    members: "800+",
    color: "bg-[#5865F2]/10 text-[#5865F2] border-[#5865F2]/20",
    href: "https://discord.gg/oman-developers",
  },
  {
    name: "GitHub",
    description: "Open source projects and code collaboration",
    icon: Github,
    members: "500+",
    color: "bg-foreground/10 text-foreground border-foreground/20",
    href: "https://github.com/oman-developers",
  },
  {
    name: "LinkedIn",
    description: "Professional networking and career opportunities",
    icon: Linkedin,
    members: "1200+",
    color: "bg-[#0077B5]/10 text-[#0077B5] border-[#0077B5]/20",
    href: "https://linkedin.com/company/oman-developers",
  },
  {
    name: "WhatsApp",
    description: "Quick updates and informal discussions",
    icon: MessageSquare,
    members: "300+",
    color: "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20",
    href: "https://chat.whatsapp.com/oman-developers",
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-playfair)] text-balance">
            {"Join Our Community"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Connect with us across multiple platforms. Each platform serves a unique purpose in our ecosystem."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform) => {
            const Icon = platform.icon
            return (
              <Card
                key={platform.name}
                className={`group hover:shadow-lg transition-all duration-300 ${platform.color} hover:scale-[1.02]`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-current/10 flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{platform.description}</p>
                  </div>
                  <div className="text-2xl font-bold">{platform.members}</div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-current/10 transition-colors bg-transparent"
                    asChild
                  >
                    <a href={platform.href} target="_blank" rel="noopener noreferrer">
                      {"Join Now"}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-card rounded-2xl border shadow-sm">
            <div className="text-left">
              <h3 className="font-semibold text-lg">{"Ready to get started?"}</h3>
              <p className="text-muted-foreground">
                {"Choose your preferred platform and join the conversation today."}
              </p>
            </div>
            <Button size="lg" className="shrink-0">
              {"Get Started"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
