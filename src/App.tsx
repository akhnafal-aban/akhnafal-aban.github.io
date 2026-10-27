import { IntroSlide } from './slides/IntroSlide'
import { IndexSlide } from './slides/IndexSlide'
import { ProjectCoverSlide } from './slides/ProjectCoverSlide'
import { MasalahSlide } from './slides/MasalahSlide'
import { TechStackSlide } from './slides/TechStackSlide'
import { ArsitekturSlide } from './slides/ArsitekturSlide'
import { CodeSlide } from './slides/CodeSlide'
import { UIGallerySlide } from './slides/UIGallerySlide'
import { UiCodeSlide } from './slides/UiCodeSlide'
import { EvidenceSlide } from './slides/EvidenceSlide'
export default function App() {
  return (
    <main>
      <IntroSlide id="intro" />
      <IndexSlide id="index" />
      <ProjectCoverSlide id="cover-asset-tracker" />
      <MasalahSlide id="masalah" />
      <TechStackSlide id="stack" />
      <ArsitekturSlide id="arsitektur" />
      <CodeSlide id="code" />
      <UIGallerySlide id="ui" />
      <UiCodeSlide id="ui-code" />
      <EvidenceSlide id="bukti" />
    </main>
  )
}