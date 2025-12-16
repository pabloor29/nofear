import Navbar from "@/components/Navbar"
import HeroBanner from "@/components/HeroBanner"
import ValuesSection from "@/components/ValuesSection"
import IntroProject from "@/components/IntroProject"
import MarketSection from "@/components/MarketSection"
import TeamSection from "@/components/TeamSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function TrackSerrurePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <ValuesSection />
      <IntroProject />
      <MarketSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  )
}
