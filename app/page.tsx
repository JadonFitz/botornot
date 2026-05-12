import Nav from './components/Nav'
import Footer from './components/Footer'
import HeroSection from './components/sections/HeroSection'
import FilmSection from './components/sections/FilmSection'
import ShortSection from './components/sections/ShortSection'
import TeamSection from './components/sections/TeamSection'
import PackageSection from './components/sections/PackageSection'
import MarketSection from './components/sections/MarketSection'
import FinancingSection from './components/sections/FinancingSection'
import TimelineSection from './components/sections/TimelineSection'
import RiskSection from './components/sections/RiskSection'
import PressSection from './components/sections/PressSection'
import ContactSection from './components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <FilmSection />
        <ShortSection />
        <TeamSection />
        <PackageSection />
        <MarketSection />
        <FinancingSection />
        <TimelineSection />
        <RiskSection />
        <PressSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
