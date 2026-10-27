import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

type SlideProps = {
  children: ReactNode
  id?: string
}

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Slide({ children, id }: SlideProps) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress: enter } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.55'],
  })

  const enterY = useTransform(enter, [0, 1], [72, 0])
  const enterOpacity = useTransform(enter, [0, 1], [0, 1])
  const enterScale = useTransform(enter, [0, 1], [0.965, 1])

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
      <div className="relative flex min-h-[100dvh] w-full flex-col justify-center px-6 sm:px-12 lg:px-20">
        {children}
      </div>
    </motion.section>
  )
}