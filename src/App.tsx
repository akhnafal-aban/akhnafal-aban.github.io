import { useEffect, useState } from 'react'
import { IntroSlide } from './slides/IntroSlide'
import { IndexSlide } from './slides/IndexSlide'
import { ProjectView } from './ProjectView'

type View = { name: 'home' } | { name: 'project'; id: string }

export default function App() {
  const [view, setView] = useState<View>({ name: 'home' })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

  return view.name === 'home' ? (
    <main>
      <IntroSlide id="intro" />
      <IndexSlide id="index" onPick={(id) => setView({ name: 'project', id })} />
    </main>
  ) : (
    <ProjectView id={view.id} onBack={() => setView({ name: 'home' })} />
  )
}