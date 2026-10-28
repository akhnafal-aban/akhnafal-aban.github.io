import { useEffect, useState } from 'react'
import { IntroSlide } from './slides/IntroSlide'
import { IndexSlide } from './slides/IndexSlide'
import { ProjectView } from './ProjectView'

type View = { name: 'home' } | { name: 'project'; id: string }

export default function App() {
  const [view, setView] = useState<View>({ name: 'home' })
  const [homeTarget, setHomeTarget] = useState<'top' | 'index'>('top')

  useEffect(() => {
    if (view.name !== 'home') {
      window.scrollTo(0, 0)
      return
    }
    if (homeTarget === 'index') {
      const el = document.getElementById('index')
      window.scrollTo(0, el ? el.offsetTop : 0)
    } else {
      window.scrollTo(0, 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view])

  return view.name === 'home' ? (
    <main>
      <IntroSlide id="intro" />
      <IndexSlide
        id="index"
        onPick={(id) => {
          setHomeTarget('index')
          setView({ name: 'project', id })
        }}
      />
    </main>
  ) : (
    <ProjectView
      id={view.id}
      onBack={() => {
        setHomeTarget('index')
        setView({ name: 'home' })
      }}
    />
  )
}