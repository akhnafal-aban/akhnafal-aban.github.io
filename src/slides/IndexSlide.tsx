import { motion, useReducedMotion } from 'motion/react'
import { Slide, EASE } from '../components/Slide'

const chapters = [
  { n: '01', title: 'Asset Tracker', note: 'SwiftUI · URLSession · Go' },
  { n: '02', title: 'Breathing App', note: 'Academy Challenge 1' },
  { n: '03', title: 'AkhnaFin', note: 'SwiftData · CloudKit' },
]

export function IndexSlide({ id }: { id?: string }) {
  const reduce = useReducedMotion()

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  }

  return (
    <Slide id={id}>
      <div className="flex w-full flex-col items-center">
      <h2 className="m-0 mb-10 max-w-[20ch] text-center text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
        Jelajahi Proyek Saya
      </h2>

      <motion.ol
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="m-0 flex w-full max-w-2xl list-none flex-col gap-1 p-0"
      >
        {chapters.map((c) => (
          <motion.li
            key={c.n}
            variants={item}
            className="flex items-baseline gap-5 border-t border-ink/10 py-5"
          >
            <span className="font-mono text-[13px] text-ios-blue">{c.n}</span>
            <span className="text-[clamp(1.1rem,2vw,1.5rem)] font-medium tracking-[-0.01em]">
              {c.title}
            </span>
            <span className="ml-auto hidden font-mono text-[12px] text-ink-3 sm:block">
              {c.note}
            </span>
          </motion.li>
        ))}
      </motion.ol>
      </div>
    </Slide>
  )
}
