import { useEffect, useState } from 'react'
import { IntroSlide } from './slides/IntroSlide'
import { IndexSlide } from './slides/IndexSlide'
import { ProjectView } from './ProjectView'
import { PetCompanion } from './pet/PetCompanion'
import type { PetContext } from './pet/catFrames'

type View = { name: 'home' } | { name: 'project'; id: string }

export default function App() {
  const [view, setView] = useState<View>({ name: 'home' })
  const [homeTarget, setHomeTarget] = useState<'top' | 'index'>('top')
  const [petContext, setPetContext] = useState<PetContext>('intro')

  useEffect(() => {
    if (view.name !== 'home') {
      window.scrollTo(0, 0)
      setPetContext('project')
      return
    }
    if (homeTarget === 'index') {
      const el = document.getElementById('index')
      window.scrollTo(0, el ? el.offsetTop : 0)
      setPetContext('index')
    } else {
      window.scrollTo(0, 0)
      setPetContext('intro')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view])

  // Konteks pet mengikuti posisi scroll di halaman utama.
  useEffect(() => {
    if (view.name !== 'home') return
    const onScroll = () => {
      setPetContext(window.scrollY > window.innerHeight * 0.5 ? 'index' : 'intro')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [view])

  return (
    <>
      {view.name === 'home' ? (
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
      )}
      <PetCompanion context={petContext} />
    </>
  )
}