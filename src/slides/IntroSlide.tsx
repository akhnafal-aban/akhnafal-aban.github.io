import { motion, useReducedMotion } from 'motion/react'
import { Slide, EASE } from '../components/Slide'

const nameWords = ['Noor', 'Akhnafal', 'Aban']

export function IntroSlide({ id }: { id?: string }) {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  }
  const line = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  }

  return (
    <Slide id={id}>
      <motion.div variants={container} initial="hidden" animate="visible" className="text-center">
        <motion.p variants={line} className="m-0 mb-5 font-mono text-[15px] text-ink-3">
          Hello! Salam Kenal. Nama saya-
        </motion.p>
        <h1 className="m-0 flex flex-wrap justify-center gap-x-[0.28em] text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink">
          {nameWords.map((w) => (
            <motion.span key={w} variants={line} className="inline-block">
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p variants={line} className="mx-auto mt-7 max-w-[32ch] text-[clamp(1.15rem,2.4vw,1.6rem)] leading-snug text-ink-2">
          Software engineer dengan fokus di iOS dan backend.
        </motion.p>

        <motion.p variants={line} className="mx-auto mt-2 font-mono text-[13px] text-ink-3">
          iOS Developer, Apple Developer Academy @ UC Jakarta
        </motion.p>
      </motion.div>

      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 text-center font-mono text-[12px] text-ink-3"
      >
      </motion.div>
    </Slide>
  )
}
