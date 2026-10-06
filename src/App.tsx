import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { Work } from '@/components/Work'
import { About } from '@/components/About'
import { Publications } from '@/components/Publications'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

const marqueeItems = [
  'SwiftUI',
  'Laravel',
  'Linux ops',
  'Foundation Models',
  'CloudKit',
  'RealityKit',
  'REST APIs',
  'Docker',
  'VPS',
  'BERTopic',
  'GEMASTIK 2025 finalist',
  'Published author 2026',
]

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main>
        <Hero />
        <Marquee items={marqueeItems} />
        <Work />
        <About />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
