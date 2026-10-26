import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

type SlideProps = {
  children: ReactNode
  id?: string
  last?: boolean
}

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Slide({ children, id, last = false }: SlideProps) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress: enter } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.55'],
  })
  const { scrollYProgress: exit } = useScroll({
    target: ref,
    offset: ['0.62 start', 'end start'],
  })

  const enterY = useTransform(enter, [0, 1], [72, 0])
  const enterOpacity = useTransform(enter, [0, 1], [0, 1])
  const enterScale = useTransform(enter, [0, 1], [0.965, 1])

  const exitY = useTransform(exit, [0, 1], [0, -56])
  const exitOpacity = useTransform(exit, [0, 1], [1, 0.35])
  const exitScale = useTransform(exit, [0, 1], [1, 0.955])

  return (
    <motion.section
      id={id}
      ref={ref}
      style={
        reduce
          ? undefined
          : { y: enterY, opacity: enterOpacity, scale: enterScale }
      }
      className="relative min-h-[100dvh] w-full snap-start overflow-hidden"
    >
      <motion.div
        style={
          reduce || last ? undefined : { y: exitY, opacity: exitOpacity, scale: exitScale }
        }
        className="relative flex min-h-[100dvh] w-full flex-col justify-center px-6 sm:px-12 lg:px-20"
      >
        {children}
      </motion.div>
    </motion.section>
  )
}