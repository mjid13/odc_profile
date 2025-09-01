import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23005f73' fillOpacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15 15H0l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Code2 className="h-4 w-4" />
              {"Driving Digital Transformation"}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold font-[var(--font-playfair)] text-balance leading-tight">
                {"Welcome to the "}
                <span className="text-primary">{"Oman Developers"}</span>
                {" Club"}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                {
                  "Join our vibrant community of developers, innovators, and tech enthusiasts working together to drive real digital transformation across Oman."
                }
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                {"Join Our Community"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                {"Explore Groups"}
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{"5"}</div>
                <div className="text-sm text-muted-foreground">{"Specialized Groups"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{"1000+"}</div>
                <div className="text-sm text-muted-foreground">{"Active Members"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{"4"}</div>
                <div className="text-sm text-muted-foreground">{"Platforms"}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-card rounded-2xl p-8 shadow-2xl border">
              <Image
                src="/images/logo.png"
                alt="Oman Developers Club Logo"
                width={300}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
