import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GroupsSection } from "@/components/groups-section"
import { MissionSection } from "@/components/mission-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <GroupsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}
