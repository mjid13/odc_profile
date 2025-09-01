import { Target, Users, Zap } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-playfair)] text-balance">{"Our Mission"}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {
              "We are committed to driving real digital transformation in Oman through collaboration, innovation, and knowledge sharing."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{"Digital Transformation"}</h3>
            <p className="text-muted-foreground">
              {
                "Leading the charge in modernizing Oman's digital landscape through innovative solutions and best practices."
              }
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold">{"Community Building"}</h3>
            <p className="text-muted-foreground">
              {
                "Fostering a vibrant community of developers, designers, and tech enthusiasts across multiple platforms."
              }
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Zap className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">{"Innovation Hub"}</h3>
            <p className="text-muted-foreground">
              {"Creating an ecosystem where ideas flourish and cutting-edge technologies are explored and implemented."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
