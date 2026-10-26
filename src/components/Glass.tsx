import { motion, useScroll } from 'motion/react'

export function GlassChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[12px] leading-none text-ink">
      <span className="h-[7px] w-[7px] rounded-full bg-ios-blue" />
      {children}
    </span>
  )
}

export function ProgressRail() {
  const { scrollYProgress } = useScroll()
  return (
    <div className="glass fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 rounded-full p-[10px] sm:block lg:right-6">
      <div className="relative h-24 w-[3px] overflow-hidden rounded-full bg-ink/10">
        <motion.div
          className="absolute left-0 top-0 w-full origin-top rounded-full bg-ios-blue"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
    </div>
  )
}