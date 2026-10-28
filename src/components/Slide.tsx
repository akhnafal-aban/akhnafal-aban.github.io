import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type SlideProps = {
  children: ReactNode
  id?: string
  align?: 'center' | 'start'
}

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Slide({ children, id, align = 'center' }: SlideProps) {
  const reduce = useReducedMotion()

  return (
    <section id={id} className="relative min-h-[100dvh] w-full snap-start overflow-hidden">
      <motion.div
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`relative flex min-h-[100dvh] w-full flex-col px-6 sm:px-12 lg:px-20 ${
          align === 'start' ? 'justify-start pt-[6vh]' : 'justify-center'
        }`}
      >
        {children}
      </motion.div>
    </section>
  )
}