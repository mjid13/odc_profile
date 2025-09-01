import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const groups = [
  {
    name: "Localhost",
    description:
      "The general group for everyone in our community. A welcoming space for developers of all levels to connect, share ideas, and collaborate.",
    image: "/images/localhost.png",
    color: "bg-primary/5 border-primary/20",
  },
  {
    name: "Learn Together",
    description:
      "Focused on knowledge sharing and collaborative learning. Join study groups, workshops, and mentorship programs to grow your skills.",
    image: "/images/learn-together.png",
    color: "bg-accent/5 border-accent/20",
  },
  {
    name: "Jobs",
    description:
      "Your gateway to career opportunities and hiring in Oman's tech sector. Connect with employers and discover your next role.",
    image: "/images/jobs.png",
    color: "bg-secondary/5 border-secondary/20",
  },
  {
    name: "Open Source Software",
    description:
      "Supporting and contributing to open-source projects. Collaborate on meaningful projects that benefit the global developer community.",
    image: "/images/oss.png",
    color: "bg-chart-1/5 border-chart-1/20",
  },
  {
    name: "Business & Software Integrations",
    description:
      "For developers working on integrations across government and private organizations. Bridging the gap between business needs and technical solutions.",
    image: "/images/business.png",
    color: "bg-chart-2/5 border-chart-2/20",
  },
]

export function GroupsSection() {
  return (
    <section id="groups" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-playfair)] text-balance">
            {"Our Specialized Groups"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {
              "Five focused communities, each with its own expertise and mission, working together towards digital excellence."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <Card
              key={group.name}
              className={`group hover:shadow-lg transition-all duration-300 ${group.color} hover:scale-[1.02]`}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image
                    src={group.image || "/placeholder.svg"}
                    alt={`${group.name} logo`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl font-semibold">{group.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">{group.description}</CardDescription>
                <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors">
                  {"Join Group"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
