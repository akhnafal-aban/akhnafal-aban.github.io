import { IntroSlide } from './slides/IntroSlide'
import { IndexSlide } from './slides/IndexSlide'
import { ProjectCoverSlide } from './slides/ProjectCoverSlide'
import { MasalahSlide } from './slides/MasalahSlide'
import { TechStackSlide } from './slides/TechStackSlide'
import { ArsitekturSlide } from './slides/ArsitekturSlide'
import { CodeSlide } from './slides/CodeSlide'
import { UIGallerySlide } from './slides/UIGallerySlide'
import { TantanganSlide } from './slides/TantanganSlide'
import { HasilSlide } from './slides/HasilSlide'
import { EvidenceSlide } from './slides/EvidenceSlide'
import { ProgressRail } from './components/Glass'

export default function App() {
  return (
    <main>
      <ProgressRail />
      <IntroSlide id="intro" />
      <IndexSlide id="index" />
      <ProjectCoverSlide id="cover-asset-tracker" />
      <MasalahSlide id="masalah" />
      <TechStackSlide id="stack" />
      <ArsitekturSlide id="arsitektur" />
      <CodeSlide id="code" />
      <UIGallerySlide id="ui" />
      <TantanganSlide id="tantangan" />
      <HasilSlide id="hasil" />
      <EvidenceSlide id="bukti" />
    </main>
  )
}