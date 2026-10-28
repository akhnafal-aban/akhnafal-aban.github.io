import { ProjectCoverSlide } from '../slides/ProjectCoverSlide'
import { MasalahSlide } from '../slides/MasalahSlide'
import { TechStackSlide } from '../slides/TechStackSlide'
import { ArsitekturSlide } from '../slides/ArsitekturSlide'
import { CodeSlide } from '../slides/CodeSlide'
import { UiIntroSlide } from '../slides/UiIntroSlide'
import { UIGallerySlide } from '../slides/UIGallerySlide'
import { UiCodeSlide } from '../slides/UiCodeSlide'
import { EvidenceSlide } from '../slides/EvidenceSlide'

export function AssetTrackerChapters() {
  return (
    <>
      <ProjectCoverSlide id="cover-asset-tracker" />
      <MasalahSlide id="masalah" />
      <TechStackSlide id="stack" />
      <ArsitekturSlide id="arsitektur" />
      <CodeSlide id="code" />
      <UiIntroSlide id="ui-intro" />
      <UIGallerySlide id="ui" />
      <UiCodeSlide id="ui-code" />
      <EvidenceSlide id="bukti" />
    </>
  )
}