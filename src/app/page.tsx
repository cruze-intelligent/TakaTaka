import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ImpactMetrics } from "@/components/ImpactMetrics"
import { ProductShowroom } from "@/components/ProductShowroom"
import { TileCalculator } from "@/components/TileCalculator"
import { AboutMission } from "@/components/AboutMission"
import { HowToHelp } from "@/components/HowToHelp"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductShowroom />
        <ImpactMetrics />
        <TileCalculator />
        <AboutMission />
        <HowToHelp />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
