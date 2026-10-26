import { IntroSlide } from './slides/IntroSlide'
import { IndexSlide } from './slides/IndexSlide'
import { ProjectCoverSlide } from './slides/ProjectCoverSlide'
import { MasalahSlide } from './slides/MasalahSlide'
import { ProgressRail } from './components/Glass'

export default function App() {
  return (
    <main>
      <ProgressRail />
      <IntroSlide />
      <IndexSlide />
      <ProjectCoverSlide />
      <MasalahSlide />
    </main>
  )
}