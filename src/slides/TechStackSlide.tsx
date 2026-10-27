import { motion, useReducedMotion } from 'motion/react'
import { Slide } from '../components/Slide'

const stack = [
  {
    name: 'SwiftUI',
    why: 'UI deklaratif dengan state terikat langsung ke data. Iterasi cepat untuk project belajar.',
  },
  {
    name: 'Foundation · URLSession + Codable',
    why: 'Inti project ini. Sengaja tanpa library networking pihak ketiga, supaya paham apa yang terjadi di balik sebuah fetch.',
  },
  {
    name: 'Swift Charts',
    why: 'Grafik line dan donut di dashboard. Framework bawaan Apple, satu dependensi yang ringan.',
  },
  {
    name: 'Observation · @Observable',
    why: 'State view model tanpa boilerplate ObservableObject dan @Published.',
  },
]

export function TechStackSlide({ id }: { id?: string }) {
  const reduce = useReducedMotion()
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
  }

  return (
    <Slide id={id}>
      <h2 className="m-0 mb-8 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
        Empat framework utama dalam proyek ini, beserta alasan pemilihannya.
      </h2>
      <div className="flex flex-col">
        {stack.map((s) => (
          <motion.div
            key={s.name}
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="grid grid-cols-1 gap-1 border-t border-ink/10 py-5 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-6"
          >
            <span className="font-mono text-[15px] text-ios-blue">{s.name}</span>
            <span className="text-[15px] leading-[1.5] text-ink-2 md:text-[17px]">{s.why}</span>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 font-mono text-[12px] text-ink-3">
        Saya sengaja tidak menambah dependensi lain untuk prototipe ini.
      </p>
    </Slide>
  )
}