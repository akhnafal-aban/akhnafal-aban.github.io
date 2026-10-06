import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Work } from '@/components/Work'
import { CaseStudies } from '@/components/CaseStudies'
import { Writing } from '@/components/Writing'
import { Recommendations } from '@/components/Recommendations'
import { Experience } from '@/components/Experience'
import { Publication } from '@/components/Publication'
import { Education } from '@/components/Education'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main>
        <Hero />
        <Work />
        <CaseStudies />
        <Writing />
        <Recommendations />
        <Experience />
        <Publication />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
